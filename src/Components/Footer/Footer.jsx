import React from "react";
import './Footer.css'
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer({ scrollToTop }) {
  return (
    <div className="footer">
      <div className="footer-logo-container">
        <img src="./radhe-logo.svg" alt="" />
      </div>

      <div className="footer-details-wrapper">
        <div className="details-container">
          <h5 className="details-container-heading">Contact information</h5>

          <div className="details">
            <GrLocation className="details-icon" />
            <p className="details-text">
              near govt.school , <br /> daulatgarh, teh,asind
            </p>
          </div>
          <div className="details">
            <FiPhone className="details-icon" />
            <p className="details-text">+919784926439</p>
          </div>
          <div className="details">
            <MdMailOutline className="details-icon" />
            <p className="details-text">piyushnawal19@gmail.com </p>
          </div>
        </div>

        <div className="details-container">
          <h5 className="details-container-heading">socials</h5>

          <div className="details">
            <FaInstagram className="details-icon" />
            <p className="details-text"> Nuwal_piyush</p>
          </div>
          <div className="details">
            <FaXTwitter className="details-icon" />
            <p className="details-text">@nawal_piyush</p>
          </div>
        </div>

        <div className="scrollToTop-btn" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTop-icon" />
        </div>
      </div>

      <h5 className="creator">
        Created By{" "}
        <a href="https://www.linkedin.com/in/bharat-suthar-842902241/">
          Bharat
        </a>{" "}
        & <a href="https://www.linkedin.com/in/peyush-nuwal">Peyush</a>
      </h5>
    </div>
  );
}
export default Footer