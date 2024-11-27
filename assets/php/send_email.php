php
if ($_SERVER[REQUEST_METHOD] == POST) {
    $to = example@example.com;  Replace with your email
    $subject = New Form Submission;
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $headers = From $email . rn .
               Reply-To $email . rn .
               X-Mailer PHP . phpversion();

    $body = Name $namenEmail $emailnMessagen$message;

    if (mail($to, $subject, $body, $headers)) {
        echo Email successfully sent!;
    } else {
        echo Failed to send email. Please try again.;
    }
}

