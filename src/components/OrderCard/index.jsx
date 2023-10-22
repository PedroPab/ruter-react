// OrderCard.js
import { Card, CardBody, CardSubtitle } from 'react-bootstrap';
import { CardHeader } from '../CardHeader';
import { ResumenProductos } from '../ResumenProductos';
import { ProductoList } from '../ProductoList';
import { TotalPrecio } from '../TotalPrecio';



const OrderCard = ({
  dataPedido
}) => {
  console.log("🚀 ~ file: index.jsx:14 ~ dataPedido:", dataPedido.priceTotal)
  return (
    <Card
      style={{
        width: '20rem'
      }}
    >
      <CardBody>
        <CardHeader
          title={dataPedido.name}
          orden={dataPedido.numeroDeOrdenDelDia}
          horaCreate={`4:01 pm`}
          horaPronostico={`4:01 pm`}
          urlMap={``}
          urlPhone={`h`}
        />
        {/* direccion completa */}
        <CardSubtitle>
          {dataPedido.address.address_complete}
        </CardSubtitle>


        {/* lita de resmen de productos */}
        <ResumenProductos
          listProducts={dataPedido.order}
        />
        {/*resumen de pruductos  */}
        <ProductoList
          productos={dataPedido.order}
        />
        {/* totalPrecio */}
        <TotalPrecio
          listProducts={dataPedido.orden}
          totalPrecio={dataPedido.priceTotal.COP}
          fee={dataPedido.fee}
        />

      </CardBody>
    </Card>
  );
}



export default OrderCard;


export { OrderCard }