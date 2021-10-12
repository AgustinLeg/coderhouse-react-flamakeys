import React, {useState} from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {

  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  
  const addCantidadCarrito = (cantidad) =>{
    setCantidadCarrito(cantidadCarrito + cantidad)
  }
  
  return (
    <div className="App pt-5">
      <header>
        <NavBar
          cantidadCarrito={cantidadCarrito}
        />
      </header>
      {/* <ItemListContainer 
        titulo='Productos TOP'
        addCantidadCarrito={addCantidadCarrito}
      /> */}
      <ItemDetailContainer addCantidadCarrito={addCantidadCarrito}/>
    </div>
  );
}

export default App;
