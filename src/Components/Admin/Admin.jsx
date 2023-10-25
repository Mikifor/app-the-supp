import React from 'react'
import classes from './Admin.module.css'
import axios from 'axios'
import preloader from "../../preloader_2.gif"
const Admin = (props) => {

    let adminActionOne = () => { axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => { console.log(response) }) }

    let adminActionTwo = () => {console.log(props)}

    return <div className={classes.main} >
        <img src={preloader} alt="Preloader" />
        <button onClick={adminActionOne}>Action 1</button>
        <button onClick={adminActionTwo}>Action 2</button>
    </div>
}

export default Admin