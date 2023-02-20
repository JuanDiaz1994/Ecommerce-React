import { ProductDetail } from "./ProductDetail";
import productos from "../Productos.json";
import { useParams } from "react-router-dom";

export const ProductsDetailContainer = () => {

  let { id } = useParams()
  
  const product = productos.find((prod) => prod.id === parseInt(id));

  return (
    <div className="container text-center">
      <h2 className="text-light">Detalle del Producto</h2>
      <div className="d-flex justify-content-center align-items-center ">
        <ProductDetail 
          id={product.id}
          description={product.descripcion}
          price={product.precio}
          image={product.img}
          title={product.name}
          category={product.category} />
      </div>
    </div>
  )
};