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
          {" "}
          One Platform Countless Possibilities  <br />
          
        </h2>
        <div className="loremPara1-secondContainer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Sapiente excepturi dolorem quos.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Sapiente excepturi dolorem quos.
        </div>

        <div class="icons-container">
          <div class="icon-with-text1">
            <div class="progress-circle">
            <MdOutlineLibraryBooks size={100} className="icon" />
            </div>
            <div class="icon-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="icon-with-text2">
            <div class="progress-circle">
              <HiOutlineUserGroup size={100} className="icon" />
            </div>
            <div class="icon-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="icon-with-text3">
            <div class="progress-circle">
              <TbChecklist size={100} className="icon" />
            </div>
            <div class="icon-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
