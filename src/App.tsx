// Components
import Header from "./components/Header";
import DisplayItems from "./components/DisplayItems";

// Pages
import MovieInfos from "./pages/MoviesInfos";

// Styles
import {
  trendingURL,
  fetchOptions,
  trendingMoviesURL,
  trendingTVShowsURL,
} from "./modules/ApiLinks";
import { GlobalStyle } from "./styles/Styles.modules";

// Main App Component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  fetch(trendingURL, fetchOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <DisplayItems
              apiURL={trendingURL}
              heading="Popular Movies & TV Shows"
            />
          }
        />
        <Route
          path="/movies"
          element={
            <DisplayItems
              apiURL={trendingMoviesURL}
              heading="Trending Movies"
            />
          }
        />
        <Route
          path="/tv-shows"
          element={
            <DisplayItems
              apiURL={trendingTVShowsURL}
              heading="Trending TV Shows"
            />
          }
        />
        <Route
          path="/popular"
          element={
            <DisplayItems
              apiURL={trendingURL}
              heading="Popular Movies & TV Shows"
            />
          }
        />
        <Route path="/movie/:id" element={<MovieInfos />} />
        <Route path="/tv/:id" element={<MovieInfos />} />
      </Routes>
    </Router>
  );
}

export default App;
