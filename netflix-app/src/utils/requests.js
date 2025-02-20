/* eslint-disable no-unused-vars */
const APIKEY = "aeafaab06b0532bae1a2b455373e24f7";
const requests={
    fetchTreding:`treding/all/week?api_key={}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key={}&with_networks=213`,
    fetchTopRatedMovies:`/discover/top_rated?api_key={}&anguage=en-us`,
    fetchActionMovies:`/discover/movie?api_key={}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key={}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key={}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key={}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key={}&with_genres=99`,
    fetchTvShows:`top/popular/?api_key={}&anguage=en-us&page=1`,
}
export default requests;