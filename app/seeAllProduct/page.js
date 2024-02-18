
import Product from "../components/modules/Product";

const BestSeleProduct = async () => {
 const data = await getData();
 const productNew = data["productNew"];

 return <Product data={productNew} />;
};


async function getData() {
 const res = await fetch("https://backend.mahantasvir.ir");
 return res.json();
}
export default BestSeleProduct;