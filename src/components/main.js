import React from "react";
import DP from "./images/dp.png";
import "../App.css";
function main() {
  return (
    <div>
      <section className="hero">
        <div className="content">
          <img src={DP} alt="" />
          <h1>
            <span>Hello world,</span> I'm Sujit Avchar
          </h1>
          <p>Welcome to my portfolio. I am a Programmer.</p>
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a href="https://drive.google.com/file/d/1XeuuGO7gV5lJmZG3B8grb0IthbPQjxMY/view?usp=drive_link" className="btn resume-btn" target="blank">
            Download Resume
          </a>
          <section className="social-media-section">
            <div className="social-media-icons">
              <a href="https://www.linkedin.com/in/sujit-avchar-08248b240/" className="social-media-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/SujitAvchar?t=_ywxLo4NJctlea9EKUXYSg&s=35" className="social-media-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/sujit._.avchar/" className="social-media-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default main;
