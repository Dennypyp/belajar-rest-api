// let mahasiswa = {
//     "nama": "Rizki",
//     "nim": "16.01.53.0012",
//     'email': 'riz@gmail.com'
// }

// console.log(JSON.stringify(mahasiswa));


// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(xhr.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});