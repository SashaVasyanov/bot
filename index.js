const TelegramApi = require('node-telegram-bot-api')

const token = '1928405526:AAHp-ovHxFO_DGD_xApjTLhLWJ8x6m2-CPU'

const bot = new TelegramApi(token, {polling: true})
bot.on("polling_error", console.log);
bot.on("message", msg => {
    firstMsg = msg.text
    const text = msg.voice;
    const chatId = msg.chat.id;
    if (firstMsg === '/start'){
        bot.sendMessage(chatId, `Hello! I'm bot which reply on yours voices messages other voices with voices of anime girls`)
    }
    if (msg.voice == null) return;
   
    
    const x = Math.floor(Math.random() * 4) + 1;
    bot.sendVoice(chatId, `C:\\Users\\и\\Desktop\\sempai\\` + x + '.ogg')
    console.log(x)
    сonsole.log(msg)
})