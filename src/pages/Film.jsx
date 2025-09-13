import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import './pages.css'
export default function Film() {
  
  return (
    <div className="movie">
      
      {/* POUR AFFICHER LES FILMS  */}
      

       <div className="card-serie-movie">
         
          <CardShowType data={disneyPlusData} type="film" />


        </div>
      

      
    </div>
  )
}
