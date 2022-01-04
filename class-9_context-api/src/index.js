import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './contexts/CartContext';
import { ThemeContextProvider } from "./contexts/ThemContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ThemeContextProvider>
      <App /> 
      </ThemeContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
