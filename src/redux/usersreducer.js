const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SETCURRENTPAGE = "SETCURRENTPAGE"
const SETUSERSTOTALCOUNT = "SETUSERSTOTALCOUNT"
const SWITCHFETCHING = "SWITCHFETCHING"
const SETPROFILE = "SETPROFILE"



let initialState = {
    users: [],
    pagesize:5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    profile: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: return {
            ...state,
            users: state.users.map(u => {

                if (u.id === action.userID) { return { ...u, follower: true } } return u
            })
        }

        case UNFOLLOW: return {
            ...state,
            users: state.users.map(u => {

                if (u.id === action.userID) { return { ...u, follower: false } } return u
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
            debugger
            return { ...state, profile: action.profile}
        }

        default: return state
    }

}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SETUSERS, users })
export const setPageAC = (currentPage) => ({ type: SETCURRENTPAGE, currentPage })
export const setUsersTotalCountAC = (num) => ({ type: SETUSERSTOTALCOUNT, num })
export const switchFetchingAC = () => ({ type: SWITCHFETCHING })
export const setProfileAC = (profile) => ({ type: SETPROFILE, profile })

export default usersReducer