import { useState } from "react"
import { Link } from "react-router-dom";
// COMPOSANT PERMETTANT DE RECUPERER LES CATEGORIE DE MANIERE UNIQUE 
export default function CategorySerieMovie({data,type}) {
    //USE STATE 
    const [selectedCategory,setSelectedCategory] = useState(null);
    // RECUPERER TOUTE LES CATEGORIE 
    const uniqueCategory=[
        ...new Set(
            Object.values(data)
            .flat()
            .filter(item => item.type === type)
            .map(item => item.categorie)
        )
    ]

    // RECUPERE TOUT LES FILM OU SERIE 
    const allMovieSerie = Object.values(data)
                     .flat()
                     .filter(item => item.type === type)
    
    // POUR FILTRER LES CATEGORES
    const filtered = selectedCategory ? allMovieSerie.filter(f => f.categorie ===selectedCategory) : allMovieSerie
     



  return (
    <div>
            <button onClick={() => setSelectedCategory(null)}>
                    Tout
            </button>



            {uniqueCategory.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} >
                    {cat}
                </button>
            ))}

            <h2 style={{color:"white"}}>
                {selectedCategory
                    ? `${type} de la categorie ${selectedCategory}`
                    : `Tout les ${type}`
                }
            </h2>

            <div>

                {filtered.map(filt =>(
                    <Link key={filt.id} to ={`/details/${filt.id}`}> 
                        <div  className='serie-movie-information' >
                            <h4 > {filt.nom} </h4>
                            <p > {filt.annee} </p>
                        </div>
                    </Link>
                ))}

            </div>

    </div>
  )
}
