// Step 1: Import React
import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import fabrics from '../images/fabrics.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Fabrics = () => {
  const [fabricData, setFabricData] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`http://localhost:4000/1/fabric/2`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setFabricData(resultData.fabrics)
      }) 
    }, [])
  return (
    <main>
      <title>Tissus</title>
      <h1>Ici se trouvera la page avec tous les tissus</h1>
      <img className = { placeholderIMG }src={fabrics} alt="some fabrics" />
      <p></p>
      <Link to="/">Retour menu</Link>
      <p>La notice du tissu  n°2 : { fabricData.notice }</p>
    </main>
  )
}

// Step 3: Export your component
export default Fabrics
