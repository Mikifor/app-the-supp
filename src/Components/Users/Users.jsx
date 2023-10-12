import React from 'react'
import classes from './Users.module.css'
import axios from 'axios'
import manFirst from '../../man1-2.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    buttonPageOnClick = (p) => {

        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pagesize}`).then(response => { this.props.setUsers(response.data.items) })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let currentShowedPages = []

        if (pages.length > 4) {
            currentShowedPages = []
            currentShowedPages.push(1)
            currentShowedPages.push(this.props.currentPage - 1)
            currentShowedPages.push(this.props.currentPage)
            currentShowedPages.push(this.props.currentPage + 1)
            currentShowedPages.push(pagesCount)


            for (let i = 0; i < 5; i++) {
                if (currentShowedPages[i] === 0) {
                    currentShowedPages.splice(i, 1)
                }
                if (currentShowedPages[i] === (pagesCount + 1)) {
                    currentShowedPages.splice(i, 1)
                }
            }

            for (let i = 1; i < 5; i++) {
                if (currentShowedPages[i] === 1) {
                    currentShowedPages.splice(i, 1)
                }
            }


            for (let i = 0; i < 4; i++) {
                if (currentShowedPages[i] === (pagesCount)) {
                    currentShowedPages.splice(i, 1)
                }
            }
            console.log(currentShowedPages)
        }

        return <div ><button onClick={this.getUsers}>Кнопка</button>
            <div>
                {currentShowedPages.map(p => { return <span key={p} onClick={(e) => { this.buttonPageOnClick(p) }} className={this.props.currentPage === p && classes.selectedPage}>{p}</span> })}
            </div>

            {this.props.users.map(u =>

                <div key={u.id} className={classes.user}>
                    <span>
                        <div>
                            <img src={manFirst} alt='avatar' className={classes.avatar}></img>
                        </div>
                        <div>
                            {u.follower
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users