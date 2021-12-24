import {useState} from 'react';
import './App.css';

function App() {
  const [ count , setCount] = useState(0);
  // dispatch...........
  const changeState = (value) => {
      // setCount(count + value);
      setCount((prev) => {
        if(prev === 10){
          return 0;
        }
        return prev + value
      })
  }
 

  //conditional rendering
if(count > 10){
  return <div>Counter Reached Max value</div>
}

  return (
    <div className="App">
     <h3>Count : {count} </h3>

     {/* { count < 10 && ( <div>
      <button onClick={() => changeState(1)}>ADD 1</button>
     <button onClick={() => changeState(-1)}>SUB 1</button>

     </div>) } */}

     <div>
      <button onClick={() => changeState(1)}>ADD 1</button>
     <button onClick={() => changeState(-1)}>SUB 1</button>
     <div>Counter is {count % 2 === 0 ? "Even" : "Odd"}</div>

     </div>
    
     
    </div>
   
  );
}



export default App;
