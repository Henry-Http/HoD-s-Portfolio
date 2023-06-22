import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HangoutImg from "../../assets/images/Hangout.jpg";
import OfficeChill from "../../assets/images/OfficeChill.jpg";
import CastroWed from '../../assets/images/CastroWed.jpg'
import WithMen from '../../assets/images/WithMen.jpg' 
import WithMenTwo from '../../assets/images/WithMen2.jpg'
import Salem from '../../assets/images/Salem.jpg'


function Gallery() {
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-flow-row gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 grid-rows-3 mt-20">
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={HangoutImg} alt="" className="rounded-lg w-80 h-80" /> 
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">Lost in thought on one of our hangout</p>
          </div>
        </div>
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={OfficeChill} alt="" className="rounded-lg w-80 h-80" />
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">Unexpected photo during break</p>
          </div>
        </div>
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={CastroWed} alt="" className="rounded-lg w-80 h-80" />
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">Had to put this in cos i look good in a suit</p>
          </div>
        </div>
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={WithMen} alt="" className="rounded-lg w-80 h-80" />
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">Attended then wedding of one of our close friends</p>
          </div>
        </div>
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={WithMenTwo} alt="" className="rounded-lg w-80 h-80" />
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">Saturday is for party</p>
          </div>
        </div>
        <div className="w-80 sm:w-auto md:w-80 lg:w-80">
          <img src={Salem} alt="" className="rounded-lg w-80 h-80 "  />
          <div className="relative bottom-14 bg-slate-300 h-14" id="gallery">
            <p className="font-semibold ">My God son!</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
