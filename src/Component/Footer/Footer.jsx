import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="">
      <footer  className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>CORPORATE OFFICE</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Payment Center</a>
                    </li>
                    <li>
                      <a href="#">Contact Directory</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                    <li>
                      <a href="#">News and Updates</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Study Abroad</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Accessibility</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4>Find a Course</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Parks and Recreation</a>
                    </li>
                    <li>
                      <a href="#">Public Works</a>
                    </li>
                    <li>
                      <a href="#">Police Department</a>
                    </li>
                    <li>
                      <a href="#">Fire</a>
                    </li>
                    <li>
                      <a href="#">Mayor and City Council</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Living Abroad</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="LinkedIn">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoYoutube" title="YouTube">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  © Powered by 2024 - TechKnowGram Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
