import React from 'react'
import classes from './Admin.module.css'
import { getStatusAx } from '../../API/axios'
import preloader from "../../preloader_2.gif"


const Admin = (props) => {

    let adminActionOne = () => { getStatusAx(30219).then(data => {console.log(data)}) }

    let adminActionTwo = () => {console.log(props)}

    return <div className={classes.main} >
        <img src={preloader} alt="Preloader" />
        <button onClick={adminActionOne}>Action 1</button>
        <button onClick={adminActionTwo}>Action 2</button>
        <div>{("1" === "2") ? ("6" === 6) ? 3 : 5 : 4}</div>
    </div>
}

export default Admin