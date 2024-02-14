
import BestSelling from "../modules/BestSelling";

 const BestSeleProduct = async () => {
  const data = await getData();
  const productNew = data["productNew"];

  return <BestSelling data={productNew} />;
};


 async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir");
  return res.json();
}
export default BestSeleProduct;