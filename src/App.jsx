import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Skills from './components/Skills'
import Contacts from "./components/Contacts.jsx";

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <Skills />
    <Contacts />
    </>
  )
}

export default App
