import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './app/modules/login/login'
import Header from './app/modules/header/header'
import InicioSesion from './app/modules/registro/inicioSesion'
import Home from './app/modules/home/home'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<InicioSesion />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
