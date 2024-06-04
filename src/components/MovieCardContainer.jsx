/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";
import Title from "./Title";

function MovieCardContainer() {
  return (
    <div>
      <main
        className="movieCardContainer"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5rem;
          padding-bottom: 5rem;
          font-weight: 700;
        `}
      >
        <Title />
        {movies.map((item, index) => {
          return (
            <div
              className="movieCard"
              key={index}
              css={css`
                display: flex;
                flex-wrap: row;
                width: 25rem;
                height: 16rem;
                gap: 50px;
                box-shadow: 10px 10px 5px lightgrey;
              `}
            >
              <img
                className="movieImage"
                src={item.image}
                css={css`
                  width: 8rem;
                  height: 8rem;
                  border-radius: 20%;
                `}
              />
              <section
                className="movieDetails"
                css={css`
                  flex: 2;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                `}
              >
                <p>Title: {item.title}</p>
                <p>Year: {item.year}</p>
                <p>Runtime: {item.runtime}</p>
                <p>
                  Genres:{" "}
                  {item.genres.map((genre) => (
                    <span>{genre} </span>
                  ))}
                </p>
                <p>IMDB Ratings: {item.imdbRating}</p>
                <p>IMDB Votes: {item.imdbVotes}</p>
              </section>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default MovieCardContainer;
