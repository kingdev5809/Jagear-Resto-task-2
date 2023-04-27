import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

import FoodCradsItem from "../cards/FoodCradsItem";
import { getFilterCategory } from "../../api";
import { mealsFetched } from "../../redux/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import BasketPanel from "../BasketPanel";

function HomePage() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("Beef");

  useEffect(() => {
    getFilterCategory(category).then((data) =>
      dispatch(mealsFetched(data.meals))
    );
  }, [category]);

  const getMeals = useSelector((state) => state.meals.meals);

  return (
    <>
      <div className="HomePage w-full p-1 px-3  pt-3 sm:pt-5 lg:pr-[26rem]  sm:pl-[7.7rem] ">
        <section className="homePageMain">
          <div className="HomePageHeader flex  items-center justify-between p-0 pt-5 sm:p-3">
            <div>
              <h1 className="text-white text-[28px] font-sans ">
                Jagear Resto
              </h1>
              <h4 className="text-gray-400  text-[16px]">
                {moment().format("dddd ll")}
              </h4>
            </div>
            <div className="bg-[#2D303E] border-[#393C49]  inline text-white p-3 px-5 m-2 rounded-lg">
              <i className="pr-3 text-gray-200">
                <FontAwesomeIcon icon={faSearch} />
              </i>
              <input
                type="text"
                className="border-none outline-none bg-transparent text-gray-300 text-[14px] "
                placeholder="Search for food, coffe, etc.."
              />
            </div>
          </div>
          <div className="homePageNav relative">
            <ul className="flex justify-start">
              <li
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Beef" ? "active" : ""
                }`}
                onClick={() => setCategory("Beef")}
              >
                <a href="#/">Beef </a>
              </li>
              <li
                onClick={() => setCategory("Breakfast")}
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Breakfast" ? "active" : ""
                }`}
              >
                <a href="#/">Breakfast </a>
              </li>
              <li
                onClick={() => setCategory("Chicken")}
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Chicken" ? "active" : ""
                }`}
              >
                <a href="#/">Chicken </a>
              </li>
              <li
                onClick={() => setCategory("Dessert")}
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Dessert" ? "active" : ""
                }`}
              >
                <a href="#/">Dessert </a>
              </li>
              <li
                onClick={() => setCategory("Vegetarian")}
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Vegetarian" ? "active" : ""
                }`}
              >
                <a href="#/">Vegetarian </a>
              </li>
              <li
                onClick={() => setCategory("Seafood")}
                className={`z-10 p-2 px-7 text-white hover:text-pink border-b-2 border-solid border-gray-600 hover:border-pink ${
                  category === "Seafood" ? "active" : ""
                }`}
              >
                <a href="#/">Seafood </a>
              </li>
            </ul>
            <span className=" block w-full h-[2px] bg-gray-600 absolute top-10"></span>
          </div>

          <div className="DishesCards">
            <div className="header flex justify-between items-center py-5">
              <h1 className="text-[20px] text-white">Choose Dishes</h1>
              <select
                id="large"
                className="block  px-4 py-3 text-base text-white border border-gray-600 rounded-lg bg-black-200 focus:ring-pink focus:border-pink    "
              >
                <option value="US">Dine In</option>
              </select>
            </div>
            <div className="m-auto cards grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-12">
              {/* card item start 1 */}
              {getMeals?.map((data) => (
                <FoodCradsItem data={data} key={data.idMeal} />
              ))}
              {/* card item end 1 */}
            </div>
          </div>
        </section>
      </div>
      {/* basket panel */}
      <BasketPanel />
    </>
  );
}

export default HomePage;
