import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <>
      <Link to={`/movies/${props.movie.title}`} className="movie-link">
        <div
          style={{
            background: `url(${props.movie.posterPath}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="card"
        >
          <div className="m-title">
            <h1>{props.movie.title}</h1>
            <h4>Released: {props.movie.releaseDate}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}
