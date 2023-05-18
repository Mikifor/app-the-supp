import React from 'react';
import classes from './Like.module.css'

const Like = (props) => {
  return <div className={classes.like}>
    <button className={classes.button}>Like</button>
    {props.counter}
  </div>
}

export default Like;