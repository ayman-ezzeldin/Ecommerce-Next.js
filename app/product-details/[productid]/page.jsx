'use client'
import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApis from '@/app/_util/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner'
import { ProductInfo } from '../_components/ProductInfo'

function ProductDetails({params}) {
  const [ProductDetails , setProductDetails] = useState([])
  useEffect( () => {
    getProductById_()
  },[])
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productid).then( res => setProductDetails(res.data.data) )
  }
  return (
    <div className=' px-10 md:px-28 py-12'>
      <BreadCrumb />
      <div className='flex flex-col justify-around mt-10 md:flex-row'>
        <ProductBanner product={ProductDetails} />
        <ProductInfo product={ProductDetails} />
      </div>
    </div>
  )
}

export default ProductDetails