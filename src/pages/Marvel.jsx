import './pages.css'
import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function Marvel() {
  return (
    <div>

        <CategoryList data={disneyPlusData} cat="marvel" />

    </div>
  )
}
