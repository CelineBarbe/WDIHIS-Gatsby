// Step 1: Import React
import * as React from 'react';
import ThreadCard from '../components/threadCard'
import { Link } from 'gatsby'

// Step 2: Define your component
const Threads = () => {
  return (
    <main>
      <ThreadCard />
      <Link to="/">Retour menu</Link>
    </main>
  )
}

// Step 3: Export your component
export default Threads