import React, { useState } from "react";
import headerImg1 from "../../assets/images/headerImg1.jpg";
import { TweenMax, Power3 } from "gsap/gsap-core";
import NavBar from "../NavBar/NavBar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [isCoverVisible, setCoverVisibility] = useState(false);

  const [text] = useTypewriter({
    words: ["FrontEnd", "Developer"],
    loop: {},
  });

  const handleClick = () => {
    setCoverVisibility(!isCoverVisible);
  };

  return (
    <div className="header Electrolize bg-gradient-to-r from-black to-gray-700">
      {isCoverVisible ? (
        <div>
          <NavBar />
          <div className="cover flex">
            <div className="">
              <div className="bg-white absolute top-[40%] left-[100%] md:top-[30%] md:left-[40%] translate-y-[-30%] translate-x-[-120%] w-64 md:w-80 h-96 grid justify-center ">
                <div className="border-black border-4 mt-4 h-80">
                  <div>
                    <img
                      className=" h-56 w-48 md:w-55 md:h-58  md:m-2"
                      src={headerImg1}
                      alt=""
                    />
                  </div>
                  <div className="absolute tracking-wide right-8 Raleway mt-3 left-0 md:m-0 md:left-7">
                    <p className=" text-2xl bg-white  w-64  text-center ">
                      HENRY{" "}
                      <span className="text-3xl text-black font-extrabold ">
                        OKAFOR
                      </span>
                    </p>
                    {/* MOBILE */}
                    <h3 className="md:hidden text-black text-center ms-9 md:ms-0">
                      <span className="text-2xl">{text}</span>
                      <span className="text-3xl font-bold">
                        <Cursor cursorStyle="|" />
                      </span>
                    </h3>
                    {/* DESKTOP */}
                    <h3 className="hidden md:block text-black text-center ms-9 md:ms-0">
                      DEVELOPER
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block font-semibold  text-2xl text-justify space-y-3 text-white absolute md:top-[73%] md:left-[12%] ">
              <p>Nationality: Nigerian</p>
              <p>Stack: frontEnd</p>
              <p>Proficiency: [...JavaScript]</p>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="absolute font-serif t top-[50%] left-[40%] md:left-[45%] bg-white text-black p-2 md:p-4 rounded-lg animate-pulse hover:cursor-pointer hover:animate-none "
          onClick={handleClick}
        >
          CLICK HERE
        </button>
      )}
    </div>
  );
}

export default Header;
