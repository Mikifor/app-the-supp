import React from 'react'
import classes from './Entries.module.css'
import {newPostFunctionActionCreater, onChangePostFunctionActionCreater} from './../../../redux/postReducer' 


const Main = (props) => {

  let textareaRef = React.createRef()

  let onClickAction = () => {
    props.dispatch(newPostFunctionActionCreater())
  }

  let onChangeFunction = () => {
    let text = textareaRef.current.value;
    props.dispatch(onChangePostFunctionActionCreater(text))
  }

  return <div className={classes.main}>
    <img src='./../field.jpg' alt='New Post' />
    <div>
      <textarea onChange={onChangeFunction} ref={textareaRef} value={props.state.newPostText} />
      <button onClick={onClickAction}> Send </button>
    </div>
  </div>
}

export default Main;