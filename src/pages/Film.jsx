import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import './pages.css'
export default function Film() {
  
  return (
    <div>
      
      {/* POUR AFFICHER LES FILMS  */}
      

       <div style={{display:"flex",flexWrap:"wrap"}}>
         
          <CardShowType data={disneyPlusData} type="film" />


        </div>
      

      
    </div>
  )
}
