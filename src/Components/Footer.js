import React from "react";
// import Fade from "react-awesome-reveal";

const Footer = (props) => {

  const networks = props.data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url} target="blank">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        {/* <Fade bottom> */}
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; 2023 Andres Pinilla. Some rights reserved.</li>
            </ul>
          </div>
        {/* </Fade> */}

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
