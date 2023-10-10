import { connect } from 'react-redux'
import Admin from './Admin'


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
