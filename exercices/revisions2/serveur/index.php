<?php

if (isset($_GET["cmd"])) 
{
    if ($_GET["cmd"] == 1)
    {
        setlocale (LC_TIME, 'fr_FR.utf8'); 
        echo "<p>Nous sommes le ".strftime('%A %d %B %Y.</p><p>Il est %H:%M:%S.</p>'); 
    }
}