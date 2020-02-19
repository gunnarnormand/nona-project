<?php
/**
 * Template part for displaying the header navigation menu
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

if ( ! wp_rig()->is_primary_nav_menu_active() ) {
	return;
}

?>

<nav id="site-navigation" class="main-navigation nav--toggle-sub nav--toggle-small" aria-label="<?php esc_attr_e( 'Main menu', 'wp-rig' ); ?>"
	<?php
	if ( wp_rig()->is_amp() ) {
		?>
		[class]=" siteNavigationMenu.expanded ? 'main-navigation nav--toggle-sub nav--toggle-small nav--toggled-on' : 'main-navigation nav--toggle-sub nav--toggle-small' "
		<?php
	}
	?>
>
	<?php
	if ( wp_rig()->is_amp() ) {
		?>
		<amp-state id="siteNavigationMenu">
			<script type="application/json">
				{
					"expanded": false
				}
			</script>
		</amp-state>
		<?php
	}
	?>

	<button class="menu-toggle" aria-label="<?php esc_attr_e( 'Open menu', 'wp-rig' ); ?>" aria-controls="primary-menu" aria-expanded="false"
		<?php
		if ( wp_rig()->is_amp() ) {
			?>
			on="tap:AMP.setState( { siteNavigationMenu: { expanded: ! siteNavigationMenu.expanded } } )"
			[aria-expanded]="siteNavigationMenu.expanded ? 'true' : 'false'"
			<?php
		}
		?>
	>
		<div class="menu-bars">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
		<div class="menu-text">
			<?php esc_html_e( 'Menu', 'wp-rig' ); ?>
		</div>
	</button>

	<div class="primary-menu-container">
		<?php wp_rig()->display_primary_nav_menu( [ 'menu_id' => 'primary-menu' ] ); ?>
	</div>

	<svg class="menu-overlay" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 920.12">
		<defs>
			<style>
				.cls-menu-overlay-1 {
					fill: none;
				}
				.cls-menu-overlay-2 {
					fill: #fff;
				}
				.cls-menu-overlay-3 {
					fill: url("#linear-gradient-menu-overlay");
				}
				.cls-menu-overlay-4 {
					fill: url("#linear-gradient-menu-overlay-2");
				}
				.cls-menu-overlay-6 {
					fill: url("#linear-gradient-menu-overlay-3");
				}
				.cls-menu-overlay-7 {
					fill: url("#linear-gradient-menu-overlay-4");
				}
				.cls-menu-overlay-8 {
					fill: url("#linear-gradient-menu-overlay-5");
				}
				.cls-menu-overlay-9 {
					fill: #57d6f2;
				}
				.cls-menu-overlay-10 {
					fill: #f25430;
				}
			</style>
			<linearGradient id="linear-gradient-menu-overlay" x1="161.19" y1="520.18" x2="957.05" y2="520.18" gradientTransform="translate(820.18 142.07) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.06" stop-color="#f2b137"/><stop offset="0.18" stop-color="#f2be5b"/><stop offset="0.34" stop-color="#f1d395"/><stop offset="0.49" stop-color="#f1e9d2"/><stop offset="0.73" stop-color="#f8f4e9"/><stop offset="1" stop-color="#fff"/></linearGradient>
			<linearGradient id="linear-gradient-menu-overlay-2" x1="373.25" y1="520.18" x2="1105.67" y2="520.18" gradientTransform="translate(820.18 142.07) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.21" stop-color="#f2622f"/><stop offset="0.45" stop-color="#f2862c"/><stop offset="0.67" stop-color="#f2ac29"/><stop offset="0.68" stop-color="#f3b137"/><stop offset="0.71" stop-color="#f5bf5b"/><stop offset="0.74" stop-color="#f9d696"/><stop offset="0.78" stop-color="#fef5e6"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
			<clipPath id="clip-path" transform="translate(0 -179)"><path
				class="cls-menu-overlay-1"
				d="M600,1099.12V447.91c-23.64-7.25-50.41-4.7-71.72,8-28.65,17-45.92,51.42-42.43,84.51,3.36,31.82,23.85,60.09,26.27,92,2.51,33.12-17,66.84-47,81.25s-68.59,8.59-93-14c-10.71-9.93-21.58-23.8-36.09-21.92-10.18,1.33-17.7,10.63-20.77,20.4s-2.74,20.23-3.68,30.43c-4.49,48.55-43.34,93.63-91.85,99.55s-99.63-33.36-101-82.1c-1.32-48.24,40.31-93.36,28.06-140.05-9.53-36.31-47.08-56.25-77.28-78.64C41.94,506.79,2.85,475,0,426.85v672.27Z"/></clipPath>
			<linearGradient id="linear-gradient-menu-overlay-3" x1="429.58" y1="546.46" x2="934.2" y2="546.46" gradientTransform="translate(-449.46 482.44)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
			<linearGradient id="linear-gradient-menu-overlay-4" x1="635.84" y1="400.47" x2="985.15" y2="400.47" gradientTransform="translate(-449.46 482.44)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			<linearGradient id="linear-gradient-menu-overlay-5" x1="322.81" y1="376.16" x2="692.76" y2="376.16" gradientTransform="translate(-449.46 482.44)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f27929"/><stop offset="0.5" stop-color="#f2aa29"/><stop offset="1" stop-color="#f2de29"/></linearGradient>
		</defs>
		<rect class="cls-menu-overlay-2" x="-160.06" y="339.06" width="920.12" height="600" transform="translate(939.06 160.06) rotate(90)"/>
		<path
			class="cls-menu-overlay-3"
			d="M600,1099.12V414.46a79.09,79.09,0,0,0-59.7-6.76c-24,7.07-44.3,26.5-52.8,50.64-11.34,32.2-2.05,67.62.07,101.8s-7.93,75.08-39.36,86.59c-24.13,8.83-50.09-3.54-74-13s-54.29-14.91-72.4,3.68c-28,28.74,1.54,82.1-18.6,117.09-8.56,14.86-25.52,23.64-42.34,23.71s-33.16-8-45.08-20.13c-27.08-27.67-30-71-30.76-110.18s-2.37-82.23-28-111.35c-22.9-26.06-61.24-35.85-79.13-65.76C44.52,448.33,46,420.2,42.25,394.16c-4.9-33.75-20.18-65.42-42.25-90.9v795.86Z"
			transform="translate(0 -179)"/>
		<path
			class="cls-menu-overlay-4"
			d="M600,1099.12V447.91c-23.64-7.25-50.41-4.7-71.72,8-28.65,17-45.92,51.42-42.43,84.51,3.36,31.82,23.85,60.09,26.27,92,2.51,33.12-17,66.84-47,81.25s-68.59,8.59-93-14c-10.71-9.93-21.58-23.8-36.09-21.92-10.18,1.33-17.7,10.63-20.77,20.4s-2.74,20.23-3.68,30.43c-4.49,48.55-43.34,93.63-91.85,99.55s-99.63-33.36-101-82.1c-1.32-48.24,40.31-93.36,28.06-140.05-9.53-36.31-47.08-56.25-77.28-78.64C41.94,506.79,2.85,475,0,426.85v672.27Z"
			transform="translate(0 -179)"/>
		<g>
			<path
				class="cls-menu-overlay-6"
				d="M465.69,1049.66c-9.25-6.3-19.51-6.52-30-6.08-11.09.47-21.85.74-32.26-2.36-4.44-1.32-7.93-5-10-9.64a11,11,0,0,0-3.74-4.53c-3.85-2.7-8.1-1.77-12,.1-.47.22-.95-.23-.88-.8,1.63-14.53-7.12-28.74-20.8-30-16.62-1.59-25.11,15.08-28.39,31.48a2,2,0,0,1-3,1.57c-3-1.67-6.56-1.23-8.8,3.18a.54.54,0,0,1,0,.11c-2.84,5.77-8,9.55-13.8,9.45-5.58-.09-11.14-.26-16.62-.28a107.65,107.65,0,0,0-34.22,5.45c-1.33.43-.56,2.39.53,2.55a160.27,160.27,0,0,0,22.89,1.26c38.75,0,50.82,7.19,89.07,10.4,4.87.41,7.8,0,11.71-3.1,2-1.64,2.35-1.72,5-.84,1.35.44,2.58,1.29,3.95,1.71a8.42,8.42,0,0,0,4.91.34c4.13-1.23,4.81-5.14,3.74-7.88,24.12.6,48.17.83,72.31.86C466.83,1052.56,466.84,1050.44,465.69,1049.66Z"
				transform="translate(0 -179)"/>
			<path
				class="cls-menu-overlay-7"
				d="M207.5,911.93c43.84-3,88.16-6.26,131.58,3.07a6.31,6.31,0,0,0-2.25,3.81c-1.51,7.53,6.34,11,11.47,11,13.22-.15,26.86-8.19,39.5-11.9,16.47-4.82,31.62-3.58,47.95,1.17,12.52,3.64,24.77,7.21,37.77,7.27,13.67.06,27.18-2.78,40.46-6.28,23.64-6.21,47.48-17.18,71.87-17.71,3.81.14,7.62.31,11.43.43,2.21.07,4.09-4.47,1.38-4.68-2.45-.15-78.09-2.58-109.27-4.52-8.26,0-10.47-17.74-24-1.5a55.26,55.26,0,0,1,.44-8,83,83,0,0,0,.45-8.5,50.42,50.42,0,0,0-4.55-20.35c-9.33-19.87-34.54-27.1-47.57-7.68a29.47,29.47,0,0,0-4.83,13c-1.23,10.74,5,20.63-6.45,27.82-3.62,2.27-10.93,5.16-9.81,10.55a68.6,68.6,0,0,0-28.14.31c-5.61,1.27-11.13,3.86-16.91,3.38s-9.71-3.74-13.83-8.14c-8.22-8.76-16.63-20.72-28.93-13.7-9.14,5.21-14.15,16.8-25.29,17.6-8.85.63-17.54-4.37-26.34-1.48-3.83,1.25-6.72,3.87-10,6.32-6.47,4.8-12,4.79-19.29,3-6.55-1.63-12.43-2.27-17.44,3.49C206.12,910.42,206.27,912,207.5,911.93Z"
				transform="translate(0 -179)"/>
			<path
				class="cls-menu-overlay-8"
				d="M252.49,858.19c-25.84.59-51.73,1.31-77.57,1.24-5.65,0-4.93-4.51-7.72-8a5.26,5.26,0,0,0-4.53-2,4.53,4.53,0,0,0-4.36,4c-6.42-10.42-14.64-20.59-26.47-20.8-11.48-.2-18.71,11-16.06,23.28,1.34,6.23,2.29,16.39-6.56,11.92-1.7-.86-3.53-2-5.47-1.77s-3.25,1.49-4.54,2.95c-3.86,4.38-6.64,6.51-12.28,7.17-18.88,2.21-38,2.7-56.94,4.24-2.41.2-.67,4.27,1.32,4.17,11.79-.6,23.59-1,35.39-1.37,17,.46,34,.75,51,1,11,.18,22.11.7,33.15.43,9.66-.24,27.12-2.48,26.91-9.49-.14-4.91-15.89-4.63-16.57-6.57-1.74-5,17.63-1.27,42.93-1.27,16.7,0,33.36-.49,49.19-7.1C254.41,859.71,253.21,858.18,252.49,858.19Z"
				transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M346.8,1027.05a1.27,1.27,0,1,1,1.27-1.27A1.26,1.26,0,0,1,346.8,1027.05Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="228.12" cy="881.14" rx="7.13" ry="7.11"/>
			<path class="cls-menu-overlay-9" d="M219.44,984.7a7.49,7.49,0,1,1,7.5-7.49A7.49,7.49,0,0,1,219.44,984.7Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="256.96" cy="826.13" rx="5.93" ry="5.92"/>
			<path class="cls-menu-overlay-9" d="M243.53,963.18a7.18,7.18,0,1,1,7.19-7.17A7.18,7.18,0,0,1,243.53,963.18Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="162.42" cy="644.01" rx="6.93" ry="6.91"/>
			<ellipse class="cls-menu-overlay-9" cx="341.64" cy="750.38" rx="4.1" ry="4.09"/>
			<ellipse class="cls-menu-overlay-9" cx="396.55" cy="586.83" rx="7.33" ry="7.31"/>
			<path class="cls-menu-overlay-9" d="M478.22,707.16a6.66,6.66,0,1,1,6.67-6.66A6.67,6.67,0,0,1,478.22,707.16Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="395.02" cy="310.8" rx="3.33" ry="3.32"/>
			<path class="cls-menu-overlay-9" d="M293.19,534.88a1.15,1.15,0,1,1,1.16-1.15A1.15,1.15,0,0,1,293.19,534.88Z" transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M251.89,628.42a2.39,2.39,0,1,1,2.39-2.39A2.39,2.39,0,0,1,251.89,628.42Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="82.2" cy="531.31" rx="1.63" ry="1.63"/>
			<path class="cls-menu-overlay-9" d="M273,778.1a3.54,3.54,0,1,1,3.55-3.54A3.54,3.54,0,0,1,273,778.1Z" transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M149,774.25a3.88,3.88,0,1,1,3.88-3.87A3.87,3.87,0,0,1,149,774.25Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="135.67" cy="605.68" rx="6.94" ry="6.92"/>
			<path class="cls-menu-overlay-9" d="M7.08,837.65a7.07,7.07,0,1,1,7.09-7.06A7.07,7.07,0,0,1,7.08,837.65Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="395.68" cy="805.99" rx="6.25" ry="6.23"/>
			<path class="cls-menu-overlay-9" d="M384.11,892.74a3.26,3.26,0,1,1,3.26-3.26A3.26,3.26,0,0,1,384.11,892.74Z" transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M504.3,833.73a3.47,3.47,0,1,1,3.48-3.47A3.47,3.47,0,0,1,504.3,833.73Z" transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M346.39,919.05a4.1,4.1,0,1,1,4.11-4.1A4.1,4.1,0,0,1,346.39,919.05Z" transform="translate(0 -179)"/>
			<ellipse class="cls-menu-overlay-9" cx="386.24" cy="662.67" rx="7.62" ry="7.6"/>
			<path class="cls-menu-overlay-9" d="M501.05,807.8a2.82,2.82,0,1,1,2.82-2.82A2.82,2.82,0,0,1,501.05,807.8Z" transform="translate(0 -179)"/>
			<path class="cls-menu-overlay-9" d="M431.82,828.72a2.67,2.67,0,1,1,2.67-2.67A2.67,2.67,0,0,1,431.82,828.72Z" transform="translate(0 -179)"/>
		</g>
		<path class="cls-menu-overlay-10" d="M311.05,943.19s16.26-6.89,30.91,9.21C342,952.4,322.24,962.71,311.05,943.19Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M280.9,1036.94s20.91,6.15,22.22,32.94C303.12,1069.88,276.23,1064.29,280.9,1036.94Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M276.45,947.28s4.3,21.51-19.07,35.24C257.38,982.52,249.78,955.94,276.45,947.28Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M451.62,583.28s6.51-13.22,24.59-11C476.21,572.26,469.39,589.53,451.62,583.28Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M391.66,532.77s11-4.29,20.44,6.72C412.1,539.49,398.75,546,391.66,532.77Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M491.87,427s15.9,10.79,9.75,33.66C501.62,460.66,480.54,448.72,491.87,427Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M425.41,878.07s6.14-18,29.64-18.17C455.05,859.9,449.19,883.13,425.41,878.07Z" transform="translate(0 -179)"/>
		<path class="cls-menu-overlay-10" d="M529.06,863.2s19,5.37,20.86,31.18C549.92,894.38,525.53,889.7,529.06,863.2Z" transform="translate(0 -179)"/>
	</svg>

</nav><!-- #site-navigation -->
