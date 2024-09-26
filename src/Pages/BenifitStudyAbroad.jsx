import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function BenifitStudyAbroad() {
  return (
    <div>
      <Navbar />
      <Banner
        title="Study Abroad Benefits
"
        text="Benefits"
      />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Unlocking the World: The Life-Changing Benefits of Studying
              Foreign Country
            </h2>
            <p>
              Studying in foreign country is a life changing experience that
              offers a unique mix of education, adventure and personal
              development. It's a long journey that break the boundaries of the
              classes and open doors of opportunities through enriching
              student’s life in countless ways.
            </p>

            <h4 style={{ color: "darkblue" }}>Cultural Immersion</h4>
            <p>
              One of the strong benefits of studying abroad is the connection
              with students of different culture. Living in a foreign country
              allows students to experience daily life, customs and traditions.
            </p>

            <h4 style={{ color: "darkblue" }}>Language Proficiency</h4>
            <p>
              Studying in a foreign country provides an ideal environment for
              improving student’s language proficiency. Conversing with native
              speakers and navigating daily life in a different language
              accelerates your linguistic abilities.
            </p>

            <h4 style={{ color: "darkblue" }}>Personal Growth</h4>
            <p>
              Leaving the comforts of home to study abroad is a journey of
              self-discovery. It helps students to overcome from their comfort
              zone and gain necessary skills.
            </p>

            <h4 style={{ color: "darkblue" }}>Global Networking</h4>
            <p>
              Studying abroad introduces you to a diverse group of people,
              including fellow international students and local peers. These
              connections can lead to lifelong friendships and invaluable
              professional networks. Networking on a global scale can open doors
              to international job opportunities.
            </p>

            <h4 style={{ color: "darkblue" }}>Career Advancement</h4>
            <p>
              Employers highly value the qualities developed during a study
              abroad experience, such as adaptability, cross-cultural
              communication skills, and a global perspective. Having "study
              abroad" on your resume can make you stand out in the competitive
              job market.
            </p>
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

export default BenifitStudyAbroad
