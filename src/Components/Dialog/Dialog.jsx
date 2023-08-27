import React from 'react'
import classes from './Dialog.module.css'
import dialogElements from './dialogData'
import { Route, Routes } from "react-router-dom"
import MessageElements from './messageElement'

const Dialogs = (props) => {

  let newMessage = React.createRef();

  let onClickAction = () => {
    props.onClickAction()
  }

  let onChangeFunction = () => {
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
        <Route path="/Farckhat" element={<MessageElements state={props.state} dialogNumber={"0"}/>} />
        <Route path="/Marat" element={<MessageElements state={props.state} dialogNumber={"1"}/>} />
        <Route path="/Kseniya" element={<MessageElements state={props.state} dialogNumber={"2"}/>} />
        <Route path="/Apolynaria" element={<MessageElements state={props.state} dialogNumber={"3"}/>} />
        <Route path="/Demetry" element={<MessageElements state={props.state} dialogNumber={"4"}/>} />
        <Route path="/Rodion" element={<MessageElements state={props.state} dialogNumber={"5"}/>} />
      </Routes>
    </div>
  </div>
}

export default Dialogs