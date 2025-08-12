<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // La dirección de correo a la que llegarán los mensajes
    $to_email = "urbina.castro.arturo1700@gmail.com";
    
    // Asunto del correo
    $subject = "Nuevo Mensaje de Contacto desde la página web";
    
    // Recopilar los datos del formulario de forma segura
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Verificar que los datos no estén vacíos
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos del formulario.";
        exit;
    }

    // Construir el cuerpo del correo
    $email_content = "Nombre: $name\n";
    $email_content .= "Correo Electrónico: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Construir las cabeceras del correo
    $email_headers = "From: Nuevo Contacto <no-reply@https://arturourbina123.github.io/Vinylcrafts>\r\nReply-To: $email";

    // Enviar el correo
    if (mail($to_email, $subject, $email_content, $email_headers)) {
        // Redirigir al usuario a una página de agradecimiento o mostrar un mensaje de éxito
        header("Location: /?success=1#contacto"); // O a una página como 'gracias.html'
    } else {
        // Mostrar un mensaje de error si el envío falló
        http_response_code(500);
        echo "Lo sentimos, hubo un problema al enviar tu mensaje.";
    }

} else {
    // Si la solicitud no es POST, no se permite el acceso directo
    http_response_code(403);
    echo "Acceso prohibido.";
}
?>