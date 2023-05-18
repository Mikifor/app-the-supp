import React from 'react';
import classes from './Post.module.css'
import Texts from './Text/Text.jsx'
import Like from './Like/Like.jsx'

const Post = (props) => {


  return (
    <div className={classes.post}>
      <div className={classes.message}><Texts message={props.text} /></div>
      <div className={classes.like}><Like counter={props.counter}/></div>
    </div>)
}

export default Post;