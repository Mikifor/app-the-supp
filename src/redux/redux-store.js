import { legacy_createStore } from "redux"
import { combineReducers } from "redux"
import postReducer from "./postReducer"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersreducer"
import adminReducer from './adminReducer'
import programReducer from './programReducer'

let redusers = combineReducers(
    {
        profileReducer: profileReducer,
        postReducer: postReducer,
        dialogReducer: dialogReducer,
        usersPage: usersReducer,
        adminpage: adminReducer,
        programReducer: programReducer
    }
)


let store = legacy_createStore(redusers)


export default store