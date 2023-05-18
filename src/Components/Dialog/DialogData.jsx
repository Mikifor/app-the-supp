import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';

const Person = (props) => {

    let link = "/messages/" + props.link;

    return <div>
        <NavLink to={link} className={classes.person}>
            {props.name}
        </NavLink>
    </div>
}


let dialogElements = (props) => { let y = props.map(dialog => (<Person name={dialog.personName} link={dialog.link} />)); return y}

export default dialogElements;