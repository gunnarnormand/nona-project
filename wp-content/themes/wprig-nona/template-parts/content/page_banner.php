<?php
/**
 * Template part for displaying a page's banner
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<header class="banner">
	<div class="banner-content">
		<?php
		get_template_part( 'template-parts/content/entry_title', get_post_type() );

		if ( ! is_search() ) {
			get_template_part( 'template-parts/content/entry_thumbnail', get_post_type() );
		}
		?>
	</div>

	<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1296.88 978">
		<defs>
			<style>
				.f8260fde-5578-474b-b319-34417a23515c {
					fill: url("#bec7990b-7120-42e4-9638-02d1384d36e4");
				}
				.b0791d58-3eb8-45ae-90de-b9131ea87332 {
					fill: url("#a8786b56-0a08-46cb-b050-c49645bd8bfb");
				}
				.b4641443-a04b-4bea-b789-0f0ec58f4e65 {
					fill: url("#b400eed7-e487-4185-a667-991facb4a8d4");
				}
				.f572c60c-647b-456a-bb6c-0acc91d135c9 {
					fill: url("#f78422e8-3eb8-482c-b50b-4fe6cb51f173");
				}
				.fc99f75e-1152-47ba-b412-57373b80cf32 {
					fill: #038e3e;
				}
			</style>
			<linearGradient id="bec7990b-7120-42e4-9638-02d1384d36e4" x1="1894.68" y1="1124.75" x2="1894.68" y2="146.75" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1124.75)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
			<linearGradient id="a8786b56-0a08-46cb-b050-c49645bd8bfb" x1="1994.53" y1="974.99" x2="1994.53" y2="-90.5" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1103.71)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
			<linearGradient id="b400eed7-e487-4185-a667-991facb4a8d4" x1="1766.35" y1="596.66" x2="2565.86" y2="596.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
			<linearGradient id="f78422e8-3eb8-482c-b50b-4fe6cb51f173" x1="2142.01" y1="395.85" x2="2480.76" y2="395.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
		</defs>
		<path
		class="f8260fde-5578-474b-b319-34417a23515c"
		d="M1920,978H804.32c-16.14-29.48-20.48-65.13-11-97.31,11.52-39.19,43.18-72.22,82.52-86.07,52.48-18.48,110.2-3.34,165.88.11s122.36-12.92,141.11-64.15c14.4-39.33-5.77-81.64-21.21-120.59s-24.31-88.48,6-118c46.84-45.64,133.78,2.51,190.8-30.33,24.21-13.94,38.53-41.6,38.64-69s-13-54-32.8-73.47C1319.14,275,1248.58,270.27,1184.69,269s-134-3.88-181.46-45.61c-42.46-37.34-58.42-99.82-107.15-129C859.52,72.57,813.67,75,771.24,68.86c-55-8-106.6-32.88-148.12-68.86H1920Z"
		transform="translate(-623.12 0)"/>
		<path
		class="b0791d58-3eb8-45ae-90de-b9131ea87332"
		d="M1920,978H857.2c-11.84-38.53-7.68-82.17,13-116.9,27.79-46.71,83.92-74.85,137.92-69.17,51.94,5.47,98.06,38.89,150.14,42.82,54,4.09,109.07-27.69,132.59-76.6s14-111.79-22.88-151.55c-16.2-17.46-38.83-35.18-35.76-58.81,2.15-16.6,17.33-28.87,33.29-33.86s33-4.47,49.66-6c79.24-7.32,152.8-70.64,162.46-149.72s-54.44-162.4-134-164.58c-78.73-2.15-152.37,65.7-228.56,45.73-59.26-15.53-91.8-76.73-128.34-126C953.28,68.36,901.38,4.65,822.82,0H1920Z"
		transform="translate(-623.12 0)"/>
		<path
		class="b4641443-a04b-4bea-b789-0f0ec58f4e65"
		d="M1912.57,625.41c-14.66-8.72-30.91-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a15.81,15.81,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.6-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.68,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.79,193.79,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.4,7.73.56,12.37,0,18.56-4.3,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.37a15.23,15.23,0,0,0,7.78.47c6.54-1.7,7.62-7.12,5.92-10.91,38.21.82,76.33,1.15,114.57,1.19C1914.38,629.43,1914.39,626.49,1912.57,625.41Z"
		transform="translate(-623.12 0)"/>
		<path
		class="f572c60c-647b-456a-bb6c-0acc91d135c9"
		d="M1540.05,438.09c69.46-4.12,139.69-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.94-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.58-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C1537.86,436,1538.1,438.2,1540.05,438.09Z"
		transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1728.47,503.43s-8.21-19.34,11-36.76C1739.46,466.67,1751.74,490.12,1728.47,503.43Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1840.24,539.28s7.32-24.86,39.26-26.42C1879.5,512.86,1872.84,544.83,1840.24,539.28Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1733.34,544.57s25.65-5.11,42,22.68C1775.36,567.25,1743.67,576.29,1733.34,544.57Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1299.43,336.27s-15.77-7.74-13.15-29.25C1286.28,307,1306.87,315.14,1299.43,336.27Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1239.21,407.57s-5.12-13.05,8-24.3C1247.22,383.27,1255,399.14,1239.21,407.57Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1113.12,288.41s12.87-18.92,40.12-11.61C1153.24,276.8,1139,301.87,1113.12,288.41Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1650.84,367.44s-21.45-7.3-21.66-35.26C1629.18,332.18,1656.87,339.16,1650.84,367.44Z" transform="translate(-623.12 0)"/>
		<path class="fc99f75e-1152-47ba-b412-57373b80cf32" d="M1633.12,244.18s6.4-22.6,37.16-24.81C1670.28,219.37,1664.71,248.37,1633.12,244.18Z" transform="translate(-623.12 0)"/>
	</svg>

</header>
