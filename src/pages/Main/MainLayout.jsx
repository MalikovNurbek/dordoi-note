import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { MainPage } from './pages/MainPage'
import { StockPage } from './pages/StockPage'
import { AllProductsPage } from './pages/AllProductsPage'
import UserPage from './pages/UserPage'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainPage/> } />
        <Route path="/stocks/:stockid" element={<StockPage />} />
        <Route path="/stocks/:stockid/:type" element={<AllProductsPage />}/>
        <Route path="/user-profile" element={<UserPage />} />
      </Routes>
    </div>
  )
}
