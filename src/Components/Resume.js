import React from "react";
// import Fade from "react-awesome-reveal";

const Resume = (props) => {
  
  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
        </p>
        <p className="date">
          <em>{work.years}</em>
        </p>
        <p className="description">{work.description}</p>
      </div>
    );
  });

  const education = props.data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="degree">
          Degree: <span>{education.degree}</span>
        </p>
        <p className="graduation-date">
          Graduation date: <span>{education.graduated}</span>
        </p>
        {/* <p className="info"><span>{education.description}</span></p> */}
        <p className="thesis">Thesis: <span>{education.thesis}</span></p>
        <p className="advisors">Advisors: <span>{education.advisors}</span></p>
      </div>
    );
  });

  const skills = props.data.skills.map((skills) => {
    const backgroundColor = '#638da2'
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <div>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </div>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row skill">
          <div className="four columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

      <div className="row work">
          <div className="four columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="eight columns main-col">{work}</div>
        </div>
    </section>
  );
}

export default Resume;
