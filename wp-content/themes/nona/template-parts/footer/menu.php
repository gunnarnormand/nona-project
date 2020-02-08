<?php
/**
 * Template part for displaying the footer menu
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

if ( ! nona()->is_primary_nav_menu_active() ) {
	return;
}

?>

<nav class="footer-navigation">
	<div class="footer-primary-menu-container">
		<?php nona()->display_footer_nav_menu( [ 'menu_id' => 'footer-menu' ] ); ?>	
	</div>
</nav>
