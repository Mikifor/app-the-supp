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
    <div><button onClick={onClickLikeFunction} className={classes.button}>{'\u2661'+props.counter}</button></div>
    <div className={classes.date}>{props.date}</div>
  </div>
}

const Post = (props) => {

  return (
    <div className={classes.post} key={props.id}>
      <div><Texts message={props.text} /></div>
      <div><Like counter={props.counter} onClickLikeFunction={props.onClickLikeFunction} id={props.id} date={props.date}/></div>
    </div>)
}

export default Post