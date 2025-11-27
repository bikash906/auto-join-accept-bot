const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("chat_join_request", async (req) => {
    try {
        await bot.approveChatJoinRequest(req.chat.id, req.from.id);

        bot.sendMessage(req.chat.id, `✅ Approved: @${req.from.username || req.from.first_name}`);

        console.log("Approved:", req.from.id);
    } catch (err) {
        console.error("Error approving request:", err);
    }
});
