

export default function CardShowType({data,type}) {
  return (
    <>

        {Object.entries(data).map(([categorie,contenus]) => contenus 
        .filter((item) => item.type ===type)
        .map((disney) =>(
            <div key={disney.id} style={{backgroundColor:"#2D2F36",width:"10vw",marginRight:"10px"}} >
                <h4 style={{color:"white"}}> {disney.nom} </h4>
                <p style={{color:"white"}}> {disney.annee} </p>
            </div>
        ))
    )}

    </>
  )
}
