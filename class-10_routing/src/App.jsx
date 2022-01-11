
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Product } from "./components/Products.jsx";
import { Users } from "./components/Users.jsx";
import { Login } from "./components/Login.jsx";

import { UserDetails } from "./components/UserDetails.jsx";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes >
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contactus' element={<Contact />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
        <Route path='/user' element={<Users />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/users/:userid' element={<UserDetails />}></Route>
        <Route path='*' element={<div> <h1>404 Page Not Found</h1></div>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
