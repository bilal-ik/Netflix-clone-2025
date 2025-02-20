const API_KEY = process.env.REACT_APP_APIKEY;
console.log("API Key:", API_KEY);
const requests={
    fetchTreding:`treding/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/discover/top_rated?api_key=${API_KEY}&anguage=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShows:`top/popular/?api_key=${API_KEY}&anguage=en-us&page=1`,
}
export default requests;