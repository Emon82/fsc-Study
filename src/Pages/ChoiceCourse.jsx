import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function ChoiceCourse() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="How to Choose Course" text="Choose Course" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Navigating Higher Education Abroad: How to Choose the Right Course
              at a Foreign University
            </h2>
            <p>
              Studying in a foreign country is a dream of many students
              struggling to fulfil. It is a life-changing opportunity to explore
              new places, versatile cultures and last but not least, world-class
              education. However, choosing the perfect course at a foreign
              university can be a daunting task.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Self-Reflection and Goal Setting:
            </h4>
            <p>
              Before delving into university catalogs, take a step back and
              reflect on your academic and career aspirations. Ask yourself
              questions like, What are my passions and interests? What are the
              mission and vision of career goals? These queries will help
              students choosing the right path for reaching the goal.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Research Your Study Destination:
            </h4>
            <p>
              Begin your journey by researching your desired study destination.
              Acknowledging factors such as industrial position, culture,
              education system and cost of living, many countries are well-known
              for different fields of study. some facts need to be known such as
              language, cost of living, study system and weather. Because of
              these reasons, some countries are well known for specific fields
              of study because of the evolving industry there.
            </p>

            <h4 style={{ color: "darkblue" }}>University Exploration:</h4>
            <p>
              Explore universities in your chosen country that offer the course
              you're interested in. Students should look at universities'
              profile, ranking on related subject, experience faculty member's,
              and available facilities provided by universities. Student
              reviews, ranking from neutral resources, and university websites
              are great resources for collecting information.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Accreditation and Recognition:
            </h4>
            <p>
              Ensure that both the university and the specific course you're
              interested in are accredited and recognized by relevant
              authorities and professional bodies. These accreditations ensure
              worldwide recognition of the university for specific degree.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Course Curriculum and Specializations:
            </h4>
            <p>
              Students should dive into the details of the course curriculum.
              Followup core subjects, assignments, course time management to
              ensure the course is suitable for the students. Many universities
              are well recognised for specific programs. Students should
              prioritize those universities before that.
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

export default ChoiceCourse
