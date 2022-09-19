import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'

export const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/> } />
    </Routes>
  )
}
