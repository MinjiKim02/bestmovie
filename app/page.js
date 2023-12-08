'use client';
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


function App() {
  const API_KEY = "12ca769b1759f4252deab89e8690074c";
  const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY;
  // const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";



  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 에러 발생:', error);
      });
  }, []);


  // useEffect(() => {
  //   fetch(API_URL)
  //   .then(res => res.json())
  //   .then(data => setMovies(data.results))
  // },[])

  // console.log(movies)



  return (
      <div className = "App">
          <div className = "search_nav">
              <div>
                  <h1>Movies</h1>
              </div>
              <div>
                <form>
                  <input />
                  <button>Search</button>
                </form>
              </div>
          </div>

          <div className="Movies">
          {movies && movies.map((movie) =>
          <MovieCard key={movie.id} {...movie} />
          )}
          </div>
      </div>
  );
}


export default App;