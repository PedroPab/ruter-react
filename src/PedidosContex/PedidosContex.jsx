import React from 'react';
import { pedidos } from '../utils/pedidos';

// Creamos el contexto
const PedidosContext = React.createContext()

// Creamos un componente proveedor que envuelve la aplicación
const PedidoProvider = ({ children }) => {
  const { pedidos: pedidosIniciales, agregarPedido } = pedidos()


  return (
    <PedidosContext.Provider value={{
      pedidosIniciales,
      agregarPedido,

    }}>

      {children}
    </PedidosContext.Provider>
  );
};

export { PedidoProvider, PedidosContext };