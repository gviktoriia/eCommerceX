import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Routing/Router';
import { CartProvider } from './CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Router></Router>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
