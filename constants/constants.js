module.exports = {
    CATEGORIES_TITLE: (name) => `Здравствуйте ${name}, выберите категорию:`,
    CATEGORIES_TITLE_WITHOUT_NAME: "Выберите категорию:",
    EVENTS_TITLE: "Выберите мероприятие:",
    NOT_EVENTS_IN_CATEGORY: "В данной категории нет мероприятий",
    NOT_INFO_FOR_EVENT: "Информация для данного мероприятия еще не готова",
    BUTTON_BACK_EVENTS:  [
        { text: 'Назад к мероприятиям', callback_data: 'back_to_events'}
    ],
    BUTTON_BACK_CATEGORY:  [
        { text: 'Назад к категориям', callback_data: 'back_to_category'}
    ]
    //BUTTONS_BACK: [
      //  { text: 'Назад к категориям', callback_data: 'back_to_category'},
        // TODO: Придумать как отслеживать в каком месте мы находимся и не привязываться к callback_data
        // { text: 'Назад к Событиям', callback_data: 'back_to_events'} 
    //]
}
