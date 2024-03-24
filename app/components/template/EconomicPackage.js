import React from 'react';

const EconomicPackage = () => {
   const data = await getData();
    const productNew = data["package"];
    return <Cart data={productNew} />;
};
async function getData() {
    const res = await fetch(`${process.env.BASE_URL}`);
    return res.json();
  }
export default EconomicPackage;