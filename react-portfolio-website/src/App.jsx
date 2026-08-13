import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Insights from './components/insights/Insights'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <main id="main">
        <Header />
        <Portfolio />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
