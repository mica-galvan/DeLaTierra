import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";


function App() {
return (
    
   <div className="App">
     <NavBar />
     <ItemListContainer saludo='PRODUCTOS - Este es el ItemListContainer' />
     </div>
   
  );
}

export default App;
