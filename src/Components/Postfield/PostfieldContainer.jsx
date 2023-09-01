import Postfield from './Postfield'
import { newPostFunctionActionCreater, onChangePostFunctionActionCreater, upCounterActionCreater } from './../../redux/postReducer'
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    state: state.postReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onClickAction: () => { dispatch(newPostFunctionActionCreater()) },
    onClickLikeFunction: (id) => { dispatch(upCounterActionCreater(id)) },
    onChangeFunction: (text) => { dispatch(onChangePostFunctionActionCreater(text)) }
  }
}


const PostfieldContainer = connect(mapStateToProps, mapDispatchToProps)(Postfield)

export default PostfieldContainer