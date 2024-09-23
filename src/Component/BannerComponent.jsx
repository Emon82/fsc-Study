import React from 'react'
import { Link } from 'react-router-dom';

function BannerComponent({title,text}) {
  return (
    <div>
      <section className="about-banner">
        <div className="container text-center py-5">
          <h3 className="text-white mb-3">{title}</h3>
          <div className="breadcrumb">
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"/"}
              className="text-white"
            >
              HOME
            </Link>
            <span className="mx-2 text-white">›</span>
            <span className="text-white">{text}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerComponent
