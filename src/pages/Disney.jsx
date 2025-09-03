import disneyPlusData from "../data/disneyPlusData";


export default function Disney() {
  return (
    <div>
        {Object.entries(disneyPlusData).filter(([categorie]) => categorie==="disney").map(([categorie,contenus]) =>(
            <div key={categorie}>
                <ul>
                    {contenus.map((disney) =>(
                        <li style={{color:"white"}} key={disney.id}> {disney.nom} </li>
                    ))}
                </ul>

            </div>
        ))}
    </div>
  )
}
