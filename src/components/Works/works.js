import React from "react";
import "./works.scss";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Professional Experience</h2>
      <div className="workExperience">
        <div className="job">
          <h3 className="jobTitle">Atoka Technologies, Texas</h3>
          <span className="jobDuration">June 2023 - Present</span>
          <ul className="jobResponsibilities">
            <li>
              Developed responsive UI for ERP system using React.js, Redux, and
              Material-UI.
            </li>
            <li>
              Designed user-friendly forms and data entry screens with HTML5 and
              CSS3.
            </li>
            <li>
              Implemented robust security measures for data integrity using
              JWT-based authentication.
            </li>
            <li>Collaborated with database team using MySQL and MongoDB.</li>
            <li>Conducted rigorous testing and debugging processes.</li>
            <li>
              Utilized Git for version control and Jira for project management.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3 className="jobTitle">Cassini Systems, Hyderabad, India</h3>
          <span className="jobDuration">Aug 2020 - Nov 2021</span>
          <ul className="jobResponsibilities">
            <li>
              Developed interactive interfaces using HTML5, CSS3, JavaScript,
              and jQuery.
            </li>
            <li>Worked with UX team to create intuitive booking interface.</li>
            <li>Implemented Bootstrap for responsive design.</li>
            <li>
              Responsible for product development using Agile methodology.
            </li>
            <li>
              Applied Angular, React JS, and Bootstrap for frontend
              functionality.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3 className="jobTitle">VIXI IT Solutions, India</h3>
          <span className="jobDuration">Jan 2020 - Aug 2020</span>
          <ul className="jobResponsibilities">
            <li>
              Transformed E-learning platform by implementing cutting-edge
              features.
            </li>
            <li>
              Created responsive UI using Agile methodologies and Java-based web
              services.
            </li>
            <li>
              Contributed to collaborative development within agile scrum teams.
            </li>
            <li>Managed npm for node module installations.</li>
            <li>Resolved cross-browser compatibility issues and bugs.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Works;
