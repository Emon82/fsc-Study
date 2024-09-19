import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Index = () => {
  const cardData = [
    {
      title:
        "IELTS ছাড়া Spouse সহ কানাডার ভিসা পেলাম | Study in Canada for Bangladeshi Canada Requirements",
      src: "https://www.youtube.com/embed/NAMvdbS4lk4",
      width: "1424",
      height: "652",
    },
    {
      title:
        "𝐈𝐄𝐋𝐓𝐒 ছাড়াই Advance Diploma প্রোগ্রামে কানাডার ভিসা পেলাম | Canada student Visa from Bangladesh",
      src: "https://www.youtube.com/embed/NAMvdbS4lk4",
      width: "1424",
      height: "652",
    },
    {
      title:
        "IELTS ছাড়াই CSE প্রোগ্রামে কানাডার স্টুডেন্ট ভিসা | Canada student visa Bangladesh",
      src: "https://www.youtube.com/embed/NAMvdbS4lk4",
      width: "1424",
      height: "652",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100">
              <div className="ratio ratio-16x9">
                <iframe
                  width="100%"
                  height="100%"
                  src={card.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ padding: "20px", margin: "15px" }}>
        <button type="button" className="btn btn-info">
          All Success Story
        </button>
      </div>
    </div>
  );
};

export default Index;
