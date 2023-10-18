import CertainProfile from './CertainProfile'
import { connect } from 'react-redux'
import React from 'react'


class CertainProfileAPIComponent extends React.Component {
    
    render() {
        return <CertainProfile {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.profile
    }
}




export default connect(mapStateToProps, {})(CertainProfileAPIComponent)