import disneyPlusData from "../data/disneyPlusData";
import CategoryList from "../components/CategoryList"
import './pages.css'

export default function Disney() {
  return (
    <div className="div-disney">
      
          <CategoryList data={disneyPlusData} cat="disney" />
      </div>
       
    
  )
}
