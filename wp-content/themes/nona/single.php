<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

get_header();

nona()->print_styles( 'nona-content' );

?>
	<main id="primary" class="site-main blog-single">
		<?php

		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content/entry', get_post_type() );
		}
		?>
	</main><!-- #primary -->
<?php
get_sidebar();
get_footer();
