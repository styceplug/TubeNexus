<?php
require 'vendor/autoload.php';  // Include Composer autoload

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'emmanueloghene72@gmail.com';
        $mail->Password = 'amateratsu';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('emmanueloghene72@gmail.com', 'Mailer');
        $mail->addAddress('avwerosuo009@gmail.com', 'Joe User'); // Add a recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Track Upload';
        $mail->Body    = 'Here is the form data:<br>' . nl2br(print_r($data, true));

        $mail->send();
        echo json_encode(['status' => 'success']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'fail', 'message' => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'fail', 'message' => 'Invalid data received.']);
}
?>
