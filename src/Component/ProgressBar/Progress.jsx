import React from 'react'
import './Progress.css'

const Progress = () => {
  return (
    <div className="progressbar">
      <div class="row d-flex justify-content-center mt-100">
        <div class="col-md-6">
          <div class="progress blue">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value">90.5%</div>
          </div>

          <div class="progress yellow">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value">37.5%</div>
          </div>

          <div class="progress blue">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value">37.5%</div>
          </div>
           {/* <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Progress
