import './App.css'
import Navbar from "./Components/nav"
import Footer from "./Components/footer"
import Home from "./Pages/Homepage"

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <h1 className='text-8xl font-bold'>Index</h1>
    <Footer />
    </>
  )
}

export default App
