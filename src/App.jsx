import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './pages/Auth/AuthLayout'
import { MainLayout } from './pages/Main/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />}/>
      <Route path="/" element={<MainLayout />}/>
    </Routes>
  )
}

export default App
