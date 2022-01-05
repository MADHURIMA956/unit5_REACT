import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const {userid} = useParams();
    return (
        <div>
            Fetch Data of User : {userid}
        </div>
    )
}