const bot = require('../bot')

const createKeyboard = (ctx, title, data, additionalKeyboard) => {
    const keyboard = data.map(item => [item])

    bot.telegram.sendMessage(ctx.chat.id, title, {
        reply_markup: {
            resize_keyboard: false,  
            inline_keyboard: [
                ...keyboard,
                (additionalKeyboard ? additionalKeyboard : [])
            ]
        }
    })
}

module.exports = createKeyboard