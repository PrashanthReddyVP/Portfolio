import React from "react";
import "./Contact.css";
import { Mail, Phone, LocationOn, ArrowUpward } from "@material-ui/icons";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div id="contact" className="contact-container">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="Conatct-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            i’m currently available to take on new project ,so feel free to send
            me a message about anything that you want me to work on. you can
            contact any time.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <Mail />
              <p>abc@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Phone />
              <p>8565878787</p>
            </div>
            <div className="contact-detail">
              <LocationOn />
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
        <form action="" className="contac-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message....."
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUpward style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Contact;
