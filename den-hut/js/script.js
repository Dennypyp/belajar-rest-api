function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (key, val) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + val.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + val.nama + '</h5><p class="card-text">' + val.deskripsi + '</p><h5 class="card-title">Rp. ' + val.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });

    });

}

tampilkanSemuaMenu();



$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function (key, val) {
            if (val.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + val.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + val.nama + '</h5><p class="card-text">' + val.deskripsi + '</p><h5 class="card-title">Rp. ' + val.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });
});