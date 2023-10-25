import React from 'react'
import classes from './Users.module.css'
import manFirst from '../../man1-2.png'
import { NavLink } from 'react-router-dom'

let Users = (props) => {

    let onClickFunction = () => {
        props.switchUsersFetchingAC()
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
                        {u.follower
                            ? <button onClick={() => { props.unfollowAC(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.followAC(u.id) }}>Follow</button>}
                    </div>
                    <div className={classes.name}>{u.name}</div>
                    <div className={classes.status}>Статус: {u.status}</div>
                </div>
            </div>)}
    </div>
}

export default Users