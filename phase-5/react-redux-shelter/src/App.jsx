// import { useState } from 'react'
import Budget from './components/Budget'
import PetContainer from './components/PetContainer'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Animal Shelter</h1>
        <Budget />
        <PetContainer />
      </header>
    </div>
  )
}

export default App
