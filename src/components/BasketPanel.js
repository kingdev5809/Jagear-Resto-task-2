import React, { useState } from "react";
import {
  faBarsStaggered,
  faCartShopping,
  faClose,
  faShopSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasketCardItem from "./cards/BasketCardItem";
import { useSelector } from "react-redux";

function BasketPanel({setShowPayment}) {
  const [showBasket, setShowBasket] = useState(false);

  const getBasketItem = useSelector((state) => state.meals.basket);
  const getTotalPrice = useSelector((state) => state.meals.totalPrice);
  return (
    <>
      <div
        className={`  w-full h-full fixed bg-[#171a2493] z-20 ${
          showBasket ? "block" : "hidden"
        }`}
        onClick={() => setShowBasket(false)}
      ></div>
      <div className="sidebar min-h-[100%] ">
        <button
          type="button"
          className="absolute z-30 top-0 right-2 inline-flex items-center p-2 mt-2 ml-3 text-[16px] text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  hover:bg-pink "
          onClick={() => setShowBasket((current) => !current)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="sr-only">Open sidebar</span>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          className={`fixed h-screen top-0 right-0 z-40 w-96 overflow-y-scroll min-h-[100vh] transition-transform    ${
            showBasket ? "translate-x-0" : "lg:translate-x-0 translate-x-full"
          } `}
          aria-label="Sidebar"
        >
          <div className="relative bg-black-200 min-h-[100vh] px-4 rounded-lg overflow-y-auto py-4 text-white">
            <div className="basketHeader ">
              <div className="flex justify-between">
                <h1 className="text-[20px]">Orders #34586</h1>
                <span
                  className=" block cursor-pointer lg:hidden  "
                  onClick={() => setShowBasket(false)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </span>
              </div>
              <div className="btn-group mt-4">
                <button className="active:bg-pink hover:bg-pink hover:text-white bg-pink p-1 px-3 rounded-lg  mr-2 ">
                  Dine In
                </button>
                <button className="active:bg-pink hover:bg-pink hover:text-white active:text-white bg-transparent border-2 border-solid border-gray-600 p-1 px-3 rounded-lg text-pink  mr-2">
                  To Go
                </button>
                <button className="active:bg-pink hover:bg-pink hover:text-white active:text-white bg-transparent border-2 border-solid border-gray-600 p-1 px-3 rounded-lg text-pink  mr-2">
                  Delivery
                </button>
              </div>
              <div className="basketTitle mt-5 flex justify-between border-b-[1px] border-solid border-gray-600 pb-3">
                <h3>Item</h3>
                <div className="div flex ">
                  <h3 className="mr-7">Qty</h3>
                  <h3>Price</h3>
                </div>
              </div>
            </div>
            <div className="basketCards  h-[100%] mb-[200px]">
              {getBasketItem.map((item) => (
                <BasketCardItem item={item} key={item.idMeal} />
              ))}
            </div>
            <div className="total absolute bottom-0 bg-black-200 z-50 border-t-2 border-solid border-gray-700 px-3 pt-3">
              <div className="flex justify-between w-full pt-2">
                <h2 className="text[14px] text-gray-500">Discount</h2>
                <h1>$0</h1>
              </div>
              <div className="flex  justify-between w-full pt-3 ">
                <h2 className="text[14px] text-gray-500">Sub Total</h2>
                <h1>${getTotalPrice}</h1>
              </div>
              <button
                onClick={() => setShowPayment(true)}
                className="w-full bg-pink p-2 px-[94px] rounded-lg mt-10 mb-4"
              >
                Continue To Payment
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default BasketPanel;
