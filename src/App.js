import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contributions from "./Components/Contributions";
import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import resumeData from "./resumeData.json";


function App () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foo: "bar",
  //     resumeData: {}
  //   };

  //   ReactGA.initialize("UA-110570651-1");
  //   ReactGA.pageview(window.location.pathname);
  // }

  // getResumeData() {
  //   $.ajax({
  //     url: "./resumeData.json",
  //     dataType: "json",
  //     cache: false,
  //     success: function(data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.getResumeData();
  // }
  
  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      {/* <Portfolio data={resumeData.portfolio} /> */}
      <Contributions data={resumeData.contributions} />
      <Resume data={resumeData.resume} />
      {/* <Contact data={this.state.resumeData.main} /> */}
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
