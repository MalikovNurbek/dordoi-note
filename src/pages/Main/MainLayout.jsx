import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CreateProductPage } from './pages/CreateProductPage'
import { MainPage } from './pages/MainPage'
import { StockPage } from './pages/StockPage'
import { AllProductsPage } from './pages/AllProductsPage'
import UserPage from './pages/UserPage'
import { Flex } from '@chakra-ui/react'

export const MainLayout = () => {
  return (
    <Flex
      flexDirection="column"
      w="full"
      px="2%"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/> } />
        <Route path="/stocks/:stockid" element={<StockPage />} />
        <Route path="/create-product" element={<CreateProductPage /> } />
        <Route path="/stocks/:stockid/:type" element={<AllProductsPage />}/>
        <Route path="/user-profile" element={<UserPage />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Flex>
  )
}
