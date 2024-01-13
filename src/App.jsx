import { useState } from 'react'
//"as" lets us change the name
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardIndex from './pages/CardIndex'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CardIndex/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
