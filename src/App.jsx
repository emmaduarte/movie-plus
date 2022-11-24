import React, {useState, useEffect} from 'react'
import Listado from './Componentes/Listado/Listado'
import Detalles from './Componentes/Detalles/Detalles'
import Nav from './Componentes/Nav/Nav'
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"

const App = () => {
  
  
  return (
    <>
      
    
     
      <Router>
        <Nav/>
          <Routes>
            
            <Route path='https://emmaduarte.github.io/movie-plus/' exact element={<Listado/>}/>
            <Route path='https://emmaduarte.github.io/movie-plus/Detalles/:title/:id' exact element={<Detalles/>}/>
          </Routes>
        
      </Router>
</>
      
  )
}

export default App