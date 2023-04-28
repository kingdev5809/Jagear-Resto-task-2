import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PaymentPanel({ showPayment, setShowPayment }) {
  return (
    <div>
      <>
        <div
          className={`  w-full h-full fixed bg-[#171a2493] z-20 ${
            showPayment ? "block" : "hidden"
          }`}
          onClick={() => setShowPayment(false)}
        ></div>
        <div className="sidebar min-h-[100%] ">
          <aside
            id="sidebar-multi-level-sidebar"
            className={`fixed h-screen top-0 right-0 z-40 w-96 overflow-y-scroll min-h-[100vh] transition-transform    ${
              showPayment
                ? "translate-x-0"
                : " translate-x-full"
            } `}
            aria-label="Sidebar"
          >
            <div className=" relative bg-black-200 min-h-[100vh] px-5 rounded-lg overflow-y-auto py-4 text-white">
              <div className="paymentTitle border-b-[1px] border-gray-600 pb-5">
                <h1 className="text-[28px] mt-7">Payment</h1>
                <p className="text-[14px] text-gray-400 ">
                  3 payment method avilable
                </p>
              </div>
              <div className="paymentMethod mt-6">
                <h1 className="text-[20px] mb-3">Payment Mehtod</h1>
                <div className="flex">
                  <div className="methods p-2 mx-1 text-center border-[1px] border-gray-400  bg-[#fff7f71f] w-[6rem] rounded-lg  ">
                    <i className="text-[20px]">
                      {" "}
                      <FontAwesomeIcon icon={faCreditCard} />
                    </i>
                    <p className="text-[14px]">Credit Card</p>
                  </div>

                  <div className="methods p-2 mx-1 text-center border-[1px] border-gray-700  w-[6rem] rounded-lg  ">
                    <i className="text-[20px]">
                      {" "}
                      <FontAwesomeIcon icon={faCreditCard} />
                    </i>
                    <p className="text-[14px]">Paypal</p>
                  </div>

                  <div className="methods p-2 mx-1 text-center border-[1px] border-gray-700   w-[6rem] rounded-lg  ">
                    <i className="text-[20px]">
                      {" "}
                      <FontAwesomeIcon icon={faCreditCard} />
                    </i>
                    <p className="text-[14px]">Cash</p>
                  </div>
                </div>
              </div>
              <div className="inputs mt-5">
                <div className="input-box mt-3">
                  <label htmlFor="name">CardHolder Name</label>
                  <input
                    type="text"
                    placeholder="Levi ackerman"
                    className="bg-black-100  p-3 w-full rounded-lg  mt-1"
                  />
                </div>

                <div className="input-box mt-3">
                  <label htmlFor="name">Card Number</label>
                  <input
                    type="text"
                    placeholder="2564 1421 04897 1244"
                    className="bg-black-100  p-3 w-full rounded-lg  mt-1"
                  />
                </div>
                <div className="flex border-b border-gray-500 pb-4 mt-2">
                  <div className="input-box mt-3 mx-1">
                    <label htmlFor="name">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="02/2022"
                      className="bg-black-100  p-3 w-full rounded-lg  mt-1"
                    />
                  </div>
                  <div className="input-box mt-3 mx-1 ">
                    <label htmlFor="name">CVV</label>
                    <input
                      type="password"
                      placeholder="*****"
                      className="bg-black-100  p-3 w-full rounded-lg  mt-1"
                    />
                  </div>
                </div>

                <div className="flex mt-2">
                  <div className="input-box mt-3 mx-1 ">
                    <label htmlFor="name">Order Type</label>
                    <select
                      id="large"
                      className="block w-[150px] mt-1  px-4 py-3 text-base text-white border border-gray-600 rounded-lg bg-black-200 focus:ring-pink focus:border-pink    "
                    >
                      <option value="US">Dine In</option>
                    </select>
                  </div>
                  <div className="input-box mt-3 mx-1 ">
                    <label htmlFor="name">Table no</label>
                    <input
                      type="password"
                      placeholder="*****"
                      className="bg-black-100  p-3 w-full rounded-lg  mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="submit flex mt-28">
                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full bg-transparent border border-pink text-pink p-3 mx-2 text-[14px] rounded-lg mt-10 mb-4"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full bg-pink p-3 text-[14px] rounded-lg mt-10 mb-4"
                >
                  Coniform To Payment
                </button>
              </div>
            </div>
          </aside>
        </div>
      </>
    </div>
  );
}

export default PaymentPanel;
