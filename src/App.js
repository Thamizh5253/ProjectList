import "./App.css";
import { useState, useEffect } from "react";

import ProjectLink from "./ProjectLink";
import LIKE from "./like";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
      <h1 class="head">Project List</h1>

      <ProjectLink
        linkUrl="https://authen-app-chi.vercel.app/"
        linkTitle="React Authenticator"
      />
      <ProjectLink
        linkUrl="https://know-your-city.vercel.app/"
        linkTitle="Know Your City"
      />
      <ProjectLink
        linkUrl="https://age-calculator-iota-sage.vercel.app/"
        linkTitle="Age Calculator"
      />

      <LIKE></LIKE>
    </div>
  );
}

export default App;
