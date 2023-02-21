import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h4>Rating : {movie.rating}</h4>
      <ul>
        {movie.genres ? movie.genres.map((g) => <li key={g}>{g}</li>) : null}
      </ul>
      <p>{movie.summary}</p>
    </div>
  );
}

export default Detail;
