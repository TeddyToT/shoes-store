import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Search from './pages/Search/Search';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route path="/cua-hang/" element={<Store />} /> */}
    <Route path="/" element={<ItemDetails />} />
    <Route path="/san-pham" element={<Search />} />
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
