import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { CreateProductPage } from './pages/CreateProductPage'
import { MainPage } from './pages/MainPage'
import { CategoryPage } from './pages/CategoryPage'
import { StockPage } from './pages/StockPage'
import { AllProductsPage } from './pages/AllProductsPage'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainPage/> } />
        <Route path="/stocks/:stockid" element={<StockPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/create-product" element={<CreateProductPage /> } />
        <Route path="/stocks/:stockid/:type" element={<AllProductsPage />}/>
      </Routes>
    </div>
  )
}
