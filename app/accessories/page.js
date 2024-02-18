import Product from "../components/modules/Product";



const page = async () => {
  const data = await getData();
  const product = data["janebi"];

  return <Product data={product} />;
};



async function getData() {
    const res = await fetch("https://backend.mahantasvir.ir");
    return res.json();
  }

  export default page;