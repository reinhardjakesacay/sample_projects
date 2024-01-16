const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a2288e73c6c71f87db7efe5a77ee9f7&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a2288e73c6c71f87db7efe5a77ee9f7&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

    returnMovies()
function returnMovies(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data);
        data.results.forEach(element => {
            const div = document.createElement('div');
        });
    });
}
