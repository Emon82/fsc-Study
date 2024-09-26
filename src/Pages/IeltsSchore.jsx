import React from 'react';
import BannerComponent from '../Component/BannerComponent';
import Footer from '../Component/Footer/Footer';
import NavbarComponent from '../Component/Navbar/Navbar';

function IeltsSchore() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="IELTS Score" text="IELTS" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-lg-7 col-md-12 mb-4">
            <h2 style={{ textAlign: "justify" }}>
              IELTS Score Requirements for Higher Study
            </h2>
            <p>
              IELTS is the world's most popular English test for work, study and
              migration. Join a community of more than 2.9 million people each
              year who choose IELTS as their measure of English language skill.
              IELTS - International English Language Testing System
            </p>
            <h2 style={{ textAlign: "justify" }}>What is IELTS?</h2>
            <p>
              IELTS, the International English Language Testing System, is
              designed to assess the language ability of candidates who need to
              study or work where English is the language of communication.
              IELTS is jointly managed by the University of Cambridge ESOL
              Examinations (Cambridge ESOL), British Council and IDP: IELTS
              Australia. IELTS conforms to the highest international standards
              of language assessment. IELTS is recognised by universities and
              employers in many countries, including Australia, Canada, New
              Zealand, the UK and the USA. It is also recognised by professional
              bodies, immigration authorities and other government agencies.
            </p>
            <table className="table table-bordered">
              <thead className="bg-primary text-white">
                <tr style={{ color: "darkblue" }}>
                  <th scope="col">Country</th>
                  <th scope="col">Bachelor</th>
                  <th scope="col">Master's</th>
                  <th scope="col">PhD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Australia</td>
                  <td>IELTS - 6.0 (No Band Below 5.5)</td>
                  <td>6.5 IELTS No Band Below 6.0</td>
                  <td>6.5</td>
                </tr>
                <tr>
                  <td>Austria</td>
                  <td>IELTS - 6.0 (No Band Below 5.5)</td>
                  <td>6.5 IELTS No Band Below 6.0</td>
                  <td>7.0</td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td> With/without IELTS or ESL 6.5/6.0/ No Band Below 5.0</td>
                  <td>6.5 IELTS No Band Below 6.0</td>
                  <td>7.5/7.0</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>IELTS Not Required</td>
                  <td>IELTS Not Required</td>
                  <td>IELTS Not Required</td>
                </tr>
                <tr>
                  <td>Cyprus</td>
                  <td>IELTS 6.0/5.5/ No Band Below 5.0</td>
                  <td>6.0 IELTS No Band Below 5.5</td>
                  <td>7.0/6.5</td>
                </tr>
                <tr>
                  <td>Czech Republic</td>
                  <td>IELTS - 6.0/ 5.5</td>
                  <td>IELTS - 6.0/ 5.5</td>
                  <td>IELTS - 6.0/ 5.5</td>
                </tr>
                <tr>
                  <td>Denmark</td>
                  <td>IELTS - 6.0 (No Band Below 5.5)</td>
                  <td>6.5 IELTS</td>
                  <td>7.0/6.5</td>
                </tr>
                <tr>
                  <td>Finland</td>
                  <td>IELTS - 6.0</td>
                  <td>6.5 IELTS</td>
                  <td>7.0</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>
                    Bachelor - 6.0 German Language - A1 - A2 Full Free
                    Scholarship
                  </td>
                  <td>6.5 IELTS</td>
                  <td>7.0/6.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-5">
            <div className="card p-4 shadow-sm">
              <div className="" style={{ color: "darkblue" }}>
                <h4>Interested in studying abroad with FSC?</h4>
                <p>
                  Enter your details below and we'll call you back when it suits
                  you.
                </p>
              </div>

              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">
                    Your preferred study destination
                  </label>
                  <select className="form-select" id="destination" required>
                    <option>Please Select Destination</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IeltsSchore
