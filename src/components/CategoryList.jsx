import './card.css'

export default function CategoryList({data,cat}) {
  return (
    <div className='div-category'>
         {Object.entries(data).filter(([categorie]) => categorie===cat).map(([categorie,contenus]) =>(
                    contenus.map((item) =>(
                      
                        <div className='card-categorie' key={item.id}>
                            <p className='text-information'> {item.nom} </p>
                        </div>
                    ))
           
        ))}
    </div>
  )
}
