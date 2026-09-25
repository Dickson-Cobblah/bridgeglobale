import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Vendors from './Vendors.jsx'
import About from './About.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "bg-gray-900 min-h-screen" : "bg-white min-h-screen"}>
      <nav className="flex justify-between items-center bg-[#0A3D62] px-6 py-4">
        <h1 className="text-white text-xl font-bold">
          <span className="text-2xl">B</span>ridge<span className="text-2xl">G</span>lobale
        </h1>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/vendors" className="text-white">Vendors</Link>
          <Link to="/about" className="text-white">About</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      <div className={darkMode ? "text-white" : "text-black"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App