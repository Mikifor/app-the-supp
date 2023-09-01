const addMessage = "addMessage"
const changeDialogTextArea = "changeDialogTextArea"

export const onChangeDialogFunctionActionCreater = (text) => ({ type: changeDialogTextArea, text: text })
export const newMessageFunctionActionCreater = () => ({ type: addMessage })

let initialState = {
    newMessageText: "Perseverance",
    currentDialogIndex: "0",

    messagesInfo: [
        {
            dialogName: "Фархат",
            link: "Farckhat",
            dialogIndex: "0",
            messages:
                [{ text: 'Whatsup man?', id: '', author: 'Farkchat' },
                { text: 'Farchat, the bomb has been planted', id: '', author: 'Mikifor' },
                { text: 'Very well. So its redy to nuke?', id: '', author: 'Farkchat' },
                { text: 'Yes, sir', id: '', author: 'Mikifor' },
                { text: 'Take the ordert to nuke!', id: '', author: 'Farkchat' },
                { text: 'Affirmative!', id: '', author: 'Mikifor' }]
        },
        {
            dialogName: "Марат",
            link: "Marat",
            dialogIndex: "1",
            messages:
                [{ text: 'Hi man', id: '', author: 'Marat' },
                { text: 'Hi', id: '', author: 'Mikifor' },
                { text: 'HBTU', id: '', author: 'Marat' },
                { text: 'thx', id: '', author: 'Mikifor' }]
        },
        {
            dialogName: "Ксения",
            link: "Kseniya",
            dialogIndex: "2",
            messages:
                [{ text: 'Hello, Kseny', id: '', author: 'Marat' },
                { text: 'Hello, Mik, lovely day, isnt it?', id: '', author: 'Mikifor' },
                { text: 'Absolutely wonderful - warm and clear. Whats the weather forecast for tomorrow? Do you know?', id: '', author: 'Marat' },
                { text: 'Yes, it says it will be a bit cloudy in the morning. But the day will be bright and sunny.', id: '', author: 'Mikifor' },
                { text: 'How nice. A perfect day for an outing. I promised my family a barbecue, you know.', id: '', author: 'Marat' },
                { text: 'Great! I hope you will enjoy it.', id: '', author: 'Marat' }]
        },
        {
            dialogName: "Аполинария",
            link: "Apolynaria",
            dialogIndex: "3",
            messages:
                [{ text: 'Hi man', id: '', author: 'Marat' },
                { text: 'Hi', id: '', author: 'Mikifor' },
                { text: 'HBTU', id: '', author: 'Marat' },
                { text: 'thx', id: '', author: 'Mikifor' }],
        },
        {
            dialogName: "Деметрий",
            link: "Demetry",
            dialogIndex: "4",
            messages:
                [{ text: 'Hi man', id: '', author: 'Marat' },
                { text: 'Hi', id: '', author: 'Mikifor' },
                { text: 'HBTU', id: '', author: 'Marat' },
                { text: 'thx', id: '', author: 'Mikifor' }],
        },
        {
            dialogName: "Родион",
            link: "Rodion",
            dialogIndex: "5",
            messages:
                [{ text: 'Привет, Родион ', id: '', author: 'Mikifor' },
                { text: 'Даров', id: '', author: 'Rodion' },
                { text: 'Хочешь анекдот?', id: '', author: 'Mikifor' },
                { text: 'Давай', id: '', author: 'Rodion' },
                { text: 'Знаешь, что общего у негров и апельсинов? И те, и другие родились и выросли на деревьях', id: '', author: 'Mikifor' },
                { text: 'Ахахахах', id: '', author: 'Rodion' },
                { text: 'Однако есть и отличие. Когда апельсин снимаешь с дерева, он ещё живой', id: '', author: 'Mikifor' }]
        }
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case addMessage:
            let newText = state.newMessageText
            let newMessage = {
                text: newText,
                id: '7',
                author: 'Farkchat'
            }

            state.messagesInfo[state.currentDialogIndex].messages.push(newMessage)
            state.newMessageText = ""
            return state

        case changeDialogTextArea:
            state.newMessageText = action.text
            return state

        default: return state
    }


}

export default dialogReducer