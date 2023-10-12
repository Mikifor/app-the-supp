import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersAPIComponent extends React.Component {

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

    currentShowedPages = []

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        if (pages.length > 4) {
            this.currentShowedPages = []
            this.currentShowedPages.push(1)
            this.currentShowedPages.push(this.props.currentPage - 1)
            this.currentShowedPages.push(this.props.currentPage)
            if (this.props.currentPage !== pagesCount) { this.currentShowedPages.push(this.props.currentPage + 1) }
            this.currentShowedPages.push(pagesCount)


            for (let i = 0; i < 5; i++) {
                if (this.currentShowedPages[i] === 0) {
                    this.currentShowedPages.splice(i, 1)
                }
                if (this.currentShowedPages[i] === (pagesCount + 1)) {
                    this.currentShowedPages.splice(i, 1)
                }
            }

            for (let i = 1; i < 5; i++) {
                if (this.currentShowedPages[i] === 1) {
                    this.currentShowedPages.splice(i, 1)
                }
            }

            if (this.currentShowedPages[this.currentShowedPages.length - 1] === this.currentShowedPages[this.currentShowedPages.length - 2]) { this.currentShowedPages.pop() }
        }

        return <Users currentShowedPages={this.currentShowedPages} buttonPageOnClick={this.buttonPageOnClick} 
        currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
    }
}

export default UsersAPIComponent