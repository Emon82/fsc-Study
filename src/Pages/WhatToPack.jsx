import React from 'react'
import NavbarComponent from '../Component/Navbar/Navbar'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'

function WhatToPack() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="What to Pack" text="What to Pack" />
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-7">
            <h2 style={{ color: "darkblue" }}>
              Essential Packing Guide for International Students Going to Study
              Abroad
            </h2>
            <p>
              As students prepare to leave their home and move on to a new
              academic and cultural adventure, packing necessary things is
              crucial to ensure a smooth transition. To help pack efficiently
              and effectively, we' made a guide on what to must pack for a study
              overseas trip.
            </p>

            <h4 style={{ color: "darkblue" }}>Important Documents</h4>
            <p>
              Passport, student visa, acceptance letter, and any other official
              documents required for entry. Make photocopies and digital backups
              of these documents and keep them in a separate bag for added
              security.
            </p>

            <h4 style={{ color: "darkblue" }}>Clothing</h4>
            <p>
              Pack a mix of clothing suitable for the different weather
              conditions of the destination country. Include basics like
              T-shirts, jeans, and comfortable shoes, as well as formal wear for
              special occasions or presentations.
            </p>

            <h4 style={{ color: "darkblue" }}>Personal care products</h4>
            <p>
              Although toiletries are available abroad, it can be comforting to
              be supplied for the first few weeks. Pack essentials like
              toothpaste, soap bars, shampoo and any specific personal care
              products Consider travel-size containers to save space.
            </p>

            <h4 style={{ color: "darkblue" }}>Medicines and First Aid</h4>
            <p>
              In the case of prescription medications, bring an adequate supply
              for the duration of stay. Include a copy of your prescription and
              a doctor's note. A small first aid kit with basics like bandages,
              pain relievers and antiseptics can be invaluable.
            </p>

            <h4 style={{ color: "darkblue" }}>Necessary Gadgets</h4>
            <p>
              Laptop, tablet and smartphone will be essential for studying and
              staying connected. Keeping chargers, adapters and a power bank is
              a must.
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

export default WhatToPack
