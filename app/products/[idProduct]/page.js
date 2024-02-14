import ProductDet from "@/app/productdet/page";

export default async function Detail({ params: { idProduct } }) {
  const data = await getDataProduct(idProduct);
  return <ProductDet data={JSON.stringify(data)} />;
}

export async function getDataProduct(idProduct) {
  const res = await fetch(`https://backend.mahantasvir.ir/single/${idProduct}`);
  return res.json();
}
