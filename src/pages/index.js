// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Premier test</h1>
      <Link to='/fabrics'>Tissus </Link>
      <p></p>
      <Link to='/threads'>Fils </Link>
      <p></p>
      <Link to='/patterns'>Patrons</Link>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage