import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchUsersFetchingAC, setProfileAC } from '../../redux/usersreducer'
import { setAuthAC, switchAuthFetching } from '../../redux/authReducer'
import UsersAPIComponent from './UsersAPIComponent'
import { NavLink, Route, Routes } from 'react-router-dom'
import CertainProfile from './CertainProfile/CertainProfileContainer'
import { useEffect } from 'react'
import axios from 'axios'
import AuthProfile from './AuthProfile'

let UserNavigationPage = (props) => {
    useEffect(() => {
        props.switchAuthFetching()
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                props.setAuthAC(response.data.data.login, response.data.data.email, response.data.data.id)
                props.switchAuthFetching()
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>
        <NavLink to={'usearch'}><button>Кнопка</button></NavLink>
        <Routes>
            <Route path='*' element={<AuthProfile authData={props.authProfile} />} />
            <Route path='/usearch' element={<UsersAPIComponent {...props} />} />
            <Route path='profile/:userID?' element={<CertainProfile {...props} />} />
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
        profile: state.usersPage.profile,
        authProfile: state.authReducer
    }
}


export default connect(mapStateToProps, { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchUsersFetchingAC, setProfileAC, setAuthAC, switchAuthFetching })(UserNavigationPage)