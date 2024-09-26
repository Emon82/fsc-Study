import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function DealingWithStreet() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Dealing with Stress" text="Dealing with Stress" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Navigating Stress While Studying Abroad: Strategies for Success
            </h2>
            <p>
              Living in a foreign country is a remarkable experience. However,
              it is not unusual to have moments of stress and adjustment along
              with the excitement of such an adventure. From exploring a new
              academic environment to adapting in a different culture, a variety
              of factors can contribute to stress.
            </p>

            <h4 style={{ color: "darkblue" }}>Build self-awareness:</h4>
            <p>
              Understanding the stress triggers is the first step to managing
              them effectively. Reflect on what situations or challenges make
              feel stressed. By identifying these trigger points, students can
              build proactive strategies to deal with these.
            </p>

            <h4 style={{ color: "darkblue" }}>Maintain A Healthy Routine:</h4>
            <p>
              Priorities your physical fitness by sticking to a balanced
              routine. Eat healthy, get enough sleep and exercise regularly. A
              healthy body can take challenges and do perfume duty in a positive
              aspect.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Practice Mindfulness And Relaxation Techniques:
            </h4>
            <p>
              Mindfulness, meditation and deep breathing exercises are powerful
              tools for managing stress. This practice help students get focused
              on their personal and academic journey.
            </p>

            <h4 style={{ color: "darkblue" }}>Set Realistic Goals:</h4>
            <p>
              When studying abroad, you may want to achieve everything at once.
              However, setting realistic goals and breaking them down into
              smaller steps can be overwhelming.
            </p>

            <h4 style={{ color: "darkblue" }}>Stay Organized:</h4>
            <p>
              Effective time management and organization can reduce stress
              related to academic responsibilities. Using tools like task
              planner, online calendars and todo lists to keep track of
              assignments, tests, and other commitments.
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

export default DealingWithStreet
