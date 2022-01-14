// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import threads from '../images/threads.jpeg'
import { picture } from '../components/layout.module.css'

// Step 2: Define your component
const Threads = () => {
  return (
    <main>
      <title>Fils</title>
      <h1>Ici se trouvera la page avec tous les fils</h1>
      <Link to="/">Retour menu</Link>
      <img className={ picture } src={threads} alt="a picture of some threads" />;
    </main>
  )
}

// Step 3: Export your component
export default Threads