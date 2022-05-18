import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from "./components/NavBar/NavBar";


function App() {
return (
    
   <div className="App">
     <NavBar />
     <ItemListContainer saludo='NUESTROS PRODUCTOS' />
     <ItemDetailContainer idProducto='4' />
     </div>
   
  );
}

export default App;
