import React from 'react';
import { pedidos } from '../utils/pedidos';

// Creamos el contexto
const PedidosContext = React.createContext()

// Creamos un componente proveedor que envuelve la aplicación
const PedidoProvider = async ({ children }) => {
  const { pedidos: pedidosIniciales, agregarPedido } = await pedidos()


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