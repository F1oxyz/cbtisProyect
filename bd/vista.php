<?php
if(!empty($_GET['id'])){
    include("conex.php");
    
    if($conexion->connect_error){
        die("Connection failed: " . $conexion->connect_error);
    }
    
    $result = $conexion->query("SELECT imagenes FROM images_tabla");
    // $result = $conexion->query("SELECT imagenes FROM images_tabla WHERE id = 2");
    
    

    if($result->num_rows > 0){
        $imgDatos = $result->fetch_assoc();
        
        header("Content-type: image/jpg"); 
        echo $imgDatos['imagenes']; 
    }else{
        echo 'Imagen no existe...';
    }
}
?>