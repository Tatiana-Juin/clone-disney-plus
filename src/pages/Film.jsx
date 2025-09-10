import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import './pages.css'
export default function Film() {
  
  return (
    <div className="div-principale">
      
      {/* POUR AFFICHER LES FILMS  */}
      

       <div className="div-card-serie-film">
         
          <CardShowType data={disneyPlusData} type="film" />


        </div>
      

      
    </div>
  )
}
