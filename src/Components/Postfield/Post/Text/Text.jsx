import React from 'react';
import classes from './Text.module.css'
const Post = (props) => {


    return <div className={classes.header}>
      <li>{props.message}</li>
    </div>
}

export default Post;