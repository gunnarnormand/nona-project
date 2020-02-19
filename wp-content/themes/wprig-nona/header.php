<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php
	if ( ! wp_rig()->is_amp() ) {
		?>
		<script>document.documentElement.classList.remove( 'no-js' );</script>
		<?php
	}
	?>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'wp-rig' ); ?></a>

	<header id="masthead" class="site-header">

		<?php
		if ( wp_rig()->is_amp() ) {
			?>
			<amp-animation id="headerNotScrolled" layout="nodisplay">
				<script type="application/json">
				{
					"duration": "1000ms",
					"easing": "cubic-bezier(0.165, 0.84, 0.44, 1)",
					"fill": "both",
					"iterations": "1",
					"direction": "alternate",
					"animations": [{
						"selector": "#masthead .site-branding",
						"keyframes": "keyframesNotScrolled"
					}
					]
				}
				</script>
			</amp-animation>

			<amp-animation id="headerScrolled" layout="nodisplay">
				<script type="application/json">
				{
					"duration": "1000ms",
					"easing": "cubic-bezier(0.165, 0.84, 0.44, 1)",
					"fill": "both",
					"iterations": "1",
					"direction": "alternate",
					"animations": [{
						"selector": "#masthead .site-branding",
						"keyframes": "keyframesScrolled"
					}
					]
				}
				</script>
			</amp-animation>
			<?php
		}
		?>

		<?php get_template_part( 'template-parts/header/custom_header' ); ?>
		<?php get_template_part( 'template-parts/header/branding' ); ?>
		<?php get_template_part( 'template-parts/header/custom_logo' ); ?>
		<?php get_template_part( 'template-parts/header/navigation' ); ?>

	</header><!-- #masthead -->

	<div class="scroll-marker">
		<?php
		if ( wp_rig()->is_amp() ) {
			?>
			<amp-position-observer intersection-ratios="0" on="enter:headerScrolled.start; exit:headerNotScrolled.start" layout="nodisplay">
			</amp-position-observer>
			<?php
		}
		?>
	</div>
