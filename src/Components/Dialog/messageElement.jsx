import React from 'react'
import classes from './Dialog.module.css'

const Message = (props) => {
    return <div className={(props.author === 'Mikifor') ? classes.partner_message : classes.author_message} >
        <div className={classes.message} >{props.message}</div>
    </div>
}

let MessageElements = (props) => {
    let x = props.state.messagesInfo[props.dialogNumber].messages.map(messageItem => (<Message message={messageItem.text} author={messageItem.author} key={messageItem.id}/>))
    props.state.currentDialogIndex = props.state.messagesInfo[props.dialogNumber].dialogIndex
    return <div> {x} </div>
}
export default MessageElements;
 