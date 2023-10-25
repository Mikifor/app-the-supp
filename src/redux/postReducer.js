const addPost = "addPost"
const changePostTextArea = "changeTextArea"
const upCounter = "upCounter"

export const onChangePostFunctionActionCreater = (text) => ({ type: changePostTextArea, text: text })
export const newPostFunctionActionCreater = () => ({ type: addPost })
export const upCounterActionCreater = (id) => ({ type: upCounter, id: id })

let initialState = {
    newPostText: "",
    nextPostID: 6,

    postsData: [
        { id: 18, author: 'Mikifor', likeCounter: 0, date: '18.10.2023', text: `From today users' photos enable at users' menu (if uploaded). Let's look at their faces!` },
        { id: 17, author: 'Mikifor', likeCounter: 0, date: '14.10.2023', text: `WOW! Now I know what 'spread operator' is! Very useful! Preloader for Users in addition` },
        { id: 16, author: 'Mikifor', likeCounter: 5, date: '12.10.2023', text: `Enjoy new colorful and tidy design of my app. The more, the better` },
        { id: 15, author: 'Mikifor', likeCounter: 12, date: '10.10.2023', text: `New program: Palindrome! Now you can check if your phrase is palindrome at "Programs"` },
        { id: 14, author: 'Mikifor', likeCounter: 5, date: '01.09.2023', text: `New function 'connect' is now using in project, simplifying connection between Container Components and store` },
        { id: 13, author: 'Mikifor', likeCounter: 3, date: '28.08.2023', text: 'Container Component separates Presentation Component and store. It performs logic mutations and send to Presentation Component only things to show. Dialog and Posts Containers added' },
        { id: 12, author: 'Mikifor', likeCounter: 7, date: '21.08.2023', text: `Now all reducers' info go through the "redux-store". Level-up of state management! ` },
        { id: 11, author: 'Mikifor', likeCounter: 2, date: '09.08.2023', text: 'PostReducer and DialogReducer was added at project. Reducers help to manage store - main info of the app' },
        { id: 10, author: 'Mikifor', likeCounter: 0, date: '01.08.2023', text: `Hi, Im Mikifor. Here will be some info about my pet-project's updates` }
    ]
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newMessage = {
                id: state.nextPostID,
                author: 'Mikifor',
                likeCounter: 0,
                text: state.newPostText
            }

            return {
                ...state,
                postsData: [newMessage, ...state.postsData],
                newPostText: "",
                nextPostID: ++state.nextPostID
            }
        }

        case changePostTextArea: {
            return {
                ...state,
                newPostText: action.text
            }
        }

        case upCounter: {
            let copyState = {
                ...state,
                //postsData: [...state.postsData]
            }
            copyState.postsData.forEach(element => { if (element.id === action.id) { element.likeCounter++ } })
            return copyState
        }

        default: return state
    }
}

export default postReducer