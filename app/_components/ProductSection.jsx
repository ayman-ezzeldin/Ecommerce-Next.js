'use client'
import { useEffect, useState } from "react"
import ProductList from "./ProductList"
import ProductApis from "../_util/ProductApis"

function ProductSection() {
  const [productList , setProductList] = useState([])
  useEffect( () => {
    getLatestProducts_()
  },[])

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then( res => setProductList(res.data.data) )
  }
  console.log(productList);

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-4 text-xl">Our Products</h2>
      <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection