const {Telegraf} = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

const chatId = 123;
const intervalMs = 5000;
const getCatUrl = () => `https://cataas.com/cat?t=${new Date().getTime()}`;

const sendCat = async () => {
    bot.telegram.sendPhoto(chatId, getCatUrl()).then(() => setTimeout(sendCat, intervalMs));
}

sendCat();
