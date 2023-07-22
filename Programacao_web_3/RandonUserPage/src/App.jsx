import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from './App.style'
import './App.css'

function App() {

  const txt = 'Hello World'
  const [person, setPerson] = useState({
    name: {first: ''}
  })

  const handleGet = async () => {
    const data = await axios.get('https://randomuser.me/api/?nat=BR')
    setPerson(data.data.results[0])
    console.log(person)
  }

  return (
    <Box>
      <p>Hello World</p>

      <button onClick={() => {handleGet()}}>Randon User</button>
      <h1>Nome: {person.name.first} {person.name.last}</h1>

    </Box>
  )
}

export { App }
