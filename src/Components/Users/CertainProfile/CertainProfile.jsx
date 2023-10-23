import Preloader from '../Preloader'
import React, { useEffect } from 'react'
import axios from 'axios'

let CertainProfile = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.router.params.userID}`).then(response => {
            props.setProfileAC(response.data)
            props.switchFetchingAC()
            console.log(response.data)
        })
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return <div>
        {props.isFetching ? <Preloader /> : <div>
                <div>{"Name: " + props.profile.fullName}</div>
                <div>{"ID: " + props.profile.userId}</div>
                <div>{props.profile.photos.small ? <img src={props.profile.photos.small} alt="Avatar" /> : "nofoto"}</div> 
            </div> }
    </div>
}



export default CertainProfile