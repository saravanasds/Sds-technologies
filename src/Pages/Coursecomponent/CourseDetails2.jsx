import React from "react";
import classroom from "../../assets/class.png";
import { TiTick } from "react-icons/ti";
import "./CourseDetails2.css";

const CourseDetails2 = () => {
  return (
    <>

      <div className="w-[100%] h-auto bg-black mt-20 flex justify-center items-center flex-col "data-aos="fade-right" data-aos-delay="200">
        <h2 className=" text-[#73D1FF] font-bold lg:text-6xl text-4xl  text-center leading-relaxed py-5 mb-5">
          What we are..
        </h2>
        <div className=" w-[90%] min-h-screen text-white text-lg sm:p-10 grid grid-cols-1 lg:grid-cols-2 md:gap-10 py-20 bg-gradient-to-r from-transparent via-gray-900 to-transparent place-items-center gap-10">

          <div className="" data-aos="slide-right" data-aos-delay="200">
            <img
              className="lg:w-[90%] lg:h-auto md:w-[400px] md:h-[400px] w-[90%] h-auto animate-bounceSlow rounded-2xl "
              src={classroom}
              alt=""

            />
          </div>

          {/* {part-2} */}


          <div className="w-full lg:w-[100%] h-auto text-md sm:text-xl md:text-2xl flex justify-center items-center sm:border-[1px] border-[#73D1FF] font-semibold  sm:p-10 py-10 tracking-wider rounded-2xl" data-aos="slide-left" data-aos-delay="200" style={{ boxShadow: "2px 2px 12px #73D1FF" }} >
            <ul className="leading-loose" >
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Certified Courses
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                100% Practical Class
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Experienced Faculty
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Individual Systems
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Flexible Timing
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Friendly Environment
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Affordable Prices
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-[#73D1FF]" />
                Concept Oriented Teaching
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails2;
