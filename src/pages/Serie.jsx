import './pages.css'

import disneyPlusData from "../data/disneyPlusData"
import CardShowType from "../components/cardShowType/CardShowType"
import CategorySerieMovie from '../components/categorySerieMovie/CategorySerieMovie'
export default function Serie() {
  return (
    <div className='serie'>

      {/* IMPORT DU COMPOSANT POUR RECUPERER LES CATEGORIE DES SERIE   */}
      <CategorySerieMovie data={disneyPlusData} type="serie" />
      
      {/* POR AFFICHER UNIQUEMENT LES SERIES  */}
     <div className='card-serie-movie'>
         
          <CardShowType data={disneyPlusData} type="serie" />


        </div>
    </div>
  )
}
