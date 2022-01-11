
import { INC_COUNT, DEC_COUNT } from "./actionType.js";

export const reducer = (state , {type,payload}) => {
    switch(type){
        case INC_COUNT :
            return {...state,count:state.count + payload};
        case DEC_COUNT :
            return {...state,count:state.count - payload}

    }
    return state;
}