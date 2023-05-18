import React from 'react';
import classes from './Postfield.module.css';
import Post from './Post/Post';
import Entries from './Entries/Entries'


let postElements = (props) => { let x = props.store._state.postfieldData.postsData.map(postItem => (<Post text={postItem.text} counter={postItem.likeCounter} />)); return x }

const Postfield = (props) => { 
  
  return <div className={classes.main}>
    {<Entries store={props.store} />}
    {postElements(props)}
  </div>

}

export default Postfield;