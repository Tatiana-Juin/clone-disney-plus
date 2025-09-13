import './pages.css'
import disneyPlusData from "../data/disneyPlusData";
import CategoryList from "../components/CategoryList"

export default function Pixar() {
  return (
    <div className='card-pixar'>

      <CategoryList data={disneyPlusData} cat="pixar" />

    </div>
  )
}
