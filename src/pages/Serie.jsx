import './pages.css'

import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import CategorySerieMovie from '../components/categorySerieMovie/CategorySerieMovie'
export default function Serie() {
  return (
    <div className='serie'>

      
      
      
      {/* IMPORT DU COMPOSANT POUR RECUPERER LES CATEGORIE DES SERIE   */}
     {/* <div className='card-serie-movie'> */}
         
          <CategorySerieMovie data={disneyPlusData} type="serie" />


        {/* </div> */}
    </div>
  )
}
