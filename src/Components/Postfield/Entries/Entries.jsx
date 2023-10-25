import React from 'react'
import classes from './Entries.module.css'

const Main = (props) => {

  let textareaRef = React.createRef()

  let onClickAction = () => {
    props.onClickAction()
  }

  let onChangeFunction = () => {
    let text = textareaRef.current.value;
    props.onChangeFunction(text)
  }

  return <div className={classes.main}>
    <div>
      <textarea className={classes.import} onChange={onChangeFunction} ref={textareaRef} value={props.state.newPostText} />
      <button onClick={onClickAction}> Publish post </button>
    </div>
  </div>
}

export default Main