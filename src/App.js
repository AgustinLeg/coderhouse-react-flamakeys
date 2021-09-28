import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App pt-5">
      <header>
        <NavBar />
      </header>
      <ItemListContainer 
        titulo={'Productos TOP'}
      />
    </div>
  );
}

export default App;
