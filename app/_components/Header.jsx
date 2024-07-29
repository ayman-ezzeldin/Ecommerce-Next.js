"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import CartApis from "../_util/CartApis";
import { CartContext } from "../_context/CartContext";
import Cart from "./Cart";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart ,setCart } = useContext(CartContext);
  useEffect(() => {
    setIsLoggedIn(
      window.location.href.toString().includes("sign-in") ||
        window.location.href.toString().includes("sign-up")
    );
  }, []);
  const { user } = useUser();
  useEffect(() => {
    user && getCartItems_();
  }, [user]);
  const getCartItems_ = () => {
    CartApis.getUserCartItems(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
      res?.data?.data.forEach(citem => {
        setCart(oldCart => [
          ...oldCart,
          {
            id : citem?.id,
            product : citem?.attributes?.products?.data[0]
          }
        ])
      })
    })
      
  };

  return (
    !isLoggedIn && (
      <>
        <header className="bg-white ">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md ">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={28}
                height={28}
                className="h-20 w-20"
              />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Explore{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2b24adee]"
                      href="/sign-in"
                    >
                      Login
                    </a>

                    <a
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-[#2b24ad] sm:block"
                      href="/sign-up"
                    >
                      Register
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <h2 onClick={() => setShowCart(!showCart)} className="flex items-center gap-1 cursor-pointer">
                      {" "}
                      <ShoppingCart />({cart?.length}){" "}
                    </h2>
                    <UserButton />
                    { showCart && <Cart />}
                  </div>
                )}

                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-[#2b24ad]/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  );
}

export default Header;

{
  /* <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div class="flex bg-red-600 flex-wrap justify-between items-center mx-auto max-w-screen-xl shadow-md px-1  ">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={28}
              height={28}
              className="h-12 w-20"
            />
          </Link>
            <div class="flex items-center gap-4 md:gap-0 lg:gap-4 md:order-2">
            <a
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2b24adee]"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-[#2b24ad] sm:block"
                  href="#"
                >
                  Register
                </a>
              <button
                onClick={()=> setClick(!click)}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex   bg-gray-100 p-2 text-gray-500 transition hover:text-[#2b24ad] md:hidden items-center  ml-1 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class={`${click ? 'block text-center bg-gray-300 mt-4 rounded-md z-50 ' : 'hidden'} justify-around items-center w-full md:flex md:w-auto md:order-1`}
              id="mobile-menu-2"
            >
              <ul class="flex flex-col gap-2 mt-4 font-medium md:flex-row md:space-x-18 md:mt-0">
                <li>
                  <a
                    href="#"
                    class={`block py-2   rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class={`block py-2 ${click && 'mx-2'}   rounded-md text-gray-600 hover:text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0`}
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class={`block py-2  ${click && 'mx-2'} rounded-md text-gray-600 hover:text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class={`block py-2  ${click && 'mx-2'} rounded-md text-gray-600 hover:text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0`}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class={`block py-2  ${click && 'mx-2'} rounded-md text-gray-600 hover:text-gray-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0`}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
</header> */
}
