import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function Marvel() {
  return (
    <div>

        {/* {Object.entries(disneyPlusData).filter(([categorie]) => categorie ==="marvel").map(([categorie,contenus])=>(
            <div key={categorie}>
                <ul>
                    {contenus.map((disneyMarvel) =>(
                        <li style={{color:"white"}} key={disneyMarvel.id}> {disneyMarvel.nom} </li>
                    ))}
                </ul>
            </div>
        ))} */}
        <CategoryList data={disneyPlusData} cat="marvel" />

    </div>
  )
}
