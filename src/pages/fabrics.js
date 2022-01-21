// Step 1: Import React
import * as React from 'react';
import FabricCard from '../components/fabricCard'
import { Link } from 'gatsby'

// Step 2: Define your component
const Fabrics = () => {
  return (
    <main>
      <FabricCard />
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Fabrics
