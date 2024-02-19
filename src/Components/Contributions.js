import React from "react";
// import Fade from "react-awesome-reveal";

const Contributions = (props) => {

  const paper = props.data.paper.map(function (paper) {
    return (
      <div key={paper.title}>
        <p><span className='paper-authors'>{paper.authors}</span><span className='paper-title'> {paper.title}</span><span className='journal-info'> {paper.journalinfo}</span></p>
        <p className="download">
          <a href={paper.url} download className="button btn" target='_blank' rel="noopener noreferrer">
            <i className="fa fa-arrow-right"></i>Open
          </a>
        </p>
      </div>
    );
  });
  
  return (
    <section id="contributions">
        <div className="row contributions">
          <div className="four columns header-col">
            <h1>
              <span>Publications</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="row item">
              <div className="twelve columns">{paper}</div>
            </div>
          </div>
        </div>

        {/* <div className="row contributions">
          <div className="four columns header-col">
            <h1>
              <span>Supervision</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="row item">
              <div className="twelve columns">{supervision}</div>
            </div>
          </div>
        </div>

        {/* <div className="row contributions">
          <div className="four columns header-col">
            <h1>
              <span>Reviewed Papers</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="row item">
              <div className="twelve columns"></div>
            </div>
          </div>
        </div>


        <div className="row contributions">
          <div className="four columns header-col">
            <h1>
              <span>Funding</span>
            </h1>
          </div>

          <div className="eight columns main-col">
            <div className="row item">
              <div className="twelve columns"></div>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default Contributions;
