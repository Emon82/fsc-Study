import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import image4 from "../assect/About image/Asif.jpg";
import image3 from '../assect/About image/Monower.jpg';
import image2 from '../assect/About image/Towhid.jpg';
import image from '../assect/About image/Naimul .jpeg';
import BannerComponent from "../Component/BannerComponent";
import Footer from "../Component/Footer/Footer";
import NavbarComponent from "../Component/Navbar/Navbar";

const TeamMember = ({ name, position, phone, email, imageSrc }) => (
  <div className="col-md-6 col-lg-3 mb-4">
    <div className="card h-100 border-0 shadow-sm">
      <img   src={imageSrc} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{position}</p>
        <p className="card-text small mb-0">
          <i className="bi bi-telephone-fill me-2"></i>
          {phone}
        </p>
        <p className="card-text small">
          <i className="bi bi-envelope-fill me-2"></i>
          {email}
        </p>
      </div>
    </div>
  </div>
);

const TeamShowcase = () => {
  const teamMembers = [
    {
      name: "Naimul Ferdous",
      position: "Sr. Counselor",
      phone: "+8801720557106",
      email: "naimul@fsc.com",
      imageSrc: image,
    },
    {
      name: "Towhidul Islam",
      position: "Sr. Counselor",
      phone: "+8801720557112",
      email: "towhid@fsc.com",
      imageSrc: image2,
    },
    {
      name: "Asif Mahamud",
      position: "Sr. Counselor",
      phone: "+8801720557105",
      email: "asif@fsc.com",
      imageSrc: image4,
    },
    {
      name: "Monowaruzzaman",
      position: "Sr. Counselor",
      phone: "+8801720557114",
      email: "Monowar@fsc.com",
      imageSrc: image3,
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Highly Skilled Team</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

function Counselor() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent title="Counselor Team Member" text="Counselor" />
      <TeamShowcase />
      <Footer />
    </div>
  );
}

export default Counselor;
