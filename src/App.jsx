import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutUs from './pages/AboutUs'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
    <div>
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App