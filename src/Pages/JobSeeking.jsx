import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function JobSeeking() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Job Seeking Tips" text="Job Seeking Tips" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Navigating the Job Search While Studying Abroad: Essential Tips
              for Success
            </h2>
            <p>
              Study in a foreign country not only provide world class cultural
              and academic experience but also brings the opportunities for
              global career growth. Whether you're looking for part-time work
              during your studies or considering post-graduation employment in
              your host country, effective job hunting is crucial.
            </p>

            <h4 style={{ color: "darkblue" }}>Start early and be proactive:</h4>
            <p>
              Start your job search early before you arrive in your host
              country. Research job prospects, local industries and the job
              market. Take advantage of university career services, job fairs
              and networking events to make connections and gather information.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Understand visa and work regulations:
            </h4>
            <p>
              Familiarize yourself with visa and work regulations in your host
              country. Different countries have different rules regarding the
              employment rights of international students.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Create an impressive resume and cover letter:
            </h4>
            <p>
              Prepare an updated resume and cover letter for job application.
              Highlight relevant skills, experience and qualifications.
              Emphasize any international experience, language skills, or
              cultural competence that would make you a valuable candidate.
            </p>

            <h4 style={{ color: "darkblue" }}>Use university resources:</h4>
            <p>
              Take support from the career service authority of your university.
              These bodies can help you with career guideline, writing proper
              resume and job search strategies making processes. University
              careers counselors often have valuable insight into the local job
              market.
            </p>

            <h4 style={{ color: "darkblue" }}>Network actively:</h4>
            <p>
              Networking is the net worth in terms of the job search process.
              Students should attend networking events, workshops and enrol
              short courses related to their career. Students should try to be
              connected with professors, fellow students and professionals in
              their host country. Professional platforms like LinkedIn and other
              networking portals can also be useful for online networking.
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

export default JobSeeking
