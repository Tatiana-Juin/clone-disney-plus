import './pages.css'
import CardHeader from "../components/CardHeader"
import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import { Link } from "react-router-dom"
export default function Homes() {
  return (
    <div className='div-home'>
      {/* POUR CHAQUE LIENS VERS LES PAGES */}
      <div className='div-card-home'>
        <Link to='/disney'> <CardHeader title="disney" /> </Link>
        <Link to='/pixar'> <CardHeader title="Pixar"/> </Link>
        <Link to="/marvel"> <CardHeader title="Marvel"/> </Link>
        <Link to="/star-wars"> <CardHeader title="Star Wars"/> </Link>
        <Link to="/national-geographic"> <CardHeader title="National Geographic"/> </Link>
        <Link to="/star"> <CardHeader title="Star"/> </Link>
      </div>

    

    {/* // POUR AFFICHER TOUTES LES SERIES ET FILM SANS LES CATEGORIES  */}
      <div>
        {/* film */}
        <h2 style={{color:"white"}}>Films</h2>

        <div style={{display:"flex",flexWrap:"wrap"}}>
          <CardShowType data={disneyPlusData} type="film" />
        </div>

        {/* serie */}
        <h2 style={{color:"white"}}>Series</h2>

        <div style={{display:"flex",flexWrap:"wrap"}}>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>

      </div>
    </div>

  )
}
