import { NavLink } from "react-router-dom"
import "./navbar.css"
export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
              {/* lien pour l'accueil */}
                <NavLink className="nav-items" to='/'>Accueil</NavLink>
            </li>

            {/* lien pour aller sur la page films  */}
            <li>
                <NavLink  className="nav-items" to='/film'>Films</NavLink>
            </li>

            {/* lien pour aller sur la page serie */}
            <li>
                <NavLink  className="nav-items" to='/serie'>Series</NavLink>
            </li>
             {/* <li>
                <NavLink  className="nav-items" to='/marvel'>Marvel</NavLink>
            </li> */}

        </ul>
    </nav>
  )
}
