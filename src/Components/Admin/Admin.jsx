import React from 'react'
import axios from 'axios'

const Admin = (props) => {

    let adminAction = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => { console.log(response) })

    }
    return <div >{
        <button onClick={adminAction}>Action</button>
    }
    </div>
}

export default Admin