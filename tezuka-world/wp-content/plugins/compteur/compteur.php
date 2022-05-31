<?php
/*
Plugin Name: Compteur
Description: Compter les visiteurs.
Author: Alexis Juglair
Version: 1.0
Author URI: https://alexisj802.promo-73.codeur.online/
*/

register_activation_hook(__FILE__, function()
{
	touch(WP_PLUGIN_DIR . '/compteur/compteur.txt');
  chmod(WP_PLUGIN_DIR . '/compteur/compteur.txt', 0777);
  file_put_contents(WP_PLUGIN_DIR . '/compteur/compteur.txt', 0);
});

register_deactivation_hook(__FILE__, function()
{
  unlink(__DIR__ . '/compteur.txt');
});

add_shortcode('compteur', 'incrementerCompteur');

function incrementerCompteur()
{
  $file = WP_PLUGIN_DIR . '/compteur/compteur.txt';
  print((file_put_contents($file, $c=file_get_contents($file)+1)) > 0 ? trim($c) : 0);
}
