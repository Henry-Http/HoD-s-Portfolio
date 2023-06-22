import React from "react";
import { Link } from "react-router-dom";
import BgImg from "../../assets/images/backgroundImg.jpeg";
import MainImg from "../../assets/images/mainImg.jpg";
import noBgImg from "../../assets/images/noBgImg.png";

function Body() {
  return (
    <div className="mb-40">
      <div>
        {" "}
        <img src={BgImg} alt="" className="md:h-96 md:w-screen" />
      </div>
      <div className="-mt-44 text-white p-2 sm:-mt-72 md:mr-80" id="main-text">
        <p className="text-xl">Henry Okafor</p>
        <h1 className="text-4xl md:font-bold md:text-6xl">
          FRONTEND DEVELOPER
        </h1>
      </div>
      <div>
        <img
          src={noBgImg}
          alt=""
          className="hidden md:block md:ml-auto md:-mt-60  md:w-80"
        />
      </div>
      <div className="ml-24 mt-20 w-48 border-2 border-gray-300 sm:w-60 sm:ml-48 md:-mt-40">
        <img src={MainImg} alt="" className="md:hidden" />
      </div>
      <div>
        <article className="p-6 text-justify	md:mt-40">
          Hi, my name is Henry Okafor and I am a frontend developer. As a
          frontend developer specializing in JavaScript and React, I possess the
          skills and expertise to create dynamic and interactive user
          interfaces. Beyond technical proficiency, I possess a keen eye for
          design and user experience, collaborating closely with designers and
          backend developers to align the frontend with the overall vision.
          Well, this an info site for Bincom Dev Center so click on the button
          to Enjoy the images in my gallery.
        </article>
      </div>
      <div>
        <button className=" rounded-lg bg-green-400 p-3 w-40 m-5">
          {" "}
          <Link to="/gallery">Gallery</Link>
        </button>
      </div>
    </div>
  );
}

export default Body;
