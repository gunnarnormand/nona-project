<?php
/**
 * Template part for displaying the homepage about region
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<section class="about">

	<div class="about-region first-about-region">
		<?php if ( get_theme_mod( 'first_about_title' ) !== '' ) : ?>
			<h2 class="about-title">
				<?php echo esc_html( get_theme_mod( 'first_about_title' ) ); ?>
			</h2>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'first_about_content' ) !== '' ) : ?>
			<p class="about-content">
				<?php echo esc_html( get_theme_mod( 'first_about_content' ) ); ?>
			</p>
		<?php endif; ?>
	</div>

	<div class="about-region second-about-region">
		<?php if ( get_theme_mod( 'second_about_title' ) !== '' ) : ?>
			<h2 class="about-title">
				<?php echo esc_html( get_theme_mod( 'second_about_title' ) ); ?>
			</h2>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'second_about_content' ) !== '' ) : ?>
			<p class="about-content">
				<?php echo esc_html( get_theme_mod( 'second_about_content' ) ); ?>
			</p>
		<?php endif; ?>
	</div>

	<div class="about-region third-about-region">
		<?php if ( get_theme_mod( 'third_about_title' ) !== '' ) : ?>
			<h2 class="about-title">
				<?php echo esc_html( get_theme_mod( 'third_about_title' ) ); ?>
			</h2>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'third_about_content' ) !== '' ) : ?>
			<p class="about-content">
				<?php echo esc_html( get_theme_mod( 'third_about_content' ) ); ?>
			</p>
		<?php endif; ?>
	</div>

	<svg class="about-accent about-accent-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 368.98 1625.63">
		<defs>
			<style>
				.fd3442bb-8208-42fc-b486-f3bd76b6e742 {
					fill: none;
				}
				.b3c92878-1f28-414f-a7d0-3a019d823961 {
					clip-path: url("#e38ed8c8-5306-44ee-8913-c794436f6af1");
				}
				.eeebdf9e-771f-4c22-bf9a-b389f9f800a8 {
					fill: url("#a7374cc8-db1c-4c65-b7ff-38f87704543c");
				}
			</style>
			<clipPath id="e38ed8c8-5306-44ee-8913-c794436f6af1" transform="translate(-0.02 3.55)"><path class="fd3442bb-8208-42fc-b486-f3bd76b6e742" d="M0,0C173.93,43.89,351,110.4,360,208.5c6.37,69.68-78.12,89.53-162,225-107.6,173.76-107.83,366-108,504-.16,131.47.65,141,18,252,15.52,99.24,6.39,243.8-108,437Z"/></clipPath>
			<linearGradient id="a7374cc8-db1c-4c65-b7ff-38f87704543c" x1="184.49" y1="1625.63" x2="184.49" gradientUnits="userSpaceOnUse"><stop offset="0.48" stop-color="#f25430"/><stop offset="1" stop-color="#f2c129"/></linearGradient>
		</defs>
		<g id="aa2ba105-2e60-4b60-a0db-849ba7515a7b" data-name="Layer 2">
			<g id="a7621c7c-ce26-4de0-8301-258fa2fbf5a5" data-name="Layer 1">
				<g class="b3c92878-1f28-414f-a7d0-3a019d823961"><rect class="eeebdf9e-771f-4c22-bf9a-b389f9f800a8" width="368.98" height="1625.63"/></g>
			</g>
		</g>
	</svg>

	<svg class="about-accent about-accent-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192 1784">
		<defs>
			<style>
				.b6be18bc-fc0e-466d-b33f-e282252bf8f7 {
					fill: none;
				}
				.a36df4ce-6861-45f4-804e-4c3c9f7cf374 {
					clip-path: url("#b9f3447e-343a-462f-94f6-372e0e7df800");
				}
				.a86803c1-564c-46c4-96d0-8784b1ad9ab9 {
					fill: url("#a2a46110-fb69-432b-9f89-8e5862ce5f4a");
				}
			</style>
			<clipPath id="b9f3447e-343a-462f-94f6-372e0e7df800" transform="translate(0.7 3.03)"><path
				class="b6be18bc-fc0e-466d-b33f-e282252bf8f7"
				d="M191.3,1781c-14.12-171.52-60.47-281.77-102-352-46.44-78.55-66.76-106.72-72-171-8.61-105.75,54.57-139.36,90-288,17.25-72.38,19.24-130.87,9-252C92.21,432.9-33,352.15,8.3,204,23,151.27,63.2,74.19,190.25,0Z"/></clipPath>
			<linearGradient id="a2a46110-fb69-432b-9f89-8e5862ce5f4a" x1="96" y1="1784" x2="96" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#286573"/><stop offset="0.26" stop-color="#105d40"/><stop offset="0.74" stop-color="#038c3e"/></linearGradient>
		</defs>
		<g id="a550ca0c-e303-4949-bdb1-9e24610a25f0" data-name="Layer 2">
			<g id="bb8aefae-4802-4cec-888c-1bb5489b9357" data-name="Layer 1">
				<g class="a36df4ce-6861-45f4-804e-4c3c9f7cf374"><rect class="a86803c1-564c-46c4-96d0-8784b1ad9ab9" width="192" height="1784"/></g>
			</g>
		</g>
	</svg>

</section>
