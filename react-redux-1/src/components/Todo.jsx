import {useState} from 'react'

export default function Todo() {
    const [text ,setText] = useState("")
    return (
        <div>
            <input value={text} 
            type="text" 
            placeholder='Enter Todo' 
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {

            }}>
                Add Todo
            </button>
        </div>
    )
}
