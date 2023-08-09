import React from 'react'
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom'


let navbuttonInfo = [
  { link: "/messages", text: 'Dialogs' },
  { link: '/posts', text: 'Posts' },
  { link: '/programs', text: 'Programs' }]

let navbuttons = navbuttonInfo.map(button => (<div><NavLink to={button.link} className={navData => navData.isActive ? classes.active : classes.item}>{button.text}</NavLink></div>))

const Navigation = () => {
  return <div className={classes.navigation}>
    {navbuttons}
  </div>
}

export default Navigation