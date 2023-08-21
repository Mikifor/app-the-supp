import React from 'react';
import classes from './Post.module.css'
import Texts from './Text/Text.jsx'
import Like from './Like/Like.jsx'

const Post = (props) => {

  return (
    <div className={classes.post} id={props.id}>
      <div className={classes.message}><Texts message={props.text} /></div>
      <div className={classes.like}><Like counter={props.counter} dispatch={props.dispatch} id={props.id}/></div>
    </div>)
}

export default Post;