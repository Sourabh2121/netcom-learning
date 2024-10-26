import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-16 w-full justify-between flex items-center bg-white px-5">
        <div className="flex items-center">
          <img src="netcom-logo.png" alt="logo" className="pl-6 lg:pl-0" />
          <div className="hidden lg:block pl-4 lg:pl-28">
            <div className="relative">
              <input
                type="search"
                className="border w-100 lg:w-[460px] rounded-lg h-8 pl-11 pr-4 input-search placeholder-gray-500 placeholder-opacity-75 placeholder:text-sm placeholder:leading-tight focus:outline-none"
                placeholder="Search"
              />

              <img
                src="search.png"
                alt="search"
                className="absolute left-2.5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <ul className="navbar-icons flex items-center">
          <li className="hidden lg:list-item">
            <img src="notification.png" alt="notification" />
          </li>
          <li className="hidden lg:list-item">
            <img src="cart.png" alt="cart" />
          </li>

          <li className="flex items-center !pr-0">
            <span className="w-9 h-9 rounded-full">
              <img src="profile.png" alt="profile" className="object-fit" />
            </span>
            <span className="hidden lg:inline text-sm text-[#181A53] pl-2.5">
              R. Spencer
            </span>
            <div className="relative inline-block text-left">
              <span
                className="w-6 h-6 flex items-center justify-center bg-[#E2E2E2] rounded-lg ml-3 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src="arrow-down.svg" alt="dropdown" />
              </span>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 pb-2">
                  <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                    Account
                  </button>
                  <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
