import React, {useState, useEffect} from 'react'
import Listado from './Componentes/Listado/Listado'
import Detalles from './Componentes/Detalles/Detalles'
import Nav from './Componentes/Nav/Nav'
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom"

const App = () => {
  
  
  return (
    <>
      
    
     <div>
      <BrowserRouter basename="/movie-plus">
      <Router>
        <Nav/>
          <Routes>
            
            <Route path='/movie-plus' exact element={<Listado/>}/>
            <Route path='/movie-plus/Detalles/:title/:id' exact element={<Detalles/>}/>
            
          </Routes>
        
      </Router>
      </BrowserRouter>
      </div>
      
</>
      
  )
}

export default App