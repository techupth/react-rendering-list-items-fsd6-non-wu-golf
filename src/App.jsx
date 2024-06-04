import "./App.css";
import movies from "./data/movies";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <h1 className="text-[40px] text-center my-[70px]">Movie List Section</h1>
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <Movie />
      </section>
    </div>
  );
}

export default App;
