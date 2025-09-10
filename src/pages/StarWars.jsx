import './pages.css'
import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"
export default function StarWars() {
  return (
    <div className='div-wars'>
      <CategoryList data={disneyPlusData} cat="starWars" />
    </div>
  )
}
