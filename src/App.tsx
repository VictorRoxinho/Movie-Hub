import Header from "./components/Header";
import DisplayItems from "./components/DisplayItems";
import { trendingURL, fetchOptions } from "./modules/ApiLinks";

function App() {
  fetch(trendingURL, fetchOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <>
      <Header />
      <DisplayItems />
    </>
  );
}

export default App;
