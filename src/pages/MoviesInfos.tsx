// Bibliotecas externas
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

// Estilos e módulos internos
import { MovieInfosStyled, StyledButton } from "../styles/Styles.modules";
import { fetchOptions } from "../modules/ApiLinks";

//Interfaces
import { Movie } from "../components/DisplayItems";

function MovieInfos() {
  const { id } = useParams<{ id: string }>();
  const { pathname } = window.location; // Obtém o caminho atual da URL
  const mediaType = pathname.includes("/tv/") ? "tv" : "movie"; // Define o tipo de mídia com base na URL

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${id}`, // Usa o tipo de mídia na URL
          { headers: fetchOptions.headers }
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, mediaType]); // Adiciona mediaType como dependência

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <p>Movie or TV Show not found.</p>;
  }

  return (
    <MovieInfosStyled>
      <div className="movie-container">
        <div className="movie-banner">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        </div>
        <div className="movie-infos">
          <h1>{movie.title || movie.name}</h1>
          <div className="movie-genres">
            {movie.genres.slice(0, 3).map((genre: { name: string }) => (
              <span key={genre.name} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
          <div className="movie-moreinfos">
            <p>
              <StarIcon />
              {movie.vote_average.toFixed(1)}
            </p>
            <p>
              <CalendarMonthIcon /> {movie.release_date}
            </p>
            <p>
              <HourglassEmptyIcon /> {movie.runtime} min
            </p>
          </div>
          <h3>{movie.overview}</h3>
          <div className="movie-buttons">
            <StyledButton style={{ scale: "1.5" }}>
              <button className="watch-trailer">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Watch Trailer</span>
              </button>
            </StyledButton>
          </div>
        </div>
      </div>
    </MovieInfosStyled>
  );
}

export default MovieInfos;
