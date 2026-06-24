const { Telegraf } = require("telegraf");
require("dotenv").config();

const chatHandler = require("./handlers/chatHandler");
const modelHandler = require("./handlers/modelHandler");

const bot = new Telegraf(process.env.BOT_TOKEN);

// routes
chatHandler(bot);
modelHandler(bot);

bot.launch();
console.log("🤖 MC BOT RUNNING (GITHUB READY)");
