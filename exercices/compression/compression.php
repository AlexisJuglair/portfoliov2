<?php

// Original

$txt = "L'amour est toujours passion et désintéressé.
Il n'est jamais jaloux.
L'amour n'est ni prétentieux, ni orgueilleux.
Il n'est jamais grossier, ni égoïste.
Il n'est pas colérique.
Et il n'est pas rancunier.
L'amour ne se réjouit pas de tous les péchés d'autrui.
Mais trouve sa joie dans l'infinité.
Il excuse tout.
Il croit tout.
Il espère tout.
Et endure tout.
Voila ce qu'est l'amour.";

print($txt);
print("\n");

// Compression

$input = str_replace("\n", ' ', $txt); //remplacement de \n par un espace
$input = str_replace("'", ' ', $input); //remplacement de ' par un espace
$input = str_replace(",", ' ', $input); //remplacement de , par un espace
$input = str_replace(".", ' ', $input); //remplacement de . par un espace

$mots = explode(' ', $input); //scinder la chaîne avec espace comme séparateur

$table = array();

$ii = 0;
for($i = 0; $i<count($mots); $i++) //parcourir la chaîne $mots
{
    $found = false;  
    foreach($table as $item) //parcourir le tableau $table
    {
        if($mots[$i] == $item) //si un mot de $mots n'est pas déjà dans le tableau $table
        {
            $found = true;
        }
    }    
    if($found == false) 
    {
        $c = substr('0'.$ii,-2); //retourne un segment de chaîne pour l'index du tableau (avec -2, retourne 00 pour le premier)

        $table[$c] = $mots[$i]; //insertion du mot dans le tableau
        $ii++;
    }
}

print_r($table);
print("\n");

$output = $txt;

//Elimination des mots de plus de 3 caracteres
for($i = 0; $i< count($table); $i++)
{
    $c = substr('0'.$i,-2);
    if (strlen($table[$c])>2)
    {
        $output = str_replace($table[$c], $c, $output);
    }
}

for($i = 0; $i< count($table); $i++)
{
    $c = substr('0'.$i,-2);
    if (strlen($table[$c])>1)
    {
        $output = str_replace($table[$c], $c, $output);
    }
}

for($i=0; $i<count($table); $i++) //parcourir le tableau $table
{
    $c = substr('0'.$i,-2); //retourne un segment de chaîne pour l'index du tableau (avec -2, retourne 00 pour le premier)
    
    $output = str_replace($table[$c], $c, $output);
}

print($output);
print("\n");

// Décompression

$decompress = $output;
for($i = 0; $i<count($table); $i++)                        
{     
    $d = substr('0'.$i,-2);                                  

    $decompress = str_replace($d,$table[$d],$decompress);   
}
print("\n");
print_r('Décompression de output:'."\n".$decompress);                           
print("\n");