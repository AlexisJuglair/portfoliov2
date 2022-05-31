<?php

header('Content-Type: text/plain; charset=utf-8');

if (isset($_GET["c"]))
{
    $fichier = fopen("texte.txt", "r");  
    fseek($fichier, $_GET["c"]);
    $contenu = fgetc($fichier);    
    fclose($fichier);

    echo $contenu;
}