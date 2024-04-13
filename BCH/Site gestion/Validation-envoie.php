<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.office365.com';
$mail->SMTPAuth = true;
$mail->Username = 'your_email@outlook.com';
$mail->Password = 'your_password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('your_email@outlook.com', 'M. Pascaud');

$reservations = array_chunk($_GET, 10, true);

foreach ($reservations as $reservation) {
    if ($reservation['candidat'] == 'true') {
        $mail->addAddress($reservation['mail'], $reservation['nom']);

        $mail->isHTML(true);
        $mail->Subject = 'B';
        $mail->Body    = "Bonjour, " . $reservation['nom'] . ",<br>Les Chambres d'hotes de la Barbiniére sont heureux de vous accueillir en la chambre " . $reservation['chambre'] . " à partir du " . $reservation['pourLe'] . " pour un nombre de " . $reservation['nombreNuit'] . ".<br>M. Pascaud";
        $mail->AltBody = "Bonjour, " . $reservation['nom'] . ", Les Chambres d'hotes de la Barbiniére sont heureux de vous accueillir en la chambre " . $reservation['chambre'] . " à partir du " . $reservation['pourLe'] . " pour un nombre de " . $reservation['nombreNuit'] . ". M. Pascaud";

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }
    }
}
?>
