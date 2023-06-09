import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Routing/Router';
import { CartProvider } from './CartContext';
// import React, {useEffect, useState} from 'react';

function App() {

  // const [watches, setWatches] = useState([{}])

  // useEffect(() => {
  //   fetch('/api/watches').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setWatches(data)
  //     }
  //   )
  // }, [])

  return (
    <CartProvider>
      
        {/* {watches.map(watch => <div>{watch.name}</div>)} */}
        
      <BrowserRouter>
          <Router></Router>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
