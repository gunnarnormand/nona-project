<?php
/**
 * Template part for displaying the page header of the currently displayed page
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

if ( is_404() ) {
	wp_rig()->print_styles( 'wp-rig-banner' );
	?>
	<header class="page-header">
		<div class="header-content">
			<h1 class="page-title">
				<?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'wp-rig' ); ?>
			</h1>
		</div>
		<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1311.88 828">
			<defs>
				<style>
					.a12f05c6-8735-4fe7-83d2-404aecf50d8b {
						fill: url("#b384a669-f415-48bf-ba6b-5906231dd348");
					}
					.ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9 {
						fill: url("#e5306831-984b-4796-835a-5f9b8c18bc08");
					}
					.ba088074-2aa1-4197-9e03-1d2c1a7b37b4 {
						fill: url("#a6665a0f-4517-44c0-a0c7-e981701b5f6e");
					}
					.bbdbaac6-f4d6-43a3-b18c-e3e7e131180f {
						fill: url("#a82c2ec0-2164-4783-8558-cc865d7c51b1");
					}
					.aad55ea0-b475-4cc1-9359-fc1438245bb6 {
						fill: #038e3e;
					}
				</style>
				<linearGradient id="b384a669-f415-48bf-ba6b-5906231dd348" x1="1278.56" y1="1429.61" x2="1278.56" y2="601.61" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1429.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
				<linearGradient id="e5306831-984b-4796-835a-5f9b8c18bc08" x1="1379.41" y1="1299.59" x2="1379.41" y2="397.51" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1408.56)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
				<linearGradient id="a6665a0f-4517-44c0-a0c7-e981701b5f6e" x1="1149.23" y1="522.66" x2="1948.74" y2="522.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
				<linearGradient id="a82c2ec0-2164-4783-8558-cc865d7c51b1" x1="1532.89" y1="282.85" x2="1871.64" y2="282.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			</defs>
			<g id="a0d41daa-d2af-4db8-871a-729b1d87e04f">
				<g id="f2fada4c-ee70-4385-aad1-8aadcf3056f0"><path
					class="a12f05c6-8735-4fe7-83d2-404aecf50d8b"
					d="M786.61,430.43c3.1-9.75,15.59-52.78-6.73-97.43-21.55-43.1-61.16-58.74-72-63-48.18-18.95-73.29,4.23-140.25,7.29-20,.92-119,10.74-183.42-47-42.91-38.49-59-102.89-108.3-132.95-37-22.55-83.3-20-126.19-26.37C94.14,62.75,42,37.08,0,0H1310.88V828a445.56,445.56,0,0,0-82.06-96.5h0a441.43,441.43,0,0,0-100.21-49.07c-145.58-49.51-242.49,4.84-315-63-35.54-33.26-44.35-76.35-45.51-82.44C758.41,486.19,778.69,444.82,786.61,430.43Z"/><path
					class="ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9"
					d="M1130.88,639c-123.67-62.22-233.71-24.26-270-90-34-61.64,49.11-119.6,18-216-20.53-63.61-83.32-120.75-150.73-133.43-100.62-18.92-145.77,70-231.48,47.14-60-16-93-79.09-130-129.83C332.83,70.46,280.27,4.79,200.7,0H1311.88V684l-1,144C1278.87,766.37,1224,685.85,1130.88,639Z"/><path
					class="ba088074-2aa1-4197-9e03-1d2c1a7b37b4"
					d="M1295.45,551.41c-14.66-8.72-30.92-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a16,16,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.59-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.69,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.42,193.42,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.39,7.73.57,12.37,0,18.56-4.29,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.36a15.13,15.13,0,0,0,7.78.48c6.54-1.7,7.62-7.13,5.91-10.92,38.22.83,76.34,1.16,114.58,1.2C1297.26,555.43,1297.27,552.49,1295.45,551.41Z"/><path
					class="bbdbaac6-f4d6-43a3-b18c-e3e7e131180f"
					d="M930.93,325.09c69.46-4.12,139.68-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.93-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.57-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C928.74,323,929,325.2,930.93,325.09Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1133.35,447.43s-8.21-19.34,11-36.76C1144.34,410.67,1156.62,434.12,1133.35,447.43Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1245.12,483.28s7.32-24.86,39.26-26.42C1284.38,456.86,1277.72,488.83,1245.12,483.28Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1138.22,488.57s25.64-5.11,42,22.68C1180.24,511.25,1148.55,520.29,1138.22,488.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M704.31,280.27s-15.77-7.74-13.15-29.25C691.16,251,711.75,259.14,704.31,280.27Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M644.08,351.57s-5.11-13.05,8-24.3C652.1,327.27,659.86,343.14,644.08,351.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M518,232.41s12.87-18.92,40.12-11.61C558.12,220.8,543.9,245.87,518,232.41Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1055.72,311.44s-21.45-7.3-21.66-35.26C1034.06,276.18,1061.75,283.16,1055.72,311.44Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1038,188.18s6.4-22.6,37.16-24.81C1075.16,163.37,1069.59,192.37,1038,188.18Z"/></g>
			</g>
		</svg>
	</header><!-- .page-header -->
	<?php
} elseif ( is_home() && ! have_posts() ) {
	wp_rig()->print_styles( 'wp-rig-banner' );
	?>
	<header class="page-header">
		<div class="header-content">
			<h1 class="page-title">
				<?php esc_html_e( 'Nothing Found', 'wp-rig' ); ?>
			</h1>
		</div>
		<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1311.88 828">
			<defs>
				<style>
					.a12f05c6-8735-4fe7-83d2-404aecf50d8b {
						fill: url("#b384a669-f415-48bf-ba6b-5906231dd348");
					}
					.ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9 {
						fill: url("#e5306831-984b-4796-835a-5f9b8c18bc08");
					}
					.ba088074-2aa1-4197-9e03-1d2c1a7b37b4 {
						fill: url("#a6665a0f-4517-44c0-a0c7-e981701b5f6e");
					}
					.bbdbaac6-f4d6-43a3-b18c-e3e7e131180f {
						fill: url("#a82c2ec0-2164-4783-8558-cc865d7c51b1");
					}
					.aad55ea0-b475-4cc1-9359-fc1438245bb6 {
						fill: #038e3e;
					}
				</style>
				<linearGradient id="b384a669-f415-48bf-ba6b-5906231dd348" x1="1278.56" y1="1429.61" x2="1278.56" y2="601.61" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1429.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
				<linearGradient id="e5306831-984b-4796-835a-5f9b8c18bc08" x1="1379.41" y1="1299.59" x2="1379.41" y2="397.51" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1408.56)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
				<linearGradient id="a6665a0f-4517-44c0-a0c7-e981701b5f6e" x1="1149.23" y1="522.66" x2="1948.74" y2="522.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
				<linearGradient id="a82c2ec0-2164-4783-8558-cc865d7c51b1" x1="1532.89" y1="282.85" x2="1871.64" y2="282.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			</defs>
			<g id="a0d41daa-d2af-4db8-871a-729b1d87e04f">
				<g id="f2fada4c-ee70-4385-aad1-8aadcf3056f0"><path
					class="a12f05c6-8735-4fe7-83d2-404aecf50d8b"
					d="M786.61,430.43c3.1-9.75,15.59-52.78-6.73-97.43-21.55-43.1-61.16-58.74-72-63-48.18-18.95-73.29,4.23-140.25,7.29-20,.92-119,10.74-183.42-47-42.91-38.49-59-102.89-108.3-132.95-37-22.55-83.3-20-126.19-26.37C94.14,62.75,42,37.08,0,0H1310.88V828a445.56,445.56,0,0,0-82.06-96.5h0a441.43,441.43,0,0,0-100.21-49.07c-145.58-49.51-242.49,4.84-315-63-35.54-33.26-44.35-76.35-45.51-82.44C758.41,486.19,778.69,444.82,786.61,430.43Z"/><path
					class="ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9"
					d="M1130.88,639c-123.67-62.22-233.71-24.26-270-90-34-61.64,49.11-119.6,18-216-20.53-63.61-83.32-120.75-150.73-133.43-100.62-18.92-145.77,70-231.48,47.14-60-16-93-79.09-130-129.83C332.83,70.46,280.27,4.79,200.7,0H1311.88V684l-1,144C1278.87,766.37,1224,685.85,1130.88,639Z"/><path
					class="ba088074-2aa1-4197-9e03-1d2c1a7b37b4"
					d="M1295.45,551.41c-14.66-8.72-30.92-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a16,16,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.59-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.69,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.42,193.42,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.39,7.73.57,12.37,0,18.56-4.29,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.36a15.13,15.13,0,0,0,7.78.48c6.54-1.7,7.62-7.13,5.91-10.92,38.22.83,76.34,1.16,114.58,1.2C1297.26,555.43,1297.27,552.49,1295.45,551.41Z"/><path
					class="bbdbaac6-f4d6-43a3-b18c-e3e7e131180f"
					d="M930.93,325.09c69.46-4.12,139.68-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.93-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.57-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C928.74,323,929,325.2,930.93,325.09Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1133.35,447.43s-8.21-19.34,11-36.76C1144.34,410.67,1156.62,434.12,1133.35,447.43Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1245.12,483.28s7.32-24.86,39.26-26.42C1284.38,456.86,1277.72,488.83,1245.12,483.28Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1138.22,488.57s25.64-5.11,42,22.68C1180.24,511.25,1148.55,520.29,1138.22,488.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M704.31,280.27s-15.77-7.74-13.15-29.25C691.16,251,711.75,259.14,704.31,280.27Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M644.08,351.57s-5.11-13.05,8-24.3C652.1,327.27,659.86,343.14,644.08,351.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M518,232.41s12.87-18.92,40.12-11.61C558.12,220.8,543.9,245.87,518,232.41Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1055.72,311.44s-21.45-7.3-21.66-35.26C1034.06,276.18,1061.75,283.16,1055.72,311.44Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1038,188.18s6.4-22.6,37.16-24.81C1075.16,163.37,1069.59,192.37,1038,188.18Z"/></g>
			</g>
		</svg>
	</header><!-- .page-header -->
	<?php
} elseif ( is_home() && ! is_front_page() ) {
	wp_rig()->print_styles( 'wp-rig-banner' );
	?>
	<header class="page-header">
		<div class="header-content">
			<h1 class="page-title">
				<?php single_post_title(); ?>
			</h1>
		</div>
		<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1311.88 828">
			<defs>
				<style>
					.a12f05c6-8735-4fe7-83d2-404aecf50d8b {
						fill: url("#b384a669-f415-48bf-ba6b-5906231dd348");
					}
					.ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9 {
						fill: url("#e5306831-984b-4796-835a-5f9b8c18bc08");
					}
					.ba088074-2aa1-4197-9e03-1d2c1a7b37b4 {
						fill: url("#a6665a0f-4517-44c0-a0c7-e981701b5f6e");
					}
					.bbdbaac6-f4d6-43a3-b18c-e3e7e131180f {
						fill: url("#a82c2ec0-2164-4783-8558-cc865d7c51b1");
					}
					.aad55ea0-b475-4cc1-9359-fc1438245bb6 {
						fill: #038e3e;
					}
				</style>
				<linearGradient id="b384a669-f415-48bf-ba6b-5906231dd348" x1="1278.56" y1="1429.61" x2="1278.56" y2="601.61" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1429.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
				<linearGradient id="e5306831-984b-4796-835a-5f9b8c18bc08" x1="1379.41" y1="1299.59" x2="1379.41" y2="397.51" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1408.56)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
				<linearGradient id="a6665a0f-4517-44c0-a0c7-e981701b5f6e" x1="1149.23" y1="522.66" x2="1948.74" y2="522.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
				<linearGradient id="a82c2ec0-2164-4783-8558-cc865d7c51b1" x1="1532.89" y1="282.85" x2="1871.64" y2="282.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			</defs>
			<g id="a0d41daa-d2af-4db8-871a-729b1d87e04f">
				<g id="f2fada4c-ee70-4385-aad1-8aadcf3056f0"><path
					class="a12f05c6-8735-4fe7-83d2-404aecf50d8b"
					d="M786.61,430.43c3.1-9.75,15.59-52.78-6.73-97.43-21.55-43.1-61.16-58.74-72-63-48.18-18.95-73.29,4.23-140.25,7.29-20,.92-119,10.74-183.42-47-42.91-38.49-59-102.89-108.3-132.95-37-22.55-83.3-20-126.19-26.37C94.14,62.75,42,37.08,0,0H1310.88V828a445.56,445.56,0,0,0-82.06-96.5h0a441.43,441.43,0,0,0-100.21-49.07c-145.58-49.51-242.49,4.84-315-63-35.54-33.26-44.35-76.35-45.51-82.44C758.41,486.19,778.69,444.82,786.61,430.43Z"/><path
					class="ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9"
					d="M1130.88,639c-123.67-62.22-233.71-24.26-270-90-34-61.64,49.11-119.6,18-216-20.53-63.61-83.32-120.75-150.73-133.43-100.62-18.92-145.77,70-231.48,47.14-60-16-93-79.09-130-129.83C332.83,70.46,280.27,4.79,200.7,0H1311.88V684l-1,144C1278.87,766.37,1224,685.85,1130.88,639Z"/><path
					class="ba088074-2aa1-4197-9e03-1d2c1a7b37b4"
					d="M1295.45,551.41c-14.66-8.72-30.92-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a16,16,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.59-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.69,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.42,193.42,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.39,7.73.57,12.37,0,18.56-4.29,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.36a15.13,15.13,0,0,0,7.78.48c6.54-1.7,7.62-7.13,5.91-10.92,38.22.83,76.34,1.16,114.58,1.2C1297.26,555.43,1297.27,552.49,1295.45,551.41Z"/><path
					class="bbdbaac6-f4d6-43a3-b18c-e3e7e131180f"
					d="M930.93,325.09c69.46-4.12,139.68-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.93-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.57-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C928.74,323,929,325.2,930.93,325.09Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1133.35,447.43s-8.21-19.34,11-36.76C1144.34,410.67,1156.62,434.12,1133.35,447.43Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1245.12,483.28s7.32-24.86,39.26-26.42C1284.38,456.86,1277.72,488.83,1245.12,483.28Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1138.22,488.57s25.64-5.11,42,22.68C1180.24,511.25,1148.55,520.29,1138.22,488.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M704.31,280.27s-15.77-7.74-13.15-29.25C691.16,251,711.75,259.14,704.31,280.27Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M644.08,351.57s-5.11-13.05,8-24.3C652.1,327.27,659.86,343.14,644.08,351.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M518,232.41s12.87-18.92,40.12-11.61C558.12,220.8,543.9,245.87,518,232.41Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1055.72,311.44s-21.45-7.3-21.66-35.26C1034.06,276.18,1061.75,283.16,1055.72,311.44Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1038,188.18s6.4-22.6,37.16-24.81C1075.16,163.37,1069.59,192.37,1038,188.18Z"/></g>
			</g>
		</svg>
	</header><!-- .page-header -->
	<?php
} elseif ( is_search() ) {
	wp_rig()->print_styles( 'wp-rig-banner' );
	?>
	<header class="page-header">
		<div class="header-content">
			<h1 class="page-title">
				<?php
				printf(
					/* translators: %s: search query */
					esc_html__( 'Search Results for: %s', 'wp-rig' ),
					'<span>' . get_search_query() . '</span>'
				);
				?>
			</h1>
		</div>
		<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1311.88 828">
			<defs>
				<style>
					.a12f05c6-8735-4fe7-83d2-404aecf50d8b {
						fill: url("#b384a669-f415-48bf-ba6b-5906231dd348");
					}
					.ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9 {
						fill: url("#e5306831-984b-4796-835a-5f9b8c18bc08");
					}
					.ba088074-2aa1-4197-9e03-1d2c1a7b37b4 {
						fill: url("#a6665a0f-4517-44c0-a0c7-e981701b5f6e");
					}
					.bbdbaac6-f4d6-43a3-b18c-e3e7e131180f {
						fill: url("#a82c2ec0-2164-4783-8558-cc865d7c51b1");
					}
					.aad55ea0-b475-4cc1-9359-fc1438245bb6 {
						fill: #038e3e;
					}
				</style>
				<linearGradient id="b384a669-f415-48bf-ba6b-5906231dd348" x1="1278.56" y1="1429.61" x2="1278.56" y2="601.61" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1429.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
				<linearGradient id="e5306831-984b-4796-835a-5f9b8c18bc08" x1="1379.41" y1="1299.59" x2="1379.41" y2="397.51" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1408.56)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
				<linearGradient id="a6665a0f-4517-44c0-a0c7-e981701b5f6e" x1="1149.23" y1="522.66" x2="1948.74" y2="522.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
				<linearGradient id="a82c2ec0-2164-4783-8558-cc865d7c51b1" x1="1532.89" y1="282.85" x2="1871.64" y2="282.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			</defs>
			<g id="a0d41daa-d2af-4db8-871a-729b1d87e04f">
				<g id="f2fada4c-ee70-4385-aad1-8aadcf3056f0"><path
					class="a12f05c6-8735-4fe7-83d2-404aecf50d8b"
					d="M786.61,430.43c3.1-9.75,15.59-52.78-6.73-97.43-21.55-43.1-61.16-58.74-72-63-48.18-18.95-73.29,4.23-140.25,7.29-20,.92-119,10.74-183.42-47-42.91-38.49-59-102.89-108.3-132.95-37-22.55-83.3-20-126.19-26.37C94.14,62.75,42,37.08,0,0H1310.88V828a445.56,445.56,0,0,0-82.06-96.5h0a441.43,441.43,0,0,0-100.21-49.07c-145.58-49.51-242.49,4.84-315-63-35.54-33.26-44.35-76.35-45.51-82.44C758.41,486.19,778.69,444.82,786.61,430.43Z"/><path
					class="ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9"
					d="M1130.88,639c-123.67-62.22-233.71-24.26-270-90-34-61.64,49.11-119.6,18-216-20.53-63.61-83.32-120.75-150.73-133.43-100.62-18.92-145.77,70-231.48,47.14-60-16-93-79.09-130-129.83C332.83,70.46,280.27,4.79,200.7,0H1311.88V684l-1,144C1278.87,766.37,1224,685.85,1130.88,639Z"/><path
					class="ba088074-2aa1-4197-9e03-1d2c1a7b37b4"
					d="M1295.45,551.41c-14.66-8.72-30.92-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a16,16,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.59-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.69,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.42,193.42,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.39,7.73.57,12.37,0,18.56-4.29,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.36a15.13,15.13,0,0,0,7.78.48c6.54-1.7,7.62-7.13,5.91-10.92,38.22.83,76.34,1.16,114.58,1.2C1297.26,555.43,1297.27,552.49,1295.45,551.41Z"/><path
					class="bbdbaac6-f4d6-43a3-b18c-e3e7e131180f"
					d="M930.93,325.09c69.46-4.12,139.68-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.93-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.57-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C928.74,323,929,325.2,930.93,325.09Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1133.35,447.43s-8.21-19.34,11-36.76C1144.34,410.67,1156.62,434.12,1133.35,447.43Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1245.12,483.28s7.32-24.86,39.26-26.42C1284.38,456.86,1277.72,488.83,1245.12,483.28Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1138.22,488.57s25.64-5.11,42,22.68C1180.24,511.25,1148.55,520.29,1138.22,488.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M704.31,280.27s-15.77-7.74-13.15-29.25C691.16,251,711.75,259.14,704.31,280.27Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M644.08,351.57s-5.11-13.05,8-24.3C652.1,327.27,659.86,343.14,644.08,351.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M518,232.41s12.87-18.92,40.12-11.61C558.12,220.8,543.9,245.87,518,232.41Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1055.72,311.44s-21.45-7.3-21.66-35.26C1034.06,276.18,1061.75,283.16,1055.72,311.44Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1038,188.18s6.4-22.6,37.16-24.81C1075.16,163.37,1069.59,192.37,1038,188.18Z"/></g>
			</g>
		</svg>	
	</header><!-- .page-header -->
	<?php
} elseif ( is_archive() ) {
	wp_rig()->print_styles( 'wp-rig-banner' );
	?>
	<header class="page-header">
		<div class="header-content">
			<?php
			the_archive_title( '<h1 class="page-title">', '</h1>' );
			the_archive_description( '<div class="archive-description">', '</div>' );
			?>
		</div>
		<svg class="banner-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1311.88 828">
			<defs>
				<style>
					.a12f05c6-8735-4fe7-83d2-404aecf50d8b {
						fill: url("#b384a669-f415-48bf-ba6b-5906231dd348");
					}
					.ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9 {
						fill: url("#e5306831-984b-4796-835a-5f9b8c18bc08");
					}
					.ba088074-2aa1-4197-9e03-1d2c1a7b37b4 {
						fill: url("#a6665a0f-4517-44c0-a0c7-e981701b5f6e");
					}
					.bbdbaac6-f4d6-43a3-b18c-e3e7e131180f {
						fill: url("#a82c2ec0-2164-4783-8558-cc865d7c51b1");
					}
					.aad55ea0-b475-4cc1-9359-fc1438245bb6 {
						fill: #038e3e;
					}
				</style>
				<linearGradient id="b384a669-f415-48bf-ba6b-5906231dd348" x1="1278.56" y1="1429.61" x2="1278.56" y2="601.61" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1429.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.08" stop-color="#f2b137"/><stop offset="0.22" stop-color="#f2be5b"/><stop offset="0.42" stop-color="#f1d395"/><stop offset="0.6" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#f5f0e0" stop-opacity="0.7"/><stop offset="0.83" stop-color="#faf8f0" stop-opacity="0.33"/><stop offset="0.93" stop-color="#fefdfb" stop-opacity="0.09"/><stop offset="0.97" stop-color="#fff" stop-opacity="0"/></linearGradient>
				<linearGradient id="e5306831-984b-4796-835a-5f9b8c18bc08" x1="1379.41" y1="1299.59" x2="1379.41" y2="397.51" gradientTransform="matrix(1, 0, 0, -1, -623.12, 1408.56)" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.18" stop-color="#f2622f"/><stop offset="0.38" stop-color="#f2862c"/><stop offset="0.56" stop-color="#f2ac29"/><stop offset="0.57" stop-color="#f2b33c"/><stop offset="0.61" stop-color="#f2c56d"/><stop offset="0.65" stop-color="#f1e1bc"/><stop offset="0.67" stop-color="#f1e9d2"/><stop offset="0.7" stop-color="#faf8f0"/><stop offset="0.72" stop-color="#fff"/><stop offset="0.79" stop-color="#fff"/></linearGradient>
				<linearGradient id="a6665a0f-4517-44c0-a0c7-e981701b5f6e" x1="1149.23" y1="522.66" x2="1948.74" y2="522.66" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
				<linearGradient id="a82c2ec0-2164-4783-8558-cc865d7c51b1" x1="1532.89" y1="282.85" x2="1871.64" y2="282.85" gradientTransform="translate(-623.12)" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			</defs>
			<g id="a0d41daa-d2af-4db8-871a-729b1d87e04f">
				<g id="f2fada4c-ee70-4385-aad1-8aadcf3056f0"><path
					class="a12f05c6-8735-4fe7-83d2-404aecf50d8b"
					d="M786.61,430.43c3.1-9.75,15.59-52.78-6.73-97.43-21.55-43.1-61.16-58.74-72-63-48.18-18.95-73.29,4.23-140.25,7.29-20,.92-119,10.74-183.42-47-42.91-38.49-59-102.89-108.3-132.95-37-22.55-83.3-20-126.19-26.37C94.14,62.75,42,37.08,0,0H1310.88V828a445.56,445.56,0,0,0-82.06-96.5h0a441.43,441.43,0,0,0-100.21-49.07c-145.58-49.51-242.49,4.84-315-63-35.54-33.26-44.35-76.35-45.51-82.44C758.41,486.19,778.69,444.82,786.61,430.43Z"/><path
					class="ba2bdf60-ebb2-4b7b-aedd-a2d7026ce0d9"
					d="M1130.88,639c-123.67-62.22-233.71-24.26-270-90-34-61.64,49.11-119.6,18-216-20.53-63.61-83.32-120.75-150.73-133.43-100.62-18.92-145.77,70-231.48,47.14-60-16-93-79.09-130-129.83C332.83,70.46,280.27,4.79,200.7,0H1311.88V684l-1,144C1278.87,766.37,1224,685.85,1130.88,639Z"/><path
					class="ba088074-2aa1-4197-9e03-1d2c1a7b37b4"
					d="M1295.45,551.41c-14.66-8.72-30.92-9-47.49-8.42-17.57.65-34.61,1-51.12-3.27-7-1.83-12.56-6.88-15.84-13.35a16,16,0,0,0-5.93-6.27c-6.09-3.74-12.83-2.45-19,.14a1,1,0,0,1-1.4-1.11c2.59-20.12-11.28-39.8-33-41.61-26.33-2.21-39.79,20.88-45,43.58a3.3,3.3,0,0,1-4.74,2.18c-4.77-2.31-10.39-1.69-13.93,4.41l-.09.15c-4.5,8-12.69,13.23-21.86,13.09-8.84-.13-17.66-.37-26.34-.39a193.42,193.42,0,0,0-54.21,7.54c-2.11.61-.9,3.32.83,3.54a292.2,292.2,0,0,0,36.28,1.75c61.39,0,80.52,10,141.11,14.39,7.73.57,12.37,0,18.56-4.29,3.24-2.27,3.72-2.38,8-1.16,2.13.61,4.09,1.78,6.26,2.36a15.13,15.13,0,0,0,7.78.48c6.54-1.7,7.62-7.13,5.91-10.92,38.22.83,76.34,1.16,114.58,1.2C1297.26,555.43,1297.27,552.49,1295.45,551.41Z"/><path
					class="bbdbaac6-f4d6-43a3-b18c-e3e7e131180f"
					d="M930.93,325.09c69.46-4.12,139.68-8.68,208.47,4.25a8.56,8.56,0,0,0-3.55,5.27c-2.4,10.44,10,15.26,18.17,15.18,20.93-.2,42.54-11.34,62.57-16.47,26.1-6.69,68.42-2.06,94.29,4.52v-101c-14.79-27.52-31.93-27.88-52.58-1a37.7,37.7,0,0,0-7.66,18c-1.94,14.87,7.87,28.57-10.22,38.53-5.72,3.15-17.31,7.14-15.54,14.61a123.94,123.94,0,0,0-44.58.43c-8.9,1.75-17.63,5.35-26.79,4.67s-15.39-5.18-21.92-11.26c-13-12.14-26.34-28.71-45.83-19-14.48,7.22-22.43,23.26-40.07,24.37-14,.88-27.8-6-41.74-2-6.06,1.73-10.64,5.36-15.85,8.74-10.27,6.66-19,6.64-30.57,4.12-10.38-2.26-19.69-3.15-27.63,4.83C928.74,323,929,325.2,930.93,325.09Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1133.35,447.43s-8.21-19.34,11-36.76C1144.34,410.67,1156.62,434.12,1133.35,447.43Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1245.12,483.28s7.32-24.86,39.26-26.42C1284.38,456.86,1277.72,488.83,1245.12,483.28Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1138.22,488.57s25.64-5.11,42,22.68C1180.24,511.25,1148.55,520.29,1138.22,488.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M704.31,280.27s-15.77-7.74-13.15-29.25C691.16,251,711.75,259.14,704.31,280.27Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M644.08,351.57s-5.11-13.05,8-24.3C652.1,327.27,659.86,343.14,644.08,351.57Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M518,232.41s12.87-18.92,40.12-11.61C558.12,220.8,543.9,245.87,518,232.41Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1055.72,311.44s-21.45-7.3-21.66-35.26C1034.06,276.18,1061.75,283.16,1055.72,311.44Z"/><path class="aad55ea0-b475-4cc1-9359-fc1438245bb6" d="M1038,188.18s6.4-22.6,37.16-24.81C1075.16,163.37,1069.59,192.37,1038,188.18Z"/></g>
			</g>
		</svg>
	</header><!-- .page-header -->
	<?php
}
