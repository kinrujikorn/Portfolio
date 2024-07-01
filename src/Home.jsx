// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useEffect } from "react";
import Profile from "./Profile.jpg";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Sofeware Engineering",
      ],
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
      <div class="area">
        <ul class="circles">
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

        <div className="h-screen flex flex-col justify-center items-center relative z-10">
          <div className="flex items-center space-x-22">
            <div
              className="w-[500px] h-[500px] rounded-full bg-gray-300 flex justify-center items-center overflow-hidden shadow-2xl shadow-slate-500 
            -300/100"
            >
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="bg-white p-8 rounded-lg ml-40 shadow-2xl shadow-slate-500 ">
              {/* Adjust size and border radius as needed */}
              <div
                className="text-container"
                style={{ width: "600px", textAlign: "center" }}
              >
                <br />
                <br />
                <p className="text-[48px] text-black  ">Hi, I'm Kin </p>
                <br />
                <p className="text-[56px] font-bold text-black">
                  <span className="multiple-text"></span>
                </p>
                <br />
                <p align="center">
                  <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=c,python,dart,javascript,php,html,css,react,nodejs,expressjs,flutter,flask,mysql,git&perline=7" />
                  </a>
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
                  href="https://www.facebook.com/profile.php?id=100009686763652"
                  target="_blank"
                  className="hover:scale-125 h-12 w-16 inline-block"
                >
                  <img
                    src="/images/facebook.png"
                    className="rounded-full p-1 w-[60px] h-[60px]"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
