import React from 'react'
import classes from './Users.module.css'
import manFirst from '../../man1-2.png'

let Users = (props) => {
    return <div className={classes.main}>
        <div>
            {props.currentShowedPages.map(p => { return <span key={p} onClick={(e) => { props.buttonPageOnClick(p) }} className={props.currentPage === p && classes.selectedPage}>{p}</span> })}
        </div>

        {props.users.map(u =>
            <div key={u.id} className={classes.user}>
                <span>
                    <div>
                        <img src={manFirst} alt='avatar' className={classes.avatar}></img>
                    </div>
                    <div>
                        {u.follower
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>Статус: {u.status}</div>
                    </span>
                </span>
            </div>)}
    </div>
}

export default Users