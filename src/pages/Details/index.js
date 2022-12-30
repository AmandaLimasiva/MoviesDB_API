import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Container } from "./style";

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date,
        };
        setMovie(movie);
        console.log(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
        <h2>+ sobre o filme escolhido!</h2>
        <Link to="/">
            <button>Voltar</button>
          </Link>
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Lançamento: {movie.releaseDate}
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Details;
