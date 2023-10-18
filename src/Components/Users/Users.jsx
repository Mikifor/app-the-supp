import React from 'react'
import classes from './Users.module.css'
import manFirst from '../../man1-2.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

let Users = (props) => {

    let callCertainPerson = () =>  { 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=1`).then(response => {
            props.setProfileAC(response.data.items)
        })
    }

    let onClickFunction = () => {
        callCertainPerson()   
    }


    return <div className={classes.main}>
        <div>
            {props.currentShowedPages.map(p => { return <span key={p} onClick={(e) => { props.buttonPageOnClick(p) }} className={props.currentPage === p && classes.selectedPage}>{p}</span> })}
        </div>

        {props.users.map(u =>
            <div key={u.id} className={classes.user}>
                <span>
                    <div>
                        <NavLink onClick={onClickFunction} to={"/users/profile/" + u.id}>{u.photos.small ? <img src={u.photos.small} alt="Avatar" /> : <img src={manFirst} alt='avatar' className={classes.avatar} />}</NavLink>
                    </div>
                    <div>
                        {u.follower
                            ? <button onClick={() => { props.unfollowAC(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.followAC(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>Статус: {u.status}</div>gi
                    </span>
                </span>
            </div>)}
    </div>
}

export default Users