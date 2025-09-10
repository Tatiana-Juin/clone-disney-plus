import './pages.css'
import CardHeader from "../components/CardHeader"
import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import { Link } from "react-router-dom"
export default function Homes() {
  return (
    <div className='div-principale'>
      {/* POUR CHAQUE LIENS VERS LES PAGES */}
      <div className='div-card-home'>
        <Link className='lien-card' to='/disney'> <CardHeader title="disney" /> </Link>
        <Link className='lien-card' to='/pixar'> <CardHeader title="Pixar"/> </Link>
        <Link className='lien-card' to="/marvel"> <CardHeader title="Marvel"/> </Link>
        <Link className='lien-card' to="/star-wars"> <CardHeader title="Star Wars"/> </Link>
        <Link className='lien-card' to="/national-geographic"> <CardHeader title="National Geographic"/> </Link>
        <Link className='lien-card' to="/star"> <CardHeader title="Star"/> </Link>
      </div>

    

    {/* // POUR AFFICHER TOUTES LES SERIES ET FILM SANS LES CATEGORIES  */}
      <div className='div-serie-film'>
        {/* film */}
        <h2 className='title-categorie'>Films</h2>

        <div className='div-film'>
          <CardShowType data={disneyPlusData} type="film" />
        </div>

        {/* serie */}
        <h2 className='title-categorie'>Series</h2>

        <div className='div-serie'>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>

      </div>
    </div>

  )
}
