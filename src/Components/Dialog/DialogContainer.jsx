import React from 'react'
import Dialogs from './Dialog'
import { newMessageFunctionActionCreater, onChangeDialogFunctionActionCreater } from '../../redux/dialogReducer'

const DialogsContainer = (props) => {

  let onClickAction = () => {
    props.dispatch(newMessageFunctionActionCreater())
  }

  let onChangeFunction = (text) => {
    props.dispatch(onChangeDialogFunctionActionCreater(text))
  }

  return <div>
    <Dialogs onChangeFunction={onChangeFunction} onClickAction={onClickAction} state={props.state} />
  </div>
}

export default DialogsContainer