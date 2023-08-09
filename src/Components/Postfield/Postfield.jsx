import React from 'react';
import classes from './Postfield.module.css';
import Post from './Post/Post';
import Entries from './Entries/Entries'
debugger


let postElements = (props) => { let x = props.state.postfieldData.postsData.map(postItem => (<Post text={postItem.text} counter={postItem.likeCounter} />)); return x }

const Postfield = (props) => { 
  debugger
  
  return <div className={classes.main}>
    {<Entries state={props.state} dispatch={props.dispatch}/>}
    {postElements(props)}
  </div>

}

export default Postfield;