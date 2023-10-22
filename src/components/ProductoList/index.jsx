
const ProductoList = ({ productos }) => {
  return (
    <ul className="list-group">
      {productos.map((producto) => (
        <li key={producto.id} className="list-group-item d-flex justify-content-between">
          <span>{producto.name}</span>
          <span className="numeroPrecios">{producto.precio}</span>
        </li>
      ))}
    </ul>
  );
};

export { ProductoList }