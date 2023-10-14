import React from 'react'
import classes from './Programs.module.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Palindrome from './palindrome'
import Buttons from './buttons'


let programButtonsInfo = [
  { link: "palindrome", text: 'Проверка на палиндромность', id: 21 },
  { link: 'buttons', text: 'Кнопки', id: 22 },
  { link: 'app-3', text: 'Приложение 3', id: 22 },
  { link: 'app-4', text: 'Приложение 3', id: 22 },
]

let programButtons = programButtonsInfo.map(button => (<NavLink key={button.id} to={button.link} className={navData => navData.isActive ? classes.active : classes.item}><div>{button.text}</div></NavLink>))

const ProgramNavigation = () => {
  return <div className={classes.programNavigation}>
    <div data-link="https://subtle-bunny-150ac6.netlify.app/">
      <a href="https://subtle-bunny-150ac6.netlify.app/">
        <div >Приложение для расчёта сферических треугольников</div>
      </a>
      {programButtons}
    </div>
  </div>
}

const ProgramField = (props) => {
  return <div className={classes.programmField}>
    <Routes>
      <Route path="/palindrome/*" element={<Palindrome onChangeFunction={props.onChangeFunction} onClickFunction={props.onClickFunction} isPalindrome={props.isPalindrome}/>} />
      <Route path="/buttons/*" element={<Buttons />} />
    </Routes>
  </div>
}

const Programs = (props) => {
  return <div className={classes.main}>
    <ProgramNavigation />
    <ProgramField {...props}/>
  </div>
}

export default Programs