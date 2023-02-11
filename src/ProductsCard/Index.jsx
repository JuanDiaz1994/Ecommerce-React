import Button from 'react-bootstrap/Button';

import {Counter} from "../Counter/Index";
// import productos3D from "../Productos.json"

// export function CardBasic({card}){
//   return (
//     <Card style={{ width: '18rem', marginBottom:'5%', marginLeft:'30px', marginRight:'30px'}}>
//       <Card.Img variant="top" src={img} />
//       <Card.Body className='main'>
//         <Card.Title>Repulgadora</Card.Title>
//         <Card.Text>
//           Repulgadora de la medida que quieras para facilitar y optimizar el tiempo para fabricar empanadas
//         </Card.Text>
//         <Counter/>
//         <div className='buttonAgregarcarrito'>
//         <Button variant="primary">Agregar al carrito</Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardBasic;

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


