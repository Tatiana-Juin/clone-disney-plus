import { useState } from 'react'
import './App.css'
import Homes from './pages/Homes'
import Film from './pages/Film'
import Serie from './pages/Serie'

import{Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {
 
  
  return (
    <>
    <Navbar />

    <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/film' element={<Film />} />
        <Route path='/serie' element={<Serie />}/>
    </Routes>
      
    </>
  )
}

export default App
