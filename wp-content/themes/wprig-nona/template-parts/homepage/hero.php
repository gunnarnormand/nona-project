<?php
/**
 * Template part for displaying the homepage hero region
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<header class="hero">
	<div class="hero-content">
		<?php if ( get_theme_mod( 'hero_title' ) !== '' ) : ?>
			<div class="hero-title">
				<h1>
					<span><?php esc_html_e( 'the', 'wp-rig' ); ?></span>
					<span><?php esc_html_e( 'nona', 'wp-rig' ); ?></span>
					<span><?php esc_html_e( 'experience', 'wp-rig' ); ?></span>
				</h1>
			</div>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'hero_subtitle' ) !== '' ) : ?>
			<h2>
				<?php echo esc_html( get_theme_mod( 'hero_subtitle' ) ); ?>
			</h2>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'hero_textarea' ) !== '' ) : ?>
			<p>
				<?php echo esc_html( get_theme_mod( 'hero_textarea' ) ); ?>
			</p>
		<?php endif; ?>

		<?php if ( get_theme_mod( 'hero_url' ) !== '' && get_theme_mod( 'hero_url_text' ) !== '' ) : ?>
			<a href="<?php echo esc_url( get_theme_mod( 'hero_url' ) ); ?>" >
				<?php echo esc_html( get_theme_mod( 'hero_url_text' ) ); ?>
			</a>
		<?php endif; ?>
	</div>	
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 413 292.86">
		<defs>
		<style>
		.cls-nona-hero-1 {
		fill: none;
		}
		.cls-nona-hero-2 {
		isolation: isolate;
		}
		.cls-nona-hero-3 {
		fill: #fff;
		}
		.cls-nona-hero-4 {
		fill: url("#linear-gradient-nona-hero");
		}
		.cls-nona-hero-5 {
		fill: url("#linear-gradient-nona-hero-2");
		}
		.cls-nona-hero-6 {
		clip-path: url("#clip-path-nona-hero");
		}
		.cls-nona-hero-7 {
		fill: #f2de29;
		}
		.cls-nona-hero-8 {
		fill: url("#linear-gradient-nona-hero-3");
		}
		.cls-nona-hero-9 {
		fill: url("#linear-gradient-nona-hero-4");
		}
		.cls-nona-hero-10 {
		fill: url("#linear-gradient-nona-hero-5");
		}
		.cls-nona-hero-11 {
		fill: url("#linear-gradient-nona-hero-6");
		}
		.cls-nona-hero-12 {
		fill: url("#linear-gradient-nona-hero-7");
		}
		.cls-nona-hero-13 {
		fill: url("#linear-gradient-nona-hero-8");
		}
		.cls-nona-hero-14 {
		fill: url("#linear-gradient-nona-hero-9");
		}
		.cls-nona-hero-15 {
		fill: #01401c;
		}
		.cls-nona-hero-16 {
		fill: #57d6f2;
		}
		.cls-nona-hero-17 {
		fill: url("#linear-gradient-nona-hero-10");
		}
		.cls-nona-hero-18 {
		fill: #b5533c;
		}
		.cls-nona-hero-19 {
		fill: url("#Gradiente_sem_nome_96");
		}
		.cls-nona-hero-20 {
		fill: url("#Gradiente_sem_nome_88");
		}
		.cls-nona-hero-21 {
		fill: url("#Gradiente_sem_nome_82");
		}
		.cls-nona-hero-22 {
		fill: url("#Gradiente_sem_nome_85");
		}
		.cls-nona-hero-23 {
		fill: url("#Gradiente_sem_nome_85-2");
		}
		.cls-nona-hero-24 {
		fill: #3f0c0b;
		}
		.cls-nona-hero-25 {
		fill: url("#Gradiente_sem_nome_86");
		}
		.cls-nona-hero-26 {
		fill: #d94b2b;
		}
		.cls-nona-hero-27 {
		fill: url("#Gradiente_sem_nome_88-2");
		}
		.cls-nona-hero-28 {
		fill: url("#Gradiente_sem_nome_82-2");
		}
		.cls-nona-hero-29 {
		fill: url("#linear-gradient-nona-hero-11");
		}
		.cls-nona-hero-30 {
		fill: #f25430;
		}
		.cls-nona-hero-31 {
		fill: url("#linear-gradient-nona-hero-12");
		}
		.cls-nona-hero-32 {
		fill: url("#Gradiente_sem_nome_72");
		}
		.cls-nona-hero-33,
		.cls-nona-hero-35 {
		mix-blend-mode: multiply;
		}
		.cls-nona-hero-33 {
		fill: url("#linear-gradient-nona-hero-13");
		}
		.cls-nona-hero-34 {
		fill: url("#linear-gradient-nona-hero-14");
		}
		.cls-nona-hero-35 {
		fill: url("#linear-gradient-nona-hero-15");
		}
		.cls-nona-hero-36 {
		fill: url("#linear-gradient-nona-hero-16");
		}
		.cls-nona-hero-37 {
		fill: url("#Gradiente_sem_nome_111");
		}
		.cls-nona-hero-38 {
		fill: url("#linear-gradient-nona-hero-17");
		}
		</style>
		<linearGradient id="linear-gradient-nona-hero" x1="217.86" y1="292" x2="217.86" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#f2ac29"/>
		<stop offset="0.06" stop-color="#f2b137"/>
		<stop offset="0.18" stop-color="#f2be5b"/>
		<stop offset="0.34" stop-color="#f1d395"/>
		<stop offset="0.49" stop-color="#f1e9d2"/>
		<stop offset="0.73" stop-color="#f8f4e9"/>
		<stop offset="1" stop-color="#fff"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-2" x1="248.01" y1="253.57" x2="248.01" y2="-64.55" gradientUnits="userSpaceOnUse">
		<stop offset="0.08" stop-color="#f25430"/><stop offset="0.21" stop-color="#f2622f"/>
		<stop offset="0.45" stop-color="#f2862c"/><stop offset="0.67" stop-color="#f2ac29"/>
		<stop offset="0.69" stop-color="#f2b137"/><stop offset="0.74" stop-color="#f2be5b"/>
		<stop offset="0.81" stop-color="#f1d395"/><stop offset="0.87" stop-color="#f1e9d2"/>
		</linearGradient>
		<clipPath id="clip-path-nona-hero">
		<path
		class="cls-nona-hero-1"
		d="M412,0H94.29a43.88,43.88,0,0,0,3.89,34.9,43.77,43.77,0,0,0,41.23,20.65c15.52-1.63,29.31-11.61,44.88-12.78,16.16-1.22,32.6,8.27,39.63,22.87s4.2,33.38-6.83,45.25c-4.85,5.21-11.61,10.5-10.7,17.56.65,5,5.19,8.62,10,10.11s9.87,1.33,14.84,1.79c23.69,2.19,45.68,21.09,48.57,44.7s-16.28,48.49-40.06,49.14c-23.53.64-45.55-19.62-68.32-13.65-17.72,4.63-27.44,22.91-38.37,37.6C123,271.59,107.5,290.61,84,292H412Z"/>
		</clipPath>
		<linearGradient id="linear-gradient-nona-hero-3" x1="188.67" y1="147.18" x2="417.3" y2="147.18" gradientUnits="userSpaceOnUse">
		<stop offset="0.19" stop-color="#f1e9d2"/>
		<stop offset="0.32" stop-color="#f1e6a1"/>
		<stop offset="0.6" stop-color="#f2de29"/>
		<stop offset="0.91" stop-color="#f98a25"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-4" x1="282.31" y1="79.74" x2="391.84" y2="79.74" gradientUnits="userSpaceOnUse">
		<stop offset="0.23" stop-color="#f2de29"/>
		<stop offset="0.27" stop-color="#f2d429"/>
		<stop offset="0.36" stop-color="#f2c229"/>
		<stop offset="0.48" stop-color="#f2b529"/>
		<stop offset="0.64" stop-color="#f2ae29"/>
		<stop offset="1" stop-color="#f2ac29"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-5" x1="117.97" y1="69.21" x2="307.49" y2="69.21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f27929"/><stop offset="0.5" stop-color="#f2aa29"/>
		<stop offset="1" stop-color="#f2de29"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-6" x1="310.89" y1="266.77" x2="310.89" y2="158.2" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#4c6c73"/>
		<stop offset="0.08" stop-color="#357662"/>
		<stop offset="0.22" stop-color="#118648"/>
		<stop offset="0.3" stop-color="#038c3e"/>
		<stop offset="0.46" stop-color="#4b8638"/>
		<stop offset="0.68" stop-color="#a47f30"/>
		<stop offset="0.83" stop-color="#dc7b2b"/>
		<stop offset="0.9" stop-color="#f27929"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-7" x1="253.16" y1="265.88" x2="253.16" y2="192.74" gradientUnits="userSpaceOnUse">
		<stop offset="0.37" stop-color="#024d22"/>
		<stop offset="1" stop-color="#038039"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-8" x1="297.87" y1="303.95" x2="297.87" y2="189.87" gradientUnits="userSpaceOnUse">
		<stop offset="0.04" stop-color="#296573"/>
		<stop offset="0.31" stop-color="#1c615a"/>
		<stop offset="0.76" stop-color="#095b36"/>
		<stop offset="1" stop-color="#025928"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-9" x1="242.22" y1="303.17" x2="242.22" y2="196.55" gradientUnits="userSpaceOnUse">
		<stop offset="0.21" stop-color="#296573"/>
		<stop offset="0.23" stop-color="#26646e"/>
		<stop offset="0.34" stop-color="#175f50"/>
		<stop offset="0.46" stop-color="#0b5c3a"/>
		<stop offset="0.57" stop-color="#045a2c"/>
		<stop offset="0.67" stop-color="#025928"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-10" x1="247.27" y1="97.02" x2="267.79" y2="97.02" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#b5533c"/>
		<stop offset="0.14" stop-color="#be5938"/>
		<stop offset="0.37" stop-color="#d56a2e"/>
		<stop offset="0.56" stop-color="#ef7c23"/>
		<stop offset="0.69" stop-color="#ed7a23"/>
		<stop offset="0.76" stop-color="#e57522"/>
		<stop offset="0.81" stop-color="#d76b20"/>
		<stop offset="0.86" stop-color="#c45d1d"/>
		<stop offset="0.9" stop-color="#ab4a1a"/>
		<stop offset="0.94" stop-color="#8c3416"/>
		<stop offset="0.98" stop-color="#681a11"/>
		<stop offset="1" stop-color="#4f080e"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_96" x1="242.81" y1="109.83" x2="262.98" y2="109.83" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#b5533c"/>
		<stop offset="0.27" stop-color="#c05b37"/>
		<stop offset="0.74" stop-color="#dd6f2b"/>
		<stop offset="1" stop-color="#ef7c23"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_88" x1="248.13" y1="152.89" x2="207.53" y2="152.89" gradientTransform="translate(126.2 -117.51) rotate(39.38)" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#f7a959"/>
		<stop offset="0.06" stop-color="#f6a655"/>
		<stop offset="0.67" stop-color="#f18731"/>
		<stop offset="1" stop-color="#ef7c23"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_82" x1="288.35" y1="130.26" x2="228.47" y2="130.26" gradientTransform="translate(1.39 -1.72) rotate(0.49)" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#fed873"/>
		<stop offset="0.64" stop-color="#f9b761"/>
		<stop offset="1" stop-color="#f7a959"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_85" x1="320.83" y1="202.36" x2="222.71" y2="202.36" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#b5533c"/>
		<stop offset="0.19" stop-color="#a74c3d"/>
		<stop offset="0.72" stop-color="#833a3e"/>
		<stop offset="1" stop-color="#75333f"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_85-2" x1="264.21" y1="208" x2="225.7" y2="208" xlink:href="#Gradiente_sem_nome_85"/>
		<linearGradient id="Gradiente_sem_nome_86" x1="288.82" y1="143.95" x2="203.4" y2="143.95" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#fed873"/>
		<stop offset="0.32" stop-color="#fcc86a"/>
		<stop offset="1" stop-color="#f7a959"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_88-2" x1="272.27" y1="161.92" x2="230.84" y2="161.92" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#Gradiente_sem_nome_88"/>
		<linearGradient id="Gradiente_sem_nome_82-2" x1="267.21" y1="135.37" x2="225.93" y2="135.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#Gradiente_sem_nome_82"/>
		<linearGradient id="linear-gradient-nona-hero-11" x1="232.09" y1="220.09" x2="232.09" y2="125.76" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#b33e24"/>
		<stop offset="0.3" stop-color="#c24327"/>
		<stop offset="0.89" stop-color="#ea512e"/>
		<stop offset="1" stop-color="#f25430"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-12" x1="232.38" y1="118.21" x2="232.38" y2="186.37" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#d94b2b"/>
		<stop offset="0.46" stop-color="#e8502e"/>
		<stop offset="1" stop-color="#ff5833"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_72" x1="240.68" y1="167.39" x2="240.68" y2="241.76" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#f5847e"/>
		<stop offset="0.36" stop-color="#f37584"/>
		<stop offset="1" stop-color="#ef5193"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-13" x1="232.85" y1="168.75" x2="232.85" y2="131.62" gradientTransform="matrix(1, -0.1, -0.02, 1.11, 3.06, 7.38)" xlink:href="#linear-gradient-nona-hero-12"/>
		<linearGradient id="linear-gradient-nona-hero-14" x1="231.74" y1="171.41" x2="231.74" y2="130.18" xlink:href="#linear-gradient-nona-hero-12"/>
		<linearGradient id="linear-gradient-nona-hero-15" x1="217.11" y1="167.22" x2="217.11" y2="130.09" gradientTransform="matrix(1, 0, -0.13, 1.01, 16.94, -1.25)" gradientUnits="userSpaceOnUse">
		<stop offset="0.03" stop-color="#d94b2b"/>
		<stop offset="0.48" stop-color="#e8502e"/>
		<stop offset="1" stop-color="#ff5833"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-16" x1="216.8" y1="166.93" x2="216.8" y2="130.03" gradientTransform="matrix(1, 0, -0.13, 1.01, 16.94, -1.25)" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#d94b2b"/>
		<stop offset="0.46" stop-color="#e8502e"/>
		<stop offset="0.99" stop-color="#ff5833"/>
		</linearGradient>
		<linearGradient id="Gradiente_sem_nome_111" x1="197.71" y1="105.69" x2="269.7" y2="105.69" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#3f0c0b"/>
		<stop offset="0.51" stop-color="#410d0d"/>
		<stop offset="0.69" stop-color="#481213"/>
		<stop offset="0.82" stop-color="#531b1f"/>
		<stop offset="0.93" stop-color="#64272f"/>
		<stop offset="1" stop-color="#75333f"/>
		</linearGradient>
		<linearGradient id="linear-gradient-nona-hero-17" x1="206" y1="301.23" x2="206" y2="221.33" gradientUnits="userSpaceOnUse">
		<stop offset="0.15" stop-color="#fff"/>
		<stop offset="0.21" stop-color="#fff" stop-opacity="0.84"/>
		<stop offset="0.3" stop-color="#fff" stop-opacity="0.62"/>
		<stop offset="0.4" stop-color="#fff" stop-opacity="0.43"/>
		<stop offset="0.49" stop-color="#fff" stop-opacity="0.28"/>
		<stop offset="0.58" stop-color="#fff" stop-opacity="0.16"/>
		<stop offset="0.67" stop-color="#fff" stop-opacity="0.07"/>
		<stop offset="0.76" stop-color="#fff" stop-opacity="0.02"/>
		<stop offset="0.83" stop-color="#fff" stop-opacity="0"/>
		</linearGradient>
		</defs>
		<g class="cls-nona-hero-2">
		<rect class="cls-nona-hero-3" width="412" height="292"/>
		<path
		class="cls-nona-hero-4"
		d="M412,0H78a38.44,38.44,0,0,0-3.3,29.05,39.76,39.76,0,0,0,24.71,25.7c15.71,5.52,33,1,49.66,0s36.64,3.86,42.25,19.15c4.31,11.74-1.73,24.38-6.35,36s-7.28,26.42,1.79,35.23c14,13.63,40.06-.75,57.13,9,7.25,4.17,11.53,12.42,11.57,20.61s-3.88,16.14-9.82,21.94c-13.5,13.18-34.63,14.6-53.76,15s-40.12,1.16-54.32,13.62C124.82,236.44,120,255.1,105.45,263.8c-11,6.54-24.68,5.8-37.38,7.64A87.66,87.66,0,0,0,23.72,292H412Z"/>
		<path
		class="cls-nona-hero-5"
		d="M412,0H94.29a43.88,43.88,0,0,0,3.89,34.9,43.77,43.77,0,0,0,41.23,20.65c15.52-1.63,29.31-11.61,44.88-12.78,16.16-1.22,32.6,8.27,39.63,22.87s4.2,33.38-6.83,45.25c-4.85,5.21-11.61,10.5-10.7,17.56.65,5,5.19,8.62,10,10.11s9.87,1.33,14.84,1.79c23.69,2.19,45.68,21.09,48.57,44.7s-16.28,48.49-40.06,49.14c-23.53.64-45.55-19.62-68.32-13.65-17.72,4.63-27.44,22.91-38.37,37.6C123,271.59,107.5,290.61,84,292H412Z"/>
		<g class="cls-nona-hero-6">
		<circle class="cls-nona-hero-7" cx="301.89" cy="92.79" r="25.97"/>
		<path
		class="cls-nona-hero-8"
		d="M408.67,155.38c-4.19-2.48-8.83-2.57-13.57-2.4-5,.19-9.9.29-14.62-.93a7.16,7.16,0,0,1-4.53-3.81,4.55,4.55,0,0,0-1.7-1.79c-1.74-1.07-3.67-.7-5.44,0a.29.29,0,0,1-.4-.31A10.45,10.45,0,0,0,359,134.3c-7.54-.63-11.38,6-12.87,12.44a1,1,0,0,1-1.35.62,2.88,2.88,0,0,0-4,1.26l0,0a7.11,7.11,0,0,1-6.26,3.73c-2.52,0-5-.1-7.53-.11a55.57,55.57,0,0,0-15.5,2.16c-.6.17-.25.94.24,1a83.27,83.27,0,0,0,10.37.5c17.56,0,23,2.84,40.36,4.11a7.06,7.06,0,0,0,5.3-1.22c.93-.65,1.07-.68,2.28-.34.61.18,1.17.51,1.79.68a4.44,4.44,0,0,0,2.23.14,2.21,2.21,0,0,0,1.69-3.12c10.93.24,21.83.33,32.76.34C409.19,156.53,409.2,155.69,408.67,155.38Z"/>
		<path
		class="cls-nona-hero-9"
		d="M289.15,93.09c22.46-1.33,45.17-2.81,67.41,1.37a2.72,2.72,0,0,0-1.15,1.71c-.78,3.37,3.24,4.93,5.87,4.9,6.77-.06,13.76-3.66,20.23-5.32,8.44-2.16,16.21-1.61,24.57.52,6.41,1.63,5.92,7.65,5.92,1V66.85c0-10.1-10.32-11.32-17-2.62A12.22,12.22,0,0,0,392.52,70c-.62,4.81,2.55,9.24-3.3,12.46-1.85,1-5.6,2.31-5,4.72a40.12,40.12,0,0,0-14.41.14c-2.88.57-5.7,1.73-8.66,1.51s-5-1.67-7.09-3.64c-4.21-3.92-8.52-9.28-14.82-6.14-4.68,2.34-7.25,7.52-12.95,7.88-4.54.29-9-2-13.5-.66a19.15,19.15,0,0,0-5.12,2.83c-3.32,2.15-6.15,2.15-9.89,1.33-3.35-.73-6.37-1-8.93,1.56C288.44,92.41,288.52,93.12,289.15,93.09Z"/>
		<path
		class="cls-nona-hero-10"
		d="M312.2,69c-13.24.27-26.5.59-39.74.56-2.89,0-2.52-2-4-3.6a2.82,2.82,0,0,0-2.31-.91A2.22,2.22,0,0,0,264,66.86c-3.29-4.67-7.5-9.22-13.56-9.32A8.16,8.16,0,0,0,242.16,68c.69,2.79,1.18,7.34-3.36,5.33a5.91,5.91,0,0,0-2.8-.79,3.85,3.85,0,0,0-2.33,1.32c-2,2-3.4,2.92-6.29,3.21-9.67,1-19.46,1.21-29.16,1.9-1.24.09-.35,1.91.67,1.87,6-.27,12.09-.45,18.13-.61,8.71.2,17.43.33,26.15.45,5.65.08,11.32.31,17,.19,5-.1,13.9-1.11,13.79-4.24-.07-2.2-8.14-2.08-8.49-2.95-.89-2.22,9-.56,22-.56,8.56,0,17.1-.22,25.2-3.19C313.18,69.7,312.56,69,312.2,69Z"/>
		<path class="cls-nona-hero-11" d="M209.78,193.59c22.35-13.58,56.68-8.39,80.81,1.7,11.06,4.62,22.05,10.26,34,11.12,31,2.26,56.36-27.5,87.41-29.34v104H209.78Z"/>
		<path class="cls-nona-hero-12" d="M94.31,197.4c95.2-25.23,182.6,37.87,233.22,24.64C397.67,203.7,412,292,412,292H94.31Z"/>
		<path class="cls-nona-hero-13" d="M182.73,292S265.11,211.28,413,211.28V292Z"/>
		<path class="cls-nona-hero-14" d="M72.44,220.12S249.12,192.3,412,292H72.44Z"/>
		<ellipse class="cls-nona-hero-15" cx="214.7" cy="252.68" rx="39.76" ry="7.95"/>
		<path class="cls-nona-hero-16" d="M387.53,81.92a.32.32,0,0,1-.64,0,.32.32,0,1,1,.64,0Z"/>
		<circle class="cls-nona-hero-16" cx="395.92" cy="111.94" r="1.8"/>
		<path class="cls-nona-hero-16" d="M376.79,114.14a1.9,1.9,0,1,1-1.9-1.9A1.9,1.9,0,0,1,376.79,114.14Z"/>
		<circle class="cls-nona-hero-16" cx="381.97" cy="104.65" r="1.5"/>
		<path class="cls-nona-hero-16" d="M371.33,108a1.82,1.82,0,1,1-1.82-1.82A1.81,1.81,0,0,1,371.33,108Z"/>
		<circle class="cls-nona-hero-16" cx="335.78" cy="128.56" r="1.75"/>
		<circle class="cls-nona-hero-16" cx="362.76" cy="83.22" r="1.04"/>
		<circle class="cls-nona-hero-16" cx="321.28" cy="69.33" r="1.85"/>
		<path class="cls-nona-hero-16" d="M306.4,48.67A1.69,1.69,0,1,1,304.71,47,1.69,1.69,0,0,1,306.4,48.67Z"/>
		<circle class="cls-nona-hero-16" cx="251.28" cy="69.72" r="0.84"/>
		<path class="cls-nona-hero-16" d="M262.71,95.48a.29.29,0,1,1-.29-.29A.29.29,0,0,1,262.71,95.48Z"/>
		<path class="cls-nona-hero-16" d="M286.43,105.93a.61.61,0,1,1-1.21,0,.61.61,0,1,1,1.21,0Z"/>
		<circle class="cls-nona-hero-16" cx="307.2" cy="148.86" r="0.41"/>
		<path class="cls-nona-hero-16" d="M324.4,100.59a.9.9,0,1,1-.9-.9A.9.9,0,0,1,324.4,100.59Z"/>
		<path class="cls-nona-hero-16" d="M323.42,132a1,1,0,1,1-1-1A1,1,0,0,1,323.42,132Z"/>
		<circle class="cls-nona-hero-16" cx="326.06" cy="135.33" r="1.76"/>
		<path class="cls-nona-hero-16" d="M339.5,167.86a1.8,1.8,0,1,1-1.79-1.79A1.8,1.8,0,0,1,339.5,167.86Z"/>
		<circle class="cls-nona-hero-16" cx="376.87" cy="69.55" r="1.58"/>
		<path class="cls-nona-hero-16" d="M353.47,72.48a.83.83,0,1,1-.83-.83A.83.83,0,0,1,353.47,72.48Z"/>
		<path class="cls-nona-hero-16" d="M338.5,42.07a.88.88,0,0,1-1.76,0,.88.88,0,1,1,1.76,0Z"/>
		<path class="cls-nona-hero-16" d="M360.14,82a1,1,0,0,1-2.08,0,1,1,0,1,1,2.08,0Z"/>
		<circle class="cls-nona-hero-16" cx="340.52" cy="71.94" r="1.93"/>
		<path class="cls-nona-hero-16" d="M331.93,42.89a.72.72,0,1,1-.72-.71A.72.72,0,0,1,331.93,42.89Z"/>
		<path class="cls-nona-hero-16" d="M337.23,60.41a.68.68,0,1,1-.67-.68A.68.68,0,0,1,337.23,60.41Z"/>
		</g>
		<path class="cls-nona-hero-17" d="M264.13,97c0,7.08-3.83,12.82-8.56,12.82s-17.43-.76-13.67-14.39c1.88-6.82,5.32-11.24,13.67-11.24C260.3,84.21,264.13,89.94,264.13,97Z"/>
		<path
		class="cls-nona-hero-18"
		d="M261.37,94.77c.89-.65,1.19-2.73,1.22-5.07-1.54-3.32-4.11-5.49-7-5.49-8.35,0-11.79,4.42-13.67,11.24-3.76,13.63,8.94,14.39,13.67,14.39a5.73,5.73,0,0,0,1.84-.31c-2.27.65-3.89-.93-2.51-1.7a6.84,6.84,0,0,0,3.54-6.48C258.12,98,259,96.5,261.37,94.77Z"/>
		<path class="cls-nona-hero-18" d="M258.09,109.27l.09,0Z"/>
		<path class="cls-nona-hero-19" d="M254.77,104.2c-4,7.58,1.91,13.43,1.91,13.43l-21.53-1.5,7.59-13.9S256.38,101.1,254.77,104.2Z"/>
		<path class="cls-nona-hero-18" d="M242.74,102.23,236,114.56l14.88.2a6.05,6.05,0,0,1,2.54-6h0a11.5,11.5,0,0,1,1.34-4.52C256.38,101.1,242.74,102.23,242.74,102.23Z"/>
		<path class="cls-nona-hero-20" d="M218.76,133.87s-12.94,12.67-10.93,38c0,0-.76,1.52-1.31,2.5s1.27,2.84,4.58,1.21c1.59-.78-.57-3.63-.57-3.63s3.89-10.55,21.83-33.67Z"/>
		<path class="cls-nona-hero-18" d="M215.42,146.38c-.18.22-.74.05-1.26-.37s-.79-.95-.61-1.17.74-.05,1.26.37S215.6,146.16,215.42,146.38Z"/>
		<path class="cls-nona-hero-18" d="M232.36,138.3l-13.6-4.43a33.55,33.55,0,0,0-5.44,7.94c6.27,6,12.63,5,12.63,5h0C227.86,144.2,230,141.36,232.36,138.3Z"/>
		<path class="cls-nona-hero-21" d="M228.89,146.24c9-12.21,12.4-25.05,8.12-29.6-8-8.48-17.23,14.34-23.41,15.69,0,0-2.07,5.41,3.38,9.88A18.48,18.48,0,0,0,228.89,146.24Z"/>
		<path
		class="cls-nona-hero-22"
		d="M216.05,163.62c-6.7,6.93-3.09,17.93,5.4,22.62,0,0,1.05,22.18-2.06,24.53-7.12,5.4-15.76,15.84-26.12,16-3.91-1.28,1.4,17.48,3.45,13.87,1.16-2,1.15-5.82.22-8.94,4.79.06,37.8-11.43,47.16-41C253.17,162.15,216.05,163.62,216.05,163.62Z"/>
		<path class="cls-nona-hero-23" d="M246.48,251c-1.34-.69-3.1-.43-4.88.24,4.5-20.53,23.09-57.5,25.86-93.54H233.83c-17.62,25.64,4.83,30.14,4.83,30.14,10.93,4.2-4.47,64.63-4.59,69,.17,2.8,5.15,1.09,7.4-.19C244,255.18,248.79,252.17,246.48,251Z"/>
		<path class="cls-nona-hero-24" d="M264.35,178.34c-.69-5.39-5.76-6.69-14.18,0-13.77,11-30.78,9.55-35.16,1.79,0,0-5.75-7.19,1.06-16.54H265.9A60.68,60.68,0,0,1,264.35,178.34Z"/>
		<path class="cls-nona-hero-25" d="M242.46,113c27.8,0,26.47,37.77,24.67,46.71-2.5,12.46-47.72,26.05-57.06,1.52,0,0,13.43-5.57,15.55-22.73C227.4,124.17,232.1,113,242.46,113Z"/>
		<path class="cls-nona-hero-26" d="M253.17,167.65S265.7,150,264.63,136.28s-4.29-18.6-10.79-17.51l-4.07-1.9s8.33-1.84,12.06,3.85c7.06,10.77-11,39-11,39Z"/>
		<path class="cls-nona-hero-27" d="M254.83,144.25s-2,18.37,16,37.06c0,0,.39,1.69.59,2.82s2.83,1.42,4.39-2c.75-1.64-2.8-2.49-2.8-2.49s-3.77-10.84-4.58-40.69Z"/>
		<path class="cls-nona-hero-18" d="M260.3,156.27c0,.29-.55.53-1.24.53s-1.23-.24-1.23-.53.55-.52,1.23-.52S260.3,156,260.3,156.27Z"/>
		<path class="cls-nona-hero-18" d="M268.43,138.94l-13.6,5.31a34.45,34.45,0,0,0,.85,9.79c8.84.67,13.21-4.22,13.21-4.22h0C268.7,146.51,268.54,142.89,268.43,138.94Z"/>
		<path class="cls-nona-hero-28" d="M270.83,147.45c-.8-15.47-6.44-27.8-12.76-28.61-11.77-1.53-4.3,22.47-8.3,27.54,0,0,1.86,5.6,9.06,5.6A18.87,18.87,0,0,0,270.83,147.45Z"/>
		<path class="cls-nona-hero-29" d="M254.77,121.26A124.27,124.27,0,0,0,251.43,152c0,13.39,4.11,17.07,0,22.23-4.76,6-17.91,9.66-32.82,5.42s-8.63-22.83-2-46C221.44,116.76,254.34,112.6,254.77,121.26Z"/>
		<path class="cls-nona-hero-30" d="M216.61,133.62c-1.56,5.48-3.1,10.65-4.34,15.43,10.27,4.95,31.48,3.34,33.47-1,2.19-4.81-5.41-28.88,9-26.76C254.34,112.6,221.44,116.76,216.61,133.62Z"/>
		<path class="cls-nona-hero-31" d="M221.49,117c7.16-4.38,32.4-5.2,33.28,4.23,0,0-4.76-1.73-8,1.93s-3.06,16.61-2.62,22.94-40.57,1.36-33.25-4.19c0,0,3.4-1.77,5.75-8.32C218.15,129.35,214.26,121.46,221.49,117Z"/>
		<path
		class="cls-nona-hero-32"
		d="M242.67,152a32,32,0,0,1-.63,7.1c-.43,2.34-1,4.66-1.45,7s-.9,4.65-1.14,7a11.25,11.25,0,0,0,.09,3.43,3.83,3.83,0,0,0,.67,1.53,3.4,3.4,0,0,0,1.36,1l0,.07a3.36,3.36,0,0,1-1.61-.85,4.51,4.51,0,0,1-.92-1.62,11,11,0,0,1-.34-3.64,39.66,39.66,0,0,1,1.31-7.05c.56-2.31,1.17-4.6,1.67-6.92a31.44,31.44,0,0,0,.93-7Z"/>
		<path class="cls-nona-hero-33" d="M236.4,131.77c-1.3,6.41,1.79,23-4.06,31.74,0,0-3.62,0-4.09-2.95,0,0,2.95-2.53,4-8.07s1.27-19.29,1.29-20.64c0-1.09,1.85-.6,2.57-.32A.91.91,0,0,1,236.4,131.77Z"/>
		<path class="cls-nona-hero-34" d="M236.08,131.49c-1.35,6.34,2,22.79-4,31.61,0,0-4.07-.37-4.65-3.38,0,0,3.27-2.26,4.33-7.74s1.45-19.13,1.45-20.49S236.08,131.49,236.08,131.49Z"/>
		<path class="cls-nona-hero-35" d="M221.45,131.68c-1.92,5.73-.78,20.62-7.14,28.61,0,0-3.6-.34-3.78-3.07a13.28,13.28,0,0,0,4.74-7c1.57-5,3.15-17.5,3.3-18.73.13-1,1.9-.38,2.59-.06A.86.86,0,0,1,221.45,131.68Z"/>
		<path class="cls-nona-hero-36" d="M221.16,131.43c-1.91,5.74-.78,20.63-7.14,28.61,0,0-3.6-.34-3.78-3.06a13.39,13.39,0,0,0,4.75-7c1.56-5,3.44-17.3,3.59-18.54S221.16,131.43,221.16,131.43Z"/>
		<path
		class="cls-nona-hero-37"
		d="M261.83,85.92c9,7.9-4,7.73-4,13.54,0,13.56-14.19,5.87-8.06,17.41,5.28,9.94-7.08,13.63-16.25,10.18s-19.85-11.85-27.1-9.42c-12.83,4.32-11.44-12.79,3.82-6.54s7.4-11.93,18-13.16,10.68-3.73,14.57-8.39C247.27,84.21,255.15,80.06,261.83,85.92Z"/>
		<g class="cls-nona-hero-2">
		<path class="cls-nona-hero-30" d="M350.07,114.21s-2.65-6.25,3.55-11.88C353.62,102.33,357.6,109.91,350.07,114.21Z"/>
		<path class="cls-nona-hero-30" d="M386.21,125.81s2.37-8,12.69-8.55C398.9,117.26,396.75,127.6,386.21,125.81Z"/>
		<path class="cls-nona-hero-30" d="M351.65,127.52s8.29-1.66,13.58,7.33C365.23,134.85,355,137.77,351.65,127.52Z"/>
		<path class="cls-nona-hero-30" d="M211.35,60.17s-5.1-2.51-4.25-9.46C207.1,50.71,213.76,53.33,211.35,60.17Z"/>
		<path class="cls-nona-hero-30" d="M191.88,83.22s-1.65-4.22,2.59-7.86C194.47,75.36,197,80.49,191.88,83.22Z"/>
		<path class="cls-nona-hero-30" d="M151.11,44.69s4.16-6.11,13-3.75C164.09,40.94,159.49,49,151.11,44.69Z"/>
		<path class="cls-nona-hero-30" d="M325,70.24s-6.93-2.36-7-11.4C318,58.84,326.92,61.1,325,70.24Z"/>
		<path class="cls-nona-hero-30" d="M319.24,30.39s2.07-7.31,12-8C331.26,22.37,329.46,31.75,319.24,30.39Z"/>
		</g>
		<rect class="cls-nona-hero-38" y="236.32" width="412" height="56.54"/>
		</g>
	</svg>
</header>
