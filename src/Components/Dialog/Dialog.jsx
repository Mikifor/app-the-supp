import React from 'react'
import classes from './Dialog.module.css'
import dialogElements from './DialogData'
import messageElements from './messagesData'
import {newMessageFunctionActionCreater, onChangeDialogFunctionActionCreater} from './../../redux/dialogReducer'

const Dialogs = (props) => { 

  

  let newMessage = React.createRef();

  let onClickAction = () => {
    props.dispatch(newMessageFunctionActionCreater())
  }

  let onChangeFunction = () => {
    let text = newMessage.current.value
    props.dispatch(onChangeDialogFunctionActionCreater(text))
  }

  return <div className={classes.main}>
    <div className={classes.namefield}>
      {dialogElements(props.state.Profile.dialogsData)}
    </div>
    <div className={classes.messagefield} >
      {<textarea onChange={onChangeFunction} value={props.state.messageFieldData.newMessageText} ref={newMessage} />}
      {<button onClick={onClickAction}>Send</button>}
      {messageElements(props.state.messageFieldData.messagesInfo)}
    </div>
  </div>
}

export default Dialogs