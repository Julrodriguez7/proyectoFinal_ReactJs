import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App(){

  return (
          <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={"INDUMENTARIA DEPORTIVA"} />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={"INDUMENTARIA DEPORTIVA"} />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
          </div>
  )        
  }
  
  export default App;