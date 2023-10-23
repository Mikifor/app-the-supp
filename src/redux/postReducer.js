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
        [{ id: 10, author: 'Farkchat', likeCounter: 0, text: 'Hi, Im Mikifor' },
        { id: 11, author: 'Marat', likeCounter: 2, text: 'The second post' },
        { id: 12, author: 'Kseniya', likeCounter: 7, text: 'Farchat, the bomb has been planted' },
        { id: 13, author: 'Apolinariya', likeCounter: 3, text: 'Cake is lie' },
        { id: 14, author: 'Demetry', likeCounter: 5, text: 'Auuuuf' },
        { id: 15, author: 'Rodion', likeCounter: 12, text: 'Wolfensprundenburdenbark' }]
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