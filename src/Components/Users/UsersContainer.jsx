import { connect } from 'react-redux'
import Users from './Users'
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC } from '../../redux/usersreducer'


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID))},

        unfollow: (userID) => { dispatch(unfollowAC(userID))},

        setUsers: (users) => { dispatch(setUsersAC(users))},

        setCurrentPage: (page) => {dispatch(setPageAC(page))},

        setUsersTotalCount: (num) => {dispatch(setUsersTotalCountAC(num))},
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
