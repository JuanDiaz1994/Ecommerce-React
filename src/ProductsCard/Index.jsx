import Button from 'react-bootstrap/Button';

import {Counter} from "../Counter/Index";

import "./Card.css"
export function CardBasic ({producto}){

  const imgUrl = "https://cdn.thingiverse.com/" + producto.img

return(
  <li className="CardProduct">
    <img className="CardProduct3D" src={imgUrl} alt={producto.name} />
    <div className="CardTitle">{producto.name}</div>
    <div>{producto.descripcion}</div>
    <div className='cardButtons'>
    <Counter/>
    <Button variant="primary">Agregar al carrito</Button>
    </div>
    
  </li>
)

}


