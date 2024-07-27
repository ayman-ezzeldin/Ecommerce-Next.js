import Image from "next/image";
const ProductBanner = ({ product }) => {
  return (
      <div>
        { product?.attributes?.banner?.data?.attributes?.url ? <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          width={400}
          height={233}
          alt="banner-card"
          className="rounded-lg object-cover w-full xl:w-[85%]"
        />
        :
        <div 
          className="rounded-lg bg-slate-200 animate-pulse w-[323px] h-[258px]" /> }
      </div>
  );
};

export default ProductBanner;
