import React, { useState } from "react";
import "boxicons";

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);

  const openMenu = () => {
    setSideBar(true);
  };

  const closeMenu = () => {
    setSideBar(false);
  };

  const collapseMenu = () => {
    setSlideMenu(!slideMenu);
  };

  return (
    <>
      <div className="lg:hidden absolute left-2 top-5">
        <span onClick={openMenu} className="cursor-pointer">
          <i class="bx bx-menu-alt-right text-[24px]"></i>
        </span>
      </div>
      <div
        className={`fixed lg:relative inset-0 transition-transform duration-300 bg-white shadow-lg ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div
          className={`${
            slideMenu ? "w-[64px]" : "min-w-[244px]"
          } mobile-siderbar h-calc overflow-auto`}
        >
          <div className="flex justify-end items-center p-4 lg:hidden">
            <button onClick={closeMenu} className="text-[#181A53] lg:hidden">
              <i class="bx bx-x text-[24px]"></i>
            </button>
          </div>

          {/* Sidebar menu items */}
          <ul className={`${slideMenu ? "px-[10px]" : "px-5"} pt-6`}>
            <li className="flex items-center gap-2.5 my-0.5 py-2.5 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300 cursor-pointer">
              <i class="bx bxs-dashboard text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Dashboard
                </span>
              )}
            </li>
            <li className="flex items-center gap-2.5 my-0.5 py-2.5 bg-[#0876F8] text-white pl-3 cursor-pointer rounded-lg transition duration-300">
              <i class="bx bx-book-reader text-[24px] text-[#ffffff] transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#fff] transition duration-300">
                  Training classes
                </span>
              )}
            </li>
            <li className="flex items-center gap-2.5 my-0.5 py-2.5 pl-3 rounded-lg hover:bg-[#0876F8] group transition duration-300 cursor-pointer">
              <i className="bx bx-chalkboard text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] transition duration-300  group-hover:text-white">
                  e-Learning
                </span>
              )}
            </li>

            <li className="cursor-pointer relative flex flex-col items-start gap-2.5 my-0.5 rounded-lg transition duration-300 group">
              <div
                className={`flex w-full justify-between items-center  cursor-pointer py-2.5 px-3 rounded-lg transition duration-300 ${
                  isSubmenuOpen ? "bg-[#0876F8]" : "hover:bg-[#0876F8]"
                }`}
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <div className="flex items-center gap-1.5">
                  <i className="bx bx-desktop text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
                  {!slideMenu && (
                    <span
                      className={`text-[#181A53] transition duration-300 ${
                        isSubmenuOpen ? "text-white" : "group-hover:text-white"
                      }`}
                    >
                      Course Catalog
                    </span>
                  )}
                </div>
                <div>
                  {!slideMenu && (
                    <i class="bx bx-chevron-down text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
                  )}
                </div>
              </div>

              {!slideMenu && isSubmenuOpen && (
                <ul className="ml-6 space-y-2">
                  <li className="text-[#585858] hover:bg-[#0876F8] hover:text-white px-3 py-1 rounded-lg cursor-pointer transition duration-300">
                    Sub-menu 1
                  </li>
                  <li className="text-[#585858] hover:bg-[#0876F8] hover:text-white px-3 py-1 rounded-lg cursor-pointer transition duration-300">
                    Sub-menu 2
                  </li>
                  <li className="text-[#585858] hover:bg-[#0876F8] hover:text-white px-3 py-1 rounded-lg cursor-pointer transition duration-300">
                    Sub-menu 3
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer flex items-center gap-2.5 my-0.5 py-2.5 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300">
              <i class="bx bx-folder text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Resources
                </span>
              )}
            </li>
            <li className="cursor-pointer flex items-center gap-2.5 my-0.5 py-2.5 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300">
              <i class="bx bx-calendar text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Training calendar
                </span>
              )}
            </li>
          </ul>
          <div className="relative">
            <hr className="pb-6 mt-6" />
            <i
              className={`bx ${
                slideMenu ? "bx-right-arrow-circle" : "bx-left-arrow-circle"
              } 
                  absolute right-2 text-[#585858] -top-[11px] text-[24px] cursor-pointer 
                  transition-transform duration-300 ease-in-out `}
              onClick={collapseMenu}
            ></i>
          </div>

          <ul className={`${slideMenu ? "px-[10px]" : "px-5"}`}>
            <li className="cursor-pointer flex items-center gap-2.5 my-0.5 py-2 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300">
              <i class="bx bx-support text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Help center
                </span>
              )}
            </li>
            <li className="cursor-pointer flex items-center gap-2.5 my-0.5 py-2 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300">
              <i class="bx bx-cog text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Settings
                </span>
              )}
            </li>
          </ul>
          <ul className={`${slideMenu ? "px-[10px]" : "px-5"} py-6`}>
            <li className="cursor-pointer flex items-center gap-2.5 my-0.5 py-2 pl-3 hover:bg-[#0876F8] group rounded-lg transition duration-300">
              <i class="bx bx-desktop text-[24px] text-[#585858] group-hover:text-white transition duration-300"></i>
              {!slideMenu && (
                <span className="text-[#181A53] group-hover:text-white transition duration-300">
                  Training classes
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
