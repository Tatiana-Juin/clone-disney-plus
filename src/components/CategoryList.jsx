import './card.css'
import { Link } from 'react-router-dom'

export default function CategoryList({data,cat}) {
  return (
    <div className='category'>
         {Object.entries(data).filter(([categorie]) => categorie===cat)
         .map(([categorie,contenus]) =>(
                    contenus.map((item) =>(

                      <Link key={item.id} to={`/details/${item.id}`}> 
                        <div className='card-category' key={item.id}>
                            <p className='text-information'> {item.nom} </p>
                        </div>
                      </Link>

                    ))
            
        ))}
    </div>
  )
}
