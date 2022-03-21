function searchMovie() {
    $('#movie-list').empty();
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': 'a7f8387d',
            's': $('#search-input').val(),
        },
        success: function (data) {
            if (data.Response == "True") {
                let movies = data.Search;
                $.each(movies, function (index, movie) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="${movie.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                            <a href="#" class="card-link show-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${movie.imdbID}">Show Detail</a>
                        </div>
                        </div>
                    </div>
                    
                   `);
                });

                $('#search-input').val('');
            } else {
                $('#movie-list').html(`<h1 class="text-center">${data.Error}</h1>`);
            }
        }
    });
}


$('#search-button').click(function () {
    searchMovie();
});

$('#search-input').keyup(function (e) {
   if (e.keyCode===13) {
       searchMovie();
   }
       
});

$('#movie-list').on('click','.show-detail', function () {
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': 'a7f8387d',
            'i': $(this).data('id'),
        },
        success: function (data) {
            if(data.Response==="True"){
                $('.modal-body').html(`
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${data.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>${data.Title}</h3></li>
                            <li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
                            <li class="list-group-item"><strong>Released:</strong> ${data.Released}</li>
                            <li class="list-group-item"><strong>Director:</strong> ${data.Director}</li>
                            <li class="list-group-item"><strong>Writer:</strong> ${data.Writer}</li>
                            <li class="list-group-item"><strong>Actors:</strong> ${data.Actors}</li>
                            <li class="list-group-item"><strong>Plot:</strong> ${data.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>
                `);
            }
        }
    })
});