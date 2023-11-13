import Postfield from './Postfield'
import { newPostFunctionActionCreater, upCounterActionCreater } from './../../redux/postReducer'
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    state: state.postReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onClickAction: (text) => { dispatch(newPostFunctionActionCreater(text)) },
    onClickLikeFunction: (id) => { dispatch(upCounterActionCreater(id)) }
  }
}


const PostfieldContainer = connect(mapStateToProps, mapDispatchToProps)(Postfield)

export default PostfieldContainer