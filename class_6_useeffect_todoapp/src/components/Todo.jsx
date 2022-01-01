import {useState} from 'react' ;
import {useEffect} from 'react' ;



export const Todo = () =>{
    const [text , setText] = useState('');
    const [Todo , setTodo] = useState([]);
    const [page , setPage] = useState(1);


    useEffect(() => {
        getTodo();
    },[page]);

    const getTodo = () => {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
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
            <div>
                <button disabled={page===1} onClick={()=> setPage(page-1)}>Prev</button>
                <button onClick={()=> setPage(page+1)}>Next</button>

            </div>
        </div>
    )
}