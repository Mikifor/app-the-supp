import React from 'react'
import classes from './Entries.module.css'
import { Field, reduxForm } from 'redux-form'

const Main = (props) => {

  let textareaRef = React.createRef()

  let NewPostForm = (props) => {
    return <form onSubmit={props.handlesubmit}>
      <Field className={classes.import} name={"NewPost"} component={"input"} type={"text"} ref={textareaRef}/>
    </form>
  }

  NewPostForm = reduxForm({form: "NewPost"})(NewPostForm)

  let onClickAction = () => {
    let text = textareaRef.current.value
    props.onClickAction(text)
  }

  return <div className={classes.main}>
    <div>
      <NewPostForm />
      <button onClick={onClickAction}> Publish post </button>
    </div>
  </div>
}

export default Main