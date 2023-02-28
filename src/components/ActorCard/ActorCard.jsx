import "./ActorCard.css";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(200, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="card"
    >
      <div className="name">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}
