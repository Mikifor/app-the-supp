import React from 'react';
import classes from './Like.module.css'
import {upCounterActionCreater} from './../../../../redux/postReducer' 

const Like = (props) => {
  let onClickFunction = () => {
    props.dispatch(upCounterActionCreater(props.id))
  }

  return <div className={classes.like}>
    <button onClick={onClickFunction} className={classes.button}>Like</button>
    {props.counter}
  </div>
}

export default Like;