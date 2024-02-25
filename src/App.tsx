import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pokemon } from './components/pokemon'


function App() {
  return (
    <>
      <h2>ポケモン図鑑</h2>
      <Pokemon/>
    </>
  )
}

export default App
