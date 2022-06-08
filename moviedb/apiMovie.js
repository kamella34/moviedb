let apiKey = "api_key=bf26301d9698c1061427652e6ea2f518";

let urlApi = "https://api.themoviedb.org/3/movie/76341?api_key=bf26301d9698c1061427652e6ea2f518&language=fr";

let urlImg = "https://image.tmdb.org/t/p/w500";

    let section = document.querySelector("section");
    
    let titleFilm = document.createElement("h2")
    titleFilm.classList.add("title-film");
    section.append(titleFilm);
    
    let imgFilm = document.createElement("img");
    imgFilm.classList.add("img-film");
    section.append(imgFilm);
    
    let synopsis = document.createElement("p");
    synopsis.classList.add("synopsis-film");
    section.append(synopsis);
 
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

let  urlList = "https://api.themoviedb.org/3/list/5455?api_key=bf26301d9698c1061427652e6ea2f518&language=fr";

 fetch(urlList)

    .then( function (reponse) {
        return reponse.json(); 
    })
    .then(function (data) {
    data.forEach(function(element) {
        data = json.parse(data);
    console.log(element.reponse)


   

    

        // titleFilm.textContent = elementData.original_title;
        // imgFilm.setAttribute("src", urlImg+elementData.poster_path)
        // synopsis.textContent = elementData.overview;
});
        
    })

