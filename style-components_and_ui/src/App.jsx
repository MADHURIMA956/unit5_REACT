import logo from './logo.svg';
import './App.css';
import { Button ,Div } from './styled/Design';
import { useState } from 'react';
import { DatePicker } from 'antd';

function App() {
  const [theme,setTheme] = useState("light")
  return (
    <div className="App">
      <Button
      theme = {theme}
       onClick={() => {
        console.log("clicked")
      }}>Click Me</Button>
      <Div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit explicabo mollitia distinctio rem impedit consequuntur! Cupiditate temporibus atque, nihil fuga magnam, repellendus nulla, aspernatur consequuntur nobis alias id suscipit iste.</p>
      </Div>
      <button onClick={()=> {
        setTheme(theme === "light" ? "dark" : "light")
      }}>Toggle Theme</button>
      <DatePicker />
    </div>
  );
}

export default App;
