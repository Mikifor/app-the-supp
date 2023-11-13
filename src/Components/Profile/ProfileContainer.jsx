import Profile from './Profile'
import { connect } from 'react-redux'
import { setStatusTAC, getStatusTAC } from '../../redux/profileReducer'
import { useEffect } from 'react'

let mapStateToProps = (state) => {
    return {
        state: state.profileReducer
    }
}

const ProfileContainer = (props) => {
    useEffect(() => {
        props.getStatusTAC()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <Profile {...props} />
}

export default (connect(mapStateToProps, { setStatusTAC, getStatusTAC }))(ProfileContainer)