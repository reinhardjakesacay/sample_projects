const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a2288e73c6c71f87db7efe5a77ee9f7&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3a2288e73c6c71f87db7efe5a77ee9f7&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

    returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data);
        data.results.forEach(element => {
            // create div tags for the needed elements in movie app
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('class', 'title');

            const center = document.createElement('center');
            // get the title and img using the imgPath and .title query
            // title.innerHTML = '${element.title}';
            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            // appendChild is when you format it according to the html structure that had been comment out 
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);


            // put all those element into the section tag in the html
            main.appendChild(div_row);

        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    };
});

