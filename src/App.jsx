import { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
