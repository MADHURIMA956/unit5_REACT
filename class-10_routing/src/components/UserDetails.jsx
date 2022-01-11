import { useParams } from "react-router-dom"
import {useState, useEffect } from "react";

export const UserDetails = () => {
    const {userid} = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
       fetch(`https://reqres.in/api/users/${userid}`)
        .then((d) => d.json())
        .then((d)=> {
            setUser(d.data)
        })
    }, [userid])
    return (
        <div>
           <img src={user.avatar} alt="test" />
           <h3>{user.first_name} {user.last_name}</h3>
           <h4>{user.email}</h4>
        </div>
    )
}