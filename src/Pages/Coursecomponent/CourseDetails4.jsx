import React from "react";
import { TiTick } from "react-icons/ti";
// import "./CourseDetails4.css";
import { SiSitepoint } from "react-icons/si";
import star from "../../assets/star.png"

const CourseDetails4 = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-black ">
        <div className="learn w-[100%] h-auto  text-[rgba(248,246,248)] bg-gradient-to-r from-transparent via-gray-900 to-transparent  tracking-wider px-3 sm:px-10 py-10" data-aos="fade-left" data-aos-duration="500">

          <div className="learn1 w-[100%]  h-auto lg:px-10 py-10" data-aos="fade-right" data-aos-duration="500" >
            <h2 className="lg:text-5xl w-[100%] text-3xl font-semibold p-5 mb-10  text-[#73D1FF] text-center text-border-bottom">
              What You'll Learn
            </h2>

            <div className="flex flex-col lg:flex-row lg:gap-20">
              <div className=" lg:w-[50vw] lg:px-5 px-2 " data-aos="fade-up" data-aos-delay="200">

                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 mb-8" data-aos="fade-up" data-aos-delay="300">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />

                  <p className="text-md sm:text-lg leading-relaxed">
                    {" "}
                    Practical projects and hands-on exercises, students will
                    apply theoretical knowledge to real-world scenarios.
                  </p>
                </div>

                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 mb-8" data-aos="fade-up" data-aos-delay="300">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />
                  <p className="text-md sm:text-lg leading-relaxed">
                    {" "}
                    Apply user interface and user experience (UI/UX) principles
                    and best practices, manage your code with GitHub
                    repositories and branches.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 mb-8" data-aos="fade-up" data-aos-delay="400">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />
                  <p className="text-md sm:text-lg leading-relaxed">
                    Learn core backend languages such as Python, Node.js, Java,
                    or PHP, understanding their syntax, data structures, and how
                    they interact with databases.
                  </p>
                </div>
              </div>

              <div className=" lg:w-[50vw] lg:px-5 px-2  gap-5" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 mb-8" data-aos="fade-up" data-aos-delay="300">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />
                  <p className="text-md sm:text-lg leading-relaxed">
                    {" "}
                    Learn how to develop web pages using programming languages
                    like HTML, CSS, JavaScript, and React.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 mb-8" data-aos="fade-up" data-aos-delay="400">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />
                  <p className="text-md sm:text-lg leading-relaxed">
                    {" "}
                    Gain technical experience through hands-on labs and projects
                    and build a portfolio to showcase your work to potential
                    employers.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-3 sm:gap-5 " data-aos="fade-up" data-aos-delay="500">
                  <img className="w-[30px] h-[30px] animate-slow-ping mt-2" src={star} alt="" />
                  <p className="text-md sm:text-lg leading-relaxed">
                    {" "}
                    Dive into popular backend frameworks like Mangodp,
                    Express.js, Spring Boot, Nodejs, gaining proficiency in
                    routing and integrating with
                    frontend technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails4;
