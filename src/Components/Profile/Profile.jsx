import React from 'react'
import classes from './Profile.module.css'
import Avatar from "../../mainAvatar.jpg"
import { Field, reduxForm } from 'redux-form'

let StatusForm = (props) => {
  return <form onSubmit={props.handlesubmit}>
    <Field name={"TestComponentField"} component={"input"} type={"text"} onBlur={props.onBlur}/>
  </form>
}

StatusForm = reduxForm({ form: "test" })(StatusForm)

class Profile extends React.Component {

  state = {
    isChanging: false
  }

  editModeOn = () => {
    this.setState({
      isChanging: true
    })
  }

  editModeOff = (e) => {
    console.log(e.target.value)
    this.setState({
      isChanging: false
    })
    this.props.setStatusTAC(e.target.value)
  }

  render() {
    return <div className={classes.main}>
      <div className={classes.avatarDiv}>
        <img className={classes.avatar} src={Avatar} alt='Avatar' />
        <div>
          {!this.state.isChanging ?
            <div onDoubleClick={this.editModeOn}> {this.props.state.status ? this.props.state.status : "-----"}</div> :
            <div><StatusForm onBlur={this.editModeOff} /></div>}
        </div>
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