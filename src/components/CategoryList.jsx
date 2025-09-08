

export default function CategoryList({data,cat}) {
  return (
    <div>
         {Object.entries(data).filter(([categorie]) => categorie===cat).map(([categorie,contenus]) =>(
            <div key={categorie}>
                <ul>
                    {contenus.map((item) =>(
                      
                        <li style={{color:"white"}} key={item.id}> {item.nom} </li>
                    ))}
                </ul>

            </div>
        ))}
    </div>
  )
}
