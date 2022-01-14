// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Premier test</h1>
      <Link to='/tissus'>Tissus</Link>
      <Link to='/fils'>Fils</Link>
      <Link to='/patrons'>Patrons</Link>
    </main>
      
  )
}

// Step 3: Export your component
export default IndexPage