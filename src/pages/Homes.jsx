import CardHeader from "../components/CardHeader"
import disneyPlusData from "../data/disneyPlusData"

export default function Homes() {
  return (
    // <div style={{display:"flex" }}>
    //       <CardHeader title="disney" />
    //       <CardHeader title="Pixar"/>
    //       <CardHeader title="Marvel"/>
    //       <CardHeader title="Star Wars"/>
    //       <CardHeader title="National Geographic"/>
    //       <CardHeader title="Stars"/>
    //   </div>
    

    // POUR AFFICHER TOUTES LES SERIES ET FILM SANS LES CATEGORIES 
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

  )
}
