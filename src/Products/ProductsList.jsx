import { Product } from "./Product";


export const ProductsList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map( producto => (
          <div className="col-md-4 my-2" key={producto.id}>
            <Product
              item={producto}
            />
          </div>
        ))}
      </div>
    </div>
  );
};