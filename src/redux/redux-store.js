import { applyMiddleware, legacy_createStore, combineReducers } from "redux"
import postReducer from "./postReducer"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersreducer"
import adminReducer from './adminReducer'
import programReducer from './programReducer'
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers(
    {
        profileReducer: profileReducer,
        postReducer: postReducer,
        dialogReducer: dialogReducer,
        usersPage: usersReducer,
        adminpage: adminReducer,
        programReducer: programReducer,
        authReducer: authReducer,
        form: formReducer
    }
)


let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware))


export default store