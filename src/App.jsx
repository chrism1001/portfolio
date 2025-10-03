import React from 'react'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>
      <section id="home">
        <Intro />
      </section>
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
