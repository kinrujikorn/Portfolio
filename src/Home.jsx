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

import React from "react";
import Profile from "./Profile.jpg";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex items-center space-x-12">
          <div className="w-[400px] h-[400px] rounded-full bg-gray-300 flex justify-center items-center overflow-hidden">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Adjust size and border radius as needed */}
          <div>
            <br />
            <p className="text-[56px] font-bold;">Hi, I'm Kin. </p>
            <br />
            <p className="text-[48px] font-bold">Rujikorn Rujitanont ✨</p>
          </div>
        </div>

        {/* <p style={{ textAlign: "center" }} className="header">
        Contact
      </p>
      <p style={{ textAlign: "center" }} className="text">
        098-936-9396 ☎️
      </p>
      <p style={{ textAlign: "center" }} className="text">
        rujikornkin96@gmail.com 📧
      </p>
      <p style={{ textAlign: "center" }} className="text-red">
        {" "}
        Bangkok, Thailand{" "}
      </p> */}
        {/* <h1 className="text-blue-600 text-[22px] font-sans">Hello world!</h1> */}
      </div>
    </>
  );
};

export default Home;
