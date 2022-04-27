const movieCardComponent = function (title, year, about) {
    return `
        <div class="cards">
            <h1>${title}</h1>
            <h2>${year}</h2>
            <h3>${about}</h3>
        </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    for (const movie of movies.cards) {
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text))
        
        console.log(movie)
    }
}

window.addEventListener("load", loadEvent)