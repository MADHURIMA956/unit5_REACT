import { ADD_TODO ,REMOVE_TODO , ADD_TODO_ERROR,ADD_TODO_SUCCESS,ADD_TODO_LOADING} from "./actionTypes";

export const addTodo = (data) => ({
    type:ADD_TODO,
    payload:data,
})

export const aremoveTodo = (data) => ({
    type:REMOVE_TODO,
    payload:data,
})

export const ADDTODOLOADING = () => {
    return{
        type:ADD_TODO_LOADING
    }
}

export const ADDTODOSUCCESS = () => {
    return{
        type:ADD_TODO_SUCCESS
    }
}

export const ADDTODOERROR = () => {
    return{
        type:ADD_TODO_ERROR,
    }
}