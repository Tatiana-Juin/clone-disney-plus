import './pages.css'
import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function Star() {
  return (
    <div className='div-star'>
      <CategoryList data={disneyPlusData} cat="star" />
    </div>
  )
}
