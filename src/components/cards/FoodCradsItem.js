import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/mealSlice";

function FoodCradsItem({ data, idx }) {
  const { strMealThumb, strMeal, idMeal } = data;
  const price = Math.floor(Math.random() * (15 - 2 + 2)) + 2;
  const randomPrice2 = Math.floor(Math.random() * (35 - 5 + 5)) + 2;
  const dispatch = useDispatch();
  const quantity = 1;
  const HandleAddToBasket = () => {
    dispatch(
      addToBasket({ idx, idMeal, strMealThumb, strMeal, price, quantity })
    );
  };
  return (
    <div>
      <div
        onClick={HandleAddToBasket}
        className="card max-w-xs p-3 m-auto  rounded-xl text-center items-center mt-16 cursor-pointer  relative bg-black-200 "
      >
        <div className="w-[55%] ml-auto mr-auto right-0 left-0   absolute top-[-50px]">
          <img className="rounded-full " src={strMealThumb} alt="" />
        </div>
        <div className="pt-[140px] w-[55%] m-auto  text-[14px]  ">
          <h2 className="text-gray-200 font-[500]">{strMeal}</h2>
          <h3 className="text-gray-300 py-3 ">${price}</h3>
          <p className="text-gray-400  ">{randomPrice2} bowls avilable</p>
        </div>
      </div>
    </div>
  );
}

export default FoodCradsItem;
