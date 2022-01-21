import React, { useState, useEffect } from "react"
import thread from '../images/threads.jpeg'
import { placeholderIMG } from '../components/layout.module.css'

const ThreadCard = () => {
    const [threadData, setThreadData] = useState(0)
    useEffect(() => {
      fetch(`http://localhost:4000/1/thread/2`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setThreadData(resultData.threads)
        }) 
      }, [])
    return (
      <main>
        <img class = { placeholderIMG } src={ thread } alt="some threads" />
        <p> Marque : { threadData.brand }</p>
        <p> Type : { threadData.type }</p>
        <p> Couleur : { threadData.color }</p>
        <p> Référence : { threadData.reference }</p>
        <p> Nombre en stock : { threadData.stock }</p>
      </main>
    )
  }
  
  // Step 3: Export your component
  export default ThreadCard
  