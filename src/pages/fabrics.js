// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import fabrics from '../images/fabrics.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Fabrics = () => {
  return (
    <main>
      <title>Tissus</title>
      <h1>Ici se trouvera la page avec tous les tissus</h1>
      <img className = { placeholderIMG }src={fabrics} alt="some fabrics" />
      <p></p>
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Fabrics
