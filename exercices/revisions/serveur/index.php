<?php
if (isset($_GET["cmd"]))
{
    if ($_GET["cmd"] == 1)
    {
        print(date("H:i:s"));
    }
}