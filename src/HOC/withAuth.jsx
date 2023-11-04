import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from 'react-redux'

let mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuth) { return <Navigate to="/login" /> }

            return <Component {...this.props } />
        }
    }

    let ConnectedWithAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return ConnectedWithAuthRedirect
}