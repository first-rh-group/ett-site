<?php
$arrayInfoEmail['setFrom'] = ['nome' => utf8_decode('First RH Group - Serviço de Recuperação de Senha'), 'email' => 'recuperacao_senha@grupofirstrh.com.br'];
$arrayInfoEmail['replyTo'] = ['nome' => utf8_decode('First RH Group - Área de Contato'), 'email' => 'contato@firstrhgroup.com'];
$arrayInfoEmail['destinatarios'] = [['nome' => utf8_decode('Michel Aveline de Oliverão'), 'email' => 'ave10000@gmail.com'], ['nome' => utf8_decode('Michelão Aveline'), 'email' => 'michel.aveline@outlook.com']];
$arrayInfoEmail['Subject'] = utf8_decode("RECUPERAÇÃO DE SENHA");
$arrayInfoEmail['Body'] = utf8_decode("Sua nova senha de acesso ao Portal Corporativo do Grupo First RH é <b>asd4as7d5asd</b>");
$arrayInfoEmail['AltBody'] = utf8_decode("Sua nova senha de acesso ao Portal Corporativo do Grupo First RH é asd4as7d5asd");

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// require_once('PHPMailer/src/Exception.php');
require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
require_once('../data/smtpInfo.php');

//Create an instance; passing `true` enables exceptions
// $mail = new PHPMailer(true);
$mail = new PHPMailer;
try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.grupofirstrh.com.br';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

    $mail->Username = $smtpInfo['Username'];  // SMTP username
    $mail->Password = $smtpInfo['Password'];                           // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($arrayInfoEmail['setFrom']['email'], $arrayInfoEmail['setFrom']['nome']);
    $mail->AddAddress($arrayInfoEmail['destinatarios'][0]['email'], $arrayInfoEmail['destinatarios'][0]['nome']);
    unset($arrayInfoEmail['destinatarios'][0]);
    foreach ($arrayInfoEmail['destinatarios'] as $value) {
        $mail->addCC($value['email'], $value['nome']);
    }
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo($arrayInfoEmail['replyTo']['email'], $arrayInfoEmail['replyTo']['nome']);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $arrayInfoEmail['Subject'];
    $mail->Body    = $arrayInfoEmail['Body'];
    $mail->AltBody = $arrayInfoEmail['AltBody'];

    $mail->send();
    $retorno['return'] = 1;
} catch (Exception $e) {
    $retorno['return'] = 0;
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
echo $retorno['return'];
