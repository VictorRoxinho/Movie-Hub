export const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmMwMWI4ZDYwMGYxMmE2MzY0MDNiYmQ5MzhhZTFjYiIsIm5iZiI6MTc0NDYzOTE5MS45NzcsInN1YiI6IjY3ZmQxNGQ3YWFjZjdjZmIyNjk5ODQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7WC19T56HtgJHPjHPPJXe2xQj6swrQCePvKVVrgyh4",
  },
};

// Movie Endpoints
export const ratedMovies =
  "https://api.themoviedb.org/3/account/{account_id}/rated/movies";

export const trendingURL =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US";
