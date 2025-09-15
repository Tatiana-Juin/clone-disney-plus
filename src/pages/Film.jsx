import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import './pages.css'
import CategorySerieMovie from "../components/categorySerieMovie/CategorySerieMovie"
export default function Film() {


  
  return (
    <div className="movie">
      
    {/* POUR AFFICHER LES CATEGORIES DES FILM */}
       {/* {Object.entries(disneyPlusData).map(([categorie,contenus]) => contenus
        .filter((item) => item.type === "film")
        .map((disney) =>(
          <div key={disney.id}>
              <p style={{color:"white"}}> {disney.categorie} </p>
          </div>
        ))
      )} */}

      <CategorySerieMovie data={disneyPlusData} type="film" />

      {/* POUR AFFICHER LES FILMS  */}
      

       {/* <div className="card-serie-movie">
         
          <CardShowType data={disneyPlusData} type="film" />


        </div> */}

        

      
    </div>
  )
}
