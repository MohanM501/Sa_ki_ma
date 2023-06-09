import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";

const rootReducer=combineReducers({AuthReducer,AppReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))