import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Build from './components/build/Build'
import Projects from './components/projects/Projects'
import Focus from './components/focus/Focus'
import Insights from './components/insights/Insights'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <main id="main">
        <Header />
        <About />
        <Portfolio />
        <Build />
        <Projects />
        <Focus />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
