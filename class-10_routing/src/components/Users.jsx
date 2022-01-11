import { Link } from "react-router-dom"

export const Users = () => {
    
    return (
        <div>
            <h1>Users</h1>
            <br />
            {[1,2,3,4].map((e,i) =>(
                <div key={i} style={{margin:"10px"}}>
                    <Link to={`/users/${e}`}> User {e} </Link>
                    </div>
            ))}
        </div>
    )
}