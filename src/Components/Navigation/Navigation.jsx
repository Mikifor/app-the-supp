import React from 'react'
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom'


let navbuttonInfo = [
  { link: "/messages", text: 'Dialogs', id: 21},
  { link: '/posts', text: 'Posts', id: 22 },
  { link: '/programs', text: 'Programs', id: 23 }]

let navbuttons = navbuttonInfo.map(button => (<NavLink key={button.id} to={button.link} className={navData => navData.isActive ? classes.active : classes.item}><div>{button.text}</div></NavLink>))

const Navigation = () => {
  return <div className={classes.navigation}>
    {navbuttons}
  </div>
}

export default Navigation