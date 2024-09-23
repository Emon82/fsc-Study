import React from 'react'
import BannerComponent from '../Component/BannerComponent'
import Footer from '../Component/Footer/Footer'
import NavbarComponent from '../Component/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

const Collboration = () => {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        title="Strengths and Collaboration"
        text="Strengths and Collaboration"
      />

      <div className="container card p-4 my-5 bg-light  shadow">
        {/* Objectives Section */}
        <div className="  row ">
          <div className="col-12 ">
            <h2 className="section-title">Strengths and Assets</h2>
            <p className="section-text">
              The FSC Global Network has been formed on a solid ground of
              management support with a long term vision. Through our service to
              the Bangladeshi student’ community for the last 26 years with a
              sound reputation and high success rates, the FSC Global Network
              has reached the leading position in the country.
            </p>
            <p className="section-text">
              It is member of many national and international professional
              organizations and FACD-CAB (Foreign Admission and Career
              development Consultants Association of Bangladesh. The chief
              executive of FSC Global Network, Ln. M.K. Bashar PMJF was the
              founder president of FACD-CAB. This is the only GOVT. authorized
              association of the students’ consultancy firms in Bangladesh. It
              is a member of the FBCCI (Federation of Bangladesh Chambers of
              Commerce and Industry).
            </p>

            <ol className="section-text">
              <li>
                Regular students studying at FSC Cambrian Education Group.
              </li>
              <li>Family and friends of existing students.</li>
              <li>Good reference for good services delivered.</li>
              <li>
                Giant Education group everywhere we build up a strong positive
                reputation.
              </li>
              <li>
                High quality services delivered by staff and officers of
                FSC-Cambrian Education Group.
              </li>
              <li>
                We do marketing all the year round and at all levels of
                education at our different institutes.
              </li>
              <li>
                We have well equipped premises and highly experienced teaching
                staff.
              </li>
              <li>
                A team of highly qualified experts and professional staff who
                are being trained regularly to stay abreast of the latest
                education systems and opportunities around the globe.
              </li>
              <li>
                “One stop solution” integrated quality service system has been
                introduced.
              </li>
              <li>We have high success rates.</li>
              <li>
                Students sent by us who are studying in foreign universities are
                successful and possess bright careers both at home and abroad.
              </li>
              <li>
                We are efficient in managing our operations and ready to
                undertake any risk and challenge to launch any new program with
                existing and new partners.
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

        {/* Targets Section */}
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="section-title">Professional Collaboration</h2>
            <p className="section-text">
              Since 1993, the FSC Global Network has moved forward by focusing
              on its aspiration, values and vision. It has established itself as
              the market leader by sending thousands of students to the eminent
              universities/ colleges/ institutes across Asia, Europe, USA,
              Canada, Australia, New Zealand and other countries of the world.
              Our commitment and foresight for the best has enabled us to
              achieve a wide exposure and create goodwill among our clients. Use
              of latest communication, extensive travel to different countries,
              worldwide contacts, partnership, informative seminars and
              participating in some of the world's leading educational
              expositions have propelled to the peak of success. After crossing
              the 26 years landmark, we are going to embark on a growth plan
              that will transform our organization into a center of excellence.
              We love to thank our valued customers, partners and well-wishers
              for their continuous supports. We value their continued
              association with us. The FSC Global Network always represents a
              trustworthy and ethical leadership. Our values have led us to
              sustain for more than twenty six years and will continue to drive
              us in the right direction in the future.
            </p>
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
}

export default Collboration
