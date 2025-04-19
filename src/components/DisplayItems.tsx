import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

// Styles and Components
import { MovieShowsWrapper } from "../styles/Styles.modules";
import { fetchOptions } from "../modules/ApiLinks";

interface DisplayItemsProps {
  apiURL: string; // Representa de onde vêm os dados, a rota html da API
  heading: string; // Representa o título do componente
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  overview: string;
}

function DisplayItems({ apiURL, heading }: DisplayItemsProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiURL, fetchOptions);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiURL]);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % Math.min(movies.length, 5)
        );
      }, 8000); // Altera a imagem a cada 8 segundos

      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }
  }, [movies]);

  return (
    <MovieShowsWrapper>
      <div className="movieHeading">
        <h1 style={{ textTransform: "uppercase" }}>{heading}</h1>
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="highlight">
            <div className="highlight-banner">
              <img
                src={`https://image.tmdb.org/t/p/w1280${
                  movies.slice(0, 5)[currentIndex]?.backdrop_path ||
                  movies.slice(0, 5)[currentIndex]?.poster_path
                }`}
                alt={movies.slice(0, 5)[currentIndex]?.title || "No Title"}
                className="highlight-image"
              />
              <div className="highlight-content">
                <h2 className="highlight-title">
                  {movies.slice(0, 5)[currentIndex]?.title || "No Title"}
                </h2>
                <p className="highlight-overview">
                  {movies.slice(0, 5)[currentIndex]?.overview ||
                    "No description available."}
                </p>
                <button className="highlight-button">Read more</button>
              </div>
            </div>
          </div>
          <div className="movieGrid">
            {movies.map((movie) => (
              <div key={movie.id} className="movieCard">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || "No Title"}
                />
                <h3>{movie.title || "Untitled"}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>
                  Release Date: {movie.release_date || movie.first_air_date}
                </p>
                <p>{movie.overview}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </MovieShowsWrapper>
  );
}

export default DisplayItems;
