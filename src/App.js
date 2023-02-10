
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import HeaderImage from './components/Header-Image';
// import { Counter } from './components/Counter';
import CardBasic from './components/Card';

function App() {
  return (
    <>
    <CardBasic/>
    {/* <Counter/> */}
    <NavBar background={"transparent"}/>
    <ItemListContainer greeting="Productos"/>
    <HeaderImage title ="Impresiones 3D"/>
    </>
  );
}

export default App;
