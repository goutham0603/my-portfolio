import React from "react";
import "./skills.scss";
import html5img from "../../assets/html5img.png";
import javascript from "../../assets/javascript.png";
import css3 from "../../assets/css3.png";
import reactimg from "../../assets/reactimg.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <span className="SkillDesc">
        With my proficiency in JavaScript, HTML, CSS, and React.js, I can create
        user interfaces that are both visually appealing and easy to navigate.
        Skilled in Jira, Git, and Agile/Waterfall approaches, enabling effective
        project management and teamwork. You are also skilled in database
        administration, including MySQL and MongoDB, and rigorous testing
        procedures using JUnit and TestNG frameworks for reliable application
        development.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={javascript} alt="JavaScript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>Place Text Here</p>
            <div className="skillBarRating">
              <div
                className="skillBarRatingInner"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p>Rating: 8 out of 10</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={html5img} alt="HTML5" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML5</h2>
            <p>Place Text Here</p>
            <div className="skillBarRating">
              <div
                className="skillBarRatingInner"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p>Rating: 9 out of 10</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={css3} alt="CSS3" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS3</h2>
            <p>Place Text Here</p>
            <div className="skillBarRating">
              <div
                className="skillBarRatingInner"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p>Rating: 7 out of 10</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={reactimg} alt="React" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>Place Text Here</p>
            <div className="skillBarRating">
              <div
                className="skillBarRatingInner"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p>Rating: 7.5 out of 10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
