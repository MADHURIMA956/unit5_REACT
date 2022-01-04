import {useContext  } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const {cart} = useContext(CartContext)
    return <div>
        No Of Cart items : {cart}
    </div>
}