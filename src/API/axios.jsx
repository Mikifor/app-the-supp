import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: { "API-KEY": "db556941-92e6-4952-a0c2-9846af1c01d7" }
})




export const getUsers = (currentPage, pagesize) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesize}`, { withCredentials: true })
        .then(response => { return response.data })
}

export const authMe = () => {
    return instance.get(`auth/me`).then(response => { return response.data.data })
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