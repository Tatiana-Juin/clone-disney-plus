import disneyPlusData from "../data/disneyPlusData"
import CategoryList from "../components/CategoryList"

export default function NationalGeographic() {
  return (
    <div>
      <CategoryList data={disneyPlusData} cat="nationalGeographic" />
    </div>
  )
}
