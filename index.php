<?php
if(isset($_POST['submitmail'])){
      $destinatario = 'maxidossantosburgos@gmail.com';
      $nombre = $_POST['nombre'];
      $telefono = $_POST['telefono'];
    
      $email = ($_POST['email']);
    
    
      $direccion = $_POST['direccion'];
      $mensaje = $_POST['mensaje'];
      $asunto = "SOLICITUD";
    
        
      
    
      $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
      $cabeceras .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
      $cabeceras .= 'To: MDM ELECTRO MONTAJES' . "\r\n";
      $cabeceras .= 'From: SERVICIO TECNICO <ezequiel.vallejos@mdm-electro.com>' . "\r\n";
    
      $mensajeCompleto = "Nombre: " . $nombre . "\r\n\n\n" . "Telefono: " . $telefono . "\r\n\n\n" . "Mail: "  . $email . "\r\n\n\n" . "Direccion: " . $direccion . "\r\n\n\n" . "Mensaje: " . $mensaje;
    
    
      mail (
          $destinatario,
          $asunto,
          $mensajeCompleto,
          $cabeceras);
      
          echo "<h1>Enviado Exitosamente</h1>";
          echo "<script> setTimeout(\"location.href='index.html'\", 2500) </script>";

    }else {
      echo "<script> location.href='index.html' </script>";
    }
?>