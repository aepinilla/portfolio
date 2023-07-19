import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

const Header = (props) => {
  const github = props.data.github;

  const descriptionStyles = {
    fontFamily: 'sans-serif',
    fontSize: 50,
    padding: 0,
    fontWeight: 700,
    color: '#231F20',
    marginTop: 30,
  }

  const nameStyles = {
    fontFamily: 'sans-serif',
    fontSize: 50,
    fontWeight: 700,
    color: '#231F20',
    marginTop: 70,
  }

  const hiStyles = {
    fontFamily: 'sans-serif',
    fontSize: 60,
    fontWeight: 700,
    color: '#231F20',
  }
  
  return (
    <header id="home">
      <ParticlesBg type="cobweb" bg={true}/>

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          {/* <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li> */}

          <li>
            <a className="smoothscroll" href="#contributions">
              Research
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          {/* <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>

      {/* <div className="backround-header">H</div> */}

      <div className="row banner">
        <div className="banner-text">
          {/* <Fade bottom>
            <h1 style={hiStyles}>Hi.</h1>
          </Fade> */}
          <Fade bottom>
            <h2 style={nameStyles}>My name is <span className='highlight-blue'>Andres Pinilla</span></h2>
          </Fade>
          <Fade bottom duration={1200}>
            <h2 style={descriptionStyles}>I am a <span className='highlight-red'>UX Research Scientist</span></h2>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              {/* <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a> */}
              <a href={github} target="blank" className="button btn github-btn">
                <i className="fa-brands fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}


export default Header;
