import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();

  let movie = movies.find((mov) => mov.title === movieName);

  return (
    <div className="flex">
      <div>
        <h1>{movie.title}</h1>
        <h2>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h2>
        <h3>Cast</h3>
        <div class="actors-list">
          {movie.cast.map((actor) => {
            return <p key={actor}>{actor}</p>;
          })}
        </div>
      </div>
      <img src={`${movie.posterPath}`} alt="cover" />
    </div>
  );
}
