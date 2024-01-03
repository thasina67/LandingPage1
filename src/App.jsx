import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Page1/>
      <Footer/>
    </div>
    
    </Router>
  )
}

export default App







