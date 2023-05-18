import React from 'react';
import classes from './Entries.module.css';

const Main = (props) => {

  let textareaRef = React.createRef();

  let onClickAction = () => {
    let text = textareaRef.current.value;
    props.store.addPost(text);
  }

  let onChangeFunction = () => {
    let text = textareaRef.current.value;
    props.store.changeTextArea('1', text)
  }

  return <div className={classes.main}>
    <img src='./../field.jpg' alt='New Post' />
    <div>
      <textarea onChange={onChangeFunction} ref={textareaRef} value={props.store._state.postfieldData.newPostText}/>
      <button onClick={onClickAction}> Send </button>
    </div>
  </div>
}

export default Main;