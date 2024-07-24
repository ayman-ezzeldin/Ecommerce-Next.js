import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function ProductsItem({ product }) {
  return (
    <Link href={`/product-details/${product?.id}`} className="p-1 hover:shadow-md rounded-lg hover:translate-y-[2px] cursor-pointer">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          width={400}
          height={350}
          alt="banner-card"
          className=" rounded-t-lg h-[170px] object-cover"
        />
      <div className=" flex items-center justify-between p-3 bg-gray-50 rounded-b-lg">
        <div className="">
          <h2 className="text-[14px] font-medium line-clamp-1">{product?.attributes?.title}</h2>
          <h2 className="text-[12px] text-gray-500 flex gap-1 items-center "> <List /> {product?.attributes?.category}</h2>
        </div>
        <h2 className="ml-1">${product?.attributes?.price}</h2>
      </div>
    </Link>
  );
}

export default ProductsItem;
