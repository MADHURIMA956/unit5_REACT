import { INC_COUNT, DEC_COUNT } from './actionTypes';

export const incCount = (data) => ({
    type: INC_COUNT,
    payload: data,
})

export const decCount = (data) => ({
    type: DEC_COUNT,
    payload: data,
})