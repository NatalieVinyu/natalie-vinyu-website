import './App.css'
import Navbar from "./Components/nav"
import Footer from "./Components/footer"
import Home from "./Pages/Homepage"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
