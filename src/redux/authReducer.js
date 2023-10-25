const switchFetching = "switchFetching"
const setAuthProfile = "setAuthProfile"

export const setAuthAC = (login, email, id) => ({ type: setAuthProfile, login: login, email: email, id: id })
export const switchAuthFetching = () => ({ type: switchFetching })

let initialState = {
    isFetching: false,
    isAuth: false,
    login: '',
    email: '',
    id: ''

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case switchFetching: {
            return {
                ...state, isFetching: !state.isFetching
            }
        }

        case setAuthProfile:
            return {
                ...state,
                login: action.login,
                email: action.email,
                id: action.id,
                isAuth: true

            }

        default: return state
    }


}

export default authReducer