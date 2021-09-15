import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewCarousal from "../components/NewCarousal";
import Quality from "../components/Quality";
import "./HomePage.css";
const slideData = [
  {
    index: 0,
    headline: "Travel to Mountains",
    button: "Shop now",
    src: "/images/mountains.jpg",
    country: "Brazil",
  },
  {
    index: 1,
    headline: "Travel to Desert",
    button: "Book travel",
    src: "/images/desert.jpg",
    country: "Alaska",
  },
  {
    index: 2,
    headline: "Campain in mountains",
    button: "Listen",
    src: "/images/forest.jpg",
    country: "Greenland",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let mobile = width <= 420;

  return (
    <div className="home">
      <div className="home-container">
        <Hero />
        <NewCarousal deviceType={mobile && "mobile"} />
        <Quality />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
