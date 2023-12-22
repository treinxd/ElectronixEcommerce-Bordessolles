import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/Navbar';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route exact path="/categorias/:categoria" element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;