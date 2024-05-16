import { useEffect, useState } from "react";
import "./Hero.css";
import prashanth from "../../assets/prashanthProfile.jpg";
import prashanthResume from "../../assets/prashanth_frontend 1.pdf";

const Hero = () => {
  useEffect(() => {
    const cursorShadow = document.createElement("div");
    cursorShadow.id = "cursor-shadow";
    document.body.appendChild(cursorShadow);

    const handleMouseMove = (e) => {
      cursorShadow.style.left = e.pageX + "px";
      cursorShadow.style.top = e.pageY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursorShadow);
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = prashanthResume;
    link.download = "Prashanth_Reddy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="Hero-div">
      <img src={prashanth} alt="" className="profile" />
      <div className="txt-div">
        <span className="text-head">
          I'm Prashanth Reddy,{" "}
          <span className="text">
            Frontend <br />
            Developer based India.
          </span>
        </span>

        <span className="txt-span">
          Highly Skilled Front-End Developer with over 3+ years of <br />
          professional experience in designing, developing web applications.
        </span>
      </div>
      <div className="btn-div">
        <button className="primary-btn">Connect Withme</button>
        <button className="secondary-btn" onClick={handleDownloadResume}>
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
