const { getUser, getMemory, save } = require("../core/memory");
const { callAI } = require("../core/ai");
const { getModel } = require("../core/modelRouter");
const { clean } = require("../utils/clean");
const { formatAI } = require("../core/formatter");
const { Markup } = require("telegraf");

module.exports = (bot) => {

  bot.on("text", async (ctx) => {
    if (ctx.message.text.startsWith("/")) return;

    await ctx.reply("🧠 Thinking...");

    const user = getUser(ctx.from.id);
    const memory = getMemory(user);
    const model = getModel(user, ctx.message.text);

    let reply = await callAI(model, ctx.message.text, memory, process.env.OPENROUTER_API_KEY);
    if (!reply) reply = "⚠️ AI error";

    reply = clean(reply);

    user.memory.push({ role: "user", text: ctx.message.text });
    user.memory.push({ role: "assistant", text: reply });

    if (user.memory.length > 80) user.memory = user.memory.slice(-50);

    save();

    const blocks = formatAI(reply);

    for (const b of blocks) {
      if (b.type === "text") {
        await ctx.reply(b.value);
      }

      if (b.type === "code") {
        await ctx.reply(
          "💻 CODE (" + b.lang + ")\n\n```" + b.lang + "\n" + b.value + "\n```",
          { parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
              Markup.button.callback("📋 COPY", "copy")
            ])
          }
        );
      }
    }
  });
};
