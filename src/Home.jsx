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

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <br />

      <br />
      <h2 style={{ textAlign: "center" }} className="header">
        Hi, I'm Kin.{" "}
      </h2>
      <br />
      <p style={{ textAlign: "center" }} className="text">
        {" "}
        Rujikorn Rujitanont ✨
      </p>
      <p style={{ textAlign: "center" }} className="text">
        Computer Engineering 💻
      </p>
      <br />
      <p style={{ textAlign: "center" }} className="header">
        Contact
      </p>
      <p style={{ textAlign: "center" }} className="text">
        098-936-9396 ☎️
      </p>
      <p style={{ textAlign: "center" }} className="text">
        rujikornkin96@gmail.com 📧
      </p>
      <p style={{ textAlign: "center" }} className="text">
        {" "}
        Bangkok, Thailand{" "}
      </p>

      <h1 className="italic">Hello world!</h1>
    </>
  );
};

export default Home;
