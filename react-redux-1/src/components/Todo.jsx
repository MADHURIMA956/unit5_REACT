
import {useState,useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import {addTodoLoading,
        addTodoSuccess, 
         addTodoError ,
        getData} from '../features/todos/action'

export const Todo = () => {
    const [text ,setText] = useState("");

    const {loading,todos,error} = useSelector((state) => ({
        loading:state.todosState.loading,
        todos:state.todosState.todos,
        error:state.todosState.error
    }), function(prev,curr){
        if(prev.loading === curr.loading && prev.error === curr.error){
            return true
        }
        return false;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        
       getTodos();

    }, []);

    async function getTodos(){
        dispatch(getData())
        // try{
        //     dispatch(getTodoLoading())
        //     const data = await fetch("http://localhost:3001/todos")
        //     .then((d) => d.json())
        //     dispatch(getTodoSuccess(data))
        // }catch(e){
        //     dispatch(getTodoError(e))
        // }
    }

    const addTodo = () => {
        dispatch(addTodoLoading());
        fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status:false,
                title:text
            }),
        })
        .then((d) => d.json())
        .then((res) => {
            dispatch(addTodoSuccess(res))
            getTodos()
        })
        .catch((err) => {
            dispatch(addTodoError(err))
        })
    
    }
    console.log("rendering")
    return loading ? ( 
        <div>Loading..........</div> 
        ) : error ? (
        <div>Something went wrong !</div>
        ) :(
        <div>
            <input value={text} 
            type="text" 
            placeholder='Enter Todo' 
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                addTodo()
            }}>
                Add Todo
            </button>
            {
                todos.map((e,i) => (
                    <div key={i}>{e.title} - {e.status ? 'Done' : 'Not Done'}</div>
                ))
            }
        </div>
    )
}
