import { connect } from 'react-redux'
import Users from './Users'
import axios from 'axios'
import React from 'react'
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchFetchingAC } from '../../redux/usersreducer'
import Preloader from './Preloader'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.setUsersTotalCountAC(response.data.totalCount)
        })
    }

    buttonPageOnClick = (p) => {
        this.props.switchFetchingAC()
        console.log(this.props.isFetching)
        this.props.setPageAC(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pagesize}`).then
            (response => {
                this.props.setUsersAC(response.data.items)
                this.props.switchFetchingAC()
            })
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

        return this.props.isFetching ? <Preloader /> : <Users currentShowedPages={this.currentShowedPages} buttonPageOnClick={this.buttonPageOnClick} {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchFetchingAC})(UsersAPIComponent)