import './cardShowType.css'

export default function CardShowType({data,type}) {
  return (
    <>

        {Object.entries(data).map(([categorie,contenus]) => contenus 
        .filter((item) => item.type ===type)
        .map((disney) =>(
            <div key={disney.id} className='serie-movie-information' >
                <h4 > {disney.nom} </h4>
                <p > {disney.annee} </p>
            </div>
        ))
    )}

    </>
  )
}
