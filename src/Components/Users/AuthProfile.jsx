import React from "react"
import Preloader from "./Preloader"

let AuthProfile = (props) => {
    if (!props.authData.isFetchin) {
        return <div>
            <div>Ваш профиль</div>
            <div>{props.authData.login}</div>
            <div>{props.authData.id}</div>
            <div>{props.authData.email}</div>
        </div>
    }

    return <Preloader />

}

export default AuthProfile