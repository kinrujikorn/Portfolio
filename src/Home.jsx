import React, { useEffect } from "react";
import Profile from "./Profile.jpg";
import Typed from "typed.js";
import FadeInSection from "./FadeInSection";
import "./App.css";

import Navbar from "./Navbar"; // Make sure to import the Navbar component

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Full Stack Developer", "Software Engineer"],
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
      <Navbar></Navbar>
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
          <li></li>
          <li></li>
        </ul>
        <section id="home" className="py-10 md:py-10">
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
                    className="transition transform hover:scale-125 h-12 w-16 inline-block"
                  >
                    <img
                      src="/images/github.png"
                      className="rounded-full p-1 w-[60px] h-[60px]"
                    ></img>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009686763652"
                    target="_blank"
                    className="transition transform hover:scale-125 h-12 w-16 inline-block"
                  >
                    <img
                      src="/images/facebook.png"
                      className="rounded-full p-1 w-[60px] h-[60px]"
                    ></img>
                  </a>

                  <a
                    href="https://www.instagram.com/kinrujikorn/"
                    target="_blank"
                    className="transition transform hover:scale-125 h-12 w-16 inline-block"
                  >
                    <img
                      src="/images/instagram.png"
                      className="rounded-full p-1 w-[60px] h-[60px]"
                    ></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
                    target="_blank"
                    className="transition transform hover:scale-125 h-12 w-16 inline-block"
                  >
                    <img
                      src="/images/linkedin.png"
                      className="rounded-full p-1 w-[60px] h-[60px]"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex self-end">
              <a
                href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
                target="_blank"
                className="text-[18px] mr-8 transition transform hover:scale-110 p-4 px-10 inline-block text-black rounded-xl bg-white font-bold shadow-2xl shadow-slate-500"
              >
                HIRE ME! / CONTACT
              </a>

              <a
                href="/images/resume.pdf"
                download="Rujikorn_Rujitanont_Resume.pdf"
                target="_blank"
                className=" flex item-center text-[18px] mr-72 transition transform hover:scale-110 p-4 px-10  text-black rounded-xl bg-white font-bold shadow-2xl shadow-slate-500"
              >
                RESUME
                <img
                  src="/images/download.png"
                  className="p-1 ml-1 mt-1 w-[20px] h-[20px]"
                />
              </a>
            </div>
            <br />
            <FadeInSection>
              <div className="bg-white p-6 rounded-lg mt-30 shadow-2xl shadow-slate-500 md:translate-x-6 transition transform hover:scale-110">
                <div className="slide-up">
                  <h1 className="text-[30px] text-black font-bold mb-4">
                    My Skill
                  </h1>
                  <p align="center">
                    <a href="https://skillicons.dev">
                      <img src="https://skillicons.dev/icons?i=c,python,dart,javascript,php,html,css,react,nodejs,expressjs,flutter,flask,mysql,git&perline=7" />
                    </a>
                  </p>
                  {/* Additional content */}
                </div>
              </div>
            </FadeInSection>

            <div className="w-[1650px] h-[1400px] self-center bg-white bg-opacity-98 p-8 rounded-lg mt-40   shadow-2xl shadow-slate-500  ">
              <div className="bg-slate-900 p-8 rounded-lg shadow-lg opacity-90 shadow-slate-500 inline-block ">
                <h1 className="text-[42px] text-white font-bold">My Project</h1>
              </div>

              <div id="wanjaii" className="flex items-center  space-x-22 mt-20">
                <FadeInSection>
                  <img
                    src="/images/wanjaii.png"
                    className="  ml-12 rounded-lg p-1 w-[600px] h-[300px] "
                  ></img>
                </FadeInSection>
                <div className="self-start w-[700px] h-[300px]">
                  <div className="flex">
                    <p className="ml-8 mb-6 font-bold text-[28px] text-left">
                      Wanjaii Project
                    </p>
                    <a
                      href="https://github.com/kinrujikorn/wanjaii"
                      target="_blank"
                      className="transition transform hover:scale-125 h-12 w-16 inline-block ml-6 "
                    >
                      <img
                        src="/images/github.png"
                        className="rounded-full p-1 w-[60px] h-[60px]  "
                      ></img>
                    </a>
                    <a
                      href="https://youtu.be/wxxlVmyokk8"
                      target="_blank"
                      className="transition transform hover:scale-125 h-12 w-16 inline-block"
                    >
                      <img
                        src="/images/demo.png"
                        className="rounded-full p-1 w-[60px] h-[60px] "
                      ></img>
                    </a>
                  </div>

                  <p className="ml-14 pb-8 font text-[22px] text-left">
                    We develop dating apps that include a chat system for
                    communication and a search system for finding people. We use
                    Flutter for development and MySQL for the database.
                  </p>
                </div>
              </div>

              <div
                id="servicex"
                className="flex items-center  space-x-22 mt-20"
              >
                <FadeInSection>
                  <img
                    src="/images/servicex.png"
                    className=" ml-12 rounded-lg p-1 w-[600px] h-[300px]"
                  ></img>
                </FadeInSection>
                <div className="self-start w-[700px] h-[300px]">
                  <div className="flex">
                    <p className="ml-8 mb-6 font-bold text-[28px] text-left ">
                      ServiceX Project
                    </p>
                    <a
                      href="https://github.com/kinrujikorn/ServiceX"
                      target="_blank"
                      className="transition transform hover:scale-125 h-12 w-16 inline-block ml-6 "
                    >
                      <img
                        src="/images/github.png"
                        className="rounded-full p-1 w-[60px] h-[60px]  "
                      ></img>
                    </a>
                  </div>

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
              <div
                id="hotelmanagement"
                className="flex items-center  space-x-22 mt-20"
              >
                <FadeInSection>
                  <img
                    src="/images/hotelmanagement.png"
                    className=" ml-12 rounded-lg p-1 w-[600px] h-[300px]"
                  ></img>
                </FadeInSection>
                <div className="self-start w-[700px] h-[300px]">
                  <div className="flex">
                    <p className="ml-8 mb-6 font-bold text-[28px] text-left ">
                      Hotel Management Project
                    </p>
                    <a
                      href="https://github.com/kinrujikorn/The-Saturn-Hotel-Management"
                      target="_blank"
                      className="transition transform hover:scale-125 h-12 w-16 inline-block ml-6 "
                    >
                      <img
                        src="/images/github.png"
                        className="rounded-full p-1 w-[60px] h-[60px]  "
                      ></img>
                    </a>
                  </div>

                  <p className="ml-14 pb-8 font text-[22px] text-left">
                    We are creating a website for a hotel management system that
                    includes features like hotel room reservations, financial
                    tracking, and various data entry systems for hotel-related
                    information. To build this, we are using HTML, CSS, and
                    JavaScript for the user interface, and PHP and MySQL for the
                    backend to handle data and process
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
        </section>

        {/* <div>
            <br />
          </div> */}
        <div className="grid md:grid-cols-2 mt-8 mb-14 mx-72 mb-22">
          <section id="contact">
            <div className=" flex  flex-row justify-center relative z-10 overflow ">
              <div className="flex flex-col items-center  ">
                <h1 className="text-[36px] text-white font-bold rounded-lg ">
                  Contact Me
                </h1>
                <p className="flex text-start text-white mt-4">
                  Email: rujikornkin96@gmail.com <br />
                  Phone: 098-936-9396 <br />
                  Bangkok, Thailand
                </p>
                <div className="mt-8 slide-up w-[250px] h-[250px] rounded-full bg-gray-300 flex overflow-hidden shadow-2xl shadow-slate-500">
                  <img
                    src="/images/Contact-Profile.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="pt-12 pr-24">
              <h1 className="text-white  text-[22px] font-bold ">About Me</h1>
              <div>
                <p className="text-start pt-4 text-white  ">
                  {" "}
                  &emsp;Hello, my name is Rujikorn Rujitanont, but you can call
                  me Kin. I am currently 21 years old. My hobbies include
                  learning new things, keeping up with computer trends, playing
                  video games, and making videos. I am particularly interested
                  in website and app development. <br /> <br />
                  &emsp; I am a third-year student enrolled in the Computer
                  Engineering International Program at KMUTT. I have experience
                  in process-oriented tasks, am adept at collaborating with
                  others, and I'm committed to continuous self-improvement.
                </p>
              </div>
            </div>

            {/* <div id="form" className="mr-96">
            <div className="item-start">
              <h1 className="text-white font-bold text-[22px] ">
                Send Message
              </h1>
            </div>

            <div className="pt-4">
              <h1 className="text-white text-start mb-2">Full Name</h1>
              <input
                className="w-full rounded-lg"
                type="text"
                name=""
                required="required"
              />
            </div>
            <div className="pt-4">
              <h1 className="text-white text-start mb-2">Email</h1>
              <input
                className="w-full h-full rounded-lg"
                type="text"
                name=" "
                required="required"
              />
            </div>
            <div className="pt-4">
              <h1 className="text-white text-start mb-2">Type your Message</h1>
              <textarea
                className="w-full rounded-lg"
                required="required"
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                className="w-full rounded-lg bg-slate-900  text-white py-2"
                type="submit"
                name=" "
              >
                Send
              </button>
            </div>
          </div> */}
          </section>
        </div>
      </div>
      <footer>
        {/* Bottom Bar Part */}
        <div className="flex justify-center mt-4 mb-4">
          <br />
          <p className="text-[16px]  mt-4 mr-8">kinrujikorn</p>
          <a
            href="https://github.com/kinrujikorn"
            target="_blank"
            className="transition transform hover:scale-125 h-12 w-16 inline-block"
          >
            <img
              src="/images/github.png"
              className="rounded-full p-1 w-[60px] h-[60px]"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009686763652"
            target="_blank"
            className="transition transform hover:scale-125 h-12 w-16 inline-block"
          >
            <img
              src="/images/facebook.png"
              className="rounded-full p-1 w-[60px] h-[60px]"
            ></img>
          </a>

          <a
            href="https://www.instagram.com/kinrujikorn/"
            target="_blank"
            className="transition transform hover:scale-125 h-12 w-16 inline-block"
          >
            <img
              src="/images/instagram.png"
              className="rounded-full p-1 w-[60px] h-[60px]"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
            target="_blank"
            className="transition transform hover:scale-125 h-12 w-16 inline-block"
          >
            <img
              src="/images/linkedin.png"
              className="rounded-full p-1 w-[60px] h-[60px]"
            ></img>
          </a>

          <p className="text-[16px]  mt-4 ml-8">All right reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

//
