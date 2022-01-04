import { useContext } from "react/cjs/react.development";
import { Cart } from "../components/Cart";
import { ThemeContext } from "../contexts/ThemContext";

export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    return <div>
       Theme is : {theme}
        <Cart />
    </div>
}