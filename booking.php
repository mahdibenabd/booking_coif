<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $service = $_POST['service'];
    $employee = $_POST['employee'];
    $time = $_POST['time'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    $to = 'owner@example.com';  // Replace with the owner's email address
    $subject = 'Nouvelle réservation';
    $message = "Détails de la réservation:\n\n".
               "Service: $service\n".
               "Coiffeur: $employee\n".
               "Heure: $time\n".
               "Nom: $name\n".
               "Email: $email\n";
    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Votre réservation a été envoyée avec succès.';
    } else {
        echo 'Une erreur s\'est produite lors de l\'envoi de votre réservation. Veuillez réessayer.';
    }
}
?>
