const API_KEY =process.env.REACT_APP_API_KEY

const requests ={
fetchtrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchnetflixoriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchtoprated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchactionmovies:`/genere/movie/list?api_key=${API_KEY}with_generes=28`,
fetchcomedymovies:`/discover/movie?api_key=${API_KEY}with_generes=35`,
fetchhorrermovies:`/discover/movie?api_key=${API_KEY}with_generes=27`,
fetchromancemovies:`/discover/movie?api_key=${API_KEY}with_generes=10749`,
fetchdocumantries:`/discover/movie?api_key=${API_KEY}with_generes=99`,
}
export default requests