import disneyPlusData from "../data/disneyPlusData"

export default function Marvel() {
  return (
    <div>

        {Object.entries(disneyPlusData).filter(([categorie]) => categorie ==="marvel").map(([categorie,contenus])=>(
            <div key={categorie}>
                <ul>
                    {contenus.map((disneyMarvel) =>(
                        <li style={{color:"white"}} key={disneyMarvel.id}> {disneyMarvel.nom} </li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
  )
}
