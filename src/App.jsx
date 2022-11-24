import React, {useState, useEffect} from 'react'
import Listado from './Componentes/Listado/Listado'
import Detalles from './Componentes/Detalles/Detalles'
import Nav from './Componentes/Nav/Nav'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const App = () => {
  
  
  return (
    <>
      
    
     
      <Router>
        <Nav/>
          <Routes>
            
            <Route path='movie-plus/' exact component={<Listado/>}/>
            <Route path='movie-plus/Detalles/:title/:id' exact component={<Detalles/>}/>
          </Routes>
        
      </Router>
</>
      
  )
}

export default App