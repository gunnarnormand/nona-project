<?php
/**
 * Template part for displaying the header branding
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig;

?>

<div class="site-branding <?php echo has_custom_logo() ? 'has-custom-logo' : ''; ?> ">
	<?php the_custom_logo(); ?>

	<?php
	if ( is_front_page() && is_home() ) {
		?>
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		<?php
	} else {
		?>
		<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
		<?php
	}
	?>

	<?php
	$nona_description = get_bloginfo( 'description', 'display' );
	if ( $nona_description || is_customize_preview() ) {
		?>
		<p class="site-description">
			<?php echo $nona_description; /* phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped */ ?>
		</p>
		<?php
	}
	?>
</div><!-- .site-branding -->
