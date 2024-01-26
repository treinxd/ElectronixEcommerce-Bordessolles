import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/cart';
import Form from './components/form';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path="/categorias/:idCategoria" element={<ItemListContainer />} />
          <Route exact path='/carrito/compra' element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;