<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if(isset($_POST["submit"])){
    $revisar = getimagesize($_FILES["image"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['image']['tmp_name'];
        $imgContenido = addslashes(file_get_contents($image));
        
        include("conex.php");
        
        if($conexion->connect_error){
            die("Connection failed: " . $conexion->connect_error);
        }
        
        
        $insertar = $conexion->query("INSERT into images_tabla (imagenes, creado) VALUES ('$imgContenido', now())");
        if($insertar){
            echo "Archivo Subido Correctamente.";
            ?>
            <a href="../ecologia.php">Ver la imagen aqui
            </a>
            <?php
            
        }else{
            echo "Ha fallado la subida, reintente nuevamente.";
        }
    }else{
        echo "Por favor seleccione imagen a subir.";
    }
}
?>
    
</body>
</html>