import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchFetchingAC, setProfileAC } from '../../redux/usersreducer'
import UsersAPIComponent from './UsersAPIComponent'
import { NavLink, Route, Routes } from 'react-router-dom'
import CertainProfile from './CertainProfile/CertainProfileContainer'

let UserNavigationPage = (props) => {
    return <div>
        <NavLink to={'usearch'}><button>Кнопка</button></NavLink>
        <Routes>
            <Route path='/usearch' element={<UsersAPIComponent {...props} />} />
            <Route path='profile/*' element={<CertainProfile {...props}/>} />
        </Routes>
    </div>
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        profile: state.usersPage.profile
    }
}

export default connect (mapStateToProps, { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchFetchingAC, setProfileAC })(UserNavigationPage)