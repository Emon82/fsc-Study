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
              The FSC is built on a strong foundation of management support and
              long-term vision. With over 26 years of dedicated service to the
              Bangladeshi student community, we have established a sound
              reputation and high success rates, positioning the FSC as a leader
              in the country.
            </p>
            <p className="section-text">
              We are proud members of several national and international
              professional organizations, including FACD-CAB (Foreign Admission
              and Career Development Consultants Association of Bangladesh), the
              only government-authorized association for student consultancy
              firms in the country. Our chief executive, Md.Fazlul Ahmed ,
              served as the founder president of FACD-CAB. Additionally, we are
              affiliated with the FBCCI (Federation of Bangladesh Chambers of
              Commerce and Industry), further enhancing our credibility and
              network in the field of education consultancy.
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
              Since 1993, FSC has consistently progressed by emphasizing its
              aspirations, values, and vision. We have established ourselves as
              the market leader, successfully sending thousands of students to
              prestigious universities, colleges, and institutes across Asia,
              Europe, the USA, Canada, Australia, New Zealand, and other
              countries worldwide. Our commitment to excellence and
              forward-thinking approach has earned us significant goodwill and a
              strong reputation among our clients. Our success has been fueled
              by utilizing the latest communication technologies, extensive
              travel, and building worldwide partnerships. We actively
              participate in informative seminars and some of the world's
              leading educational expositions, which have contributed to our
              prominent position in the industry. As we celebrate over 26 years
              of service, we are excited to embark on a growth plan aimed at
              transforming our organization into a center of excellence. We
              extend our heartfelt thanks to our valued customers, partners, and
              well-wishers for their unwavering support. Their continued
              association is invaluable to us. FSC is committed to maintaining
              trustworthy and ethical leadership. Our core values have guided us
              for over 26 years, and we are confident they will continue to
              steer us in the right direction in the future.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collboration
