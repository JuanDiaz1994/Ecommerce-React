import './App.css';
import Header from '../Header/Index';
import Main from '../Main/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from "../ProductsCard/Show";
import Crear from "../ProductsCard/Crear";

export function App() {
  return (
    <div>
    <Header/>
    <Main/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Show/>}/>
        <Route path="/Create" element={<Crear/>}/>
        {/* <Route path="/edit:id" element="aca va a ir el component edit"/> */}
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
