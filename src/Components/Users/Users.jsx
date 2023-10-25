import React from 'react'
import classes from './Users.module.css'
import manFirst from '../../man1-2.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

let Users = (props) => {

    let onClickFunction = () => {
        props.switchUsersFetchingAC()
    }

    let followF = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
            { withCredentials: true, headers: { "API-KEY": "db556941-92e6-4952-a0c2-9846af1c01d7" } }
        )
            .then
            (response => {
                if (response.data.resultCode === 0) {
                    props.followAC(id)
                    console.log("done")
                } else {
                    console.log(response.data.resultCode)
                    console.log(response.data.messages[0])
                }
            })
    }

    let unfollowF = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": "db556941-92e6-4952-a0c2-9846af1c01d7" } }).then
            (response => {
                if (response.data.resultCode === 0) {
                    props.unfollowAC(id)
                    console.log("done")
                } else {
                    console.log(response.data.resultCode)
                    console.log(response.data.messages[0])
                }
            })
    }

    let statusF = (id) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": "db556941-92e6-4952-a0c2-9846af1c01d7" } }).then
            (response => {
                console.log(response)
            })
    }

    return <div className={classes.main}>
        <div>
            {props.currentShowedPages.map(p => { return <span key={p} onClick={(e) => { props.buttonPageOnClick(p) }} className={props.currentPage === p && classes.selectedPage}>{p}</span> })}
        </div>

        {props.users.map(u =>
            <div key={u.id} className={classes.user}>
                <div className={classes.avatar}>
                    <NavLink onClick={onClickFunction} to={"/users/profile/" + u.id}>
                        {u.photos.small ? <img src={u.photos.small} alt="Avatar" /> : <img src={manFirst} alt='avatar' className={classes.avatar} />}
                    </NavLink>
                </div>
                <div className={classes.info}>
                    <div className={classes.fbutton}>
                        {u.followed
                            ? <button onClick={() => { unfollowF(u.id) }}>Unfollow</button>
                            : <button onClick={() => { followF(u.id) }}>Follow</button>}
                    </div>
                    <div className={classes.fbutton2}>
                        <button onClick={() => { statusF(u.id) }}>Status</button>
                    </div>
                    <div className={classes.name}>{u.name}</div>
                    <div className={classes.status}>Статус: {u.status}</div>
                </div>
            </div>)}
    </div>
}

export default Users