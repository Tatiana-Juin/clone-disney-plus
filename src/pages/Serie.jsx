import './pages.css'

import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
export default function Serie() {
  return (
    <div className='div-principale'>
      
      {/* POR AFFICHER UNIQUEMENT LES SERIES  */}
     <div className='div-card-serie-film'>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>
    </div>
  )
}
