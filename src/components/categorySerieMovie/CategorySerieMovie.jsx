
// COMPOSANT PERMETTANT DE RECUPERER LES CATEGORIE DE MANIERE UNIQUE 
export default function CategorySerieMovie({data,type}) {

    const uniqueCategory=[
        ...new Set(
            Object.values(data)
            .flat()
            .filter(item => item.type === type)
            .map(item => item.categorie)
        )
    ]

  return (
    <div>
            {uniqueCategory.map(cat => (
                <p style={{color:"white"}} key={cat}> {cat} </p>
            ))}


    </div>
  )
}
