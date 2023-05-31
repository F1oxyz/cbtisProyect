<?php
include("conex.php");

if(isset($_POST["submit"])){
    $check = getimagesize($_FILES["imagen"]["tmp_name"]);
    if($check !== false){
        $image = $_FILES['imagen']['tmp_name'];
        $imgContent = addslashes(file_get_contents($image));

        if($conexion->connect_error){
            die("Conexion fallida: " . $conexion->connect_error);
        }
        $dataTime = date("Y-m-d H:i:s");
        
        $insert = $conexion->query("INSERT into images (image, created) VALUES ('$imgContent', '$dataTime')");
        if($insert){
            echo "Imagen subida correctamente.";





            $result = $conexion->query("SELECT image FROM images");
            
            if($result->num_rows > 0){
                $imgData = $result->fetch_assoc();
                
                //Render image
                header("Content-type: image/jpg"); 
                echo $imgData['image']; 
            }else{
                echo 'Image not found...';
            }











        }else{
            echo "Hubo un error en el proceso, reintenta mas tarde.";
        } 
    }else{
        echo "Es necesario seleccionar una imagen.";
    }
}
?>