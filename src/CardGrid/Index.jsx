import peliculas from "../Productos.json";
import { CardBasic } from "../ProductsCard/Index";
import "./Cardgrid.css"

export function PeliculasGrid() {
  
  return (
    <ul className="moviesGrid">
      {peliculas.map((producto) => (
        <CardBasic key={producto.id} producto={producto} />
      ))}
    </ul>
  );
}