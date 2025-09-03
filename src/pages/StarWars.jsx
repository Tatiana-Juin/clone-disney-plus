import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"
export default function StarWars() {
  return (
    <div>
      <CategoryList data={disneyPlusData} cat="starWars" />
    </div>
  )
}
