import './pages.css'
import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function Marvel() {
  return (
    <div className='card-marvel'>

        <CategoryList data={disneyPlusData} cat="marvel" />

    </div>
  )
}
