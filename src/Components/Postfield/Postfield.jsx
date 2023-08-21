import React from 'react';
import classes from './Postfield.module.css';
import Post from './Post/Post';
import Entries from './Entries/Entries'

let postElements = (props) => { let x = props.state.postsData.map(postItem => (<Post text={postItem.text} dispatch={props.dispatch} counter={postItem.likeCounter} id={postItem.id} />)); return x }

const Postfield = (props) => { 
    
  return <div className={classes.main}>
    {<Entries state={props.state} dispatch={props.dispatch}/>}
    {postElements(props)}
  </div>

}

export default Postfield;