import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './app/modules/login/login'
import Header from './app/modules/header/header'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
