const addPost = "addPost"
const changePostTextArea = "changeTextArea"
const upCounter = "upCounter"

export const onChangePostFunctionActionCreater = (text) => ({ type: changePostTextArea, text: text })
export const newPostFunctionActionCreater = () => ({ type: addPost })
export const upCounterActionCreater = (id) => ({ type: upCounter, id: id })

let initialState = {
    newPostText: "Michail",
    nextPostID: 6,

    postsData:
        [{ id:0, author: 'Farkchat', likeCounter: 0, text: 'Hi, Im Mikifor' },
        { id:1, author: 'Marat', likeCounter: 2, text: 'The second post' },
        { id:2, author: 'Kseniya', likeCounter: 7, text: 'Farchat, the bomb has been planted' },
        { id:3, author: 'Apolinariya', likeCounter: 3, text: 'Cake is lie' },
        { id:4, author: 'Demetry', likeCounter: 5, text: 'Auuuuf' },
        { id:5, author: 'Rodion', likeCounter: 12, text: 'Wolfensprundenburdenbark' }]
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newMessage = {
                id: state.nextPostID,   
                author: 'Mikifor',
                likeCounter: 0,
                text: state.newPostText
            }

            state.postsData.push(newMessage)
            state.newPostText = ""
            state.nextPostID++
            return state;

        case changePostTextArea:
            state.newPostText = action.text
            console.log(action)
            return state;

        case upCounter:
            state.postsData.forEach(element => {if (element.id === action.id) {element.likeCounter++}} )
            console.log(action.id)
            return state;

        default: return state

    }
}

export default postReducer