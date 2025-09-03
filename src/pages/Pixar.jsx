import disneyPlusData from "../data/disneyPlusData";
import CategoryList from "../components/CategoryList"

export default function Pixar() {
  return (
    <div>

      <CategoryList data={disneyPlusData} cat="pixar" />

    </div>
  )
}
