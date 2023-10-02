'use client'
import AttributesProduct from "./components/AttributesProduct"
import Banner from "./components/Banner"
export default function Home() {
  return (
<div className="xl:mx-[80px] lg:mx-[40px] md:mx-[20px] sm:mx-[30px]">
<Banner />
<AttributesProduct />
</div>
  )
}
