import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componenets
import Home from './pages/Home.jsx';
import Library from './pages/Library.jsx';
import Navbar from './Navbar.jsx';


export const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/library' element={<Library/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  )
}
