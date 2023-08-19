import React from "react";
import "./navbar.css";
import image from "./Images/HRmatter.png";
import dashboardImg from "./Images/dashboard-examples.png";
import img4 from "./Images/WhatsApp Image 2023-08-19 at 13.24.19.jpg"
import wave from "./Images/wavw.jpg"
export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar">
        <div className="company-img-text">
          <img className="company-logo" src={image} />
          <h5 className="text1">Onboarding</h5>
          <h5>Scheduling</h5>
          <h5>Payroll</h5>
          <h5>Leave</h5>
        </div>
        <div className="login-button-text">
          <h5>Login</h5>
          <button className="clickme-button"> Click Me now</button>
        </div>
      </div>
      <div className="firstComponent">
        <img className="dashboardImg" src={dashboardImg} alt="logo" />
        <div className="text-right">
          <h2 className="h2-Heading-navbar">
            Powering the future Of <br />
            <span className="work">work .</span>
          </h2>

          <div className="loremPara1-navbar">
            Hr matter is a people operation platfrom in Saudi Arabia that uses
            Artifial Intelligence to fully automate HR processes & function in
            an easy-to-use and efficent way .
          </div>

          <button className="zoom">Get Started</button>
          <img src={img4} alt="logo" id="colouring-box" />
        </div>
      </div>
      <div className="word-container">
        <h3>
          <span>Onboarding</span>, <span>Scheduling</span>, <span>Payroll</span>, <span>Leave</span>,<br />
          <span>Management</span>, <span>Request Management</span>,<span>Workchat</span> <br /><span>Messaging</span>. All In One Place
        </h3>

      </div>
      <img src={wave} alt="img" className="waveImg" />
    </div>
  );
}
