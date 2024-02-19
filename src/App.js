import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
// import Portfolio from "./Components/Portfolio";
import Contributions from "./Components/Contributions";
import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import resumeData from "./resumeData.json";


function App () {  
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
