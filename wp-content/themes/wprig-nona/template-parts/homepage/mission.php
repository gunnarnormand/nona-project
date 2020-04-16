<?php
/**
 * Template part for displaying the homepage mission region
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<section class="mission">

	<?php if ( get_theme_mod( 'mission_title' ) !== '' ) : ?>
		<h2 class="mission-title">
			<?php echo esc_html( get_theme_mod( 'mission_title' ) ); ?>
		</h2>
	<?php endif; ?>

	<?php if ( get_theme_mod( 'mission_textarea' ) !== '' ) : ?>
		<p class="mission-text">
			<?php echo esc_html( get_theme_mod( 'mission_textarea' ) ); ?>
		</p>
	<?php endif; ?>

	<svg class="mission-mask" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920.33 144.15">
		<defs>
			<style>
				.eda3566a-3f2b-470c-bc9c-edfd991cc8d7 {
					fill: none;
				}
				.a1c99d62-8c8d-4980-8c2c-344c7f07d258 {
					clip-path: url("#b34a70dd-bdd3-49d1-a46d-44b4038cd2a9");
				}
				.f014910e-8fad-4244-87b4-28ef91519dd1 {
					fill: url("#b566d974-efa1-44b5-91c4-817895fcf4cf");
				}
				.e972f422-f5a5-468a-b97c-7732104971ea {
					fill: #fff;
				}
			</style>
			<clipPath id="b34a70dd-bdd3-49d1-a46d-44b4038cd2a9" transform="translate(0.33 0.5)"><path class="eda3566a-3f2b-470c-bc9c-edfd991cc8d7" d="M0,127.82S288-80.88,765,35.07s477,23.19,585,0,339,0,570,92.75V143H0Z"/></clipPath>
			<linearGradient id="b566d974-efa1-44b5-91c4-817895fcf4cf" x1="960" y1="-0.5" x2="960" y2="143" gradientTransform="translate(1920 142.5) rotate(180)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.05" stop-color="#f2b137"/><stop offset="0.15" stop-color="#f2be5b"/><stop offset="0.29" stop-color="#f1d395"/><stop offset="0.41" stop-color="#f1e9d2"/><stop offset="0.52" stop-color="#f8f4e9"/><stop offset="0.63" stop-color="#fff"/></linearGradient>
		</defs>
		<g id="a8c157f3-b45f-49d5-b931-425d501ef2d9" data-name="Layer 2">
			<g id="ae2d8b4f-721c-4502-896e-cf62e96936c1" data-name="Layer 1">
				<g class="a1c99d62-8c8d-4980-8c2c-344c7f07d258"><rect class="f014910e-8fad-4244-87b4-28ef91519dd1" y="-0.5" width="1920" height="143.5" transform="translate(1920.33 143) rotate(-180)"/><path class="e972f422-f5a5-468a-b97c-7732104971ea" d="M-.33,131.87s288-162,765-72,477,18,585,0,339,0,570,72v11.78H-.33Z" transform="translate(0.33 0.5)"/></g>
			</g>
		</g>
	</svg>
</section>
