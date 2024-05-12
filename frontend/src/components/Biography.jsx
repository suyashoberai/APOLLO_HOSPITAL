import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutimg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          At Apollo Hospital, we are more than just a healthcare institution; we
          are a beacon of hope and healing in the community. With a legacy of
          excellence spanning decades, we stand at the forefront of medical
          innovation and compassionate service. Our dedicated team of
          professionals, comprising top physicians, nurses, and support staff,
          work tirelessly to uphold our mission of providing world-class
          healthcare to all who walk through our doors.
        </p>
        <p>
          At the heart of our philosophy is the belief that every individual
          deserves access to the highest quality of care, regardless of
          background or circumstance. From routine check-ups to complex
          surgeries, we approach each patient with dignity, respect, and
          unwavering dedication.
        </p>
        <p>
          As a trusted pillar of the community, we are committed to making a
          positive impact beyond the walls of our hospital. Through community
          outreach programs, medical research initiatives, and partnerships with
          local organizations, we strive to promote wellness and improve
          healthcare outcomes for all.
        </p>
        <p>
          At Apollo Hospital, we are more than just healers; we are advocates
          for a healthier, happier future. Join us on this journey towards
          wellness, because together, we can make a difference in the lives of
          countless individuals and families.
        </p>
      </div>
    </div>
  );
};

export default Biography;
