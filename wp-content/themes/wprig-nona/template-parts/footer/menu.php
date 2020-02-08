<?php
/**
 * Template part for displaying the footer menu
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

if ( ! wp_rig()->is_primary_nav_menu_active() ) {
	return;
}

?>

<nav class="footer-navigation">
	<div class="footer-primary-menu-container">
		<?php wp_rig()->display_footer_nav_menu( [ 'menu_id' => 'footer-menu' ] ); ?>	
	</div>
</nav>
