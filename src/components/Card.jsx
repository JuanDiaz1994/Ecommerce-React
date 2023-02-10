import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../images/Empanada.png';
import {Counter} from "./Counter";

function CardBasic() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Repulgadora</Card.Title>
        <Card.Text>
          Repulgadora de la medida que quieras para facilitar y optimizar el tiempo para fabricar empanadas
        </Card.Text>
        <Counter/>
        <div className='buttonAgregarcarrito'>
        <Button variant="primary">Agregar al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBasic;

