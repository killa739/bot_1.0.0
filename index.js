const bot = require('./bot')
const createKeyboard = require('./utils/create-keyboard')
const callbackQuery = require('./utils/callback_query')
require('dotenv').config()

const { 
    CATEGORIES_TITLE, 
    EVENTS_TITLE,
    BUTTON_BACK_CATEGORY,

} = require('./constants/constants')

const categories = require('./data/categories.json')
const events = require('./data/events.json')

bot.command('start', ctx => {
    const { first_name } = ctx.from
    createKeyboard(ctx, CATEGORIES_TITLE(first_name), categories.data)
})

bot.action('back_to_category', ctx => {
    const { first_name } = ctx.from
    const { message_id } = ctx.callbackQuery.message
    bot.telegram.deleteMessage(ctx.chat.id, message_id)
    
    createKeyboard(ctx, CATEGORIES_TITLE(first_name), categories.data)
})

bot.action('back_to_events', ctx => {
    const { message_id } = ctx.callbackQuery.message
    bot.telegram.deleteMessage(ctx.chat.id, message_id)
    
    createKeyboard(ctx, EVENTS_TITLE, events.data, BUTTON_BACK_CATEGORY) // data ?
})

callbackQuery()

bot.launch()
module.exports = bot
