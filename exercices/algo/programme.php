<?php

$abc = "abcdefghijklmnopqrstuvwxyz";
//écrire : bonjour tout le monde

//méthode n°1
print "1. ".$abc[1].$abc[14].$abc[13].$abc[9].$abc[14].$abc[20].$abc[17]." ".$abc[19].$abc[14].$abc[20].$abc[19]." ".$abc[11].$abc[4]." "
.$abc[12].$abc[14].$abc[13].$abc[3].$abc[4]."</br>";

//méthode n°2
$texte = "bonjour tout le monde";

function ecrire($text, $text2)
{
    $result = "";
    foreach($text as $i)
    {
		foreach($text2 as $j)
		{
			if ($text[$i] == $text2[$j])
			{
				$result .= $text2[$j];
			}
		}
	}
    return $result;
}

print "2. ".ecrire($texte,$abc);

?>