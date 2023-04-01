import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Work_experience from './components/work_experience/Work_experience'

const App = () => {
  return (
    <> 
      <Header />
      <Nav />
      <About />
      <Skills />
      <Work_experience/>
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App