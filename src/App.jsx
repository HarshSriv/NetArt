import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBody from './components/MainBody'
import MotorParts from './components/MotorParts'

function App() {

  return (
    <div>
     <Header/>
     <MainBody/>
     <MotorParts/>
     <Footer/>
    </div>
  )
}

export default App
