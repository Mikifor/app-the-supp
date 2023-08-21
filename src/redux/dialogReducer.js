const addMessage = "addMessage"
const changeDialogTextArea = "changeDialogTextArea"

export const onChangeDialogFunctionActionCreater = (text) => ({ type: changeDialogTextArea, text: text })
export const newMessageFunctionActionCreater = () => ({ type: addMessage })

let initialState = {
    newMessageText: "Perseverance",

    messagesInfo: [
        {
            dialogName: "Фархат",
            link: "Farckhat",
            messages:
                [{ text: 'Whatsup man?', personName: 'Фархат', id: '', author: 'Farkchat' },
                { text: 'Farchat, the bomb has been planted', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'Very well. So its redy to nuke?', personName: 'Ксения', id: '', author: 'Farkchat' },
                { text: 'Yes, sir', personName: 'Аполинария', id: '', author: 'Mikifor' },
                { text: 'Take the ordert to nuke!', personName: 'Деметрий', id: '', author: 'Farkchat' },
                { text: 'Affirmative!', personName: 'Родион', id: '', author: 'Mikifor' }]
        },

        {
            dialogName: "Марат",
            link: "Marat",
            messages:
                [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }]
        },

        {
            dialogName: "Ксения",
            link: "Kseniya",
            messages:
                [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }]
        },

        {
            dialogName: "Аполинария",
            link: "Apolynaria",
            messages:
                [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],
        },

        {
            dialogName: "Деметрий",
            link: "Demetry",
            messages:
                [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }],
        },

        {
            dialogName: "Родион",
            link: "Rodion",
            messages:
                [{ text: 'Hi man', personName: 'Фархат', id: '', author: 'Marat' },
                { text: 'Hi', personName: 'Марат', id: '', author: 'Mikifor' },
                { text: 'HBTU', personName: 'Ксения', id: '', author: 'Marat' },
                { text: 'thx', personName: 'Аполинария', id: '', author: 'Mikifor' }]
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    

    switch (action.type) {

        case addMessage:
            let textos = state.newMessageText
            let newMessage = {
                text: textos,
                personName: 'Фархат',
                id: '7',
                author: 'Farkchat'
            }
            state.messagesInfo[0].messages.push(newMessage)
            state.newMessageText = ""
            return state

        case changeDialogTextArea:
            state.newMessageText = action.text
            return state

        default: return state
    }


}

export default dialogReducer