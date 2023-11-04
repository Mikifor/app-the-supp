import Users from './Users'
import React from 'react'
import Preloader from './Preloader'
import { getUsersAx } from '../../API/axios' 


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        getUsersAx(this.props.currentPage, this.props.pagesize).then(data => {
            this.props.setUsersAC(data.items)
            this.props.setUsersTotalCountAC(data.totalCount)
        })
    }

    buttonPageOnClick = (p) => {
        this.props.getUsersTAC(p, this.props.pagesize )
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

        return this.props.isFetching ? <Preloader /> : <Users setProfileAC={this.props.setProfileAC} callCertainPerson={this.callCertainPerson} currentShowedPages={this.currentShowedPages} buttonPageOnClick={this.buttonPageOnClick} {...this.props} />
    }
}

export default UsersAPIComponent 