<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

if ( ! nona()->is_primary_sidebar_active() ) {
	return;
}

nona()->print_styles( 'nona-sidebar', 'nona-widgets' );

?>
<aside id="secondary" class="primary-sidebar widget-area">
	<?php nona()->display_primary_sidebar(); ?>
</aside><!-- #secondary -->
