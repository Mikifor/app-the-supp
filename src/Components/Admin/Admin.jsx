import React from 'react'
import classes from './Admin.module.css'
//import axios from 'axios'

const Admin = (props) => {

    //let adminAction = () => {axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => { console.log(response) })}

    let adminAction = () => {console.log(props)}

    return <div className={classes.main} >{
        <button onClick={adminAction}>Action</button>
    }
    </div>
}

export default Admin