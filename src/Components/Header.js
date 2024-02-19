import React from "react";
// import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

const Header = (props) => {
  const github = props.data.github;

  // const hiStyles = {
  //   fontFamily: 'sans-serif',
  //   fontSize: 60,
  //   fontWeight: 700,
  //   color: '#231F20',
  // }
  
  return (
    <header id="home">
      {/* <ParticlesBg type="cobweb" bg={true}/> */}

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

          <li>
            <a className="" href="https://www.behance.net/andrespinilla7" target="blank">
              Portfolio
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contributions">
              Publications
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
            <h2 className="name">Hi, my name is <span className='highlight-blue'>Andres Pinilla</span></h2>
          </Fade>
          <Fade bottom duration={1200}>
            <h2 className="description"><span className='highlight-red'>I am curious about</span> people and technology</h2>
            {/* <h3>Currently Focused on <span className="focusarea">Virtual Reality</span> and <span className="focusarea">Civic Technologies</span></h3> */}
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
