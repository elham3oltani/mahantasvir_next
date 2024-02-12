'use client'
import React from 'react';
import CartContextProvider from '../components/context/CartContextProvider';
import ShopCart from './ShopCart';
const page = () => {
  return (
    <>
    <CartContextProvider>
  
      <ShopCart />
      
      </CartContextProvider>
    </>
 
  );
};

export default page;