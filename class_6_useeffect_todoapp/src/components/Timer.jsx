import { useEffect , useState} from "react/cjs/react.development"

export const Timer = () => {
const [counter , setCounter] = useState(8);

    useEffect(() => {
      
           const id = setInterval(() => {
                setCounter((p)=> {
                    if(p === 0){
                        clearInterval(id)
                       return 0
                    }
                    return p -1
                } )
              
            },1000)

       return () => {
           console.log("unmounting");
           clearInterval(id)
       }
        },[])
    return <div>
        counter is : {counter}
    </div>
}