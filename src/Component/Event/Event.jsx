import React from "react";
import eventimage from "../../assect/Event/Kyrgyzstan.png";
import eventimage2 from "../../assect/Event/event2.jpg";
import eventimage3 from "../../assect/Event/event3.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Event = () => {
  const cardData = [
    {
      title: "Study MBBS in Kyrgyzstan",
      src: eventimage,
      width: "1424",
      height: "652",
      text: "কিরগিজস্তানে ইউরোপিয়ান কারিকুলামে ৫ বছরে এমবিবিএস কমপ্লিট করানো হয়, যেখানে অধিকাংশ দেশেই ৬ বছর লাগে।",
      type: "image",
    },
    {
      title: "Higher Education Expo 2021 - Barishal",
      src: eventimage2,
      width: "1424",
      height: "652",
      text: "বিদেশে উচ্চশিক্ষাগ্রহণে ইচ্ছুক শিক্ষার্থীদের জন্য বিএসবি গ্লোবাল নেটওয়ার্ক আয়োজন করতে যাচ্ছে",
      type: "image",
    },
    {
      title: "Higher Education Expo 2021 - Brahmanbaria",
      src: eventimage3,
      width: "1424",
      height: "652",
      text: "বিদেশে উচ্চশিক্ষাগ্রহণে ইচ্ছুক শিক্ষার্থীদের জন্য বিএসবি গ্লোবাল নেটওয়ার্ক আয়োজন করতে যাচ্ছে",
      type: "image",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100">
              <div className="ratio ratio-16x9">
                {card.type === "video" ? (
                  <iframe
                    width={card.width}
                    height={card.height}
                    src={card.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={card.src}
                    alt={card.title}
                    className="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ padding: "20px", margin: "15px" }}>
        <button type="button" className="btn btn-info">
          All Event
        </button>
      </div>
    </div>
  );
};

export default Event;
