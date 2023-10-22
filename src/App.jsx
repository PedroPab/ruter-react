import {  } from 'react'
import { Route, Routes } from 'react-router-dom'
// import {  Navbar,  } from 'react-bootstrap';
import { NavPersonal } from './components/NavPersonal'
import { Recepcion } from './components/Recepcion'
import { PedidoProvider } from './PedidosContex/PedidosContex'

const Home = ()   => <h1>hola </h1> 
const SearchPage = ()   => <h1>Search Page </h1> 

function App() {

  return (
    <>

    <PedidoProvider>
     <div className='App'>

      <header>
        <NavPersonal />
      </header>

     <Routes>

      <Route path='/' element={ <Home/>}/>
      <Route path='/recepcion' element={ <Recepcion/>}/>
      <Route path='/mapa' element={ <SearchPage/>}/>
      <Route path='/internos' element={ <SearchPage/>}/>
      <Route path='/contabilidad' element={ <SearchPage/>}/>
      <Route path='/historial' element={ <SearchPage/>}/>
      <Route path='/login' element={ <SearchPage/>}/>

     </Routes>

     </div>
    </PedidoProvider>

    </>
  )
}

export default App
