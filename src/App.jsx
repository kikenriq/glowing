import { useState } from 'react'
import './App.css'
import Hero from '../src/pages/Hero'
import Navbar from './components/Navbar'
import Products from '../src/pages/Products'
import Banner from './pages/Banner'
import Features from './pages/Features'
import Offer from './pages/Offer'
import Discover from './pages/Discover'
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Banner />
      <Features />
      <Offer />
      <Discover />
      <Footer />
    </>
  )
}

export default App
