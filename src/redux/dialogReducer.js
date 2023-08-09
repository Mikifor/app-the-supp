const addMessage = "addMessage"
const changeDialogTextArea = "changeDialogTextArea"

export const onChangeDialogFunctionActionCreater = (text) => ({ type: changeDialogTextArea, text: text })
export const newMessageFunctionActionCreater = () => ({ type: addMessage })

const dialogReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let textos = state.newMessageText
            let newMessage = {
                text: textos,
                personName: 'Фархат',
                id: '7',
                author: 'Farkchat'
            }
            state.messagesInfo.Farkchat.push(newMessage)
            state.newMessageText = ""
            return state

        case changeDialogTextArea:
            state.newMessageText = action.text
            return state

        default: return state
    }


}

export default dialogReducer