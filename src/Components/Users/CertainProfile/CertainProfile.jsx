import React from 'react'

let CertainProfile = (props) => {
    return <div>
                <div>{"Имя: " + props.profile.fullName}</div>
                <div>{"ID: " + props.profile.userId}</div>
                <div>{props.profile.photos.small ? <img src={props.profile.photos.small} alt="Avatar" /> : "nofoto"}</div>
                {/*потому что без переключения заранее isFetching будет сначала отрисовываться компонента с данными и получать ошибку на photos.small */}
                <div>{"Контакты"}</div>
                <div>{"VK: " + props.profile.contacts.vk}</div>
                <div>{"GitHub: " + props.profile.contacts.github}</div> 
                <div>{"Instagram: " + props.profile.contacts.instagram}</div>
                <div>{"Facebook: " + props.profile.contacts.facebook}</div>
                <div>{"Личный сайт: " + props.profile.contacts.website}</div> 

    </div>
}

export default CertainProfile