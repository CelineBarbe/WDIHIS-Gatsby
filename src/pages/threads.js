// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import threads from '../images/threads.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Threads = () => {
  return (
    <main>
      <title>Fils</title>
      <h1>Ici se trouvera la page avec tous les fils</h1>
      <img className = { placeholderIMG } src={threads} alt="some threads" />
      <p></p>
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Threads