// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import patterns from '../images/patterns.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Patterns = () => {
  return (
    <main>
      <title>Patrons</title>
      <h1>Ici se trouvera la page avec tous les patrons</h1>
      <img className = { placeholderIMG } src={patterns} alt="some patterns" />
      <p></p>
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Patterns