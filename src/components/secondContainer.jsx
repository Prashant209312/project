import React from "react";
import "./secondContainer.css";
import { TbChecklist } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";


export default function SecondContainer() {
  return (
    <div className="SecondContainer">
      <div className="text-left-secondContainer">
        <h2 className="h2-Heading">

          One Platform Countless Possibilities <br />
        </h2>
        <div className="loremPara1-secondContainer">
          We are determind to reinvent the way HR is perceived in companies
          across the Middle East.It is time to focus on what really moves an
          oganization forward - its people !
          <br />
          Hr is not administring staff. it is about enging your team equipping
          them with the right tools to
          <br />
          activative their full potential - that's what HRmatters. is all
          about .
        </div>

        <div class="icons-container">
          <div class="icon-with-text1">
            <div class="progress-circle">
              <MdOutlineLibraryBooks size={120} className="icon" />
            </div>
            <div class="icon-text">Sophisticated Scheduling</div>
            <p className="short">
              No more for Schedule employee.Schedule with
              <br />
              HRmatters and share to employee real
            </p>
          </div>

          <div class="icon-with-text2">
            <div class="progress-circle">
              <HiOutlineUserGroup size={120} className="icon" />
            </div>
            <div class="icon-text">Reliable Timeclock Attendence</div>
            <p className="short">
              No more for Schedule employee.Schedule with HRmatters and share
              to employee real
            </p>
          </div>

          <div class="icon-with-text3">
            <div class="progress-circle">
              <TbChecklist size={120} className="icon" />
            </div>
            <div class="icon-text">Labor Law Compliant</div>
            <p className="short">
              No more for Schedule employee.Schedule with HRmatters and share
              to employee real
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
