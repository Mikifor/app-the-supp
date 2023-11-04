import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, switchUsersFetchingAC, 
    setProfileAC, removeDisablingAC, addDisablingAC, followTAC, unfollowTAC, getUsersTAC } from '../../redux/usersreducer'
import { setAuthAC, switchAuthFetching } from '../../redux/authReducer'
import UsersAPIComponent from './UsersAPIComponent'
import { NavLink, Route, Routes } from 'react-router-dom'
import CertainProfile from './CertainProfile/CertainProfileContainer'
import { useEffect } from 'react'
import AuthProfile from './AuthProfile'
import { authMe } from '../../API/axios'

let UserNavigationPage = (props) => {
    useEffect(() => {
        props.switchAuthFetching()
        authMe().then(data => {
                props.setAuthAC(data.data.login, data.data.email, data.data.id, data.resultCode)
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
        authProfile: state.authReducer,
        disabledButtons: state.usersPage.disabledButtons
    }
}


export default connect(mapStateToProps, 
    { followAC, unfollowAC, setUsersAC, setPageAC, setUsersTotalCountAC, 
        switchUsersFetchingAC, setProfileAC, setAuthAC, switchAuthFetching, 
        removeDisablingAC, addDisablingAC, followTAC, unfollowTAC, getUsersTAC })(UserNavigationPage)