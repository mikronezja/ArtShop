import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/components/Navbar'
import NotFound from './pages/NotFound'
import Background from './pages/components/Background'
import Footer from './pages/components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Background/>
      <Footer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
