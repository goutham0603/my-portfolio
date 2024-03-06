import React from "react";
import "./education.scss";

const Education = () => {
  return (
    <div className="education">
      <div className="degree">
        <h2>Bachelor's</h2>
        <p>Field: CSE</p>
        <p>University: JNTU Hyderabad</p>
        <p>Location: [Hyderabad, India]</p>
      </div>
      <div className="degree">
        <h2>Master's in Computer Technology</h2>
        <p>Field: Computer Technology</p>
        <p>University: Eastern Illinois University</p>
        <p>Location: [Charleston, Illinois, USA]</p>
      </div>
    </div>
  );
};

export default Education;
