import { connect } from 'react-redux'
import Admin from './Admin'
import { withAuthRedirect } from '../../HOC/withAuth'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return { state: state }
}

export default compose (connect(mapStateToProps), withAuthRedirect)(Admin)