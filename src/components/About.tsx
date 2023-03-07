import React from "react";
import founderImage from "../assets/about/founder.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>Welcome to our company's about page!</h2>
      <div className="aboutwrapper">
        <div className="abouttext">
          <p>
            We are a group of passionate individuals dedicated to providing the
            best products and services to our customers.
          </p>
          <p>
            Our company was founded in 2005 by John Smith, who saw a need in the
            market for high-quality, affordable products. Since then, we have
            grown to become one of the leading providers in our industry.
          </p>
        </div>
        <div>
          <img className="aboutimg" src={founderImage} alt="Founder" />
        </div>
      </div>
    </div>
  );
};

export default About;
