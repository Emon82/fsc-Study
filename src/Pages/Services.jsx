import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
function Services() {
  return (
    <div>
      <Navbar />
      <Banner title="Services & Facilities" text="Services & Facilities" />

      <div className="container card p-4 my-4 bg-light  shadow">
        {/* Objectives Section */}
        <div className="  row ">
          <div className="col-12 ">
            <h2 className="section-title">For Partner Universities</h2>
            <p className="section-text">
              Since 1993, FSC has established itself as a leading provider of
              global higher education services. We offer a wide range of
              services and facilities, including:
            </p>
            <ol className="section-text">
              <li>
                Regularly organizing spot admissions, seminars, and workshops on
                behalf of our foreign partner institutions in the capital and
                various district towns.
              </li>
              <li>
                Maintaining strong relationships with foreign institutions and
                students, ensuring seamless communication and support.
              </li>
              <li>
                Distributing up-to-date information among students to keep them
                informed about educational opportunities.
              </li>
              <li>
                Campaigning for effective promotion in the local market and
                assisting with advertising and marketing efforts.
              </li>
              <li>
                Conducting comprehensive market research on behalf of
                international universities, colleges, and institutes.
              </li>
              <li>
                Providing exclusive travel consultancy services, including
                processing spouse, business, and visit visas, as well as
                offering tour packages.
              </li>
              <li>
                Facilitating air ticketing (both domestic and international),
                hotel reservations, and comprehensive travel and insurance
                services.
              </li>
              <li>
                Offering free transportation around the city for our clients and
                students.
              </li>
              <li>
                {" "}
                Providing free office space and seminar facilities to support
                educational events.
              </li>
              <li>
                Delivering free digital marketing and SMS services to enhance
                outreach.
              </li>
            </ol>

            <p className="section-text">
              Our services include high-quality delivery by our dedicated staff
              and officers at FSC-Cambrian Education Group. We market
              educational opportunities year-round across various levels at our
              different institutes, equipped with state-of-the-art facilities
              and highly experienced teaching staff. Our team consists of
              qualified experts and professionals who receive regular training
              to stay updated on the latest education systems and opportunities
              globally. We have introduced a "One-Stop Solution" integrated
              quality service system, ensuring high success rates for students.
              Students who have been sent by us to study at foreign universities
              have gone on to achieve successful and fulfilling careers both at
              home and abroad. We pride ourselves on efficiently managing
              operations and are prepared to embrace any risks and challenges
              associated with launching new programs with existing and new
              partners. Our financial strength is robust, highlighted by the FSC
              Global Network office situated in our own premises. The Cambrian
              campuses, including the Cambrian International Study Center and
              Cambrian International Language Institute, are also built on our
              own land in the heart of the capital city of Bangladesh, further
              solidifying our commitment to providing quality education and
              services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services
