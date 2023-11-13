import React from 'react'
import classes from './Dialog.module.css'
import dialogElements from './dialogData'
import { Route, Routes } from "react-router-dom"
import MessageElements from './messageElement'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {

  let NewMessageForm = (props) => {
    return <form onSubmit={props.handlesubmit}>
      <Field name={"NewMessageField"} component={"input"} type={"text"} ref={newMessage}/>
    </form>
  }

  NewMessageForm = reduxForm({ form: "NewMessage" })(NewMessageForm)

  let newMessage = React.createRef();

  let onClickAction = () => {
    let text = newMessage.current.value
    props.onClickAction(text)
  }

  return <div className={classes.main}>
    <div className={classes.namefield}>
      {dialogElements(props.state)}
    </div>
    <div className={classes.messagefield} >
      <NewMessageForm />
      {<button onClick={onClickAction}>Send</button>}
      <Routes>
        <Route path="/Farckhat" element={<MessageElements {...props} dialogNumber={"0"} />} />
        <Route path="/Marat" element={<MessageElements {...props} dialogNumber={"1"} />} />
        <Route path="/Kseniya" element={<MessageElements {...props} dialogNumber={"2"} />} />
        <Route path="/Apolynaria" element={<MessageElements {...props} dialogNumber={"3"} />} />
        <Route path="/Demetry" element={<MessageElements {...props} dialogNumber={"4"} />} />
        <Route path="/Rodion" element={<MessageElements {...props} dialogNumber={"5"} />} />
      </Routes>
    </div>
  </div>
}

export default Dialogs