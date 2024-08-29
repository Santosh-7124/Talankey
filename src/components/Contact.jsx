import React, { useState, useEffect } from "react";
import ContactFormShape from "/ContactFormShape.svg";
import ContactFormImgBackground from "../assets/Contact/ContactFormImgBackground.svg";
import ContactImg1 from "../assets/Contact/Talankey CNC Turning.png";
import ContactImg2 from "../assets/Contact/Talankey CNC Milling.png";
import ContactImg3 from "../assets/Contact/Talankey Laser Cutting and Bending.png";
import ContactImg4 from "../assets/Contact/Talankey EDM.png";
import JotFroms from "./JotForms";
import ContactLinkBackground from "/ContactLinkBackground.svg";

function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contactImages = [
    {
      img: ContactImg1,
      title: "CNC Turning",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey CNC Turning",
    },
    {
      img: ContactImg2,
      title: "CNC Milling",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey CNC Milling",
    },
    {
      img: ContactImg3,
      title: "Laser Cutting and Bending",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey Laser Cutting and Bending",
    },
    {
      img: ContactImg4,
      title: "EDM’s",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey EDM",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contactImages.length);
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contactForm">
      <div className="contactFormHeading">
        <img
          src={ContactFormShape}
          alt="Decorative shape for the contact form heading"
        />
        <h1>How Can We Help?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
          Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
        </p>
      </div>
      <div className="contactFormContainer">
        <div className="contactFormImgContainer">
          <img
            className="contactFormImgBackground"
            src={ContactFormImgBackground}
            alt="Background with abstract shapes for the contact form section"
          />
          <div className="contactFormImg">
            <img
              src={contactImages[activeIndex].img}
              alt={contactImages[activeIndex].alt}
            />
          </div>
          <div className="contactFormImgText">
            <h2>{contactImages[activeIndex].title}</h2>
            <p>{contactImages[activeIndex].text}</p>
          </div>
        </div>
        <form className="contactFormDiv">
          <div className="contactFormInput">
            <label htmlFor="fullName">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="contactFormInput">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="contactFormInput">
            <label htmlFor="mobileNumber">
              Mobile Number <span>*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter number"
              required
            />
          </div>
          <div className="contactFormInput">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
      {/* <JotFroms/> */}
      <div className="contactFormBelow">
        <div className="getInTouch">
          <span>Get In Touch</span> <br /> With Us
        </div>
        <div className="contactLinkContainer">
          <img
            src={ContactLinkBackground}
            className="contactLinkContainerBackground"
          ></img>
          <a className="contactLinkSet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.6004 4.80005C19.396 4.80005 20.1591 5.11612 20.7217 5.67873C21.2843 6.24134 21.6004 7.0044 21.6004 7.80005V17.4C21.6004 18.1957 21.2843 18.9588 20.7217 19.5214C20.1591 20.084 19.396 20.4 18.6004 20.4H5.40039C4.60474 20.4 3.84168 20.084 3.27907 19.5214C2.71646 18.9588 2.40039 18.1957 2.40039 17.4V7.80005C2.40039 7.0044 2.71646 6.24134 3.27907 5.67873C3.84168 5.11612 4.60474 4.80005 5.40039 4.80005H18.6004ZM20.4004 9.55325L12.3052 14.3172C12.2287 14.3622 12.1431 14.3896 12.0547 14.3975C11.9663 14.4054 11.8773 14.3935 11.794 14.3628L11.6956 14.3172L3.60039 9.55565V17.4C3.60039 17.8774 3.79003 18.3353 4.1276 18.6728C4.46516 19.0104 4.923 19.2 5.40039 19.2H18.6004C19.0778 19.2 19.5356 19.0104 19.8732 18.6728C20.2107 18.3353 20.4004 17.8774 20.4004 17.4V9.55325ZM18.6004 6.00005H5.40039C4.923 6.00005 4.46516 6.18969 4.1276 6.52726C3.79003 6.86482 3.60039 7.32266 3.60039 7.80005V8.16245L12.0004 13.104L20.4004 8.16005V7.80005C20.4004 7.32266 20.2107 6.86482 19.8732 6.52726C19.5356 6.18969 19.0778 6.00005 18.6004 6.00005Z"
                fill="#F39200"
              />
            </svg>
            <div className="heading">
              <p>Mail Us</p>
              <span>Info@talenky.com</span>
            </div>
          </a>
          <a className="contactLinkSet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.6001 10.8C15.6001 11.7548 15.2208 12.6705 14.5457 13.3456C13.8706 14.0208 12.9549 14.4 12.0001 14.4C11.0454 14.4 10.1297 14.0208 9.45455 13.3456C8.77942 12.6705 8.40013 11.7548 8.40013 10.8C8.40013 9.84526 8.77942 8.92959 9.45455 8.25446C10.1297 7.57933 11.0454 7.20004 12.0001 7.20004C12.9549 7.20004 13.8706 7.57933 14.5457 8.25446C15.2208 8.92959 15.6001 9.84526 15.6001 10.8ZM14.4001 10.8C14.4001 10.1635 14.1473 9.55307 13.6972 9.10298C13.2471 8.6529 12.6367 8.40004 12.0001 8.40004C11.3636 8.40004 10.7532 8.6529 10.3031 9.10298C9.85299 9.55307 9.60013 10.1635 9.60013 10.8C9.60013 11.4366 9.85299 12.047 10.3031 12.4971C10.7532 12.9472 11.3636 13.2 12.0001 13.2C12.6367 13.2 13.2471 12.9472 13.6972 12.4971C14.1473 12.047 14.4001 11.4366 14.4001 10.8ZM17.9401 16.746C19.5156 15.1697 20.4007 13.0323 20.4007 10.8036C20.4007 8.57499 19.5156 6.43755 17.9401 4.86124C17.1601 4.08114 16.2341 3.46232 15.2149 3.04013C14.1957 2.61794 13.1033 2.40063 12.0001 2.40063C10.897 2.40063 9.80458 2.61794 8.78539 3.04013C7.7662 3.46232 6.84015 4.08114 6.06013 4.86124C4.48464 6.43755 3.59961 8.57499 3.59961 10.8036C3.59961 13.0323 4.48464 15.1697 6.06013 16.746L7.88533 18.5448L10.3369 20.9268L10.4965 21.0684C11.4265 21.822 12.7885 21.774 13.6645 20.9268L16.5865 18.0828L17.9401 16.746ZM6.90613 5.70724C7.57482 5.03781 8.36889 4.50675 9.24296 4.14441C10.117 3.78208 11.0539 3.59558 12.0001 3.59558C12.9463 3.59558 13.8832 3.78208 14.7573 4.14441C15.6314 4.50675 16.4254 5.03781 17.0941 5.70724C18.4072 7.02208 19.1622 8.79302 19.2015 10.6508C19.2409 12.5087 18.5616 14.31 17.3053 15.6792L17.0941 15.9L15.5089 17.4648L12.8329 20.0676L12.7201 20.1636C12.5123 20.3193 12.2596 20.4033 11.9999 20.403C11.7403 20.4028 11.4877 20.3184 11.2801 20.1624L11.1685 20.0664L7.59253 16.5804L6.90613 15.9L6.69493 15.6804C5.43866 14.3112 4.75939 12.5099 4.79874 10.652C4.83809 8.79422 5.59302 7.02208 6.90613 5.70724Z"
                fill="#F39200"
              />
            </svg>
            <div className="heading">
              <p>Visit Us</p>
              <span>
                Rajaji nagar,
                <br /> Bangalore Urban <br /> - 576783
              </span>
            </div>
          </a>
          <a className="contactLinkSet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.93 20C17.2447 20 15.5167 19.578 13.746 18.734C11.9753 17.89 10.3303 16.705 8.811 15.179C7.29167 13.653 6.11 12.008 5.266 10.244C4.422 8.48 4 6.75533 4 5.07C4 4.76467 4.1 4.51033 4.3 4.307C4.5 4.10367 4.75 4.00133 5.05 4H7.523C7.795 4 8.03233 4.08567 8.235 4.257C8.43767 4.42833 8.57467 4.648 8.646 4.916L9.142 7.3C9.18867 7.58 9.18033 7.82433 9.117 8.033C9.05367 8.24167 8.94267 8.41267 8.784 8.546L6.59 10.592C7.00067 11.3367 7.45433 12.0287 7.951 12.668C8.44767 13.3073 8.97767 13.913 9.541 14.485C10.121 15.065 10.7457 15.605 11.415 16.105C12.0843 16.6043 12.819 17.0757 13.619 17.519L15.758 15.342C15.9207 15.1667 16.1037 15.051 16.307 14.995C16.5097 14.9397 16.7343 14.9287 16.981 14.962L19.084 15.392C19.356 15.4587 19.5767 15.5957 19.746 15.803C19.9153 16.0103 20 16.2477 20 16.515V18.95C20 19.25 19.898 19.5 19.694 19.7C19.49 19.9 19.2347 20 18.93 20ZM6.12 9.654L8.04 7.889C8.10333 7.83767 8.14467 7.767 8.164 7.677C8.184 7.587 8.18067 7.50367 8.154 7.427L7.711 5.307C7.685 5.205 7.64 5.12833 7.576 5.077C7.512 5.02567 7.429 5 7.327 5H5.275C5.19833 5 5.13433 5.02567 5.083 5.077C5.03167 5.12833 5.006 5.19233 5.006 5.269C5.02533 5.95233 5.13233 6.66567 5.327 7.409C5.52167 8.15233 5.78533 8.90067 6.12 9.654ZM14.571 17.988C15.247 18.3227 15.967 18.5703 16.731 18.731C17.4963 18.891 18.163 18.9767 18.731 18.988C18.8077 18.988 18.8717 18.9623 18.923 18.911C18.9743 18.8597 19 18.796 19 18.72V16.712C19 16.61 18.9743 16.5267 18.923 16.462C18.8717 16.398 18.795 16.3533 18.693 16.328L16.843 15.949C16.7657 15.923 16.698 15.9197 16.64 15.939C16.5827 15.959 16.522 16.0007 16.458 16.064L14.571 17.988Z"
                fill="#F39200"
              />
            </svg>
            <div className="heading">
              <p>Call Us</p>
              <span>+91 90877889787</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
