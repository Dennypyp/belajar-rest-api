<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$response = $client->request('GET', 'http://omdbapi.com', [
    'query' => [
        'apikey' => 'a7f8387d',
        's' => 'star wars'
    ]
]);

$result = json_decode($response->getBody()->getContents(), true);
var_dump($result);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEN Movie</title>
</head>

<body>

    <?php foreach ($result['Search'] as $movie) : ?>
        <ul>
            <li>Title : <?= $movie['Title']; ?></li>
            <li>Year: <?= $movie['Year']; ?></li>
            <li>
                <img src="<?= $movie['Poster']; ?>" alt="" width="80">
            </li>
        </ul>

    <?php endforeach; ?>
</body>

</html>