import React from 'react'

function AffectDetection () {

    return (
        <>
            <div class='row affect-detection portfolio-content'>
                <div class="twelve columns collapsed">
                    <div class='bgrid-halves'>
                        <h1>Inferring emotions from brain activity in VR</h1>
                        <p>A technique for detecting affective states from electroencephalography (EEG) signals is proposed. The technique was tested in an experiment in virtual reality. Data was analysed using Matlab, R and Python.</p>
                        <p>Two variants of the technique were compared. The difference between both variants was the method used for feature selection. Those methods are Linear Mixed-Effects (LME) and Recursive Feature Elimination with Cross Validation (RFECV). The former has been used previously for feature selection in supervised learning problems, but it is not clear whether it is suitable for analysis of time series. The latter is suitable for time series analysis, but it is not common to use it for feature selection.</p>
                        <p>Therefore, RFECV is used as a benchmark to evaluate the performance of the proposed approach with LME. At the same time, LME is used as a benchmark to evaluate the performance of RFECV when applied to features extracted from time series. Both feature selection methods lead to classification models with similar accuracy, precision and recall. The mean accuracy of the classification models was between 87% and 93%.</p>
                        <p class='bold-text'>Read the paper <a href='https://www.frontiersin.org/articles/10.3389/frvir.2022.964754/full' target='blank'>here</a></p>
                        <p class='bold-text'>The code is open source and available <a href='https://github.com/aepinilla/affect_detection' target='blank'>here</a></p>
                        <img src='images/portfolio/affect_detection/affect_detection.jpg'></img>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AffectDetection