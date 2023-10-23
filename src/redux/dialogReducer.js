const addMessage = "addMessage"
const changeDialogTextArea = "changeDialogTextArea"

export const onChangeDialogFunctionActionCreater = (text) => ({ type: changeDialogTextArea, text: text })
export const newMessageFunctionActionCreater = () => ({ type: addMessage })

let initialState = {
    newMessageText: "",
    currentDialogIndex: "0",

    messagesInfo: [
        {
            dialogName: "Фархат",
            link: "Farckhat",
            dialogIndex: "0",
            id: 30,
            messagesLastId: 45,
            messages:
                [{ text: 'Whatsup man?', id: 40, author: 'Farkchat' },
                { text: 'Farchat, the bomb has been planted', id: 41, author: 'Mikifor' },
                { text: 'Very well. So its redy to nuke?', id: 42, author: 'Farkchat' },
                { text: 'Yes, sir', id: 43, author: 'Mikifor' },
                { text: 'Take the ordert to nuke!', id: 44, author: 'Farkchat' },
                { text: 'Affirmative!', id: 45, author: 'Mikifor' }]
        },
        {
            dialogName: "Марат",
            link: "Marat",
            dialogIndex: "1",
            id: 31,
            messagesLastId: 43,
            messages:
                [{ text: 'Hi man', id: 40, author: 'Marat' },
                { text: 'Hi', id: 41, author: 'Mikifor' },
                { text: 'HBTU', id: 42, author: 'Marat' },
                { text: 'thx', id: 43, author: 'Mikifor' }]
        },
        {
            dialogName: "Ксения",
            link: "Kseniya",
            dialogIndex: "2",
            id: 32,
            messagesLastId: 45,
            messages:
                [{ text: 'Hello, Kseny', id: 40, author: 'Mikifor' },
                { text: 'Hello, Mik, lovely day, isnt it?', id: 41, author: 'Kseniya' },
                { text: 'Absolutely wonderful - warm and clear. Whats the weather forecast for tomorrow? Do you know?', id: 42, author: 'Mikifor' },
                { text: 'Yes, it says it will be a bit cloudy in the morning. But the day will be bright and sunny.', id: 43, author: 'Kseniya' },
                { text: 'How nice. A perfect day for an outing. I promised my family a barbecue, you know.', id: 44, author: 'Mikifor' },
                { text: 'Great! I hope you will enjoy it.', id: 45, author: 'Kseniya' }]
        },
        {
            dialogName: "Аполинария",
            link: "Apolynaria",
            dialogIndex: "3",
            id: 33,
            messagesLastId: 43,
            messages:
                [{ text: 'Hi man', id: 40, author: 'Marat' },
                { text: 'Hi', id: 41, author: 'Mikifor' },
                { text: 'HBTU', id: 42, author: 'Marat' },
                { text: 'thx', id: 43, author: 'Mikifor' }],
        },
        {
            dialogName: "Деметрий",
            link: "Demetry",
            dialogIndex: "4",
            id: 34,
            messagesLastId: 43,
            messages:
                [{ text: 'Hi man', id: 40, author: 'Marat' },
                { text: 'Hi', id: 41, author: 'Mikifor' },
                { text: 'HBTU', id: 42, author: 'Marat' },
                { text: 'thx', id: 43, author: 'Mikifor' }],
        },
        {
            dialogName: "Родион",
            link: "Rodion",
            dialogIndex: "5",
            id: 35,
            messagesLastId: 46,
            messages:
                [{ text: 'Привет, Родион ', id: 40, author: 'Mikifor' },
                { text: 'Даров', id: 41, author: 'Rodion' },
                { text: 'Хочешь анекдот?', id: 42, author: 'Mikifor' },
                { text: 'Давай', id: 43, author: 'Rodion' },
                { text: 'Знаешь, что общего у негров и апельсинов? И те, и другие родились и выросли на деревьях', id: 44, author: 'Mikifor' },
                { text: 'Ахахахах', id: 45, author: 'Rodion' },
                { text: 'Однако есть и отличие. Когда апельсин снимаешь с дерева, он ещё живой', id: 46, author: 'Mikifor' }]
        }
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case addMessage: {
            let newMessageID = state.messagesInfo[state.currentDialogIndex].messagesLastId
            ++newMessageID
            let newMessage = {
                text: state.newMessageText,
                id: newMessageID,
                author: 'Mikifor'
            }

            let copyState = {
                ...state,
                newMessageText: "",
                //...messagesInfo[state.currentDialogIndex].messagesLastId:  newMessageID
            }
            copyState.messagesInfo[copyState.currentDialogIndex].messages = [...state.messagesInfo[state.currentDialogIndex].messages, newMessage]
            copyState.messagesInfo[state.currentDialogIndex].messagesLastId = newMessageID
            return copyState
        }

        case changeDialogTextArea:
            return {
                ...state,
                newMessageText: action.text
            }

        default: return state
    }


}

export default dialogReducer