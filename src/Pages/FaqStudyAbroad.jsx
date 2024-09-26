import React from 'react';
import BannerComponent from '../Component/BannerComponent';
import Footer from '../Component/Footer/Footer';
import NavbarComponent from '../Component/Navbar/Navbar';

function FaqStudyAbroad() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Study Abroad FAQ" text="FAQ" />

      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Know About Study Abroad: Frequently Asked Questions (FAQs)
            </h2>
            <p>
              Lots of questions raised while taking the decision of studying
              abroad. Its a life changing decision that can build an
              individuals’ life to properity. Some common queries about studying
              abroad are:
            </p>

            <h4 style={{ color: "darkblue" }}>Why should I study abroad?</h4>
            <p>
              Study in foreign country opens opportunity of multicultural
              diversification. As a result, students can get the opportunity in
              a wide professional field. Lots of career options get enable for
              the students because of the vast academic programs offered by
              universities globally.
            </p>

            <h4 style={{ color: "darkblue" }}>
              How do I choose the right study abroad program?
            </h4>
            <p>
              Selecting the right program depends on students’ academic goals,
              interests, and preferences. Students first need to research
              universities to get the suitable one for the student in term of
              program availability, expense and career options.
            </p>

            <h4 style={{ color: "darkblue" }}>Is studying abroad expensive?</h4>
            <p>
              The cost of studying abroad varies widely depending on the
              country, program, and lifestyle choices. Some universities can be
              expensive interns of country and programs. Scholarships and other
              financial options are available for qualified students for smooth
              academic journey.
            </p>

            <h4 style={{ color: "darkblue" }}>
              How do a student can apply for a student visa?
            </h4>
            <p>
              The process for obtaining a student visa varies by country.
              Typically, you'll need to provide proof of acceptance to an
              accredited institution, financial statements, a valid passport,
              and sometimes, evidence of language proficiency. Consult the
              embassy or consulate website of your chosen destination for
              specific requirements.
            </p>

            <h4 style={{ color: "darkblue" }}>What about language barriers?</h4>
            <p>
              Language proficiency requirements depend on the program and
              destination. Many universities offer courses in English, but some
              may require language proficiency tests like TOEFL or IELTS. Other
              language programs also available to improve students skills.
            </p>

            <h4 style={{ color: "darkblue" }}>
              Can I work while studying abroad?
            </h4>
            <p>
              In many countries international students can work part-time while
              studying. most countries accept 20 hours part-time work for
              international students. Living cost can easily be earn with this.
            </p>

            <h4 style={{ color: "darkblue" }}>
              How do I find accommodation abroad?
            </h4>
            <p>
              Most universities offer accommodation options for international
              students called dormitories. There is also shared apartments
              available for students near universities called off-campus housing
              or home-stays.
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

export default FaqStudyAbroad
