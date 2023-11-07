import React from 'react'
import classes from './Profile.module.css'
import Avatar from "../../mainAvatar.jpg"

class Profile extends React.Component {

  state = {
    status: this.props.state.status,
    isChanging: false
  }

  editModeOn = () => {
    this.setState({
      isChanging: true
    })
  }

  editModeOff = () => {
    this.setState({
      isChanging: false
    })
  }






  render() {
    return <div className={classes.main}>
      <div className={classes.avatarDiv}>
        <img className={classes.avatar} src={Avatar} alt='Avatar' />
        <div>{!this.state.isChanging ?
          <div onDoubleClick={this.editModeOn}> {this.state.status}</div> :
          <div><input autoFocus={true} onBlur={this.editModeOff} value={this.state.status} /></div>}</div>
      </div>
      <div className={classes.info}>
        <ul>
          <li className={classes.Item}>Name: {this.props.state.privateInfo.name}</li>
          <li className={classes.Item}>Age: {this.props.state.privateInfo.age}</li>
          <li className={classes.Item}>Language: {this.props.state.privateInfo.languages}</li>
          <li className={classes.Item}>Tools: {this.props.state.privateInfo.tools}</li>
          <li className={classes.Item}>VK: {this.props.state.privateInfo.vk}</li>
        </ul>
      </div>
    </div>
  }
}

export default Profile