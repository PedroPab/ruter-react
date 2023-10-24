const URL = import.meta.env.VITE_URL_API
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeXVWWXI2MDlUaUltcXQxeUtwQSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MjM2MjQ1Mn0.ypWAj30EdC8J74TcO3BaXzzRBsaMddhdUe-Iumu4lhs`

const obtenerPedidos = async () => {
  try {
    const url = `${URL}api/pedidos/historialDia`
    const options = {
      method: 'GET',
      headers: {
        Authorization: token
      }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("🚀 ~ file: findPedidos.jsx:15 ~ obtenerPedidos ~ data:", data)

    return data.body


  } catch (error) {
    console.error('Error al obtener pedidos:', error);
  }
};

export { obtenerPedidos }