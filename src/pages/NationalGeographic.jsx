import './pages.css'
import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function NationalGeographic() {
  return (
    <div className='card-national'>
      <CategoryList data={disneyPlusData} cat="nationalGeographic" />
    </div>
  )
}
