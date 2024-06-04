import "./App.css";
import Movie from "./component/Movie.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <Movie />
      </section>
    </div>
  );
}

export default App;
