import './App.css';
import Header from './components/header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './components/products/all/All';
import Electronics from './components/products/electronics/Electronics';
import Jewellry from './components/products/jewellry/Jewellry';
import Mens from './components/products/menClothing/MensClothing';
import WoMens from './components/products/womenClothing/WomenClothing';
import Cart from './components/cart/Cart';
import Favorites from './components/favorites/Favorites';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import { useState } from "react";
// import {fontawsome} from "./fontawesome-free-6.2.0-web";



function App() {

  const [cart, setCart] = useState([]);

  function addToCart(para) {

    if (cart.includes(para)) {
      cart.splice(cart.indexOf(para), 1)
    } else {
      cart.push(para)
    }
    setCart([...cart])
    console.log(cart)

  }

  const [Favorate, setFavorites] = useState([]);

  function addToFavorites(params) {

    if (Favorate.includes(params)) {
      Favorate.splice(Favorate.indexOf(params), 1)
    } else {
      Favorate.push(params)
    }

    setFavorites([...Favorate])
    console.log(Favorate)
    // setHeart(heart)
  }

  function Rating(rate) {
    return (rate / 5) * 100;

  }


  return (

    <>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path='/' element={<All Rating={Rating} Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart} />} ></Route>
        <Route path='/electronics' element={<Electronics Rating={Rating} Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart} />} ></Route>
        <Route path='/jewellry' element={<Jewellry Rating={Rating} Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart} />} ></Route>
        <Route path='/Menclothing' element={<Mens Rating={Rating} Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart} />} ></Route>
        <Route path='/Womenclothing' element={<WoMens Rating={Rating} Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart} />} ></Route>

        <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} />} ></Route>
        <Route path='/favorites' element={<Favorites Rating={Rating} Favorite={Favorate} cart={cart} addToFavorites={addToFavorites} addToCart={addToCart} />} ></Route>
        <Route path='/favorites' element={<Favorites Rating={Rating} Favorite={Favorate} cart={cart} addToFavorites={addToFavorites} addToCart={addToCart} />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
      </Routes>
    </>
  );
}

export default App;
