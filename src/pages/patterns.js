// Step 1: Import React
import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import patterns from '../images/patterns.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Patterns = () => {
  const [patternData, setPatternData] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`http://localhost:4000/1/pattern/6`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setPatternData(resultData.patterns)
      }) 
    }, [])
  return (
    <main>
      <title>Patrons</title>
      <h1>Ici se trouvera la page avec tous les patrons</h1>
      <img className = { placeholderIMG } src={patterns} alt="some patterns" />
      <p></p>
      <Link to="/">Retour menu</Link>
      <p>Le patron n°6 s'appelle : { patternData.name }</p>
    </main>
  )
}

// Step 3: Export your component
export default Patterns