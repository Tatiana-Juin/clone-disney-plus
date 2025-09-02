import disneyPlusData from "../data/disneyPlusData"

export default function Film() {
  console.log(disneyPlusData)
  return (
    <div>
      {/* <p style={{color:"white"}}>Film</p> */}
      
      
     
      {Object.entries(disneyPlusData).map(([categories,contenus]) =>(
        <div key={categories}>
          <h2 style={{color:"white"}} >
            {categories}
          </h2>
          <ul>
            {contenus.map((item) =>(
              <li style={{color:"white"}} key={item.id}> {item.nom}</li>
            ))}
          </ul>
        </div>
      ) )}
      
      

      
    </div>
  )
}
