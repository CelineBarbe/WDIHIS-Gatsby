// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const Patrons = () => {
  return (
    <main>
      <title>Patrons</title>
      <h1>Ici se trouvera la page avec tous les patrons</h1>
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Patrons