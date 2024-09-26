import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Banner from '../BannerComponent'
import Footer from '../Footer/Footer'



function ManagingMoney() {
  return (
    <div>
      <NavbarComponent />
      <Banner title="Managing Money" text="Managing Money" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Managing Money Wisely While Studying Abroad: Tips for Success
            </h2>
            <p>
              Studying abroad is an exciting adventure that offers the
              opportunity to explore new cultures, gain valuable experiences,
              and broaden your horizons. However, managing finances during this
              period is a crucial aspect of ensuring a smooth and enjoyable
              journey. In this article, we'll discuss some essential tips on how
              to manage your money effectively while studying abroad.
            </p>

            <h4 style={{ color: "darkblue" }}>Create a Budget:</h4>
            <p>
              The foundation of sound financial management is a well-structured
              budget. Before departing for the study abroad adventure, create a
              detailed budget that outlines expected income and expenses. Be
              realistic and account for everything, including tuition,
              accommodation, food, transportation, and leisure activities.
              Having a budget will help keep track of your spending and prevent
              overspending.
            </p>

            <h4 style={{ color: "darkblue" }}>Research Costs in Advance:</h4>
            <p>
              Take the time to research the cost of living in your host country.
              Understanding the price levels for everyday items can help you set
              realistic budgeting goals. It's also a good idea to identify
              affordable places to eat, shop, and access basic services to save
              money without compromising experience.
            </p>

            <h4 style={{ color: "darkblue" }}>Open a Local Bank Account:</h4>
            <p>
              Open a local bank account in the country student studying. This
              can save you money on currency conversion fees and make it easier
              to manage your finances. Many universities abroad have
              partnerships with local banks, offering special accounts for
              international students.
            </p>

            <h4 style={{ color: "darkblue" }}>Use a Currency Exchange App:</h4>
            <p>
              Currency exchange apps and websites can help you monitor exchange
              rates and get the best deal when converting your home currency
              into the local currency. Keep an eye on favorable exchange rates
              and exchange money when it's most advantageous.
            </p>

            <h4 style={{ color: "darkblue" }}>Credit Cards and Debit Cards:</h4>
            <p>
              Before using your credit or debit cards abroad, inform your bank
              about your travel plans to avoid any unexpected card freezes due
              to suspicious activity. Additionally, consider getting a credit
              card with no foreign transaction fees to save on international
              purchases.
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

export default ManagingMoney
