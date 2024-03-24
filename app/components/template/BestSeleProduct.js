
import Cart from "../modules/Cart";

 const BestSeleProduct = async () => {
  const data = await getData();
  const productNew = data["productNew"];

  return <Cart data={productNew} />;
};


 async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`);
  return res.json();
}
export default BestSeleProduct;