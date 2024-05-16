import React from "react";
import "./About.css";
import prashanth from "../../assets/prashanthProfile.jpg";

const About = () => {
  return (
    <div id="about" className="About-div">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className="about-img" src={prashanth} />
        </div>
        <div className="about-right">
          <div className="about-txt">
            <p>
              Highly Skilled Front-End Developer with over 3+ years of
              professional experience in designing, developing web applications,
              user interface components and troubleshooting complex issues.
              Specialized in ReactJS, responsive design, HTML, CSS, and
              JavaScript. Adept at creating pixel-perfect designs and ensuring
              seamless integration between front-end and back-end components.
            </p>
            <p>
              Proven ability to collaborate effectively, optimize performance ,
              and deliver user-centric solutions. Seeking a challenging role to
              leverage expertise and contribute to innovative projects
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Appian</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Ui Path</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acive">
        <div className="about-achived">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achived">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achived">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
