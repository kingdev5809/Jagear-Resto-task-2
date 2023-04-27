import {
  faArrowRightFromBracket,
  faBarsStaggered,
  faBell,
  faEnvelope,
  faGear,
  faHomeLg,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavIco } from "../constants";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div
        className={`  w-full h-full fixed bg-[#171a2493] z-20 ${
          showSidebar ? "block" : "hidden"
        }`}
        onClick={() => setShowSidebar(false)}
      ></div>
      <div className="sidebar  fixed sm:relative z-50">
        <button
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-black-200 rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-pink dark:focus:ring-pink"
          onClick={() => setShowSidebar((current) => !current)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
          <span className="sr-only">Open sidebar</span>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          className={`fixed top-0 left-0 z-40 w-35 h-screen transition-transform    ${
            showSidebar ? "translate-x-0" : "sm:translate-x-0 -translate-x-full"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full   py-4 overflow-y-auto bg-black-200    ">
            <div className="p-0 flex justify-center  mb-5 mx-4 ml-7 rounded-xl">
              <img className="w-[58px]" src={NavIco} alt="" />
            </div>
            <ul className="space-y-2 ml-3  font-medium">
              {/* link item start */}
              <li className="p-1 linkBox active">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px] "
                >
                  <i>
                    <FontAwesomeIcon icon={faHomeLg} />
                  </i>
                </a>
              </li>
              {/* link item end */}

              {/* link item start */}
              <li className="p-1 linkBox ">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px] "
                >
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                </a>
              </li>
              {/* link item end */}

              {/* link item start */}
              <li className="p-1 linkBox ">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px]"
                >
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </a>
              </li>
              {/* link item end */}

              {/* link item start */}
              <li className="p-1 linkBox ">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px]"
                >
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faBell} />
                  </i>
                </a>
              </li>
              {/* link item end */}

              {/* link item start */}
              <li className="p-1 linkBox">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px]"
                >
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faGear} />
                  </i>
                </a>
              </li>
              {/* link item end */}

              {/* link item start */}
              <li className="p-1 linkBox ">
                <a
                  href="#/"
                  className="flex justify-center   icon  items-center m-3 p-4 px-5 text-pink rounded-lg  hover:bg-pink hover:text-white-100  text-[18px]"
                >
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </i>
                </a>
              </li>
              {/* link item end */}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
