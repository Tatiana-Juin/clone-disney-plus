import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homes from './pages/Homes'
import Film from './pages/Film'
import{Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {
 
  

  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/film' element={<Film />} />
    </Routes>
      
    </>
  )
}

export default App
