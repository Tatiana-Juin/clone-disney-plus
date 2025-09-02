import disneyPlusData from "../data/disneyPlusData"
export default function Serie() {
  return (
    <div>
      {/* <p style={{color:"white"}}> Serie</p> */}
      
      {/* POR AFFICHER UNIQUEMENT LES SERIES  */}
      {Object.entries(disneyPlusData).map(([categorie,contenus]) =>(
        <div key={categorie}>
            <ul>
              {contenus.filter((disneySerie) => disneySerie.type==="serie" ).map((disneySerie) =>(
                <li style={{color:"white"}} key={disneySerie.id}> {disneySerie.nom} </li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  )
}
