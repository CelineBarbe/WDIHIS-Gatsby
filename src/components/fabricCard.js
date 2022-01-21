import React, { useState, useEffect } from "react"
import patterns from '../images/fabrics.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

const FabricCard = () => {
    const [fabricData, setFabricData] = useState(0)
    useEffect(() => {
      fetch(`http://localhost:4000/1/fabric/3`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setFabricData(resultData.fabrics)
        }) 
      }, [])
    return (
      <main>
        <img class = { placeholderIMG } src={ patterns } alt="some fabrics" />
        <p> Largeur : { fabricData.width }cm</p>
        <p> Longueur : { fabricData.length }cm</p>
        <p> Type : { fabricData.type }</p>
        <p> Précautions : { fabricData.notice }</p>
        <p> Couleur : { fabricData.color }</p>
      </main>
    )
  }
  
  // Step 3: Export your component
  export default FabricCard
  