// "use client"
// import React, { useState } from "react";
// import { createContext } from "react";
// export const ProductsContext = createContext();

// const ProductContextProvider = async (props) => {
//   const [products, setProducts] = useState([]);
//   const data = await getData();
//   console.log(data);
//   setProducts(data);
//   return (
//     <ProductsContext.Provider value={products}>
//       {props.children}
//     </ProductsContext.Provider>
//   );
// };
// export async function getData() {
//   const res = await fetch("https://backend.mahantasvir.ir");
//   return res.json();
// }

// export default ProductContextProvider;
