import { createStore } from "redux";
import { reducer } from "./reducer.js";
import { incCrount } from "./action.js";


const init = {count:10 };

export const store = new createStore(reducer,init); //fixed

console.log(store.getState);

store.dispatch(incCrount(1))
store.dispatch(incCrount(1))

console.log(store.getState);


