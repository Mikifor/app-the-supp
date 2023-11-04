import { connect } from 'react-redux'
import Admin from './Admin'
import { withAuthRedirect } from '../../HOC/withAuth'


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let AuthAdmin = withAuthRedirect(Admin)

export default connect(mapStateToProps)(AuthAdmin)
