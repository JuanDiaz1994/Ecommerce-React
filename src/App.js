
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import HeaderImage from './components/Header-Image';

function App() {
  return (
    <>
    <NavBar background={"transparent"}/>
    <ItemListContainer greeting="Lista de Productos"/>
    <HeaderImage title ="Tauro Campers"/>
    </>
  );
}

export default App;
