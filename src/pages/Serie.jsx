import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
export default function Serie() {
  return (
    <div>
      {/* <p style={{color:"white"}}> Serie</p> */}
      
      {/* POR AFFICHER UNIQUEMENT LES SERIES  */}
     <div style={{display:"flex",flexWrap:"wrap"}}>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>
    </div>
  )
}
