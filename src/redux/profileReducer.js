import { setStatusAx, getStatusAx } from "../API/axios"
let SETSTATUS = "SETSTATUS"


let initialState = {
    dialogsData: [{ link: 'Farkchat', personName: 'Фархат' },
    { link: 'Marat', personName: 'Марат' },
    { link: 'Kseniya', personName: 'Ксения' },
    { link: 'Apolinariya', personName: 'Аполинария' },
    { link: 'Kseniya', personName: 'Деметрий' },
    { link: 'Rodion', personName: 'Родион' }],

    privateInfo: {
        name: 'Mikifor', age: 27, languages: 'Ru, Eng, JS', tools: 'React, Redux, axios', vk: 'vk.com/mikifor'
    },

    id: 30219,

    status: "Global status"
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETSTATUS: {
            return {
                ...state, status: action.status
            }
        }

        default: return state
    }
}

export const setStatusTAC = (states) => {
    return (dispatch) => {
        setStatusAx(states).then(data => {
            (data === 0) ? dispatch(setStatusAC(states)) : console.log("какая-то ошибка")
        })
    }
}

export const getStatusTAC = () => {
    return (dispatch) => {
        getStatusAx(30219).then(data => {
            console.log(data)
            dispatch(setStatusAC(data.data))
        })
    }
}


export const setStatusAC = (status) => ({ type: SETSTATUS, status })


export default profileReducer