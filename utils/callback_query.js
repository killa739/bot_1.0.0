const bot = require('../bot')
const createKeyboard = require('./create-keyboard')

const {
    CATEGORIES_TITLE, 
    EVENTS_TITLE, 
    BUTTON_BACK_CATEGORY,
    BUTTON_BACK_EVENTS,
    NOT_EVENTS_IN_CATEGORY,
    NOT_INFO_FOR_EVENT
} = require('../constants/constants')

const events = require('../data/events.json')
const info = require('../data/info.json')

const callbackQuery = () => {
    bot.on('callback_query', (ctx) => {
        const { message, data, id } = ctx.callbackQuery
        const { first_name } = ctx.from
       
        ctx.telegram.answerCbQuery(id).then(() => {
            const sectionText = message.text
            const filteredEvents = events.data.filter(item => item.category_id === data)

            switch (sectionText) {
                case CATEGORIES_TITLE(first_name):
                    bot.telegram.deleteMessage(ctx.chat.id, message.message_id)  

                    if(filteredEvents.length > 0)
                        createKeyboard(ctx, EVENTS_TITLE, filteredEvents,  BUTTON_BACK_CATEGORY)
                    else 
                        createKeyboard(ctx, NOT_EVENTS_IN_CATEGORY, [],  BUTTON_BACK_CATEGORY)
                    break;
                
                case EVENTS_TITLE: 
                   const text = info.data.find(item => item.event_id === data)?.text
    
                    bot.telegram.deleteMessage(ctx.chat.id, message.message_id)
    
                    if(!!text) 
                        createKeyboard(ctx, text, [], BUTTON_BACK_EVENTS)
                    else 
                        createKeyboard(ctx, NOT_INFO_FOR_EVENT, [], BUTTON_BACK_EVENTS)
                    break;
    
                default: 
                    break;
            }
        })
    })
}

module.exports = callbackQuery