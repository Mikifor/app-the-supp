import React from 'react';
import classes from './Post.module.css'

const Texts = (props) => {


  return <div className={classes.header}>
    <li>{props.message}</li>
  </div>
}

const Like = (props) => {
  let onClickLikeFunction = () => {
    props.onClickLikeFunction(props.id)
  }

  return <div className={classes.like}>
    <button onClick={onClickLikeFunction} className={classes.button}>Like</button>
    {props.counter}
  </div>
}

const Post = (props) => {

  return (
    <div className={classes.post} id={props.id}>
      <div><Texts message={props.text} /></div>
      <div><Like counter={props.counter} id={props.id} onClickLikeFunction={props.onClickLikeFunction} /></div>
    </div>)
}

export default Post;