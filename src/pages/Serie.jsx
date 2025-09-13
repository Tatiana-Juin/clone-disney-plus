import './pages.css'

import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
export default function Serie() {
  return (
    <div className='serie'>
      
      {/* POR AFFICHER UNIQUEMENT LES SERIES  */}
     <div className='card-serie-movie'>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>
    </div>
  )
}
