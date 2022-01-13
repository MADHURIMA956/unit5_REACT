import { createStore , combineReducers, applyMiddleware,compose} from "redux";
import { reducer as counterReducer } from "../features/counter/reducer";
import { reducer as TodosReducer } from "../features/counter/reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counterState :counterReducer,
    todosState : TodosReducer
});

//middleware
// const logger1 = (store) => (next) => (action) => {
//     // console.log("Inside logger1")
//     console.time("p1")
//     next(action);
//     console.timeEnd("p1")
//     //  console.log("Exiting logger1")
// }

// const errorReport = (store) => (next) => (action) => {
//     // console.log("Inside logger2")
//     try{
//         next(action);
//     }catch(e){

//     }
//     // console.log("Exiting logger2")
// }

// const logger = (store) => (next) => (action) => {
//     if(typeof action === "function"){
//        return action(store.dispatch)
//     }
//     next(action)
// }
export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    //applyMiddleware(logger1,errorReport),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);