import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from './Context/CartContext';


function App() {
return (
    <BrowserRouter>
    <CartContextProvider>
    <div className="App">
     <NavBar />

     <Routes>
     <Route path="/" element = {  <ItemListContainer saludo='NUESTROS PRODUCTOS'  /> } />
     <Route path="/categoria/:categoriaFiltro" element = {  <ItemListContainer saludo='NUESTROS PRODUCTOS'  /> } />
     <Route path="/detalle/:id" element = {  <ItemDetailContainer  /> } />
   
     {/* <ItemListContainer saludo='NUESTROS PRODUCTOS' /> */}
     {/* <ItemDetailContainer idProducto='4' /> */}
      <Route path="/*" element = {  <Navigate to='/' replace/> } /> {/* HACER UN COMPONENTE 404 NOT FOUND  */}
      <Route path='/Cart' element={<Cart/>}/>
     </Routes>
     </div>
     </CartContextProvider>
   
    </BrowserRouter>
   
  );
}

export default App;
