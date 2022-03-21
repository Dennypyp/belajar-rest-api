<?php
$mahasiswa = [
    [
        "nama" => "Rizki",
        "nrp" => "043040023",
        "email" => "riz@gmail.com"
    ],
    [
        "nama" => "Denny",
        "nim"  => "L200180195",
        "email" => "denny@gmail.com"
    ]


];

$dbh = new PDO('mysql:host=localhost;dbname=tracerstudy-smandaluh', 'root', '');
$db = $dbh->prepare('SELECT * FROM alumni');
$db->execute();
$alumni = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($alumni);
echo $data;
