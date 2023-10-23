const addPost = "addPost"
const changePostTextArea = "changeTextArea"
const upCounter = "upCounter"

export const onChangePostFunctionActionCreater = (text) => ({ type: changePostTextArea, text: text })
export const newPostFunctionActionCreater = () => ({ type: addPost })
export const upCounterActionCreater = (id) => ({ type: upCounter, id: id })

let initialState = {
    newPostText: "",
    nextPostID: 6,

    postsData:
        [{ id: 10, author: 'Mikifor', likeCounter: 0, date: '01.08.2023', text: `Hi, Im Mikifor. Here will be some info about my pet-project's updates` },
        { id: 11, author: 'Mikifor', likeCounter: 2, date: '09.08.2023', text: 'PostReducer and DialogReducer was added at project. Reducers help to manage store - main info of the app' },
        { id: 12, author: 'Mikifor', likeCounter: 7, date: '', text: 'Farchat, the bomb has been planted' },
        { id: 13, author: 'Mikifor', likeCounter: 3, date: '', text: 'Cake is lie' },
        { id: 14, author: 'Mikifor', likeCounter: 5, date: '', text: 'Auuuuf' },
        { id: 15, author: 'Mikifor', likeCounter: 12, date: '', text: 'Wolfensprundenburdenbark' }]
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
                postsData: [...state.postsData, newMessage],
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