import React, { useState } from 'react';
import Modal from 'react-modal';
import AffectDetection from './PortofolioPieces/AffectDetection';
import AffectiveParticles from './PortofolioPieces/AffectiveParticles';
import Testigos from './PortofolioPieces/Testigos';
import HomeAutopilot from './PortofolioPieces/HomeAutopilot';

let id = 0;
const Portfolio = (props) => {

  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);
  
  const setModal1IsOpenToTrue =()=>{
    setModal1IsOpen(true)
  }

  const setModal1IsOpenToFalse =()=>{
      setModal1IsOpen(false)
  }

  const setModal2IsOpenToTrue =()=>{
    setModal2IsOpen(true)
  }

  const setModal2IsOpenToFalse =()=>{
      setModal2IsOpen(false)
  }

  const setModal3IsOpenToTrue =()=>{
    setModal3IsOpen(true)
  }

  const setModal3IsOpenToFalse =()=>{
      setModal3IsOpen(false)
  }

  const setModal4IsOpenToTrue =()=>{
    setModal4IsOpen(true)
  }

  const setModal4IsOpenToFalse =()=>{
      setModal4IsOpen(false)
  }


  // const projects = props.data.projects.map(function (projects) {
  //   let projectImage = "images/portfolio/" + projects.image;
  //   let projectShortName = projects.shortName
  //   let ModalContent;

  //   return (
      // <div key={id++} className="columns portfolio-item">
      //   <div className="item-wrap">
      //     <img src={projectImage} alt={projects.title} />
      //     <div class='project-title'>{projects.title}</div>
      //     <button onClick={setModalIsOpenToTrue}>Click to View My Favourite Animes</button>
      //     <Modal isOpen={modalIsOpen}>
      //       <button onClick={setModalIsOpenToFalse}>x</button>
      //       {ModalContent}
      //     </Modal>
      //   </div>
      // </div>
  //   );
  // });

  return (
    <section id="portfolio">
      {/* <Fade left duration={1000} distance="40px"> */}
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>These are some of my projects</h1>

            <div id="portfolio-wrapper" className="bgrid-halves">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src='images/portfolio/01.jpg' alt={'Affect Detection in VR'} />
                  <div class='project-title'>
                    Inferring emotions from brain activity in VR
                    <button class='view-project fa fa-eye' onClick={setModal1IsOpenToTrue}></button>
                    <Modal isOpen={modal1IsOpen}>
                      <button onClick={setModal1IsOpenToFalse}>x</button>
                      <AffectDetection />
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src='images/portfolio/02.jpg' alt={'Affect Detection in VR'} />
                  <div class='project-title'>
                    Visual representation of affective states in VR
                    <button class='view-project fa fa-eye' onClick={setModal2IsOpenToTrue}></button>
                    <Modal isOpen={modal2IsOpen}>
                      <button onClick={setModal2IsOpenToFalse}>x</button>
                      <AffectiveParticles />
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src='images/portfolio/03.jpg' alt={'Affect Detection in VR'} />
                  <div class='project-title'>
                    Testigos.co: citizens auditing elections
                    <button class='view-project fa fa-eye' onClick={setModal3IsOpenToTrue}></button>
                    <Modal isOpen={modal3IsOpen}>
                      <button onClick={setModal3IsOpenToFalse}>x</button>
                      <Testigos />
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src='images/portfolio/04.jpg' alt={'Affect Detection in VR'} />
                  <div class='project-title'>
                    HomeHeatapp
                    <button class='view-project fa fa-eye' onClick={setModal4IsOpenToTrue}></button>
                    <Modal isOpen={modal4IsOpen}>
                      <button onClick={setModal4IsOpenToFalse}>x</button>
                      <HomeAutopilot />
                    </Modal>
                  </div>
                </div>
              </div>


              
            </div>
          </div>
        </div>
      {/* </Fade> */}
    </section>
  );
}

export default Portfolio;
