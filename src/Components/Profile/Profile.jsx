import React from 'react';
import classes from './Profile.module.css';
const Main = (props) => {
  return <div className={classes.main}>
    <img src='./../../field.svg' alt='Avatar' />
    <div>
      <ul>
        <li className={classes.Item}>Name: {props.info.name}</li>
        <li className={classes.Item}>Age: {props.info.age}</li>
        <li className={classes.Item}>Language: {props.info.languages}</li>
      </ul>
    </div>
  </div>

}

export default Main; 