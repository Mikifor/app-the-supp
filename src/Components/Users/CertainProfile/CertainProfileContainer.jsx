import CertainProfile from './CertainProfile'
import { connect } from 'react-redux'
import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


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




export default connect(mapStateToProps, {})(withRouter(CertainProfileAPIComponent))