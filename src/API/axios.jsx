import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: { "API-KEY": "db556941-92e6-4952-a0c2-9846af1c01d7" }
})




export const getUsersAx = (currentPage, pagesize) => {
    return instance.get(`users?page=${currentPage}&count=${pagesize}`)
        .then(response => { return response.data })
}

export const authMe = () => {
    return instance.get(`auth/me`).then(response => { console.log(response); return response.data })
}

export const followAx = (id) => {
    return instance.post(`follow/${id}`).then(response => { return response.data })
}

export const unfollowAx = (id) => {
    return instance.delete(`follow/${id}`).then(response => { return response.data })
}

export const statusAx = (id) => {
    return instance.get(`follow/${id}`).then(response => { return response.data })
}

export const getUserAx = (id) => {
    return instance.get(`profile/${id}`).then(response => {return response})
}

export const getStatusAx = (id) => {
    return instance.get(`profile/status/${id}`).then(response => {return response})
}

export const setStatusAx = (status) => {
    return instance.put(`profile/status`, {mystatus: status }).then(response => {return response})
}