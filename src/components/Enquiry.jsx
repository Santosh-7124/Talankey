import React from "react";
import EnquiryFormShape from "/EnquiryFormShape.svg";
import JotFroms from "./JotForms";
import EnquiryInfoContainer from "/EnquiryInfoContainer.svg";
import GetInTouch from "./GetInTouch";

function Enquiry() {
  return (
    <div className="Enquiry">
      <div className="contactForm">
        <div className="contactFormHeading">
          <img
            src={EnquiryFormShape}
            alt="Decorative shape for the contact form heading"
          />
          <h1>Enquire Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
        <JotFroms />
      </div>
      <div className="infoContainer">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Guide</p>
            <div className="headingLine"></div>
          </div>
          <div className="heading">
            <h2>
              Our Process <span>Step by Step</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu.<br></br> Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
            </p>
          </div>
        </div>
        <img src={EnquiryInfoContainer}></img>
      </div>
      <GetInTouch />
    </div>
  );
}

export default Enquiry;
