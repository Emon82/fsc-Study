import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function StudyTips() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Study Tips" text="Study Tips" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Navigating Academic Success: Essential Study Tips for
              International Students Living Abroad
            </h2>
            <p>
              Living and studying in a foreign country is an extraordinary
              journey that enables the opportunity to know new cultures, expand
              views and getting world-class education from top universities.
              However, adapting to a new academic environment while adjusting to
              life abroad can be challenging. Ensuring international students’
              academic success, it is very much important to adopt effective
              study strategies that help students excel in their course journey.
              We will explore valuable study tips designed for the unique
              experience while studying abroad.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Create a structured study schedule
            </h4>
            <p>
              Adjusting to a new routine in a foreign country can be
              overwhelming. Developing a compatible study schedule will give
              students a sense of stability. Allocate specific time for
              studying, attending classes and leisure activities.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Adopt effective note taking techniques:
            </h4>
            <p>
              Different cultures often have unique teaching methods. Exploring
              different techniques regarding note-taking such as notes, mind
              maps like digital tools. Active note taking process will increases
              understanding in subject, making it easier to prepare for exams.
            </p>

            <h4 style={{ color: "darkblue" }}>Seeking Peer Support</h4>
            <p>
              Form study groups with fellow international and local students.
              Work with peers allows students to generate and exchange ideas,
              clear doubts and gain different perspectives. Joining group
              discussions help students understand core concepts more
              thoroughly.
            </p>

            <h4 style={{ color: "darkblue" }}>Use Campus Resources</h4>
            <p>
              Most universities offer academic resources to support
              international students. Students can take a great advantage of
              writing centers, tutoring supports, and workshops that focus on
              academic skills development.
            </p>

            <h4 style={{ color: "darkblue" }}>Develop Language Skills</h4>
            <p>
              Language barriers can create challenges in understanding speech
              and participating in discussions. Participating language
              development programs and activities such as spoken language speech
              exchange groups or language classes to improve foreign language
              skills. Reading local online portals, newspapers and books can
              help students with language development.
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

export default StudyTips
