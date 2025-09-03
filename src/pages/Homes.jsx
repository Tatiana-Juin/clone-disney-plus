import CardHeader from "../components/CardHeader"
import disneyPlusData from "../data/disneyPlusData"
import { Link } from "react-router-dom"
export default function Homes() {
  return (
    <div>
      {/* POUR CHAQUE LIENS VERS LES PAGES */}
      <div style={{display:"flex"}}>
        <Link to='/disney'> <CardHeader title="disney" /> </Link>
        <Link to='/pixar'> <CardHeader title="Pixar"/> </Link>
        <Link to="/marvel"> <CardHeader title="Marvel"/> </Link>
        <Link to="/star-wars"> <CardHeader title="Star Wars"/> </Link>
        <Link to="/national-geographic"> <CardHeader title="National Geographic"/> </Link>
        <Link to="/star"> <CardHeader title="Star"/> </Link>
      </div>

    

    {/* // POUR AFFICHER TOUTES LES SERIES ET FILM SANS LES CATEGORIES  */}
    <div>
      <p style={{color:"white"}}>FILMS ET SERIES</p>

      {Object.entries(disneyPlusData).map(([categorie,contenus]) =>(
        <div key={categorie}>
          <ul>
            {contenus.map((disneyData) =>(
              <li style={{color:"white"}} key={disneyData.id}> {disneyData.nom} </li>
            ))}
          </ul>

        </div>
      )) }
    </div>
    </div>

  )
}
