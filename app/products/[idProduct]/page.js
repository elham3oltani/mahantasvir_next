import ProductDet from "@/app/productdet/page";

export default async function Detail({ params: { idProduct } }) {
  const data = await getDataProduct(idProduct);
  console.log("data123",data)
  return (
<ProductDet {...data} />
  );
}

export async function getDataProduct(idProduct) {
  const res = await fetch(`https://backend.mahantasvir.ir/single/${idProduct}`);
  return res.json();
}
export async function generateStaticParams() {
  const res = await fetch("https://backend.mahantasvir.ir/single").then((res) =>
    res.json()
  );
  return res.map((productId) => ({
    id: productId.id.toString(),
  }));
}