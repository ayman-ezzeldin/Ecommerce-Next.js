import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "@/app/_util/CartApis";
import { useContext } from "react";
import { CartContext } from "@/app/_context/CartContext";

export const ProductInfo = ({ product }) => {
  const {user} = useUser()
  const {setCart} = useContext(CartContext)
  const router = useRouter()
  const handelAddToCart = ()=> {
    if(!user) {
      router.push('/sign-in')
    }else {
      const data = {
        data : {
          username : user.fullName || 'no user',
          email : user.primaryEmailAddress?.emailAddress,
          products : [product?.id] ,
        }
      }
      CartApis.addToCart(data).then(res =>{
        console.log("cart is succes",res?.data?.data) 
        setCart(oldCart => [
          ...oldCart,
          {
            id : res?.data?.data.id ,
            product
          }
        ])
      }  )
    }
  }
  return (
    <>
      {product?.attributes?.title ? (
        <div className="xl:ml-[-30px]">
          <h2 className=" md:mb-2 lg:mt-4 text-[20px]">
            Title : {product?.attributes?.title}{" "}
          </h2>
          <h2 className=" md:mb-2  text-[15px] text-gray-400">
            Category : {product?.attributes?.category}{" "}
          </h2>
          <h2 className=" md:mb-2  text-[15px]">
            Description :{" "}
            {product?.attributes?.description[0]?.children[0]?.text}{" "}
          </h2>
          <h2 className="flex gap-1 items-center text-[12px] md:mb-2 text-gray-400 ">
            {" "}
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <AlertOctagon className=" text-red-500 h-5 w-5" />
            )}{" "}
            Eligible For Instant Delivery{" "}
          </h2>
          <h2 className=" md:mb-2  text-[24px] text-primary">
            Price : ${product?.attributes?.price}{" "}
          </h2>
          <button onClick={()=> handelAddToCart()} className=" flex gap-2 items-center bg-primary hover:bg-[#302b7dee] p-2 rounded-lg text-white ">
            {" "}
            <ShoppingCart /> Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </>
  );
};
