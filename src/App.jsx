import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './pages/Auth/AuthLayout'
import { MainLayout } from './pages/Main/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}/>
      <Route path="/auth/*" element={<AuthLayout />}/>
    </Routes>
  )
}

export default App
