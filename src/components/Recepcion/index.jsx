// import { Link } from 'react-router-dom'

import React from "react"
import { PedidoProvider, PedidosContext } from "../../PedidosContex/PedidosContex"
import { OrderCard } from "../../components/OrderCard/index"

const Recepcion = () => {

  const {
    pedidosIniciales,
    agregarPedido,
  } = React.useContext(PedidosContext)

  return (
    <>

      <div className="container">
        <h1>recepcion</h1>
        {
          pedidosIniciales.map(e => (
            <OrderCard
              key={e.id}
              dataPedido={e}
            />
          ))
        }
      </div>

    </>
  )
}

export { Recepcion }