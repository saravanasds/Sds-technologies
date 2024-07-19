import React from "react";
import mission from "../../assets/mission.png";

const Aboutcom3 = () => {
  return (
    <>
      <div className="w-[100%] h-auto py-10 flex justify-center items-center overflow-hidden">
        <div
          className="w-[90%] flex flex-col  lg:flex-row justify-center items-center "
        >
          <div className="w-full lg:w-[60%] flex flex-col md:flex-row justify-around items-center gap-10 order-2 md:order-1 " data-aos="slide-right" data-aos-delay="300">
            <div
              className="w-[260px] h-[260px]  duration-300  text-white hover:text-white rounded-2xl transform  flex flex-col justify-center items-center "
              style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <h2 className="text-2xl md:text-4xl font-bold ">Our Mission</h2>
              <p className="p-5 font-normal text-center text-sm sm:text-xl">
                You Dream it, We Prove it, through embracing the power of
                Digital Transformation
              </p>
            </div>

            <div
              className="w-[260px] h-[260px]  text-white duration-300  rounded-2xl transform  flex flex-col justify-center items-center bg-gradient-to-b from-[#73D1FF] via-gray-900 to-black"
              style={{ boxShadow: "2px 2px 12px #73D1FF" }}
            >
              <h2 className="text-2xl md:text-4xl font-bold">Our Vision</h2>
              <p className="p-5 font-normal text-center text-sm sm:text-xl">
                Continuously working to produce many world-class techno preneurs
                from diversified industries.
              </p>
            </div>
          </div>

          <div
            className="w-[100%]  lg:w-[40%]  flex  justify-center items-center order-1 md:order-2 py-10"
            data-aos="slide-right" data-aos-delay="300">
            <img
              src={mission}
              className="w-[70%] sm:w-[50%] lg:w-[80%]  pl-5 hover:-translate-y-3 duration-700 animate-bounceSlow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcom3;
