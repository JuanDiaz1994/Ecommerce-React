import Header from '../Header/Index';
import { Route, Routes } from 'react-router-dom';
import { ProductsDetailContainer } from '../ProductsDetails/ProductsDetailContainer';
import { ProductsListContainer } from '../Products/ProductsListContainer';
import "./Main.css"

export function App() {
  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route path='/' element={<ProductsListContainer titulo={`Productos`}/>} />
        <Route path='/item/:id' element={<ProductsDetailContainer />}/>
        <Route path='/category/:Category' element={<ProductsListContainer />} />
      </Routes>
    </div>
);
}

export default App;
