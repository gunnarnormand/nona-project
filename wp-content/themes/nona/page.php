<?php
/**
 * The template for displaying all pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

get_header();

nona()->print_styles( 'nona-content' );

?>
	<main id="primary" class="site-main">
		<?php

		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content/entry_page', 'page' );
		}
		?>
	</main><!-- #primary -->
<?php
get_sidebar();
get_footer();
