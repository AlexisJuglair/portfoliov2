<?php

$identite = "Loic Martin Jean-Pierre BERNARD DE LAVERNETTE Alexis JUGLAIR";
$nom = "";
$prenom = "";

$mots = explode(" ", $identite);

foreach ($mots as $m) 
{  
    if (ctype_upper($m) == false)
    {
        $prenom .= $m." ";
    }
    else
    {
        $nom .= $m." ";
    }
}

$prenom = rtrim($prenom);
$nom = rtrim($nom);

print("Prénom(s):  ".$prenom."<br>");
print("Nom:  ".$nom);