import React from "react";
import "./navbar.css";
import image from "./Images/HRmatter.png";
import dashboardImg from "./Images/dashboard-examples.png";

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
        <img className="dashboardImg" src={dashboardImg} />
        <div className="text-right">
          <h2 className="h2-Heading-navbar">
            Powering The Future Of <br /><span className="work">Work</span>
          </h2>
          <div className="loremPara1-navbar">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente
            excepturi dolorem quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente
            excepturi dolorem quos.
          </div>
          <button className="clickme-button">Getting Started</button>
        </div>
      </div>
      <div className="word-container">
        <h3>
          <span>Onboarding</span>, <span>Scheduling</span>, <span>Payroll</span>, <span>Leave</span>,<br />
          <span>Management</span>, <span>Request Management</span>, <span>Messaging</span>. All In One Place
        </h3>
      </div>
    </div>
  );
}
