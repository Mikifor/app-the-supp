import React from 'react';
import classes from './Dialog.module.css';

const Message = (props) => {
    return <div className={(props.author === 'Farkchat') ? classes.partner_message : classes.author_message}>
        {props.message}
    </div>
}

let messageElements = (props) => {
    let x = props.Farkchat.map(messageItem => (<Message message={messageItem.text} author={messageItem.author} />)); return x
}
export default messageElements;
