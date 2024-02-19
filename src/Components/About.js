import React from "react";
// import { Fade, Slide } from "react-awesome-reveal";

const About = (props) => {

    // const name = props.data.name;
    const profilepic = "images/" + props.data.image;
    const bio = props.data.bio;
    const phd = props.data.phd;
    // const street = props.data.address.street;
    // const city = props.data.address.city;
    // const state = props.data.address.state;
    // const zip = props.data.address.zip;
    // const phone = props.data.phone;
    const email = props.data.email;
    // const resumeDownload = props.data.resumedownload;

  return (
    <section id="about">
      {/* <Slide duration={1000}> */}
        <div className="row">
          <div className="four columns headshot-container">
              <img
              className="profile-pic"
              src={profilepic}
              alt="Andres Pinilla headshot"
            />
          </div>
          <div className="eight columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <p>{phd}</p>
            <div className="row">
              <div className="eight columns contact-details">
                <h2>Email</h2>
                <p className="address">
                  <a href="mailto:andres.pinilla@sydney.edu.au"><span>{email}</span></a>
                </p>
              </div>
              <div className="four columns download">
                <p>
                  <a href='AndresPinillaResume.pdf' download className="button">
                    <i className="fa fa-download"></i>Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Slide> */}
    </section>
  );
}

export default About;
