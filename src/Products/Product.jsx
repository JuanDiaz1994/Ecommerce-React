import { Link } from "react-router-dom";

export const Product = ({ item }) => {
  return (
    <div className="card rounded-3 shadow">
      <div className="card-header">
        <img
          className="image img-fluid rounded-3"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <Link to={`/item/${item.id}`} className="btn btn-primary">
          Detalles
        </Link>
      </div>

    </div>
  );
};
