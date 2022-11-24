import React, {useState, useEffect} from 'react'
import Listado from './Componentes/Listado/Listado'
import Detalles from './Componentes/Detalles/Detalles'
import Nav from './Componentes/Nav/Nav'
import {HashRouter, Router, Route, Routes, BrowserRouter} from "react-router-dom"

const App = () => {
  
  
  return (
    <>
      
    
     <BrowserRouter basename= "/movie-plus">
      <Router>
        <Nav/>
          <Routes>
            
            <Route path='/movie-plus' exact element={<Listado/>}/>
            <Route path='/Detalles/:title/:id' exact element={<Detalles/>}/>
          </Routes>
        
      </Router>
      </BrowserRouter>
</>
      
  )
}

export default App