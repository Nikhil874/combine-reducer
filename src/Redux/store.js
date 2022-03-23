import {createStore,combineReducers} from "redux";
import { countReducer } from "../Count/reducer";
import { TodoReducer } from "../Todo/reducer";
import { authReducer } from "../login/reducer";

const rootReducer=combineReducers(
    {
        count:countReducer,
        todo:TodoReducer,
        state:authReducer,
    }
)

export const store= createStore(rootReducer
     
    )