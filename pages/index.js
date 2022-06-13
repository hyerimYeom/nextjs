import { useEffect, useState } from "react";
import Seo from "../components/Head";

const API_KEY = "63f57c7278065e255b2fcfd0ab4eeb68";

export default function Home() {
  const [movies, setMovies] = useState([]);
  // useEffect(() =>{
  //     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  // }, [])

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      //  const json = await response.json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="HOME" />
      <div>
        {!movies && <h4>Loading...</h4>}
        {movies?.map(movie => (
          <div key={movie.id}>
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
