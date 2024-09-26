import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function Developing() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        title="Developing your Skills"
        text="Developing your Skills"
      />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Developing Skills While Studying Abroad: A Transformative Journey
            </h2>
            <p>
              Studying abroad is not just about earning a degree from a foreign
              country, It is an opportunity to develop a wide range of personal
              and professional skills that will benefit them. As students move
              on this great journey to enhance their academic knowledge,
              experience new cultures, and build a global network, Focusing on
              skills is an integral part of the experience.
            </p>

            <h4 style={{ color: "darkblue" }}>Cultural adaptability:</h4>
            <p>
              Studying abroad immerses you in a new cultural context, forcing
              you to adapt and navigate unfamiliar situations. Understand and
              give respect to different customs, traditions and perspectives
              promote empathy and tolerance towards them.
            </p>

            <h4 style={{ color: "darkblue" }}>Communication skills:</h4>
            <p>
              Living in a foreign country where your native language may not be
              the primary means of communication can significantly improve your
              language skills. Beyond linguistic development, you will also
              enhance your non-verbal communication skills, as human interaction
              is largely expressed through gestures, expressions and body
              language.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Independence and self-reliance:
            </h4>
            <p>
              Studying abroad often means leaving behind the safety of family
              and friends. Leaving this comfort zone, students learn to be self
              dependent, self disciplined and how to make important decisions
              independently. These qualities are highly important for
              international students to grow and be confident in foreign
              environment.
            </p>

            <h4 style={{ color: "darkblue" }}>Problem-solving:</h4>
            <p>
              Facing challenges living in foreign country From solving visa
              issues to managing finances , students will develop creative
              solutions to unexpected situations.
            </p>

            <h4 style={{ color: "darkblue" }}>Time management:</h4>
            <p>
              A new environment requires effective time management to balance
              studies, part-time jobs, extracurricular activities and personal
              life. Time and tide wait for none. That is why trying to do the
              right work on the right time is the way to success.
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

export default Developing
