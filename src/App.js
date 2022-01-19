import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './components/NavBar'
import ItemCount from './components/ItemCount';





function App() {
  return (
      <div>
        <div><NavBar /></div>
        <div><ItemListContainer/></div>
        <div><ItemCount/></div>
        </div>
      
    );
}

export default App;
