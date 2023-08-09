const addPost = "addPost"
const changePostTextArea = "changeTextArea"

export const onChangePostFunctionActionCreater = (text) => ({ type: changePostTextArea, text: text })
export const newPostFunctionActionCreater = () => ({ type: addPost })

const postReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newMessage = {
                author: 'Mikifor',
                likeCounter: 0,
                text: state.newPostText
            }

            state.postsData.push(newMessage)
            state.newPostText = ""
            return state;

        case changePostTextArea:
            state.newPostText = action.text
            return state;

        default: return state

    }
}

export default postReducer