import React from "react";
import cca from "../../assets/cca.jpg";
import coa from "../../assets/coa.jpg";
import tally from "../../assets/tally.jpg";
import app from "../../assets/app.jpg";
import cad from "../../assets/cad.jpg";
import ai from "../../assets/ai.jpg";
import dmo from "../../assets/dmo.jpg";
import mlp from "../../assets/mlp.jpg";
import web from "../../assets/web.jpg";
import { Link } from "react-router-dom";

const course = [
  {
    id: 1,
    text: "Web Development",
    text1: "(Web Application)",
    image: web,
    link: "/Web",
  },
  {
    id: 2,
    text: "App Development",
    text1: "(Mobile Application)",
    image: app,
    link: "/App1",
  },
  {
    id: 3,
    text: "AI",
    text1: "(Artificial Intelligence)",
    image: ai,
    link: "/Ai",
  },
  {
    id: 7,
    text: "DMO",
    text1: "(Diploma in Multimedia Operation)",
    image: dmo,
    link: "/DMO",
  },
  {
    id: 6,
    text: "CAD",
    text1: "(Computer Aided Drafting)",
    image:cad,
    link: "/CAD",
  },
  {
    id: 4,
    text: "MLP",
    text1: "(Machine Learning Programming)",
    image: mlp,
    link: "/MLP",
  },
  {
    id: 8,
    text: "CCA",
    text1: "(Certificate in Computer Accounts)",
    image:cca,
    link: "/CCA",
  },
  {
    id: 9,
    text: "COA",
    text1: "(Certificate of Office Application)",
    image: coa,
    link: "/COA",
  },
  {
    id: 5,
    text: "Tally",
    image: tally,
    link: "/Tally",
  },
];

const CoursesDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black lg:py-10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 pb-1">
          <h2 className=" text-[#73D1FF] text-3xl sm:text-5xl font-bold tracking-wider mb-6" data-aos="slide-left" data-aos-delay="200">Explore our Courses</h2>
          <h3 className="text-white text-md sm:text-2xl font-semibold mb-10 tracking-wider" data-aos="slide-right" data-aos-delay="200">
            Enhance Your Skills with us, and upgrade your knowledge with our experienced tutor members.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-10" >
          {course.map((view) => (
            <Link to={view.link} onClick={scrollToTop}>
              <div
              key={view.id}
              className="relative h-[350px]  rounded-xl overflow-hidden cursor-pointer  transition duration-1000 ease-in-out group border-[1px] border-[#73D1FF] p-4"
              style={{ boxShadow: "2px 2px 4px #73D1FF" }}
              data-aos="zoom-in" data-aos-delay="500"
            >
              <img
                src={view.image}
                alt={view.text}
                className="w-full h-full object-cover object-center rounded-xl transform transition duration-1000 ease-in-out group-hover:scale-[1.1] "
                
              />

              <div className="absolute inset-0 flex flex-col justify-end z-10 p-4 ">
                <h2 className="text-2xl font-bold text-white mt-5 tracking-wider text-border px-4">{view.text}</h2>
                <p className="text-lg font-semibold text-white mb-3 tracking-wider px-4">{view.text1}</p>
                <button className="relative inline-flex items-center justify-center tracking-wide p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-1000 ease-out border-[1px] border-[#73D1FF] rounded-xl  group">

                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-1000 -translate-x-full bg-gradient-to-r from-[#2c596f] to-black group-hover:translate-x-0 ease">
                  <Link to={view.link} onClick={scrollToTop}>View Course</Link>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full bg-gradient-to-l from-[#73D1FF] to-black transition-all duration-1000 transform group-hover:translate-x-full ease">
                    <Link to={view.link} onClick={scrollToTop}>View Course</Link>
                  </span>
                  <span className="relative invisible">View Course</span>

                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent z-0"></div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
