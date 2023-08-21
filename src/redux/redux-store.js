import { legacy_createStore } from "redux"
import { combineReducers } from "redux"
import postReducer from "./postReducer"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

let redusers = combineReducers(
    {
        profileReducer: profileReducer,
        postReducer: postReducer,
        dialogReducer: dialogReducer,
    }
)


let store = legacy_createStore(redusers)


export default store