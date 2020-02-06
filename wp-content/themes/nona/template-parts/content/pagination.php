<?php
/**
 * Template part for displaying a pagination
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

the_posts_pagination(
	[
		'mid_size'           => 2,
		'prev_text'          => _x( 'Previous', 'previous set of search results', 'nona' ),
		'next_text'          => _x( 'Next', 'next set of search results', 'nona' ),
		'screen_reader_text' => __( 'Page navigation', 'nona' ),
	]
);
