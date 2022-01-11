import { useState } from "react";
export const Login =()=> {
    const [form , setForm] = useState({})
    const handleChange = ({
        target:{name,value}})=>{
            setForm({
                ...form,
                [name]:value
            })
        }
    return (
        <div>
            <input type="text" onChange={handleChange} name="email" placeholder="Enter Email" />
            <input type="text" onChange={handleChange} name="password" placeholder="Enter Password" />
        </div>
    )
}
