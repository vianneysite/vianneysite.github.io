<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Enregistrer - La Barbinère</title>
</head>
<body>
    <div id="loader"><img src="../img/load.gif" alt=""></div>
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $startDate = $_POST["startDate"];
    $endDate = $_POST["endDate"];
    $HeureArrive = $_POST["HeureArrive"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $nom = $_POST["nom"];
    $prenom = $_POST["Prenom"];
    $chambre = $_POST["chambre"];
    $IP = file_get_contents('http://ipecho.net/plain');
}
include 'config.php';

if (!$conn) {
    die("La connexion a échoué contacter le propriétaire ou 'contact@vianneypacaud.fr' au plus vite... ");
}

$sql = "INSERT INTO clients (IP, startDate, endDate, HeureArrive, email, tel, nom, prenom, chambre )
            VALUES ('$IP', '$startDate', '$endDate', '$HeureArrive', '$email', '$tel', '$nom', '$prenom', '$chambre')";

if (mysqli_query($conn, $sql)) {
    echo "Données enregistrées avec succès !";
} else {
    echo "Erreur lors de l'enregistrement des données : " . mysqli_error($conn);
}

mysqli_close($conn);
?>


</body>

</html>