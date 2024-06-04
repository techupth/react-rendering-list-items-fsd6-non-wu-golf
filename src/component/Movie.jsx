import movies from "../data/movies.jsx";

function Movie() {
  return (
    <>
      <h1 className="mt-[50px] text-center font-[kanit] font-normal text-[40px] text-[#181818]">
        Movie List Section
      </h1>
      <div className="flex flex-col items-center">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="w-[450px] h-[250px] rounded-[10px] bg-[#FFFFFF] flex mt-[80px] shadow-xl"
            >
              <img
                src={movie.image}
                alt=""
                className="w-[102px] h-[100px] rounded-[10px] m-[14px] object-cover"
              />
              <div className="w-[350px] h-[211px] rounded-[10px] mt-[12px] font-[kanit] font-normal text-xl text-[#181818]">
                <p>Title: {movie.title}</p>
                <p className="mt-[8px]">Year: {movie.year}</p>
                <p className="mt-[8px]">Runtime: {movie.runtime}</p>
                <p className="mt-[8px]">
                  Genres:{" "}
                  {movie.genres.map((item, index) => (
                    <span
                      key={index}
                      className="w-[68px] h-[27px] rounded-[10px] bg-[#EAAC99] text-base font-[kanit] mx-[2px] px-[10px]"
                    >
                      {item}
                    </span>
                  ))}
                </p>
                <p className="mt-[8px]">IMDB Ratings: {movie.imdbRating}</p>
                <p className="mt-[8px]">IMDB Votes: {movie.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movie;
