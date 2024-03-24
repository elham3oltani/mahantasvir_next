
import React from 'react';
import Cart from '../modules/Cart';
const NewestProduct = async () => {
  const data = await getData();
  const productNew = data["proposal"];

  return <Cart data={productNew} />;
};


 async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`);
  return res.json();
}
export default NewestProduct;