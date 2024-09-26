import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import eventimage1 from "../../assect/Aborad/Australia.jpeg";
import eventimage2 from "../../assect/Aborad/Canada.jpeg"
import eventimage3 from "../../assect/Aborad/uk.jpeg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function AboardCard() {
  const cardData = [
    {
      image: eventimage1,
      title: "Study in Australia",
      text: "All international students must possess a current student visa while they are studying any courses in Australia.",
      buttonText: "Read more",
    },
    {
      image: eventimage2,
      title: "Study in Canada",
      text: "Canada offers high-quality education and a friendly environment for international students.",
      buttonText: "Read more",
    },
    {
      image: eventimage3,
      title: "Study in the UK",
      text: "The UK is home to some of the world's best universities, making it a popular destination for students.",
      buttonText: "Read more",
    },
  ];

  return (
    <div className="container py-3">
      <div className="row">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">{card.buttonText}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboardCard;
