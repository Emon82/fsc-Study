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
              Since 1993, BSB Global Network has been a recognized leader in
              global higher education services. We provide different services
              and facilities such as:
            </p>
            <ol className="section-text">
              <li>
                Organizing spot admission, seminars, and workshops on behalf of
                our foreign partner institutions regularly in the capital city
                and other district towns.
              </li>
              <li>Maintaining liaison with foreign institutes and students.</li>
              <li>Distributing upgrade information among the students.</li>
              <li>Campaigning for the best promotion at the local market.</li>
              <li>Assisting with advertising and marketing.</li>
              <li>
                Conducting market research on behalf of international
                universities, colleges, and institutes.
              </li>
              <li>An exclusive travel consultancy.</li>
              <li>Processing Spouse, Business, and Visit Visas.</li>
              <li>Providing tour packages.</li>
              <li>Air ticketing (Domestic and International).</li>
              <li>Hotel reservation services.</li>
              <li>Travel and insurance services.</li>
              <li>Offering free transportation around the city.</li>
              <li>Providing free office space.</li>
              <li>Providing free seminar space.</li>
              <li>Offering free digital marketing services.</li>
              <li>Offering free SMS services.</li>
              <li>
                BSB’s sister concern, Marketing & Expo Management Company,
                arranges International Education Fairs.
              </li>
              <li>
                Handling marketing, publication, advertisement, and promotional
                events.
              </li>
              <li>
                Regular students studying at FSC Cambrian Education Group.
              </li>
              <li>Family and friends of existing students.</li>
              <li>Good references for good services delivered.</li>
              <li>
                Giant Education group everywhere, building a strong positive
                reputation.
              </li>
              <li>
                High-quality services delivered by staff and officers of
                FSC-Cambrian Education Group.
              </li>
              <li>
                We market year-round and at all levels of education at our
                different institutes.
              </li>
              <li>
                We have well-equipped premises and highly experienced teaching
                staff.
              </li>
              <li>
                A team of highly qualified experts and professional staff who
                are trained regularly to stay abreast of the latest education
                systems and opportunities around the globe.
              </li>
              <li>
                We have introduced a “One stop solution” integrated quality
                service system.
              </li>
              <li>We have high success rates.</li>
              <li>
                Students sent by us who are studying in foreign universities are
                successful and have bright careers both at home and abroad.
              </li>
              <li>
                We are efficient in managing operations and ready to undertake
                any risk and challenge to launch new programs with existing and
                new partners.
              </li>
              <li>
                We have a solid base of financial strength, such as the FSC
                Global Network office located in our own premises. Cambrian
                campuses, including the Cambrian International Study Center and
                Cambrian International Language Institute, are built on our own
                land in the heart of the capital city of Bangladesh.
              </li>
            </ol>
            
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}

export default Services
