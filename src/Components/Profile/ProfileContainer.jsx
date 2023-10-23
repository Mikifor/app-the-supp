import Profile from './Profile'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        state: state.profileReducer
    }
}

export default connect (mapStateToProps, {}) (Profile)