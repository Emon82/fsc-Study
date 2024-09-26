import React from 'react'
// import Navbar from '../Component/Navbar/Navbar'
// import Banner from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'

const FindUniversity = () => {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Find a University" text=" Find a University" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-lg-7 col-md-12 mb-4">
            <table className="table table-bordered">
              <thead className="bg-primary text-white">
                <tr style={{ color: "darkblue" }}>
                  <th scope="col">Country</th>
                  <th scope="col">Name of Universities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Australia</td>
                  <td>Cambridge International College, Melbourne</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Curtin University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>RMIT University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Kingsway Institute</td>
                </tr>
                <tr>
                  <td></td>
                  <td>King's Own Institute</td>
                </tr>
                <tr>
                  <td>Austria</td>
                  <td>University of Vienna</td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>University of Regina</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Brock University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>George Brown College</td>
                </tr>
                <tr>
                  <td></td>
                  <td>IBT College</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Lakehead University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Memorial University of Newfoundland</td>
                </tr>
                <tr>
                  <td></td>
                  <td>ILI - International Language Institute (ILI)</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Nova Scotia International Schools</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Carleton University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Concordia University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Dalhousie University</td>
                </tr>

                <tr>
                  <td></td>
                  <td>Thompson Rivers University</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Camosun College</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Alexander College</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Brandon University & English Language Institute</td>
                </tr>
                <tr>
                  <td></td>
                  <td>LSBF</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Canadian College of English Language</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Cape Breton University</td>
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

export default FindUniversity
