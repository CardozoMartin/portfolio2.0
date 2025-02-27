import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ProjectDetails from './views/ProjectDetails'
import PetsQr from './views/PetsQr'
import GymGestion from './views/GymGestion'
import GestionDeVentas from './views/GestionDeVentas'
import ChatbotDemo from './views/ChatbotDemo'

const Router = () => {
  return (
    <BrowserRouter>

    <main>

      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/proyectsGym" element={<GymGestion/>} />
        <Route exact path="/proyectsPetsQr" element={<PetsQr/>} />
        <Route exact path="/proyectsVentas" element={<GestionDeVentas/>} />
        <Route exact path="/proyectsBot" element={<ProjectDetails/>} />
        <Route exact path="/chatbot" element={<ChatbotDemo/>} />






        
       



        
     
  
      </Routes>
    </main>
    
    
    </BrowserRouter>
  )
}

export default Router