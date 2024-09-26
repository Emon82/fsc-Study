import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function Networking() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        title="Networking & Socialising"
        text="Networking & Socialising"
      />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Networking and Socializing: The Keys to a Fulfilling Study Abroad
              Experience
            </h2>
            <p>
              Studying in a foreign country is a life changing experience that
              opens up new and exciting opportunities for a students’ academic
              and professional growth. While academics are undoubtedly an
              important aspect of your international journey, networking and
              socializing should not be overlooked. Developing friends and
              professional connections during living abroad can enrich
              experience in ways students never imagined.
            </p>

            <h4 style={{ color: "darkblue" }}>Career Progression:</h4>
            <p>
              Networking while studying abroad can significantly impact your
              future career prospects. By communicating with university
              professors, fellow students and corporate people in relevant
              field, students can get access into the local industries,
              corporate trends and potential job opportunities. These
              connections may lead to internships, part-time jobs or
              post-graduate employment opportunities in your host country.
            </p>

            <h4 style={{ color: "darkblue" }}>Cultural exchange:</h4>
            <p>
              Networking isn't just about career advancement; It's also about
              enriching your cultural experience. Interacting people of
              versatile culture will give a student a better point of view in
              international affairs. Diversify environment will help students
              deal challenges in a confident approach.
            </p>

            <h4 style={{ color: "darkblue" }}>Academic Enrichment:</h4>
            <p>
              Networking with professors and fellow students can enhance your
              academic journey. Engaging in discussions, attending seminars and
              collaborating on research projects can help you better understand
              your field of study. This is an excellent way to access resources
              and academic support.
            </p>

            <h4 style={{ color: "darkblue" }}>Attend Social Events:</h4>
            <p>
              Most universities abroad organize various social events ranging
              from welcome parties to cultural festivals. These social
              gatherings will help to build good networking in corporate
              environment that will help in career progression.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Join clubs and organizations :
            </h4>
            <p>
              Joining different clubs, sports team and other extra curricular
              activities will help students create groups with same interest.
              Its also a great opportunity to practice leadership values in
              necessary situations.
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

export default Networking
