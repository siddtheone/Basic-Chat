import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import settingsReducer from "./settings";
import homeReducer from "./home";


const store = createStore(
  combineReducers({
    settings: settingsReducer,
    home: homeReducer
  }),
  applyMiddleware(thunk),
);

export default store;
