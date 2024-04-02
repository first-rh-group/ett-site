<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Conecta ao banco de dados
$dbh = new PDO('mysql:host=10.0.0.96;dbname=grupofir_departamentorh;port=3306', 'dtc_saga', '179856');

// Obtém o CPF do formulário
$cpf = $_POST['cpf'];

$stmt = $dbh->prepare("SELECT email FROM usuarioscorp WHERE cpf = :cpf");
$stmt->execute(['cpf' => $cpf]);

$user = $stmt->fetch(PDO::FETCH_OBJ);

require 'C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\vendor\autoload.php';

$mail = new PHPMailer(true);

try {
    // SERVIDOR
    $mail->SMTPDebug = 2;                                 
    $mail->isSMTP();                                      
    $mail->Host = 'smtp.gmail.com';  
    $mail->SMTPAuth = true;                               
    $mail->Username = 'contato@datacampos.com';                 
    $mail->Password = 'D@t@85230167!@#';                           
    $mail->SMTPSecure = 'tls';                            
    $mail->Port = 587;                                    

    // REMETENTE
    $mail->setFrom('contato@datacampos.com', 'Mailer');

    if ($user) {
        $mail->addAddress($user->email);
    } else {
        echo "Nenhum usuário encontrado com o CPF fornecido.";
        exit;
    }

    $mail->isHTML(true);                                  
    $mail->Subject = 'Recuperação de senha';
    $mail->Body    = 'Clique no link a seguir para redefinir sua senha: <a href="link">link</a>';

    $mail->send();
    echo 'A mensagem foi enviada';
} catch (Exception $e) {
    echo 'A mensagem não pôde ser enviada. Mailer Error: ', $mail->ErrorInfo;
}
?>