import disneyPlusData from "../data/disneyPlusData";
import CategoryList from "../components/CategoryList"

export default function Disney() {
  return (
    <div>
       <CategoryList data={disneyPlusData} cat="disney" />
    </div>
  )
}
