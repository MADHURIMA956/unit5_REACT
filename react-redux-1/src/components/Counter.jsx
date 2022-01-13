import { useSelector, useDispatch } from "react-redux";
import { decCount, incCount } from "../features/counter/action";


export const Counter = () => {
    const counter = useSelector((state) => state.counterState.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                counter : {counter}
            </h1>
            <button onClick={() => {
                dispatch(incCount(1))
            }}>
            ADD 1
            </button>
            <button onClick={() => {
                dispatch(decCount(1))
            }}>
            SUB 1
            </button>
        </div>
    )
}