import React from 'react'
import Postfield from './Postfield'
import { newPostFunctionActionCreater, onChangePostFunctionActionCreater, upCounterActionCreater } from './../../redux/postReducer'

const PostfieldContainer = (props) => {

  let onClickAction = () => {
    props.dispatch(newPostFunctionActionCreater())
  }

  let onClickLikeFunction = (id) => {
    props.dispatch(upCounterActionCreater(id))
  }

  let onChangeFunction = (text) => {
    props.dispatch(onChangePostFunctionActionCreater(text))
  }
  return <div> <Postfield state={props.state} onChangeFunction={onChangeFunction} onClickAction={onClickAction} onClickLikeFunction={onClickLikeFunction} /> </div>
}

export default PostfieldContainer;