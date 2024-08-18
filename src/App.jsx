import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Products from './pages/Products/products'
import Profile from './pages/Profile/profile'
import Admin from './pages/Admin/admin'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App