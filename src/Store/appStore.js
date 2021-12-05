import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartStore";
import { userReducer } from "./userStore";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
