import React from "react";
import "./main.css";
import Schedule from "../Schedule/Schedule";
import Trend from "../Trend/Trend";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
      <Footer />
    </main>
  );
}

export default Main;
