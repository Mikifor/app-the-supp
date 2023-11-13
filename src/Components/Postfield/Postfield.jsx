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
      onClickLikeFunction={props.onClickLikeFunction} 
      date={postItem.date} />
  </div>));
  return x
}

const Postfield = (props) => {
  return <div className={classes.main}>
    {<Entries onClickAction={props.onClickAction} state={props.state} />}
    {postElements(props)}
  </div>

}

export default Postfield 