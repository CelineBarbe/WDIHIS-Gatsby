// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import patterns from '../images/patterns.jpeg'
import { picture } from '../components/layout.module.css'

// Step 2: Define your component
const Patterns = () => {
  return (
    <main>
      <title>Patrons</title>
      <h1>Ici se trouvera la page avec tous les patrons</h1>
      <Link to="/">Retour menu</Link>
      <img className={ picture } src={patterns} alt="a picture of some patterns" />
    </main>
  )
}

// Step 3: Export your component
export default Patterns