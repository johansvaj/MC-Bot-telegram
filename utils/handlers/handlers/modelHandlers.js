const models = require("../config/models");
const { getUser } = require("../core/memory");
const { Markup } = require("telegraf");

module.exports = (bot) => {

  bot.command("models", (ctx) => {

    const buttons = models.map((m, i) =>
      Markup.button.callback(m.name, `m_${i}`)
    );

    const keyboard = [];
    for (let i = 0; i < buttons.length; i += 2) {
      keyboard.push(buttons.slice(i, i + 2));
    }

    ctx.reply("🤖 PILIH MODEL:", Markup.inlineKeyboard(keyboard));
  });

  bot.action(/m_(\d+)/, (ctx) => {
    const i = parseInt(ctx.match[1]);
    const user = getUser(ctx.from.id);

    user.model = models[i].id;

    ctx.answerCbQuery("Model dipilih");
    ctx.reply("✅ " + models[i].name);
  });

  bot.command("auto", (ctx) => {
    const user = getUser(ctx.from.id);
    user.model = "auto";
    ctx.reply("🤖 Auto mode ON");
  });
};
