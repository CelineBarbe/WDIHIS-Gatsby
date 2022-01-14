// Step 1: Import React
import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import threads from '../images/threads.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

// Step 2: Define your component
const Threads = () => {
  const [threadData, setThreadData] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`http://localhost:4000/1/thread/2`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setThreadData(resultData.threads)
      }) 
    }, [])
  return (
    <main>
      <title>Fils</title>
      <h1>Ici se trouvera la page avec tous les fils</h1>
      <img className = { placeholderIMG } src={threads} alt="some threads" />
      <p></p>
      <Link to="/">Retour menu</Link>
      <p>Le fil n°2 est de la marque : { threadData.brand }</p>
    </main>
  )
}

// Step 3: Export your component
export default Threads