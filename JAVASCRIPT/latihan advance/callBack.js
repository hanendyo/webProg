$('.search-button').on('click', function(){
    
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=309b2888&s=` + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movies-container').html(cards)
    
            // ketika tombol detail diclick
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=309b2888&i=` + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showDetails(m);
                    $('.modal-body').html(movieDetail);
                    }
                })
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    
    });

})



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