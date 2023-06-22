import React, { useState } from "react";
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import CancelIcon from "../../assets/icons/CancelIcon.svg";
import BgImg from "../../assets/images/backgroundImg.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const [showList, setShowList] = useState(false);
  const changeMenu = () => {
    setShowMenu(!showMenu);
    setShowList(!showList);
  };

  return (
    <div>
      <header className="bg-green-400 h-16">
        <nav className="flex justify-between">
          <h3 className="text-3xl ml-4 mt-3 animate-pulse font-bold text-[#472c4c] ">
            <Link to="/">HenryOkafor</Link>
          </h3>
          <div onClick={changeMenu} className="mt-2 mr-5">
            {" "}
            {showMenu ? (
              <img
                src={MenuIcon}
                alt=""
                className="hover:cursor-pointer md:hidden"
              />
            ) : (
              <img
                src={CancelIcon}
                alt=""
                className="hover:cursor-pointer md:hidden"
              />
            )}
          </div>
          <div className="hidden md:block">
          <ul className="flex mr-20 mt-4 text-xl font-semibold ">
            <li className="mr-5 hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5 hover:cursor-pointer">Links</li>
            <li className="mr-5 hover:cursor-pointer">
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li className="mr-5 hover:cursor-pointer">Contact</li>
          </ul>
          </div>
          
        </nav>
        <div className="relative top-1.5">
          {showList ? (
            <ul className="text-2xl p-2 font-bold space-y-6 bg-gray-200 text-[#472c4c] ">
              <li className="hover:border-b-2 hover:border-t-2 hover:cursor-pointer border-[#472c4c] pb-1 ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border-b-2 hover:border-t-2 hover:cursor-pointer border-[#472c4c] pb-1">
                Links
              </li>
              <li className="hover:border-b-2 hover:border-t-2 hover:cursor-pointer border-[#472c4c] pb-1">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="hover:border-b-2 hover:border-t-2 hover:cursor-pointer border-[#472c4c] pb-1">
                Contact
              </li>
            </ul>
          ) : null}
        </div>
      </header>
      <div className="z-10">
        {/* <img src={BgImg} alt="" className="z-10" /> */}
      </div>
    </div>
  );
}

export default Header;
