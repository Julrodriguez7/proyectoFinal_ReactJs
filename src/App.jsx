import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { Checkout } from './components/Checkout/Checkout';

function App(){

  return (
          <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={"INDUMENTARIA DEPORTIVA"} />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"INDUMENTARIA DEPORTIVA"} />} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
          </div>
  )        
  }
  
  export default App;