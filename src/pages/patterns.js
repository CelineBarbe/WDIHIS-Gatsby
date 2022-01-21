// Step 1: Import React
import * as React from 'react';
import PatternCard from '../components/patternCard'
import { Link } from 'gatsby'

// Step 2: Define your component
const Patterns = () => {
  return (
    <main>
      <PatternCard />
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Patterns