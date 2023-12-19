import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function NavBar() {
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  const toggleDropdown = () => {
    setProjectsDropdown(!projectsDropdown);
  };
  return (
    <div className="">
      <nav className=" text-white flex p-2 px-8 justify-between">
        <div className="flex ">
          <p className="text-4xl font-extrabold RampartOne">HoD's</p>
          <span className="mt-5 Rancho text-lg"> Portfolio</span>
        </div>
        <ul className="hidden md:flex text-3xl me-28 mt-3 Rancho  ">
          <li className="hover:cursor-pointer hover:animate-pulse">Home</li>
          <div id="" onClick={toggleDropdown}>
            <div className="flex">
              <li className="ms-6 hover:cursor-pointer hover:animate-pulse">
                Projects
              </li>
              <IoMdArrowDropdown className="mt-1 hover:cursor-pointer" />
            </div>
            {projectsDropdown && (
              <div
                class="absolute right-60 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-lg"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Vexa Stores
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-lg"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Task Manager
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-lg"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                </div>
              </div>
            )}
          </div>
          <li className="ms-6 hover:cursor-pointer hover:animate-pulse">
            Contact
          </li>
        </ul>
      </nav>
      <div className="hidden md:block border-b-2 border-white"></div>
    </div>
  );
}

export default NavBar;
