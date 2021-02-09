import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import messageReducer from "./messanger/reducers";


const rootReducer = combineReducers({
    authReducer,
    messageReducer,

});

export default rootReducer;