import React, { useState, useEffect } from "react"
import pattern from '../images/patterns.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

const PatternCard = () => {
    const [patternData, setPatternData] = useState(0)
    useEffect(() => {
      fetch(`http://localhost:4000/1/pattern/6`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setPatternData(resultData.patterns)
        }) 
      }, [])
    return (
      <main>
        <img class = { placeholderIMG } src={ pattern } alt="some patterns" />
        <p> Marque : { patternData.brand }</p>
        <p> Nom : { patternData.name }</p>
        <p> Type : { patternData.type }</p>
        <p> Pour : { patternData.target }</p>
      </main>
    )
  }
  
  // Step 3: Export your component
  export default PatternCard
  