import {useState} from 'react' ;
import {useEffect} from 'react' ;


export const Todo = () =>{
    const [text , setText] = useState('');
    const [Todo , setTodo] = useState([]);

    useEffect(() => {
        getTodo();
    },[]);

    const getTodo = () => {
        fetch("http://localhost:3001/todos")
        .then((d) => d.json())
        .then((res) => {
            setTodo(res)
        });
    };

    const addTodo = () => {
        const payload = {
            title : text,
            status:false,
        };
        fetch("http://localhost:3001/todos",{
            method:"POST",
            body:JSON.stringify(payload),
            headers: {
                "content-type":"application/json"
            }
        }).then(()=>{
            getTodo();
            setText("")
        });
    };

    return (
        <div>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder='Enter todo...' />
            <button onClick={addTodo} >Add Todo</button>
            {Todo.map((e) => (
                <div>{e.title}</div>
            ))}
        </div>
    )
}