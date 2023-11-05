import CertainProfile from './CertainProfile'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../Preloader'
import { withRouter } from '../../../HOC/withRouter'

class CertainProfileAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getCertainProfileTAC(this.props.router.params.userID)}
    
    render() {
        if (this.props.isFetching) {return <Preloader />}
        return <CertainProfile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.profile
    }
}

export default connect(mapStateToProps, {})(withRouter(CertainProfileAPIComponent))