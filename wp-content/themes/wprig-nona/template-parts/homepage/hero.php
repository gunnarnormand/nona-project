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
		<div class="hero-title">
			<h1>
				<div><?php esc_html_e( 'The', 'wp-rig' ); ?></div>
				<div><?php esc_html_e( 'nona', 'wp-rig' ); ?></div>
				<div><?php esc_html_e( 'Experience', 'wp-rig' ); ?></div>
			</h1>
		</div>

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
			<a href="<?php echo esc_url( get_theme_mod( 'hero_url' ) ); ?>" role="button" >
				<?php echo esc_html( get_theme_mod( 'hero_url_text' ) ); ?>
			</a>
		<?php endif; ?>
	</div>	
	<svg class="hero-illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2969 2093" preserveAspectRatio="xMaxYMax meet">
		<defs>
			<style>
				.b87bca00-830b-42f8-b002-801c1ea0f0d1 {
					fill: none;
				}
				.ef0a3689-8b9e-4297-b805-75da6874ba83 {
					isolation: isolate;
				}
				.beb24f06-d37b-494b-963a-9afe8055be0c {
					fill: #fff;
				}
				.a49896f9-b8a8-48c4-927c-46a19fc9dabb {
					fill: url("#b32e1448-078d-4cb6-ba8e-79c75b0a02c4");
				}
				.fba9f85f-b749-4f4c-97d5-22118f9acabe {
					fill: url("#f5f208d6-10c7-45b9-9b57-12cae0116d4c");
				}
				.b1871b64-68a2-4eaf-a05f-6a50201a859b {
					clip-path: url("#b76b0cdf-7638-4526-881d-efa7df405e60");
				}
				.a603c202-24a9-4361-9f75-365807666528 {
					fill: #f2de29;
				}
				.b15f6477-234f-47db-adae-c21036b382da {
					fill: url("#ff1b4060-6c82-408c-a07d-e9242a80e44e");
				}
				.f10b0e1b-059d-4008-94f5-214636426ebb {
					fill: url("#aab8b9f2-742b-4cfa-a220-7e226065ab87");
				}
				.f011e346-785e-4008-b719-1cd6a291f295 {
					fill: url("#e72f7728-20d7-493d-a50d-0cbf8f34e45c");
				}
				.ef926702-c01b-4e75-b0c8-e877bac2f9c0 {
					fill: url("#a27d5746-aeec-4666-b0e8-13fffbad0c1b");
				}
				.ab8418a7-47b2-4da0-814b-12df945abe6f {
					fill: url("#a7273f0b-c237-4a01-828d-d8bc87a28a06");
				}
				.bedd4718-f10f-4c4b-81c3-d661fb14e179 {
					fill: url("#b8d2dccd-d655-4fd9-b3a6-b1cd0f047a6a");
				}
				.f56fb3c9-00dc-47e9-981e-c9f8c387b0f9 {
					fill: url("#adc397f9-b0a3-436a-b4c3-71c04526288c");
				}
				.b7a7bfa2-6fda-4330-92f8-eaa2822984cb {
					fill: #01401c;
				}
				.bf506a26-287c-41f6-9755-1899920d61a4 {
					fill: #57d6f2;
				}
				.f1ae3546-e738-486a-8884-8948d84fc392 {
					fill: url("#bcffb43e-9fe0-4981-8bcd-93e3de5ebeb0");
				}
				.f6ccaf7e-f709-4fff-aa85-70033e436537 {
					fill: #b5533c;
				}
				.a56bf076-ac31-48b7-a6d7-82d1c07f51b8 {
					fill: url("#a65d391a-218a-47d0-aad5-e992f14b665e");
				}
				.ae46784c-bb38-4ecf-8ad7-5c4a06000017 {
					fill: url("#f30429f7-87f4-4a88-b375-67876a00d206");
				}
				.ea6b26cc-44b4-4332-9f26-1b799ae30988 {
					fill: url("#b01270cd-d104-4fa0-af92-9e58cdc668d6");
				}
				.acf426d4-29e2-44bf-9e5d-cedc110ca254 {
					fill: url("#eddddef5-41a0-473b-8462-6ce27ae87e5c");
				}
				.e17fda0a-1eab-475e-b5c8-ebcda0721733 {
					fill: url("#ec3a1c88-7284-4e8e-bca8-974eb3fb9059");
				}
				.afdd7640-eb82-46ea-b522-260351889d3a {
					fill: #3f0c0b;
				}
				.be8cd92b-cb82-4500-9b9a-ab4e065867db {
					fill: url("#e7f94951-bb9e-47ab-b1f1-93da4e60683c");
				}
				.a57aad47-7540-4e12-90c8-61c658a389e9 {
					fill: #d94b2b;
				}
				.b7c40cdc-f980-464b-a604-80805d26853e {
					fill: url("#fb537300-4819-49ef-9012-d42145a3dc9c");
				}
				.b5924d32-c270-42fd-ad3b-908e3a245ba1 {
					fill: url("#abb18318-46e6-4a94-a82c-39acb0a61ad2");
				}
				.af459d34-af3d-4035-9101-1341832b0d88 {
					fill: url("#fe9ebf3c-461f-456e-ac87-980d982e43ea");
				}
				.a0f718f8-b89c-44ef-a790-218614f4bb85 {
					fill: #f25430;
				}
				.b5fd8f7d-4de4-443b-b8e7-ef711608f1ee {
					fill: url("#e40b141c-f352-4228-a409-bac8cecbc3a3");
				}
				.b62ea24b-6396-45f5-acc4-ca851b9a0754 {
					fill: url("#a0a34ddc-d1dc-463d-87d4-0cc9c289d54e");
				}
				.b79ddbc8-b486-44c6-98cd-6e10161e774c,
				.f7d45a42-44e4-4a84-a6e5-12dafd0d7840 {
					mix-blend-mode: multiply;
				}
				.f7d45a42-44e4-4a84-a6e5-12dafd0d7840 {
					fill: url("#bb770abb-4311-4828-907f-91f309239ce6");
				}
				.a06e2f19-7798-4637-8826-36b07f91d864 {
					fill: url("#a4df7c31-c042-4222-bbce-32463b105c4b");
				}
				.b79ddbc8-b486-44c6-98cd-6e10161e774c {
					fill: url("#a068f5d8-ee9d-4f6f-9f65-465bbf41d08c");
				}
				.bbce057c-d867-4d88-babd-031c16e73be2 {
					fill: url("#aba52d40-6432-408c-b1e6-3866e795e4b0");
				}
				.ab4c4448-7167-4246-b7b8-b67c8357f82c {
					fill: url("#f3df12c6-4965-4dc2-9b30-158bfe7fd1fa");
				}
				.f7cdf286-9d2a-4634-b7a4-82112f5be212 {
					fill: url("#b589d297-bbf3-4044-a3cb-7b4aef591e19");
				}
			</style>
			<linearGradient id="b32e1448-078d-4cb6-ba8e-79c75b0a02c4" x1="2625.12" y1="2085.5" x2="2625.12" y2="-0.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.06" stop-color="#f2b137"/><stop offset="0.18" stop-color="#f2be5b"/><stop offset="0.34" stop-color="#f1d395"/><stop offset="0.49" stop-color="#f1e9d2"/><stop offset="0.73" stop-color="#f8f4e9"/><stop offset="1" stop-color="#fff"/></linearGradient>
			<linearGradient id="f5f208d6-10c7-45b9-9b57-12cae0116d4c" x1="2840.48" y1="1810.96" x2="2840.48" y2="-461.66" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.21" stop-color="#f2622f"/><stop offset="0.45" stop-color="#f2862c"/><stop offset="0.67" stop-color="#f2ac29"/><stop offset="0.69" stop-color="#f2b137"/><stop offset="0.74" stop-color="#f2be5b"/><stop offset="0.81" stop-color="#f1d395"/><stop offset="0.87" stop-color="#f1e9d2"/></linearGradient>
			<clipPath id="b76b0cdf-7638-4526-881d-efa7df405e60" transform="translate(-1050 0.5)"><path
				class="b87bca00-830b-42f8-b002-801c1ea0f0d1"
				d="M4012-.5H1742.37c-25.27,82.19-16.39,175.25,27.75,249.34,59.35,99.62,179.21,159.66,294.54,147.52,110.9-11.67,209.41-82.93,320.61-91.33,115.43-8.72,232.94,59.08,283.16,163.38s29.94,238.44-48.86,323.25c-34.61,37.24-82.94,75-76.38,125.46,4.6,35.39,37,61.56,71.09,72.21s70.51,9.53,106.06,12.8c169.21,15.61,326.3,150.67,346.94,319.34s-116.27,346.39-286.14,351c-168.13,4.59-325.38-140.14-488.09-97.54C2166.5,1608.09,2097,1738.63,2019,1843.62c-71.4,96.07-182.23,232-350,241.88H4012Z"/></clipPath>
			<linearGradient id="ff1b4060-6c82-408c-a07d-e9242a80e44e" x1="2416.69" y1="1051.37" x2="4049.89" y2="1051.37" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
			<linearGradient id="aab8b9f2-742b-4cfa-a220-7e226065ab87" x1="3085.58" y1="569.65" x2="3868.02" y2="569.65" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
			<linearGradient id="e72f7728-20d7-493d-a50d-0cbf8f34e45c" x1="1911.63" y1="494.39" x2="3265.44" y2="494.39" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f27929"/><stop offset="0.5" stop-color="#f2aa29"/><stop offset="1" stop-color="#f2de29"/></linearGradient>
			<linearGradient id="a27d5746-aeec-4666-b0e8-13fffbad0c1b" x1="3289.5" y1="1905.54" x2="3289.5" y2="1129.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c6c73"/><stop offset="0.08" stop-color="#357662"/><stop offset="0.22" stop-color="#118648"/><stop offset="0.3" stop-color="#038c3e"/><stop offset="0.46" stop-color="#4b8638"/><stop offset="0.68" stop-color="#a47f30"/><stop offset="0.83" stop-color="#dc7b2b"/><stop offset="0.9" stop-color="#f27929"/></linearGradient>
			<linearGradient id="a7273f0b-c237-4a01-828d-d8bc87a28a06" x1="2877.67" y1="1898.9" x2="2877.67" y2="1376.43" gradientUnits="userSpaceOnUse"><stop offset="0.37" stop-color="#024d22"/><stop offset="1" stop-color="#038039"/></linearGradient>
			<linearGradient id="b8d2dccd-d655-4fd9-b3a6-b1cd0f047a6a" x1="3196.56" y1="2170.84" x2="3196.56" y2="1355.97" gradientUnits="userSpaceOnUse"><stop offset="0.04" stop-color="#296573"/><stop offset="0.31" stop-color="#1c615a"/><stop offset="0.76" stop-color="#095b36"/><stop offset="1" stop-color="#025928"/></linearGradient>
			<linearGradient id="adc397f9-b0a3-436a-b4c3-71c04526288c" x1="2798.81" y1="2165.27" x2="2798.81" y2="1403.62" gradientUnits="userSpaceOnUse"><stop offset="0.21" stop-color="#296573"/><stop offset="0.23" stop-color="#26646e"/><stop offset="0.34" stop-color="#175f50"/><stop offset="0.46" stop-color="#0b5c3a"/><stop offset="0.57" stop-color="#045a2c"/><stop offset="0.67" stop-color="#025928"/></linearGradient>
			<linearGradient id="bcffb43e-9fe0-4981-8bcd-93e3de5ebeb0" x1="2835.27" y1="693.06" x2="2981.84" y2="693.06" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.14" stop-color="#be5938"/><stop offset="0.37" stop-color="#d56a2e"/><stop offset="0.56" stop-color="#ef7c23"/><stop offset="0.69" stop-color="#ed7a23"/><stop offset="0.76" stop-color="#e57522"/><stop offset="0.81" stop-color="#d76b20"/><stop offset="0.86" stop-color="#c45d1d"/><stop offset="0.9" stop-color="#ab4a1a"/><stop offset="0.94" stop-color="#8c3416"/><stop offset="0.98" stop-color="#681a11"/><stop offset="1" stop-color="#4f080e"/></linearGradient>
			<linearGradient id="a65d391a-218a-47d0-aad5-e992f14b665e" x1="2803.43" y1="784.56" x2="2947.48" y2="784.56" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.27" stop-color="#c05b37"/><stop offset="0.74" stop-color="#dd6f2b"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
			<linearGradient id="f30429f7-87f4-4a88-b375-67876a00d206" x1="2577.58" y1="710.43" x2="2287.52" y2="710.43" gradientTransform="translate(1106.03 -1055.22) rotate(39.38)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7a959"/><stop offset="0.06" stop-color="#f6a655"/><stop offset="0.67" stop-color="#f18731"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
			<linearGradient id="b01270cd-d104-4fa0-af92-9e58cdc668d6" x1="3129.61" y1="926.17" x2="2701.88" y2="926.17" gradientTransform="translate(9.04 -17.02) rotate(0.49)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.64" stop-color="#f9b761"/><stop offset="1" stop-color="#f7a959"/></linearGradient>
			<linearGradient id="eddddef5-41a0-473b-8462-6ce27ae87e5c" x1="3360.72" y1="1445.5" x2="2659.87" y2="1445.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.19" stop-color="#a74c3d"/><stop offset="0.72" stop-color="#833a3e"/><stop offset="1" stop-color="#75333f"/></linearGradient><linearGradient id="ec3a1c88-7284-4e8e-bca8-974eb3fb9059" x1="2956.32" y1="1485.95" x2="2681.23" y2="1485.95" xlink:href="#eddddef5-41a0-473b-8462-6ce27ae87e5c"/>
			<linearGradient id="e7f94951-bb9e-47ab-b1f1-93da4e60683c" x1="3132.1" y1="1028.29" x2="2521.89" y2="1028.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.32" stop-color="#fcc86a"/><stop offset="1" stop-color="#f7a959"/></linearGradient><linearGradient id="fb537300-4819-49ef-9012-d42145a3dc9c" x1="3013.88" y1="1156.64" x2="2717.89" y2="1156.64" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#f30429f7-87f4-4a88-b375-67876a00d206"/><linearGradient id="abb18318-46e6-4a94-a82c-39acb0a61ad2" x1="2977.68" y1="967.01" x2="2682.82" y2="967.01" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#b01270cd-d104-4fa0-af92-9e58cdc668d6"/>
			<linearGradient id="fe9ebf3c-461f-456e-ac87-980d982e43ea" x1="2726.83" y1="1572.17" x2="2726.83" y2="898.35" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b33e24"/><stop offset="0.3" stop-color="#c24327"/><stop offset="0.89" stop-color="#ea512e"/><stop offset="1" stop-color="#f25430"/></linearGradient>
			<linearGradient id="e40b141c-f352-4228-a409-bac8cecbc3a3" x1="2728.9" y1="844.45" x2="2728.9" y2="1331.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
			<linearGradient id="a0a34ddc-d1dc-463d-87d4-0cc9c289d54e" x1="2788.19" y1="1195.73" x2="2788.19" y2="1727" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5847e"/><stop offset="0.36" stop-color="#f37584"/><stop offset="1" stop-color="#ef5193"/></linearGradient><linearGradient id="bb770abb-4311-4828-907f-91f309239ce6" x1="2733.41" y1="1270.82" x2="2733.41" y2="1005.59" gradientTransform="matrix(1, -0.1, -0.02, 1.11, 27, 84.87)" xlink:href="#e40b141c-f352-4228-a409-bac8cecbc3a3"/><linearGradient id="a4df7c31-c042-4222-bbce-32463b105c4b" x1="2724.37" y1="1224.47" x2="2724.37" y2="929.91" xlink:href="#e40b141c-f352-4228-a409-bac8cecbc3a3"/>
			<linearGradient id="a068f5d8-ee9d-4f6f-9f65-465bbf41d08c" x1="2611.39" y1="1196.94" x2="2611.39" y2="931.71" gradientTransform="matrix(1, 0, -0.13, 1.01, 129.8, -11.42)" gradientUnits="userSpaceOnUse"><stop offset="0.03" stop-color="#d94b2b"/><stop offset="0.48" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
			<linearGradient id="aba52d40-6432-408c-b1e6-3866e795e4b0" x1="2609.12" y1="1194.88" x2="2609.12" y2="931.29" gradientTransform="matrix(1, 0, -0.13, 1.01, 129.8, -11.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="0.99" stop-color="#ff5833"/></linearGradient>
			<linearGradient id="f3df12c6-4965-4dc2-9b30-158bfe7fd1fa" x1="2481.22" y1="754.98" x2="2995.49" y2="754.98" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3f0c0b"/><stop offset="0.51" stop-color="#410d0d"/><stop offset="0.69" stop-color="#481213"/><stop offset="0.82" stop-color="#531b1f"/><stop offset="0.93" stop-color="#64272f"/><stop offset="1" stop-color="#75333f"/></linearGradient>
			<linearGradient id="b589d297-bbf3-4044-a3cb-7b4aef591e19" x1="1481" y1="2210.81" x2="1481" y2="1085.91" gradientUnits="userSpaceOnUse"><stop offset="0.15" stop-color="#fff"/><stop offset="0.17" stop-color="#fff" stop-opacity="0.95"/><stop offset="0.28" stop-color="#fff" stop-opacity="0.67"/><stop offset="0.39" stop-color="#fff" stop-opacity="0.43"/><stop offset="0.49" stop-color="#fff" stop-opacity="0.24"/><stop offset="0.58" stop-color="#fff" stop-opacity="0.11"/><stop offset="0.65" stop-color="#fff" stop-opacity="0.03"/><stop offset="0.7" stop-color="#fff" stop-opacity="0"/></linearGradient>
		</defs>
		<g class="ef0a3689-8b9e-4297-b805-75da6874ba83">
			<g id="be526c48-5aae-4924-b9fd-2ce5bb70b569"><rect class="beb24f06-d37b-494b-963a-9afe8055be0c" x="19" width="2943" height="2086"/><path
				class="a49896f9-b8a8-48c4-927c-46a19fc9dabb"
				d="M4012-.5H1625.79C1591.26,62.37,1582,138.41,1602.22,207c24.64,83.6,92.36,154,176.49,183.59,112.24,39.42,235.7,7.13,354.79-.23S2395.2,418,2435.31,527.23c30.78,83.88-12.35,174.13-45.37,257.2s-52,188.74,12.8,251.69c100.18,97.36,286.14-5.35,408.1,64.69,51.78,29.74,82.4,88.73,82.63,147.2s-27.72,115.28-70.14,156.71c-96.44,94.18-247.36,104.31-384,106.94s-286.61,8.26-388.1,97.28c-90.81,79.64-124.94,212.92-229.17,275.12-78.2,46.66-176.26,41.43-267,54.56-117.62,17-228,70.14-316.81,146.88H4012Z"
				transform="translate(-1050 0.5)"/><path
				class="fba9f85f-b749-4f4c-97d5-22118f9acabe"
				d="M4012-.5H1742.37c-25.27,82.19-16.39,175.25,27.75,249.34,59.35,99.62,179.21,159.66,294.54,147.52,110.9-11.67,209.41-82.93,320.61-91.33,115.43-8.72,232.94,59.08,283.16,163.38s29.94,238.44-48.86,323.25c-34.61,37.24-82.94,75-76.38,125.46,4.6,35.39,37,61.56,71.09,72.21s70.51,9.53,106.06,12.8c169.21,15.61,326.3,150.67,346.94,319.34s-116.27,346.39-286.14,351c-168.13,4.59-325.38-140.14-488.09-97.54C2166.5,1608.09,2097,1738.63,2019,1843.62c-71.4,96.07-182.23,232-350,241.88H4012Z"
				transform="translate(-1050 0.5)"/>
				<g class="b1871b64-68a2-4eaf-a05f-6a50201a859b"><circle class="a603c202-24a9-4361-9f75-365807666528" cx="2175.5" cy="663.5" r="185.5"/><path
					class="b15f6477-234f-47db-adae-c21036b382da"
					d="M3988.25,1110c-29.94-17.77-63.14-18.38-97-17.14-35.89,1.31-70.7,2.07-104.42-6.68-14.35-3.72-25.66-14-32.36-27.2a32.43,32.43,0,0,0-12.11-12.79c-12.45-7.63-26.21-5-38.91.28a2.08,2.08,0,0,1-2.84-2.25c5.29-41-23.05-81.13-67.31-84.83-53.8-4.49-81.28,42.57-91.88,88.85a6.78,6.78,0,0,1-9.7,4.44c-9.73-4.71-21.22-3.46-28.45,9l-.18.3c-9.2,16.3-25.91,27-44.67,26.69-18-.27-36.06-.75-53.8-.8a395.81,395.81,0,0,0-110.73,15.38c-4.3,1.23-1.83,6.75,1.7,7.2,24.45,3.07,49.31,3.57,74.1,3.57,125.41,0,164.48,20.29,288.25,29.35,15.79,1.15,25.27.09,37.92-8.76,6.61-4.63,7.6-4.85,16.28-2.37,4.36,1.25,8.35,3.64,12.79,4.83,5.19,1.38,10.56,2.35,15.88,1,13.38-3.47,15.59-14.53,12.09-22.25,78.07,1.69,155.93,2.35,234,2.43C3992,1118.16,3992,1112.18,3988.25,1110Z"
					transform="translate(-1050 0.5)"/><path
					class="f10b0e1b-059d-4008-94f5-214636426ebb"
					d="M3134.46,665c160.41-9.5,322.61-20,481.49,9.82a19.82,19.82,0,0,0-8.21,12.18c-5.55,24.1,23.18,35.24,42,35,48.35-.46,98.26-26.2,144.52-38,60.29-15.43,115.73-11.45,175.48,3.74,45.82,11.65,42.29,54.63,42.29,7V477.52c0-72.15-73.75-80.85-121.45-18.71-9.26,12.06-15.71,26.37-17.68,41.51-4.48,34.35,18.18,66-23.61,89-13.22,7.27-40,16.49-35.89,33.74-34.26-5.66-68.59-5.78-103,1-20.54,4.05-40.71,12.35-61.87,10.78s-35.54-12-50.63-26c-30.09-28-60.83-66.3-105.86-43.83-33.43,16.68-51.78,53.73-92.54,56.29-32.37,2-64.19-14-96.4-4.72-14,4-24.57,12.38-36.61,20.19-23.71,15.38-43.91,15.34-70.6,9.52-24-5.22-45.49-7.28-63.82,11.16C3129.4,660.11,3130,665.22,3134.46,665Z"
					transform="translate(-1050 0.5)"/><path
					class="f011e346-785e-4008-b719-1cd6a291f295"
					d="M3299.07,493.07c-94.56,1.88-189.28,4.17-283.87,4-20.65,0-18-14.42-28.24-25.72a20.4,20.4,0,0,0-16.56-6.48c-9.62.63-14.57,6-16,12.74-23.49-33.33-53.58-65.86-96.87-66.51-42-.64-68.45,35.29-58.77,74.45,4.93,19.92,8.39,52.43-24,38.11-6.22-2.75-12.92-6.29-20-5.64s-11.89,4.75-16.61,9.44c-14.11,14-24.31,20.81-44.94,22.92-69.08,7.06-139.07,8.63-208.35,13.58-8.82.63-2.46,13.64,4.83,13.32,43.15-1.9,86.32-3.17,129.5-4.38,62.24,1.49,124.49,2.39,186.76,3.26,40.38.57,80.91,2.23,121.28,1.37,35.38-.77,99.26-7.93,98.5-30.33-.54-15.72-58.18-14.83-60.66-21-6.35-15.89,64.52-4.06,157.1-4.06,61.11,0,122.1-1.56,180-22.72C3306.11,497.91,3301.7,493,3299.07,493.07Z"
					transform="translate(-1050 0.5)"/><path class="ef926702-c01b-4e75-b0c8-e877bac2f9c0" d="M2567,1382.79c159.67-97,405-59.94,577.41,12.11,79,33,157.56,73.28,243,79.48,221.65,16.1,402.73-196.49,624.58-209.62V2007.5H2567Z" transform="translate(-1050 0.5)"/><path class="ab8418a7-47b2-4da0-814b-12df945abe6f" d="M1743,1409.69c680-180.21,1304.36,270.58,1665.93,176,501-131,603.41,499.76,603.41,499.76H1743Z" transform="translate(-1050 0.5)"/><path class="bedd4718-f10f-4c4b-81c3-d661fb14e179" d="M2374.13,2085.5S2962.59,1508.89,4019,1508.89V2085.5Z" transform="translate(-1050 0.5)"/><path class="f56fb3c9-00dc-47e9-981e-c9f8c387b0f9" d="M1586,1572.05S2848.14,1373.3,4011.62,2085.5H1586Z" transform="translate(-1050 0.5)"/><ellipse class="b7a7bfa2-6fda-4330-92f8-eaa2822984cb" cx="1553" cy="1805" rx="284" ry="57"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3837.21,585.16a2.29,2.29,0,1,1-2.28-2.29A2.28,2.28,0,0,1,3837.21,585.16Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2847.17" cy="800.14" r="12.88"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3760.49,815.34a13.56,13.56,0,1,1-13.56-13.56A13.56,13.56,0,0,1,3760.49,815.34Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2747.51" cy="748.03" r="10.72"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3721.5,771.79a13,13,0,1,1-13-13A13,13,0,0,1,3721.5,771.79Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2417.56" cy="918.88" r="12.52"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2610.28" cy="595" r="7.42"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2313.98" cy="495.75" r="13.25"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3257.68,347.66a12.06,12.06,0,1,1-12-12.06A12.05,12.05,0,0,1,3257.68,347.66Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="1813.91" cy="498.52" r="6.01"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M2945.58,682.06a2.09,2.09,0,1,1-2.09-2.1A2.09,2.09,0,0,1,2945.58,682.06Z" transform="translate(-1050 0.5)"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3115,756.7a4.34,4.34,0,1,1-4.33-4.34A4.33,4.33,0,0,1,3115,756.7Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2213.39" cy="1063.86" r="2.95"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3386.21,718.56a6.42,6.42,0,1,1-6.42-6.42A6.42,6.42,0,0,1,3386.21,718.56Z" transform="translate(-1050 0.5)"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3379.23,942.62a7,7,0,1,1-7-7A7,7,0,0,1,3379.23,942.62Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2348.13" cy="967.22" r="12.55"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3494.09,1199.11a12.8,12.8,0,1,1-12.8-12.8A12.8,12.8,0,0,1,3494.09,1199.11Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2711.03" cy="497.33" r="11.3"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3593.89,517.74a5.9,5.9,0,1,1-5.9-5.89A5.9,5.9,0,0,1,3593.89,517.74Z" transform="translate(-1050 0.5)"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3487,300.53a6.29,6.29,0,1,1-6.29-6.29A6.29,6.29,0,0,1,3487,300.53Z" transform="translate(-1050 0.5)"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3641.56,585.91a7.43,7.43,0,1,1-7.42-7.43A7.42,7.42,0,0,1,3641.56,585.91Z" transform="translate(-1050 0.5)"/><circle class="bf506a26-287c-41f6-9755-1899920d61a4" cx="2451.38" cy="514.39" r="13.76"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3440,306.4a5.1,5.1,0,1,1-5.1-5.1A5.1,5.1,0,0,1,3440,306.4Z" transform="translate(-1050 0.5)"/><path class="bf506a26-287c-41f6-9755-1899920d61a4" d="M3477.92,431.53a4.84,4.84,0,1,1-4.84-4.84A4.84,4.84,0,0,1,3477.92,431.53Z" transform="translate(-1050 0.5)"/></g><path class="f1ae3546-e738-486a-8884-8948d84fc392" d="M2955.74,693.06c0,50.57-27.4,91.56-61.19,91.56s-124.52-5.44-97.66-102.77c13.46-48.74,38-80.34,97.66-80.34C2928.34,601.51,2955.74,642.5,2955.74,693.06Z" transform="translate(-1050 0.5)"/><path
					class="f6ccaf7e-f709-4fff-aa85-70033e436537"
					d="M2936,677c6.32-4.65,8.48-19.52,8.72-36.22-11.06-23.71-29.4-39.26-50.19-39.26-59.62,0-84.2,31.6-97.66,80.34-26.87,97.33,63.86,102.77,97.66,102.77a42.12,42.12,0,0,0,13.16-2.18c-16.2,4.61-27.76-6.68-17.92-12.2,11.28-6.33,27.61-22.46,25.31-46.24S2919.3,689.32,2936,677Z"
					transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2912.54,780.58c.22-.1.42-.21.64-.32Z" transform="translate(-1050 0.5)"/><path class="a56bf076-ac31-48b7-a6d7-82d1c07f51b8" d="M2888.84,744.31c-28.26,54.14,13.65,96,13.65,96l-153.81-10.72,54.24-99.33S2900.38,722.2,2888.84,744.31Z" transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2802.92,730.43l-48.09,88.07,106.34,1.42c-3.8-30.33,18.13-43.13,18.13-43.13h0a83.11,83.11,0,0,1,9.54-32.3C2900.38,722.38,2802.92,730.43,2802.92,730.43Z" transform="translate(-1050 0.5)"/><path class="ae46784c-bb38-4ecf-8ad7-5c4a06000017" d="M2631.61,956.29s-92.42,90.5-78.05,271.6c0,0-5.42,10.82-9.37,17.84s9.06,20.26,32.72,8.63c11.33-5.57-4.08-25.92-4.08-25.92s27.77-75.39,155.92-240.51Z" transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2607.78,1045.63c-1.29,1.57-5.33.38-9-2.65s-5.65-6.77-4.36-8.34,5.33-.38,9,2.65S2609.07,1044.06,2607.78,1045.63Z" transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2728.75,987.93l-97.14-31.64s-19.29,19-38.88,56.74c44.82,42.92,90.22,35.82,90.22,35.82h0C2696.59,1030.08,2711.76,1009.82,2728.75,987.93Z" transform="translate(-1050 0.5)"/><path class="ea6b26cc-44b4-4332-9f26-1b799ae30988" d="M2704,1044.65c64.37-87.23,88.6-179,58-211.48-56.92-60.52-123.12,102.49-167.27,112.14,0,0-14.77,38.59,24.18,70.57S2704,1044.65,2704,1044.65Z" transform="translate(-1050 0.5)"/><path
					class="acf426d4-29e2-44bf-9e5d-cedc110ca254"
					d="M2612.29,1168.82c-47.86,49.45-22.07,128,38.55,161.52,0,0,7.47,158.47-14.72,175.29-50.89,38.56-112.55,113.13-186.56,114.26-28-9.16,10,124.9,24.6,99.06,8.28-14.65,8.24-41.57,1.57-63.81,34.21.38,270-81.69,336.94-292.65C2877.43,1158.29,2612.29,1168.82,2612.29,1168.82Z"
					transform="translate(-1050 0.5)"/><path
					class="e17fda0a-1eab-475e-b5c8-ebcda0721733"
					d="M2829.66,1793c-9.56-5-22.2-3.06-34.9,1.68,32.17-146.59,165-410.7,184.77-668.14H2739.26c-125.88,183.16,34.53,215.31,34.53,215.31,78,30-31.94,461.66-32.8,492.78,1.19,20,36.8,7.82,52.88-1.37C2811.77,1823,2846.12,1801.48,2829.66,1793Z"
					transform="translate(-1050 0.5)"/><path class="afdd7640-eb82-46ea-b522-260351889d3a" d="M2957.27,1273.62c-4.92-38.52-41.16-47.8-101.24.25-98.43,78.72-219.91,68.21-251.17,12.76,0,0-41.13-51.39,7.53-118.13h356S2970.41,1217.83,2957.27,1273.62Z" transform="translate(-1050 0.5)"/><path class="be8cd92b-cb82-4500-9b9a-ab4e065867db" d="M2800.93,807.25c198.61,0,189.07,269.79,176.25,333.66-17.88,89.06-340.91,186.09-407.65,10.91,0,0,95.94-39.81,111.11-162.4C2693.32,887,2727,807.25,2800.93,807.25Z" transform="translate(-1050 0.5)"/><path class="a57aad47-7540-4e12-90c8-61c658a389e9" d="M2877.44,1197.61s89.5-126.15,81.84-224.11-30.61-132.89-77.09-125.11l-29.07-13.57s59.55-13.09,86.18,27.52c50.44,76.93-78.87,278.57-78.87,278.57Z" transform="translate(-1050 0.5)"/><path class="b7c40cdc-f980-464b-a604-80805d26853e" d="M2889.31,1030.42s-14.3,131.22,114.3,264.76c0,0,2.73,12,4.15,20.13s20.27,10.12,31.4-14.37c5.33-11.73-20-17.81-20-17.81s-26.91-77.44-32.75-290.65Z" transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2928.36,1116.32c0,2.07-4,3.75-8.84,3.75s-8.84-1.68-8.84-3.75,4-3.76,8.84-3.76S2928.36,1114.24,2928.36,1116.32Z" transform="translate(-1050 0.5)"/><path class="f6ccaf7e-f709-4fff-aa85-70033e436537" d="M2986.41,992.48l-97.1,37.94s-2.94,27.44,6.08,69.93c63.13,4.83,94.34-30.16,94.34-30.16v0C2988.34,1046.55,2987.19,1020.74,2986.41,992.48Z" transform="translate(-1050 0.5)"/><path class="b5924d32-c270-42fd-ad3b-908e3a245ba1" d="M3003.61,1053.26c-5.72-110.49-46-198.53-91.17-204.37-84.08-10.89-30.75,160.55-59.32,196.75,0,0,13.33,40,64.77,40S3003.61,1053.26,3003.61,1053.26Z" transform="translate(-1050 0.5)"/><path
					class="af459d34-af3d-4035-9101-1341832b0d88"
					d="M2888.85,866.23c-15.91,73-23.83,123.74-23.83,219.41s29.35,121.91,0,158.83c-34,42.78-128,69-234.47,38.71-107.38-30.49-61.61-163.11-14.26-328.68C2650.74,834,2885.76,804.31,2888.85,866.23Z"
					transform="translate(-1050 0.5)"/><path
					class="a0f718f8-b89c-44ef-a790-218614f4bb85"
					d="M2616.29,954.5c-11.2,39.14-22.17,76.08-31.06,110.21,73.39,35.33,224.92,23.88,239.11-7.32,15.62-34.36-38.62-206.34,64.51-191.16C2885.76,804.31,2650.74,834,2616.29,954.5Z"
					transform="translate(-1050 0.5)"/><path
					class="b5fd8f7d-4de4-443b-b8e7-ef711608f1ee"
					d="M2651.14,836c51.1-31.29,231.45-37.15,237.71,30.27,0,0-34-12.38-57.44,13.76s-21.84,118.66-18.68,163.9-289.82,9.7-237.54-30c0,0,24.25-12.62,41.1-59.41C2627.27,924,2599.44,867.6,2651.14,836Z"
					transform="translate(-1050 0.5)"/><path
					class="b62ea24b-6396-45f5-acc4-ca851b9a0754"
					d="M2802.38,1085.63c1,17-1.58,34-4.45,50.73-3,16.73-6.87,33.27-10.34,49.84s-6.45,33.22-8.14,49.78c-.88,8.26-1,16.61.61,24.55a28.55,28.55,0,0,0,4.79,10.93,24.37,24.37,0,0,0,9.73,7.27l-.16.53a24,24,0,0,1-11.48-6.14,31.38,31.38,0,0,1-6.61-11.57c-2.6-8.52-2.73-17.38-2.41-26,1-17.28,5.36-33.86,9.34-50.35s8.37-32.87,11.95-49.41,6.85-33.21,6.62-50.16Z"
					transform="translate(-1050 0.5)"/><path
					class="f7d45a42-44e4-4a84-a6e5-12dafd0d7840"
					d="M2757.6,941.27c-9.26,45.81,12.84,164.06-29,226.73,0,0-25.88-.1-29.23-21.1,0,0,21.08-18.06,28.42-57.6s9.05-137.78,9.2-147.47c.12-7.78,13.19-4.26,18.37-2.25A6.19,6.19,0,0,1,2757.6,941.27Z"
					transform="translate(-1050 0.5)"/><path
					class="a06e2f19-7798-4637-8826-36b07f91d864"
					d="M2755.33,939.27c-9.63,45.29,14.17,162.82-28.69,225.82,0,0-29.1-2.67-33.23-24.18,0,0,23.39-16.13,31-55.28s10.32-136.61,10.32-146.36S2755.33,939.27,2755.33,939.27Z"
					transform="translate(-1050 0.5)"/><path
					class="b79ddbc8-b486-44c6-98cd-6e10161e774c"
					d="M2650.84,940.6c-13.7,41-5.59,147.35-51,204.37,0,0-25.74-2.42-27-21.88,0,0,22.74-14.6,33.91-50s22.48-125,23.58-133.79c.88-7.1,13.54-2.71,18.5-.41A6,6,0,0,1,2650.84,940.6Z"
					transform="translate(-1050 0.5)"/><path class="bbce057c-d867-4d88-babd-031c16e73be2" d="M2648.8,938.86c-13.7,41-5.59,147.35-51,204.37,0,0-25.74-2.42-27-21.89,0,0,22.74-14.59,33.91-50s24.56-123.63,25.66-132.45S2648.8,938.86,2648.8,938.86Z" transform="translate(-1050 0.5)"/><path
					class="ab4c4448-7167-4246-b7b8-b67c8357f82c"
					d="M2939.3,613.77c64.31,56.41-28.62,55.23-28.62,96.74,0,96.83-101.34,41.91-57.56,124.31,37.75,71-50.52,97.42-116.08,72.71-64.9-24.47-141.76-84.63-193.55-67.23-91.67,30.8-81.74-91.4,27.27-46.75s52.83-85.24,128.63-94c75.44-8.72,76.32-26.63,104.1-59.92C2835.29,601.51,2891.56,571.91,2939.3,613.77Z"
					transform="translate(-1050 0.5)"/>
				<g class="ef0a3689-8b9e-4297-b805-75da6874ba83"><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M3569.63,815.86s-19-44.66,25.38-84.89C3595,731,3623.38,785.13,3569.63,815.86Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M3827.77,898.67s16.92-57.42,90.69-61C3918.46,837.64,3903.07,911.49,3827.77,898.67Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M3580.89,910.89s59.22-11.82,97,52.38C3677.92,963.27,3604.75,984.15,3580.89,910.89Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M2578.7,429.79s-36.41-17.89-30.35-67.56C2548.35,362.23,2595.9,381,2578.7,429.79Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M2439.61,594.47s-11.81-30.15,18.52-56.14C2458.13,538.33,2476,575,2439.61,594.47Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M2148.4,319.24s29.71-43.68,92.67-26.8C2241.07,292.44,2208.21,350.34,2148.4,319.24Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M3390.33,501.77s-49.54-16.86-50-81.43C3340.32,420.34,3404.27,436.46,3390.33,501.77Z" transform="translate(-1050 0.5)"/><path class="a0f718f8-b89c-44ef-a790-218614f4bb85" d="M3349.4,217.09s14.78-52.2,85.84-57.3C3435.24,159.79,3422.38,226.78,3349.4,217.09Z" transform="translate(-1050 0.5)"/></g><rect class="f7cdf286-9d2a-4634-b7a4-82112f5be212" y="1297" width="2962" height="796"/></g>
		</g>
	</svg>

</header>
