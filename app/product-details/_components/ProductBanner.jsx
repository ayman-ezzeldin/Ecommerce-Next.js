import Image from "next/image"
const ProductBanner = ({product}) => {
  return (
    <div>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={233}
        alt="banner-card"
        className="rounded-lg object-cover w-full xl:w-[85%] " />
    </div>
  )
}

export default ProductBanner