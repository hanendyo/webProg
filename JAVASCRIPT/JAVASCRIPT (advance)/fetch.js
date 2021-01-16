// FETCH
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch(`http://www.omdbapi.com/?apikey=309b2888&s=` + inputKeyword.value)
//     .then(response =>response.json() ) //--> return promise
//     .then(response => {

//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
        
//         const moviesContainer = document.querySelector('.movies-container');
//         moviesContainer.innerHTML = cards;
      
      
//         // details diklik
//         const modalDetailsButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailsButton.forEach(btn => {
//             btn.addEventListener('click', function(){
//                 const imdbid = this.dataset.imdbid;
//                 fetch (`http://www.omdbapi.com/?apikey=309b2888&i=` + imdbid)
//                 .then(response => response.json())
//                 .then(m => {
//                     const movieDetail = showDetails(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 })
//             })
//         })
//     })


// })



// FETCH REFACTOR (async await)

//search button 
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value); //--> mneggunakan (async) await agar getMovies dianggap asynchronus.
        updateUi(movies); 
    } catch (err){
        // console.log(err);
        alert(err)
    }
});

function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=309b2888&s=` + keyword)
    .then(response => {
        console.log(`res: `, response);

        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(response => {
        console.log(response.Search);
        
        if(response.Response === "False") {
            throw new Error(response.Error);
        }
        return response.Search;
    
    });     
}

function updateUi(movies){
    let cards = '';
            movies.forEach(m => cards += showCards(m));
            const moviesContainer = document.querySelector('.movies-container');
            moviesContainer.innerHTML = cards;
}


// EVENT BINDING

// detail button
document.addEventListener('click', async function(e){
    console.log('terget:', e.target);
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUiDetail(movieDetail);
    }
})

function getMovieDetail(imdbid){
    console.log(`imdbid:`, imdbid);
    return fetch(`http://www.omdbapi.com/?apikey=309b2888&i=` + imdbid )
    .then(response => response.json())
    .then(m => {
        console.log(`m:`, m);
        return m;
    });
}

function updateUiDetail(m){
    const movieDetail = showDetails(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}





function showCards(m){
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src="${m.Poster}" class=" card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#dataDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showDetails(m){
    return  `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" alt="" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item active" aria-current="true">${m.Title} ${m.Year}</li>
                            <li class="list-group-item "><strong>Director: </strong> ${m.Director}</li>
                            <li class="list-group-item "><strong>Writer:</strong> ${m.Writer}</li>
                            <li class="list-group-item "><strong>Actors:</strong> ${m.Actors}</li>
                            <li class="list-group-item "><strong>Plot:</strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}