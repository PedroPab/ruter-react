import { ListGroup } from "react-bootstrap";
import { ProductoBadge } from "../ProductoBadge";

const ProductoList = ({ productos }) => {
  return (
    <ListGroup>
      {productos.map((producto, i) => {
        const key = `${i}${producto.id}`
        let priceProductoTotal = producto.price

        return (
          <ListGroup.Item key={key} className="list-group-item d-flex justify-content-between" >
            <span>{producto.name}</span>
            {
              producto.modifique !== undefined ? producto.modifique.map((adicion, iAdicion) => {
                const keyAdicion = `${iAdicion}${adicion.id}`
                priceProductoTotal += adicion.price
                return (
                  <ProductoBadge
                    key={keyAdicion}
                    name={adicion.name}
                    cantidad={5}
                    colorSecundary={adicion.colorSecundary}
                  />
                )
              }) : 'hoa'
            }
            <span className="numeroPrecios" > {priceProductoTotal}</span>
          </ListGroup.Item >
        )
      })}
    </ListGroup >
  )
};

export { ProductoList }