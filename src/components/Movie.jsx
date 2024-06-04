import React from "react";
import movies from "../data/movies";

const Movie = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      {movies.map((item) => {
        return (
          <div className="w-[550px] h-[250px] bg-white rounded-[10px] flex gap-[15px] py-[18px] px-[15px] mx-auto">
            <img
              src={item.image}
              className="rounded-[10px] object-fill h-[100px] w-[100px]"
            />
            <div className="text-black text-[20px] font-[400] leading-[18px] font-[kanit]">
              <p>Title: {item.title}</p>
              <p className="mt-[23px]">Year: {item.year}</p>
              <p className="mt-[17px]">Runtime: {item.runtime}</p>
              <p className="flex gap-[10px] mt-[17px] items-center">
                Genres:{" "}
                {item.genres.map((item) => (
                  <span className="bg-[#EAAC99] rounded-[10px] px-[10px] py-[5px]">
                    {item}
                  </span>
                ))}
              </p>
              <p className="mt-[12px]">IMDB Ratings: {item.imdbRating}</p>
              <p className="mt-[17px]">IMDB Votes: {item.imdbVotes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
