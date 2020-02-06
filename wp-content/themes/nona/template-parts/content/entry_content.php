<?php
/**
 * Template part for displaying a post's content
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

?>

<div class="entry-content">
	<?php
	if ( ! is_singular( get_post_type() ) && nona()->using_archive_excerpts() ) {
		the_excerpt();
	} else {
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nona' ),
					[
						'span' => [
							'class' => [],
						],
					]
				),
				get_the_title()
			)
		);
	}

	wp_link_pages(
		[
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nona' ),
			'after'  => '</div>',
		]
	);
	?>
</div><!-- .entry-content -->
