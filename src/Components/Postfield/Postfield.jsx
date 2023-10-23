import React from 'react'
import classes from './Postfield.module.css'
import Post from './Post/Post'
import Entries from './Entries/Entries'

let postElements = (props) => {
  let x = props.state.postsData.map(postItem =>
  (<div className={classes.post}>
    <Post 
      text={postItem.text} counter={postItem.likeCounter}
      key={postItem.id} id={postItem.id}
      onClickLikeFunction={props.onClickLikeFunction} />
  </div>));
  return x
}

const Postfield = (props) => {
  return <div className={classes.main}>
    {<Entries onChangeFunction={props.onChangeFunction} onClickAction={props.onClickAction} state={props.state} />}
    {postElements(props)}
  </div>

}

export default Postfield 