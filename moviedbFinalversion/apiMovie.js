let apiKey = "api_key=bf26301d9698c1061427652e6ea2f518";
let urlApi = "https://api.themoviedb.org/3/movie/76341?api_key=bf26301d9698c1061427652e6ea2f518&language=fr";
let urlImg = "https://image.tmdb.org/t/p/w500";

//affiche un film

// fetch(urlApi)
// .then(function (reponse) {
//     return reponse.json()

// }).then(function (data) {
//     console.log(data)
//     titleFilm.textContent = data.original_title;
//     imgFilm.setAttribute("src", urlImg+data.poster_path)
//     synopsis.textContent = data.overview;
// })  

let section = document.querySelector("section");
let titleSite = document.createElement("h1")
titleSite.classList.add("title-site");
titleSite.textContent = "Liste de Films Populaires";
section.append(titleSite);

class Block {
    constructor(titre, affiche, resume) {
        this.titre = titre;
        this.affiche = urlImg + affiche;
        this.resume = resume;
    }
    create() {
        let titleFilm = document.createElement("h2")
        titleFilm.classList.add("title-film");
        titleFilm.textContent = `${this.titre}`;
        section.append(titleFilm);

        let imgFilm = document.createElement("img");
        imgFilm.classList.add("img-film");
        imgFilm.setAttribute("src", `${this.affiche}`);
        section.append(imgFilm);

        let synopsis = document.createElement("p");
        synopsis.classList.add("synopsis-film");
        synopsis.textContent = `${this.resume}`;
        section.append(synopsis);
    }
}

let blockNew;
let urlList = "https://api.themoviedb.org/3/list/5455?api_key=bf26301d9698c1061427652e6ea2f518&language=fr";

fetch(urlList)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.items);
        console.log(data.items[0].original_title);

        for (let i = 0; i < data.items.length; i++) {
            blockNew = new Block(data.items[i].original_title, data.items[i].poster_path, data.items[i].overview)
            console.log(data.items.length);
            blockNew.create();
        }
    });



