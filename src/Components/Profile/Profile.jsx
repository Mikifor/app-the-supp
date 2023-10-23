import React from 'react'
import classes from './Profile.module.css'
import Avatar from "../../mainAvatar.jpg"

const Profile = (props) => {
  return <div className={classes.main}>
    <div className={classes.avatarDiv}>
      <img className={classes.avatar} src={Avatar} alt='Avatar' />
    </div>
    <div className={classes.info}>
      <ul>
        <li className={classes.Item}>Name: {props.state.privateInfo.name}</li>
        <li className={classes.Item}>Age: {props.state.privateInfo.age}</li>
        <li className={classes.Item}>Language: {props.state.privateInfo.languages}</li>
        <li className={classes.Item}>Tools: {props.state.privateInfo.tools}</li>
      </ul>
    </div>
  </div>
}

export default Profile