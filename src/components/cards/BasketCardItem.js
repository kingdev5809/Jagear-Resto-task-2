import React from "react";
import { foodCard1 } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function BasketCardItem() {
  return (
    <div className=" card flex items-center ">
      <div className=" w-[85%] mt-5 mx-1">
        <div className="flex justify-between my-2">
          <div className="flex ">
            <img
              className="w-8 m-auto mx-0 mr-2 rounded-full"
              src={foodCard1}
              alt=""
            />
            <span className="">
              <h1 className="text-[14px]">Spicy Seasoned Sea...</h1>
              <h3 className="text-[12px] text-gray-400">$2.29</h3>
            </span>
          </div>
          <p className="p-2 px-4 rounded-lg m-auto  mx-0 bg-black-100">2</p>
        </div>
        <input
          type="text"
          className="bg-black-100 p-3 w-full  rounded-lg  outline-none"
          placeholder="Other Note..."
        />
      </div>
      <div className="pl-2">
        <div className="price mt-6 text-[14px]">$ 4.58</div>
        <div className="mt-8" >
          <i className="text-pink cursor-pointer border-pink rounded-lg border-solid border-2 p-2 px-3 mt-5">
            <FontAwesomeIcon icon={faTrash} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default BasketCardItem;
