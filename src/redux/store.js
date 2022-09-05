import { createStore, applyMiddleware } from "redux";
import addCakeReducer from "./Reducers/addCake";

const store = createStore(addCakeReducer);
export default store;
