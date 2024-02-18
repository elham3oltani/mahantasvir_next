import Camera from "../components/modules/Camera";
import Product from "../components/modules/Product";

const page = async () => {
  const data = await getData();
  return <Product data={data[0]} />;
};
async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir/product/cameraa");
  return res.json();
}

export default page;
