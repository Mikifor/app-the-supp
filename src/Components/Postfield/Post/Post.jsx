import React from 'react'
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
    <button onClick={onClickLikeFunction} className={classes.button}>{'\u2665'+props.counter}</button>
  </div>
}

const Post = (props) => {

  return (
    <div className={classes.post} key={props.id}>
      <div><Texts message={props.text} /></div>
      <div><Like counter={props.counter} onClickLikeFunction={props.onClickLikeFunction} id={props.id} /></div>
    </div>)
}

export default Post