import { useContext } from "react/cjs/react.development"
import { CartContext } from "../contexts/CartContext"

export const Body =()=> {
    const {handleCartUpdate } = useContext(CartContext)
    return (
        <div>
            <button onClick={()=>{
            handleCartUpdate(1);
            }}>
                Buy the Laptop
            </button>
        </div>
    )
}