import { useState } from 'react'
import Login from './pages/Login'
import Example from './pages/InlineVsBlock'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/example" element={<Example />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
