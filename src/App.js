import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './components/NavBar'
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import { useEffect, useState } from 'react';
import { getItems } from './ItemList';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((resultado) => setItems(resultado))
      .catch((error) => console.error(error));
  }, []);


  return (
      <div>
        <div><NavBar /></div>
        <div><ItemListContainer/></div>
        <div><ItemCount/></div>
        <div>
        {items.map((articulos) => 
             <Item key={articulos.id} articulo={articulos}/>
          )};
        </div>
      </div>
      
    );
}

export default App;
