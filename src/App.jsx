import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Vendors from './Vendors.jsx'
import About from './About.jsx'

function App() {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#0A3D62] px-6 py-4">
        <h1 className="text-white text-xl font-bold">BridgeGlobale</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/vendors" className="text-white">Vendors</Link>
          <Link to="/about" className="text-white">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App