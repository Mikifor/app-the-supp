import Preloader from '../Preloader'
import React, { useEffect } from 'react'
import axios from 'axios'

let CertainProfile = (props) => {
    debugger

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.router.params.userID}`).then(response => {
            props.setProfileAC(response.data)
            props.switchUsersFetchingAC()
        })
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return <div>
        {props.isFetching ? <Preloader /> : <div>
                <div>{"Имя: " + props.profile.fullName}</div>
                <div>{"ID: " + props.profile.userId}</div>
                <div>{props.profile.photos.small ? <img src={props.profile.photos.small} alt="Avatar" /> : "nofoto"}</div> {/* ошибка в small*/}
                <div>{"Контакты"}</div>
                <div>{"VK: " + props.profile.contacts.vk}</div>
                <div>{"GitHub: " + props.profile.contacts.github}</div> 
                <div>{"Instagram: " + props.profile.contacts.instagram}</div>
                <div>{"Facebook: " + props.profile.contacts.facebook}</div>
                <div>{"Личный сайт: " + props.profile.contacts.website}</div> 
            </div> }
    </div>
}



export default CertainProfile