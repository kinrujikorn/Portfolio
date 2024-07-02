import React, { useEffect } from "react";
import Profile from "./Profile.jpg";
import Typed from "typed.js";
import FadeInSection from "./FadeInSection";
import "./App.css";

import Navbar from "./Navbar"; // Make sure to import the Navbar component

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Frontend Developer", "Backend Developer", "Software Engineer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy(); // Destroy instance on unmounting to prevent memory leaks
    };
  }, []);

  return (
    <>
      <div className="area flex flex-col justify-start min-h-screen pt-16">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className=" flex flex-col  items-center relative z-10 overflow">
          <div className="flex items-center space-x-22 mt-10">
            <FadeInSection>
              <div className="slide-up w-[500px] h-[500px] rounded-full bg-gray-300 flex justify-center items-center overflow-hidden shadow-2xl shadow-slate-500">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ transform: "translateZ(0px)", opacity: 1 }}
                />
              </div>
            </FadeInSection>
            <div className="bg-white p-8 rounded-lg ml-40 shadow-2xl shadow-slate-500 md:translate-x-6 transition transform hover:scale-110">
              {/* Adjust size and border radius as needed */}
              <div
                className="slide-up text-container"
                style={{ width: "600px", textAlign: "center" }}
              >
                <br />
                <br />
                <p className="text-[48px] text-black">Hi, I'm Kin</p>
                <br />
                <p className="text-[56px] font-bold text-black">
                  <span className="multiple-text"></span>
                </p>
                <br />

                <a
                  href="https://github.com/kinrujikorn"
                  target="_blank"
                  className="hover:scale-125 h-12 w-16 inline-block"
                >
                  <img
                    src="/images/github.png"
                    className="rounded-full p-1 w-[60px] h-[60px]"
                  ></img>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009686763652"
                  target="_blank"
                  className="hover:scale-125 h-12 w-16 inline-block"
                >
                  <img
                    src="/images/facebook.png"
                    className="rounded-full p-1 w-[60px] h-[60px]"
                  ></img>
                </a>

                <a
                  href="https://www.instagram.com/kinrujikorn/"
                  target="_blank"
                  className="hover:scale-125 h-12 w-16 inline-block"
                >
                  <img
                    src="/images/instagram.png"
                    className="rounded-full p-1 w-[60px] h-[60px]"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
                  target="_blank"
                  className="hover:scale-125 h-12 w-16 inline-block"
                >
                  <img
                    src="/images/linkedin.png"
                    className="rounded-full p-1 w-[60px] h-[60px]"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <br />
          <FadeInSection>
            <div className="bg-white p-8 rounded-lg mt-30 shadow-2xl shadow-slate-500 md:translate-x-6 transition transform hover:scale-110">
              <div className="slide-up">
                <h1 className="text-[30px] text-black font-bold">My Skill</h1>
                <p align="center">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=c,python,dart,javascript,php,html,css,react,nodejs,expressjs,flutter,flask,mysql,git&perline=7" />
                  </a>
                </p>
                {/* Additional content */}
              </div>
            </div>
          </FadeInSection>

          <div className="w-[1650px] h-[1000px] self-start bg-white p-8 rounded-lg mt-20 ml-24 px-16  shadow-2xl shadow-slate-500 md:translate-x-6 ">
            <h1 className="text-[30px] text-black font-bold mb-14">
              MY PROJECT
            </h1>

            <div id="wanjaii" className="flex items-center  space-x-22 mt-10">
              <FadeInSection>
                <img
                  src="/images/wanjaii.png"
                  className="  ml-12 rounded-lg p-1 w-[600px] h-[300px] "
                ></img>
              </FadeInSection>
              <div className="self-start w-[700px] h-[300px]">
                <p className="ml-8 mb-6 font-bold text-[28px] text-left">
                  Wanjaii Project
                </p>
                <p className="ml-14 pb-8 font text-[22px] text-left">
                  We develop dating apps that include a chat system for
                  communication and a search system for finding people. We use
                  Flutter for development and MySQL for the database.
                </p>
                <div className="flex">
                  <a
                    href="https://github.com/kinrujikorn/wanjaii"
                    target="_blank"
                    className="hover:scale-125 h-12 w-16 inline-block ml-14 "
                  >
                    <img
                      src="/images/github.png"
                      className="rounded-full p-1 w-[60px] h-[60px]  "
                    ></img>
                  </a>
                  <a
                    href="https://youtu.be/wxxlVmyokk8"
                    target="_blank"
                    className="hover:scale-125 h-12 w-16 inline-block"
                  >
                    <img
                      src="/images/demo.png"
                      className="rounded-full p-1 w-[60px] h-[60px] "
                    ></img>
                  </a>
                </div>

                {/* <a
                  href="https://youtu.be/wxxlVmyokk8"
                  class="inline-block px-4 py-2 ml-4 bg-gray-400 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg"
                >
                  Demo: https://youtu.be/wxxlVmyokk8
                </a> */}
              </div>
            </div>
            <div id="servicex" className="flex items-center  space-x-22 mt-10">
              <FadeInSection>
                <img
                  src="/images/servicex.png"
                  className=" ml-12 rounded-lg p-1 w-[600px] h-[300px]"
                ></img>
              </FadeInSection>
              <div className="self-start w-[700px] h-[300px]">
                <p className="ml-8 mb-6 font-bold text-[28px] text-left ">
                  ServiceX Project
                </p>
                <p className="ml-14 pb-8 font text-[22px] text-left">
                  In this project, we are developing an app similar to a
                  Technician Queue. It is an application that facilitates the
                  process of finding technicians or the agency we need. We use
                  React Native as the main language for the front end and
                  Node.js with Express.js for the backend, utilizing MySQL as
                  the database to store data.
                </p>
                {/* <a
                  href="https://youtu.be/wxxlVmyokk8"
                  className=" font-medium text-blue-600 hover:underline text-[20px]"
                >
                  Demo: https://youtu.be/wxxlVmyokk8
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
