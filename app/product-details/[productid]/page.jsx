'use client'
import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApis from '@/app/_util/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner'
import { ProductInfo } from '../_components/ProductInfo'
import ProductList from '@/app/_components/ProductList'


function ProductDetails({params}) {
  const [ProductDetails , setProductDetails] = useState({})
  const [productList , setProductList] = useState([])
  useEffect( () => {
    getProductById_()
  },[params?.productid])
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productid).then( res => {
      setProductDetails(res.data.data)
      getProductByCategory_(res.data.data)
    })
  }
  const getProductByCategory_ = (product) => {
    ProductApis.getProductByCategory(product?.attributes?.category).then( res =>{
      setProductList(res?.data?.data)
      console.log(res?.data?.data);
    }
    )
  }
  console.log(productList);
  return (
    <div className=' container-lg px-10 md:px-32 py-12'>
      <BreadCrumb />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 justify-around mt-10 '>
        <ProductBanner product={ProductDetails} />
        <ProductInfo product={ProductDetails} />
      </div>
      <div className='mt-24'>
        <h2 className='mb-4 text-xl'>Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  )
}

export default ProductDetails