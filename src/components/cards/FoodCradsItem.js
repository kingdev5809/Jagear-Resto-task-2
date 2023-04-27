import React from "react";

function FoodCradsItem({ data }) {
  return (
    <div>
      <div className="card max-w-xs p-3 m-auto  rounded-xl text-center items-center mt-16 cursor-pointer  relative bg-black-200 ">
        <div className="w-[55%] ml-auto mr-auto right-0 left-0   absolute top-[-50px]">
          <img className="rounded-full " src={data.strMealThumb} alt="" />
        </div>
        <div className="pt-[140px] w-[55%] m-auto  text-[14px]  ">
          <h2 className="text-gray-200 font-[500]">{data.strMeal}</h2>
          <h3 className="text-gray-300 py-3 ">$2.29</h3>
          <p className="text-gray-400  ">20 bowls avilable</p>
        </div>
      </div>
    </div>
  );
}

export default FoodCradsItem;
