import './App.css'
import HomePage from './Componentes/HomePage.jsx'
import GamePage from './Componentes/GamePage.jsx'
import Navbar from './Componentes/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='app'>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/game" element={<GamePage />} /> 
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
