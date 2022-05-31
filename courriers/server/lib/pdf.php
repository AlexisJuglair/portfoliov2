<?php
require_once('./lib/TCPDF/tcpdf.php');

class PDF extends TCPDF
{
    public function Header()
    {
    }

    public function Footer()
    {
    }

    public function Output($name = 'doc.pdf', $dest = '')
    {
        parent::Output($name, $dest);
    }
}