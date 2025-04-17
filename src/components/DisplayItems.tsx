import { useEffect, useState } from "react";
import axios from "axios";
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
  vote_average: number;
  release_date: string;
  first_air_date: string;
  overview: string;
}

function DisplayItems({ apiURL, heading }: DisplayItemsProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <MovieShowsWrapper>
        <div className="movieHeading">
          <h1>{heading}</h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </MovieShowsWrapper>
    </>
  );
}

export default DisplayItems;
