import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar";


function App() {
return (
    
   <div className="App">
     <NavBar />
     <ItemListContainer saludo='Este es el Item List Container con un Título Provisional' />
     </div>
   
  );
}

export default App;
