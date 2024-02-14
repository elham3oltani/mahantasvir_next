
import BestPro from "./BestPro"

const BestSeleProduct = async () => {
 const data = await getData();
 const productNew = data["proposal"];
 console.log(productNew);
 return <BestPro data={productNew} />;
};


async function getData() {
 const res = await fetch("https://backend.mahantasvir.ir");
 return res.json();
}
export default BestSeleProduct;