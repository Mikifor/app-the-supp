import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialog.module.css'

const Person = (props) => {
    return <div>        
        <NavLink to={props.link} className={classes.person}>{props.name}</NavLink>
    </div>
}


let dialogElements = (props) => {
    let y = props.messagesInfo.map(dialog => (<Person name={dialog.dialogName} link={dialog.link} key={dialog.id} id={dialog.id} />))
    return y
}

export default dialogElements