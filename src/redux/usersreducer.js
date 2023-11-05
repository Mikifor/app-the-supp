import { followAx, unfollowAx, getUsersAx, getUserAx } from '../API/axios'

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SETCURRENTPAGE = "SETCURRENTPAGE"
const SETUSERSTOTALCOUNT = "SETUSERSTOTALCOUNT"
const SWITCHFETCHING = "SWITCHFETCHING"
const SETPROFILE = "SETPROFILE"
const BUTTONTURNOFF = "BUTTONTURNOFF"
const BUTTONTURNON = "BUTTONTURNON"

let initialState = {
    users: [],
    pagesize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    profile: [],
    disabledButtons: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) { return { ...u, followed: true } } return u
            })
        }

        case UNFOLLOW: return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) { return { ...u, followed: false } } return u
            })
        }

        case SETUSERS: {
            return { ...state, users: action.users }
        }

        case SETCURRENTPAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SETUSERSTOTALCOUNT: {
            return { ...state, totalUsersCount: action.num }
        }

        case SWITCHFETCHING: {
            return { ...state, isFetching: !state.isFetching }
        }

        case SETPROFILE: {
            return { ...state, profile: action.profile }
        }

        case BUTTONTURNON: {
            return { ...state, disabledButtons: [...state.disabledButtons, action.id] }
        }

        case BUTTONTURNOFF: {
            return { ...state, disabledButtons: [...state.disabledButtons.filter(id => id !== action.id)] }
        }

        default: return state
    }

}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SETUSERS, users })
export const setPageAC = (currentPage) => ({ type: SETCURRENTPAGE, currentPage })
export const setUsersTotalCountAC = (num) => ({ type: SETUSERSTOTALCOUNT, num })
export const switchUsersFetchingAC = () => ({ type: SWITCHFETCHING })
export const setProfileAC = (profile) => ({ type: SETPROFILE, profile })
export const addDisablingAC = (id) => ({ type: BUTTONTURNON, id })
export const removeDisablingAC = (id) => ({ type: BUTTONTURNOFF, id })

export const followTAC = (id) => {
    return (dispatch) => {
        dispatch(addDisablingAC(id))
        followAx(id).then
            (data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(id))
                    console.log("done")
                } else {
                    console.log(data.resultCode)
                    console.log(data.messages[0])
                }
                dispatch(removeDisablingAC(id))
            })
    }
}


export const unfollowTAC = (id) => {
    return (dispatch) => {

        dispatch(addDisablingAC(id))
        unfollowAx(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(id))
                console.log("done")
            } else {
                console.log(data.resultCode)
                console.log(data.messages[0])
            }
            dispatch(removeDisablingAC(id))
        })
    }
}

export const getUsersTAC = (p, pagesize) => {
    return (dispatch) => {
        dispatch(switchUsersFetchingAC())
        dispatch(setPageAC(p))
        getUsersAx(p, pagesize).then
            (data => {
                dispatch(setUsersAC(data.items))
                dispatch(switchUsersFetchingAC())
            })
        
    }
}

export const getCertainProfileTAC = (id) => {
    return (dispatch) => {
        getUserAx(id).then(response => {
            dispatch(setProfileAC(response.data))
            dispatch(switchUsersFetchingAC())
        })
    }
}


export default usersReducer