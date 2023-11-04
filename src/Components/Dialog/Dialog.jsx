import React from 'react'
import classes from './Dialog.module.css'
import dialogElements from './dialogData'
import { Route, Routes } from "react-router-dom"
import MessageElements from './messageElement'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {
  if (!props.isAuth) {return <Navigate to="/login"/>}

  let newMessage = React.createRef();

  let onClickAction = () => {
    props.onClickAction()
  }

  let onChangeFunction = () => {
    debugger
    let text = newMessage.current.value
    props.onChangeFunction(text)
  }

  return <div className={classes.main}>
    <div className={classes.namefield}>
      {dialogElements(props.state)}
    </div>
    <div className={classes.messagefield} >
      {<textarea onChange={onChangeFunction} value={props.state.newMessageText} ref={newMessage} />}
      {<button onClick={onClickAction}>Send</button>}
     <Routes>
        <Route path="/Farckhat" element={<MessageElements {...props} dialogNumber={"0"}/>} />
        <Route path="/Marat" element={<MessageElements {...props}  dialogNumber={"1"}/>} />
        <Route path="/Kseniya" element={<MessageElements {...props}  dialogNumber={"2"}/>} />
        <Route path="/Apolynaria" element={<MessageElements {...props}  dialogNumber={"3"}/>} />
        <Route path="/Demetry" element={<MessageElements {...props}  dialogNumber={"4"}/>} />
        <Route path="/Rodion" element={<MessageElements {...props}  dialogNumber={"5"}/>} />
      </Routes>
    </div>
  </div>
}

export default Dialogs