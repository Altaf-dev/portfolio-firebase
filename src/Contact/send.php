<?php
// Файлы phpmailer
require '../phpmailer/PHPMailer.php';
require '../phpmailer/SMTP.php';
require '../phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];



$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'coupe.86@mail.ru'; // Логин на почте
    $mail->Password   = '@karim16122009'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('coupe.86@mail.ru', 'Портфолио'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('altaf090486@gmail.com');

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заявка с сайта';
        $mail->Body    = "
        <b>Имя:</b> $name 
        <br>
        <br>
        <b>Почта:</b> $email
        <br>
        <br>
        <b>Комментарий:</b> $comment <br>
        <br>
        <br>
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}