import { INC_COUNT, DEC_COUNT } from "./actionType.js";

//action creators:
export const incCrount = (data) => {
    return {type:INC_COUNT, payload:data}
}