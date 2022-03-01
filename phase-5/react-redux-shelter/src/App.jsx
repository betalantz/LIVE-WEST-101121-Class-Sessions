// import { useState } from 'react'
import Budget from './components/Budget'
import PetContainer from './components/PetContainer'
import DogBrowser from './components/DogBrowser';
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Animal Shelter</h1>
        <Budget />
        <PetContainer />
        <DogBrowser />
      </header>
    </div>
  )
}

export default App
