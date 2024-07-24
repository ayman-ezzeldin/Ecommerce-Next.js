import Image from "next/image"
const ProductBanner = ({product}) => {
  return (
    <div>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner-card"
        className=" rounded-lg object-cover" />
    </div>
  )
}

export default ProductBanner