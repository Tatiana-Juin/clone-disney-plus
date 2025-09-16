import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import './pages.css'
import CategorySerieMovie from "../components/categorySerieMovie/CategorySerieMovie"
export default function Film() {


  
  return (
    <div className="movie">
      
   

      

      {/* POUR AFFICHER LES FILMS  */}
      

       {/* <div className="card-serie-movie"> */}
         
          <CategorySerieMovie data={disneyPlusData} type="film" />


        {/* </div> */}

        

      
    </div>
  )
}
