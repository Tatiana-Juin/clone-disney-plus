import disneyPlusData from "../data/disneyPlusData"

export default function Film() {
  
  return (
    <div>
      
      {/* POUR AFFICHER LES FILMS  */}
      {Object.entries(disneyPlusData).map(([categorie,contenus]) =>(
        <div key={categorie}>
            <ul>
              {contenus.filter((filmContenu) => filmContenu.type==="film").map((filmContenu) =>(
                <li style={{color:"white"}} key={filmContenu.id}>{filmContenu.nom}</li>
              ))}
            </ul>
        </div>
      ))}
      
      

      
    </div>
  )
}
