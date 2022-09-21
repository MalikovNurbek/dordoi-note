import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { CreateProductPage } from './pages/CreateProductPage'
import { MainPage } from './pages/MainPage'
import { CategoryPage } from './pages/CategoryPage'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainPage/> } />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/create-product" element={<CreateProductPage /> } />
      </Routes>
    </div>
  )
}
