<?php
/**
 * Template part for displaying the page content when a 404 error has occurred
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

?>
<section class="error">
	<?php get_template_part( 'template-parts/content/page_header' ); ?>

	<div class="page-content">
		<p>
			<?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'nona' ); ?>
		</p>

		<?php
		get_search_form();

		nona()->print_styles( 'nona-widgets' );
		the_widget( 'WP_Widget_Recent_Posts' );
		?>

		<div class="widget widget_categories">
			<h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'nona' ); ?></h2>
			<ul>
			<?php
			wp_list_categories(
				[
					'orderby'    => 'count',
					'order'      => 'DESC',
					'show_count' => 1,
					'title_li'   => '',
					'number'     => 10,
				]
			);
			?>
			</ul>
		</div><!-- .widget -->

		<?php
		/* translators: %1$s: smiley */
		$archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'nona' ), convert_smilies( ':)' ) ) . '</p>';
		register_widget( 'WP_Widget_Archives' );
		the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$archive_content" );
		register_widget( 'WP_Widget_Tag_Cloud' );
		the_widget( 'WP_Widget_Tag_Cloud' );
		?>
	</div><!-- .page-content -->
</section><!-- .error -->
