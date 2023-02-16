import './App.css';
import Header from '../Header/Index';
import Main from '../Main/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from "../ProductsCard/Show";
import Crear from "../ProductsCard/Crear";
import Edit from "../ProductsCard/Edit";

export function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Show/>}/>
        <Route path="/create" element={<Crear/>}/>
        <Route path='/edit:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
