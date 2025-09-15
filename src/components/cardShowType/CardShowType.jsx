import './cardShowType.css'
import{Link} from 'react-router-dom'
export default function CardShowType({data,type}) {
  return (
    <>

        {Object.entries(data).map(([categorie,contenus]) => contenus 
        .filter((item) => item.type ===type)
        .map((disney) =>(
            <Link key={disney.id} to ={`/details/${disney.id}`}> 
              <div  className='serie-movie-information' >
                  <h4 > {disney.nom} </h4>
                  <p > {disney.annee} </p>
              </div>
            </Link>
        ))
    )}

    </>
  )
}
