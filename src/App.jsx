
import './App.css'
import Homes from './pages/Homes'
import Film from './pages/Film'
import Serie from './pages/Serie'

import{Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Marvel from './pages/Marvel'
import Disney from './pages/Disney'
import Pixar from './pages/Pixar'
import StarWars from './pages/StarWars'
import NationalGeographic from './pages/NationalGeographic'
import Star from './pages/Star'

function App() {
 
  
  return (
    <>
    <Navbar />
    
    <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/film' element={<Film />} />
        <Route path='/serie' element={<Serie />}/>
        
        {/* POUR LES CARD  */}
        <Route path='/disney' element={<Disney />} />
        <Route path='/pixar' element={<Pixar />} />
        <Route path='/marvel' element={<Marvel />} />
        <Route path='/star-wars' element={<StarWars />} />
        <Route path="/national-geographic" element={<NationalGeographic />} />
        <Route path='/star' element={<Star />} />
    </Routes>
      
    </>
  )
}

export default App
