import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Welcome to Apollo Hospital, where cutting-edge technology meets
          compassionate care. Our renowned institution is dedicated to providing
          unparalleled healthcare services, delivering expertise with a touch of
          empathy. At Apollo, our team of skilled professionals is committed to
          tailoring personalized treatment plans to suit each patient's unique
          needs. Apollo Hospital is your partner in achieving optimal health and
          wellness. Trust us to provide the highest standard of care, because
          your health is our priority.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
