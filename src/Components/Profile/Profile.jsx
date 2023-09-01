import React from 'react'
import classes from './Profile.module.css'
import { connect } from "react-redux"

const Profile = (props) => {
  return <div className={classes.main}>
    <img src='./../../field.svg' alt='Avatar' />
    <div>
      <ul>
        <li className={classes.Item}>Name: {props.state.name}</li>
        <li className={classes.Item}>Age: {props.state.age}</li>
        <li className={classes.Item}>Language: {props.state.languages}</li>
      </ul>
    </div>
  </div>
}

let mapStateToProps = (state) => {
  return {
    state: state.profileReducer

  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer; 