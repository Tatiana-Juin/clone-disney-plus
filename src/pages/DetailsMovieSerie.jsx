import { useParams } from "react-router-dom"
import disneyPlusData from "../data/disneyPlusData";

export default function DetailsMovieSerie() {

    // RECUPERER ID 
    const {id} = useParams();
    const movieSerieId = parseInt(id,10)

    let item = null;
    for(const category in disneyPlusData){
        item = disneyPlusData[category].find(f => f.id === movieSerieId);
        if(item) break;
    }
    if(!item) return <p>Film / serie introuvable</p>

  return (
    <div>
        <h1 className="title"> {item.nom} </h1>
        <p style={{color:"white"}}> Année : {item.annee} </p>

        <p style={{color:"white"}}> {item.resume} </p>
        {/* SUR CETTE PAGE ON VA RECUPERER LES DETAILS DES FILMS ET SERIES  */}

        {item.saisons && item.saisons.map(saison =>(
            <div key={saison.numero}>
                    <h3 style={{color:"white"}}>  Saison : {saison.numero} </h3>
                    {saison.episodes.map(ep =>(
                        <div key={ep.numero}>
                            <p style={{color:"white"}}> Episode {ep.numero} : {ep.titre} : {ep.resume} </p>
                           
                        </div>
                    ))}
            </div>
        ))}

    </div>
  )
}
