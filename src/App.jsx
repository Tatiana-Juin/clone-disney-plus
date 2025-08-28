import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <div style={{display:"flex" }}>
          <Card title="disney" />
          <Card title="Pixar"/>
          <Card title="Marvel"/>
          <Card title="Star Wars"/>
      </div>
      
    </>
  )
}

export default App
