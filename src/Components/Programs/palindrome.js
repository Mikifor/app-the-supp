import React from "react";
import classes from './Programs.module.css'




const Palindrome = (props) => {

  let palindromInput = React.createRef()

  let onClickFunction = () => {
    props.onClickFunction()
  }

  let onChangeFunction = () => {
    let text = palindromInput.current.value
    props.onChangeFunction(text)
  }

  return <div className={classes.palindrome}>
    <textarea onChange={onChangeFunction} ref={palindromInput}></textarea>
    <button onClick={onClickFunction}>Проверить фразу</button>
    <div>{props.isPalindrome}</div>
  </div>
}

export default Palindrome