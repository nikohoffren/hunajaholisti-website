import Navbar from "./Navbar"
import Home from "./pages/Home"
import Tarinamme from "./pages/Tarinamme"
import Tuotteemme from "./pages/Tuotteemme"
import { Route, Routes } from "react-router-dom"
import Footer from "./pages/Footer"
import './index.css'


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarinamme" element={<Tarinamme />} />
          <Route path="/tuotteemme" element={<Tuotteemme />} />
          {/* <Route path="/verkkokauppa" element={<Verkkokauppa />} /> */}
        </Routes>
      <Footer />
    </>
  )
}

export default App
