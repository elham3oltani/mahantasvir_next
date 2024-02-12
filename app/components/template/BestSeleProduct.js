import BestSelling from "../modules/BestSelling";

const BestSeleProduct = async () => {
  const data = await getData();

  const productNew = data["proposal"];
  console.log(productNew);
  return <BestSelling data={productNew} />;
};

export default BestSeleProduct;

export async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir");

  return res.json();
}