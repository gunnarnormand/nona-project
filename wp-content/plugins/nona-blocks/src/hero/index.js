const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInputButton } = wp.blockEditor;
const { Button } = wp.components;

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/hero", {
	title: __("Hero", "nona"),
	icon: "cover-image",
	category: "nona",
	attributes: {
		heroSubtitle: {
			type: "string",
			source: "html",
			selector: ".hero-subtitle"
		},
		heroBody: {
			type: "string",
			source: "html",
			selector: ".hero-body"
		},
		heroCta: {
			type: "string",
			source: "html",
			selector: ".hero-cta"
		},
		heroCtaURL: {
			type: "string",
			source: "attribute",
			selector: ".hero-cta",
			attribute: "href"
		},
		align: {
			type: "string",
			default: "full"
		}
	},
	supports: {
		align: ["full"]
	},

	// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
	edit: props => {

		const {
			attributes: {
				heroSubtitle,
				heroBody,
				heroCta,
				heroCtaURL
			},
			className,
			setAttributes
		} = props;

		const onChangeHeroSubtitle = newHeroSubtitle => {
			setAttributes({heroSubtitle:newHeroSubtitle});
		};

		const onChangeHeroBody = newHeroBody => {
			setAttributes({heroBody:newHeroBody});
		};

		const onChangeHeroCta = newHeroCta => {
			setAttributes({heroCta:newHeroCta});
		};

		const onChangeHeroCtaURL = newHeroCtaURL => {
			setAttributes({ heroCtaURL: newHeroCtaURL });
		};

		return (
			<header className={`${className} hero`}>
				<div className="hero-content">
					<div className="hero-title">
						<h1>
							<div>{__("The", "wp-rig")}</div>
							<div>{__("NONA", "wp-rig")}</div>
							<div>{__("Experience", "wp-rig")}</div>
						</h1>
					</div>

					<h2 className="hero-subtitle">
						<RichText 
							placeholder={__("NATIONAL OUTREACH FOR NATIVE AMERICANS CORP.", "nona")}
							value={heroSubtitle}
							onChange={onChangeHeroSubtitle}
						/>
					</h2>

					<p className="hero-body">
						<RichText 
							placeholder={__("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona")}
							value={heroBody}
							onChange={onChangeHeroBody}
						/>
					</p>

					<a className="hero-cta" href="#" role="button" >
						<RichText
							placeholder={__("Learn More")}
							value={heroCta}
							onChange={onChangeHeroCta}
						/>
						<URLInputButton
							className="button-dropdown__input"
							label={__("Button URL", "nona")}
							onChange={onChangeHeroCtaURL}
							url={heroCtaURL}
						/>
					</a>
				</div>	
				<svg class="hero-illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1883.06 1496.31" preserveAspectRatio="xMaxYMax meet">
					<defs>
						<linearGradient id="nona-svg-id" x1="960" y1="1496.31" x2="960" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.06" stop-color="#f2b137"/><stop offset="0.18" stop-color="#f2be5b"/><stop offset="0.34" stop-color="#f1d395"/><stop offset="0.49" stop-color="#f1e9d2"/><stop offset="0.73" stop-color="#f8f4e9"/><stop offset="1" stop-color="#fff"/></linearGradient>
						<linearGradient id="nona-svg-id-1" x1="1221.06" y1="1080.54" x2="1221.06" y2="-275.08" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.21" stop-color="#f2622f"/><stop offset="0.45" stop-color="#f2862c"/><stop offset="0.67" stop-color="#f2ac29"/><stop offset="0.69" stop-color="#f2b137"/><stop offset="0.74" stop-color="#f2be5b"/><stop offset="0.81" stop-color="#f1d395"/><stop offset="0.87" stop-color="#f1e9d2"/></linearGradient>
						<clipPath id="nona-svg-id-2"><path
							class="nona-svg"
							d="M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28,0,0-162.24,0-198.24,99-35.2,96.81-73.57,153-324,153q960,0,1920,1l-.13-253Z"/></clipPath>
						<linearGradient id="nona-svg-id-3" x1="808.67" y1="675.37" x2="2008.9" y2="675.37" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
						<linearGradient id="nona-svg-id-4" x1="1299.25" y1="371.88" x2="2130.09" y2="371.88" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
						<linearGradient id="nona-svg-id-5" x1="554.7" y1="321.34" x2="1434.63" y2="321.34" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f27929"/><stop offset="0.5" stop-color="#f2aa29"/><stop offset="1" stop-color="#f2de29"/></linearGradient>
						<linearGradient id="nona-svg-id-6" x1="1450.5" y1="1255.46" x2="1450.5" y2="730.95" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c6c73"/><stop offset="0.08" stop-color="#357662"/><stop offset="0.22" stop-color="#118648"/><stop offset="0.3" stop-color="#038c3e"/><stop offset="0.46" stop-color="#4b8638"/><stop offset="0.68" stop-color="#a47f30"/><stop offset="0.83" stop-color="#dc7b2b"/><stop offset="0.9" stop-color="#f27929"/></linearGradient>
						<linearGradient id="nona-svg-id-7" x1="1182.44" y1="1211.26" x2="1182.44" y2="894.46" gradientUnits="userSpaceOnUse"><stop offset="0.17" stop-color="#024d22"/><stop offset="1" stop-color="#038039"/></linearGradient>
						<linearGradient id="nona-svg-id-8" x1="1385.38" y1="1375.24" x2="1385.38" y2="889.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#024d22"/><stop offset="0.06" stop-color="#024f23"/><stop offset="0.36" stop-color="#025727"/><stop offset="1" stop-color="#025928"/></linearGradient>
						<linearGradient id="nona-svg-id-9" x1="1155.04" y1="450.47" x2="1250.3" y2="450.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.14" stop-color="#be5938"/><stop offset="0.37" stop-color="#d56a2e"/><stop offset="0.56" stop-color="#ef7c23"/><stop offset="0.69" stop-color="#ed7a23"/><stop offset="0.76" stop-color="#e57522"/><stop offset="0.81" stop-color="#d76b20"/><stop offset="0.86" stop-color="#c45d1d"/><stop offset="0.9" stop-color="#ab4a1a"/><stop offset="0.94" stop-color="#8c3416"/><stop offset="0.98" stop-color="#681a11"/><stop offset="1" stop-color="#4f080e"/></linearGradient>
						<linearGradient id="nona-svg-id-10" x1="1134.34" y1="509.94" x2="1227.97" y2="509.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.27" stop-color="#c05b37"/><stop offset="0.74" stop-color="#dd6f2b"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
						<linearGradient id="nona-svg-id-11" x1="-114.13" y1="1107.54" x2="-302.66" y2="1107.54" gradientTransform="translate(1823.92 -49.56) rotate(39.38)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7a959"/><stop offset="0.06" stop-color="#f6a655"/><stop offset="0.67" stop-color="#f18731"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
						<linearGradient id="nona-svg-id-12" x1="1330.41" y1="605.03" x2="1052.4" y2="605.03" gradientTransform="translate(21.84 -8.13) rotate(0.49)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.64" stop-color="#f9b761"/><stop offset="1" stop-color="#f7a959"/></linearGradient>
						<linearGradient id="nona-svg-id-13" x1="1496.56" y1="939.53" x2="1041.03" y2="939.53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.19" stop-color="#a74c3d"/><stop offset="0.72" stop-color="#833a3e"/><stop offset="1" stop-color="#75333f"/></linearGradient><linearGradient id="nona-svg-id-14" x1="1233.71" y1="965.74" x2="1054.91" y2="965.74" href="#nona-svg-id-13"/>
						<linearGradient id="nona-svg-id-15" x1="1347.97" y1="668.36" x2="951.35" y2="668.36" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.32" stop-color="#fcc86a"/><stop offset="1" stop-color="#f7a959"/></linearGradient><linearGradient id="nona-svg-id-16" x1="1271.12" y1="751.78" x2="1078.74" y2="751.78" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" href="#nona-svg-id-11"/><linearGradient id="nona-svg-id-17" x1="1247.6" y1="628.53" x2="1055.95" y2="628.53" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" href="#nona-svg-id-12"/>
						<linearGradient id="nona-svg-id-18" x1="1084.55" y1="1021.86" x2="1084.55" y2="583.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b33e24"/><stop offset="0.3" stop-color="#c24327"/><stop offset="0.89" stop-color="#ea512e"/><stop offset="1" stop-color="#f25430"/></linearGradient>
						<linearGradient id="nona-svg-id-19" x1="1085.9" y1="548.86" x2="1085.9" y2="865.32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-20" x1="1124.44" y1="777.19" x2="1124.44" y2="1122.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5847e"/><stop offset="0.36" stop-color="#f37584"/><stop offset="1" stop-color="#ef5193"/></linearGradient><linearGradient id="nona-svg-id-21" x1="1057.91" y1="976.68" x2="1057.91" y2="804.29" gradientTransform="matrix(1, -0.1, -0.02, 1.11, 47.58, -182.31)" href="#nona-svg-id-19"/><linearGradient id="nona-svg-id-22" x1="1082.95" y1="795.87" x2="1082.95" y2="604.41" href="#nona-svg-id-19"/>
						<linearGradient id="nona-svg-id-23" x1="777.86" y1="798.75" x2="777.86" y2="626.36" gradientTransform="matrix(1, 0, -0.13, 1.01, 318.63, -28.44)" gradientUnits="userSpaceOnUse"><stop offset="0.03" stop-color="#d94b2b"/><stop offset="0.48" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-24" x1="776.39" y1="797.42" x2="776.39" y2="626.09" gradientTransform="matrix(1, 0, -0.13, 1.01, 318.63, -28.44)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="0.99" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-25" x1="924.92" y1="490.72" x2="1259.18" y2="490.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3f0c0b"/><stop offset="0.51" stop-color="#410d0d"/><stop offset="0.69" stop-color="#481213"/><stop offset="0.82" stop-color="#531b1f"/><stop offset="0.93" stop-color="#64272f"/><stop offset="1" stop-color="#75333f"/></linearGradient>
					</defs>
					<g class="nona-svg-1">
						<g id="e1c17734-8238-419b-8f66-5ae7296f9edc" data-name="Layer 2">
							<g id="f4cf1625-042f-4f6e-96ae-24086ef3340d" data-name="Layer 1"><path
								class="nona-svg-2"
								d="M1919.87,0H496.49c-20.6,37.48-26.13,82.81-14.07,123.72,14.7,49.83,55.1,91.83,105.28,109.44,66.95,23.49,140.6,4.25,211.64-.14s156.1,16.42,180,81.56c18.36,50-7.37,103.8-27.06,153.32s-31,112.51,7.63,150c59.76,58,170.69-3.19,243.43,38.56,30.89,17.73,49.16,52.89,49.29,87.75s-16.53,68.71-41.84,93.41c-57.52,56.14-147.54,62.18-229.06,63.75s-171,4.93-231.5,58c-54.17,47.47-74.53,126.92-136.71,164-46.64,27.81-104.74,28.2-159.26,32.53C144,1180.52,351,1495.31,0,1495.31l1920,1Z"/><path
								class="nona-svg-3"
								d="M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28H1919.87Z"/>
								<g class="nona-svg-4"><circle class="nona-svg-5" cx="1408.63" cy="430.84" r="120.59"/><path
									class="nona-svg-6"
									d="M1963.6,718.53c-22-13.1-46.4-13.55-71.28-12.63-26.38,1-52,1.52-76.74-4.92-10.55-2.74-18.86-10.32-23.79-20a23.8,23.8,0,0,0-8.9-9.42c-9.15-5.61-19.26-3.66-28.58.21a1.54,1.54,0,0,1-2.1-1.66c3.89-30.2-16.94-59.75-49.46-62.47C1663.21,604.29,1643,639,1635.22,673a5,5,0,0,1-7.12,3.28c-7.16-3.47-15.59-2.55-20.91,6.61l-.13.22c-6.76,12-19,19.86-32.83,19.66-13.26-.2-26.5-.56-39.53-.59a290.78,290.78,0,0,0-81.38,11.32c-3.16.91-1.35,5,1.25,5.31,18,2.26,36.24,2.63,54.45,2.63,92.17,0,120.88,14.94,211.84,21.61,11.6.85,18.57.07,27.86-6.45,4.86-3.41,5.59-3.57,12-1.74,3.2.91,6.14,2.68,9.4,3.55,3.81,1,7.76,1.74,11.67.72,9.83-2.56,11.45-10.7,8.89-16.39,57.37,1.25,114.58,1.73,172,1.79C1966.32,724.56,1966.34,720.16,1963.6,718.53Z"/><path
									class="nona-svg-7"
									d="M1349.5,432.2c104.26-6.18,209.69-13,313,6.38a12.88,12.88,0,0,0-5.35,7.91c-3.6,15.67,15.07,22.91,27.28,22.79,31.43-.3,63.87-17,93.94-24.73,39.18-10,75.22-7.45,114.06,2.43,29.78,7.57,58.9,15,89.82,15.12,32.53.13,64.66-5.8,96.26-13.05,56.21-12.92,112.91-35.74,170.93-36.84,9.06.29,18.13.65,27.2.9,5.25.14,9.71-9.29,3.26-9.73C2274,403.07,2094.12,398,2020,394c-19.65,0-24.91-36.88-57.18-3.13a99.25,99.25,0,0,1,1-16.71c.5-5.93,1.21-11.68,1.07-17.66a94.29,94.29,0,0,0-10.83-42.33c-22.21-41.31-82.15-56.33-113.15-16a56.7,56.7,0,0,0-11.5,27c-2.91,22.33,11.82,42.9-15.34,57.84-8.59,4.73-26,10.72-23.33,21.93a186.36,186.36,0,0,0-66.93.65c-13.35,2.64-26.46,8-40.21,7s-23.1-7.77-32.91-16.9c-19.55-18.22-39.53-43.1-68.8-28.49-21.74,10.84-33.66,34.92-60.15,36.58-21,1.33-41.72-9.07-62.66-3.07-9.1,2.61-16,8.05-23.79,13.13-15.41,10-28.55,10-45.89,6.19-15.58-3.4-29.57-4.73-41.48,7.25C1346.21,429.05,1346.57,432.37,1349.5,432.2Z"/><path
									class="nona-svg-8"
									d="M1456.49,320.48c-61.46,1.22-123,2.71-184.5,2.58-13.43,0-11.71-9.38-18.36-16.72a13.3,13.3,0,0,0-10.77-4.22c-6.25.42-9.47,3.92-10.38,8.29-15.26-21.67-34.82-42.81-63-43.24-27.3-.41-44.49,22.95-38.19,48.4,3.2,12.95,5.45,34.08-15.61,24.77-4-1.79-8.39-4.09-13-3.67s-7.72,3.09-10.8,6.14c-9.16,9.11-15.79,13.52-29.2,14.9-44.91,4.59-90.39,5.6-135.43,8.82-5.73.41-1.59,8.86,3.14,8.66,28.05-1.24,56.11-2.06,84.18-2.85,40.45,1,80.91,1.55,121.38,2.12,26.25.37,52.59,1.45,78.84.89,23-.5,64.51-5.15,64-19.71-.35-10.22-37.81-9.64-39.42-13.67-4.13-10.33,41.94-2.64,102.11-2.64,39.72,0,79.36-1,117-14.77C1461.07,323.63,1458.2,320.44,1456.49,320.48Z"/><path class="nona-svg-9" d="M981,901.94c103.76-65.59,263.18-40.53,375.22,8.19,51.35,22.33,102.39,49.55,157.92,53.75,144,10.89,261.71-132.88,405.87-141.76v502.29H981Z"/><path class="nona-svg-10" d="M444.87,914.62c442-109.27,847.87,164.07,1082.9,106.75,325.69-79.43,392.23,303,392.23,303H444.87Z"/><path class="nona-svg-11" d="M850.76,1324.41S1233.28,981,1920,981v343.44Z"/><rect class="nona-svg-12" y="1244.31" width="1920" height="252"/><path class="nona-svg-12" d="M444.87,1016.75S1212.44,928.66,1920,1244.31H444.87Z"/><ellipse class="nona-svg-13" cx="1003.81" cy="1173.18" rx="184.59" ry="36.93"/><path class="nona-svg-14" d="M1806.27,380.34a1.49,1.49,0,1,1-1.49-1.49A1.49,1.49,0,0,1,1806.27,380.34Z"/><circle class="nona-svg-14" cx="1845.24" cy="519.74" r="8.37"/><path class="nona-svg-14" d="M1756.4,529.94a8.82,8.82,0,1,1-8.81-8.81A8.82,8.82,0,0,1,1756.4,529.94Z"/><circle class="nona-svg-14" cx="1780.46" cy="485.87" r="6.97"/><path class="nona-svg-14" d="M1731.06,501.64a8.45,8.45,0,1,1-8.45-8.44A8.45,8.45,0,0,1,1731.06,501.64Z"/><circle class="nona-svg-14" cx="1566.01" cy="596.92" r="8.14"/><circle class="nona-svg-14" cx="1691.27" cy="386.41" r="4.82"/><circle class="nona-svg-14" cx="1498.68" cy="321.9" r="8.61"/><path class="nona-svg-14" d="M1429.59,226a7.84,7.84,0,1,1-7.84-7.84A7.84,7.84,0,0,1,1429.59,226Z"/><circle class="nona-svg-14" cx="1173.65" cy="323.7" r="3.91"/><path class="nona-svg-14" d="M1226.74,443.32a1.36,1.36,0,1,1-1.36-1.36A1.36,1.36,0,0,1,1226.74,443.32Z"/><path class="nona-svg-14" d="M1336.88,491.83a2.82,2.82,0,1,1-2.82-2.82A2.82,2.82,0,0,1,1336.88,491.83Z"/><circle class="nona-svg-14" cx="1433.3" cy="691.15" r="1.91"/><path class="nona-svg-14" d="M1513.13,467a4.18,4.18,0,1,1-4.17-4.17A4.17,4.17,0,0,1,1513.13,467Z"/><path class="nona-svg-14" d="M1508.59,612.68a4.56,4.56,0,1,1-4.56-4.57A4.56,4.56,0,0,1,1508.59,612.68Z"/><circle class="nona-svg-14" cx="1520.88" cy="628.34" r="8.15"/><path class="nona-svg-14" d="M1583.25,779.39a8.32,8.32,0,1,1-8.32-8.32A8.32,8.32,0,0,1,1583.25,779.39Z"/><circle class="nona-svg-14" cx="1756.75" cy="322.92" r="7.34"/><path class="nona-svg-14" d="M1648.11,336.52a3.83,3.83,0,1,1-3.83-3.83A3.83,3.83,0,0,1,1648.11,336.52Z"/><path class="nona-svg-14" d="M1578.63,195.33a4.09,4.09,0,1,1-4.08-4.08A4.09,4.09,0,0,1,1578.63,195.33Z"/><path class="nona-svg-14" d="M1679.1,380.82a4.83,4.83,0,1,1-4.82-4.82A4.82,4.82,0,0,1,1679.1,380.82Z"/><circle class="nona-svg-14" cx="1587.99" cy="334.01" r="8.95"/><path class="nona-svg-14" d="M1548.1,199.15a3.32,3.32,0,1,1-3.32-3.31A3.32,3.32,0,0,1,1548.1,199.15Z"/><path class="nona-svg-14" d="M1572.74,280.48a3.15,3.15,0,1,1-3.15-3.14A3.15,3.15,0,0,1,1572.74,280.48Z"/></g><path class="nona-svg-15" d="M1233.34,450.47c0,32.87-17.81,59.51-39.78,59.51s-80.93-3.53-63.47-66.8c8.75-31.68,24.72-52.22,63.47-52.22C1215.53,391,1233.34,417.61,1233.34,450.47Z"/><path
									class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52"
									d="M1220.52,440c4.11-3,5.51-12.69,5.67-23.54C1219,401.07,1207.08,391,1193.56,391c-38.75,0-54.72,20.54-63.47,52.22-17.46,63.27,41.5,66.8,63.47,66.8a27.24,27.24,0,0,0,8.56-1.42c-10.53,3-18-4.34-11.65-7.93,7.34-4.11,18-14.59,16.45-30.05S1209.65,448,1220.52,440Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1205.26,507.35l.41-.2Z"/><path class="nona-svg-17" d="M1189.85,483.78c-18.36,35.19,8.87,62.39,8.87,62.39l-100-7L1134,474.64S1197.35,469.41,1189.85,483.78Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1134,474.64l-31.26,57.24,69.12.92c-2.47-19.71,11.78-28,11.78-28h0a54.29,54.29,0,0,1,6.2-21C1197.35,469.41,1134,474.64,1134,474.64Z"/><path class="nona-svg-18" d="M1022.67,621.56s-60.08,58.82-50.74,176.53c0,0-3.52,7-6.09,11.6s5.89,13.17,21.27,5.61c7.36-3.62-2.65-16.85-2.65-16.85s18-49,101.34-156.32Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1007.18,679.63c-.84,1-3.47.25-5.87-1.73s-3.68-4.4-2.84-5.42,3.47-.25,5.87,1.73S1008,678.61,1007.18,679.63Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1085.8,642.13l-63.13-20.57s-12.55,12.32-25.28,36.88c29.14,27.9,58.64,23.28,58.64,23.28h0C1064.9,669.52,1074.76,656.35,1085.8,642.13Z"/><path class="nona-svg-19" d="M1069.7,679c41.84-56.7,57.59-116.32,37.72-137.45-37-39.34-80,66.61-108.72,72.88,0,0-9.6,25.09,15.72,45.87S1069.7,679,1069.7,679Z"/><path
									class="nona-svg-20"
									d="M1010.11,759.7c-31.11,32.14-14.35,83.21,25.05,105,0,0,4.86,103-9.57,113.93-33.07,25.07-73.15,73.54-121.25,74.27-18.18-6,6.49,81.18,16,64.39,5.38-9.53,5.35-27,1-41.48,22.23.25,175.5-53.09,219-190.21C1182.44,752.85,1010.11,759.7,1010.11,759.7Z"/><path
									class="nona-svg-21"
									d="M1151.39,1165.29c-6.22-3.22-14.43-2-22.68,1.09,20.9-95.27,107.23-266.94,120.09-434.27H1092.63c-81.82,119,22.45,139.94,22.45,139.94,50.71,19.49-20.76,300.07-21.32,320.3.77,13,23.91,5.08,34.37-.89C1139.76,1184.81,1162.09,1170.83,1151.39,1165.29Z"/><path class="nona-svg-22" d="M1234.33,828c-3.2-25-26.75-31.07-65.8.16-64,51.17-142.94,44.34-163.25,8.3,0,0-26.74-33.41,4.89-76.78h231.38A282.54,282.54,0,0,1,1234.33,828Z"/><path class="nona-svg-23" d="M1132.72,524.69c129.08,0,122.89,175.36,114.55,216.86-11.62,57.89-221.58,121-265,7.1,0,0,62.36-25.87,72.22-105.56C1062.77,576.49,1084.63,524.69,1132.72,524.69Z"/><path class="nona-svg-24" d="M1182.44,778.41s58.18-82,53.2-145.66-19.9-86.38-50.11-81.32l-18.89-8.82s38.7-8.51,56,17.88c32.79,50-51.26,181.06-51.26,181.06Z"/><path class="nona-svg-25" d="M1190.16,669.74s-9.3,85.29,74.29,172.08c0,0,1.77,7.83,2.7,13.09s13.17,6.58,20.41-9.34c3.46-7.62-13-11.57-13-11.57s-17.49-50.34-21.29-188.92Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1215.54,725.57c0,1.35-2.57,2.44-5.74,2.44s-5.75-1.09-5.75-2.44,2.57-2.44,5.75-2.44S1215.54,724.22,1215.54,725.57Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1253.27,645.08l-63.11,24.66s-1.91,17.84,3.95,45.45c41,3.14,61.32-19.6,61.32-19.6h0C1254.53,680.22,1253.78,663.45,1253.27,645.08Z"/><path class="nona-svg-26" d="M1264.45,684.58c-3.72-71.81-29.9-129-59.26-132.83-54.65-7.07-20,104.36-38.55,127.88,0,0,8.66,26,42.09,26S1264.45,684.58,1264.45,684.58Z"/><path class="nona-svg-27" d="M1189.86,563c-10.34,47.48-15.49,80.43-15.49,142.61s19.08,79.24,0,103.24c-22.11,27.81-83.18,44.81-152.4,25.16-69.79-19.82-40-106-9.27-213.64C1035.09,542.1,1187.85,522.78,1189.86,563Z"/><path class="nona-svg-28" d="M1012.7,620.39c-7.27,25.44-14.41,49.46-20.18,71.64,47.7,23,146.19,15.52,155.41-4.76,10.15-22.33-25.1-134.11,41.93-124.25C1187.85,522.78,1035.09,542.1,1012.7,620.39Z"/><path class="nona-svg-29" d="M1035.35,543.35C1068.57,523,1185.79,519.2,1189.86,563c0,0-22.11-8-37.34,9s-14.19,77.12-12.13,106.53S952,684.8,986,659c0,0,15.76-8.2,26.71-38.62C1019.84,600.56,1001.75,563.92,1035.35,543.35Z"/><path
									class="nona-svg-30"
									d="M1133.66,705.62c.63,11.07-1,22.11-2.89,33s-4.47,21.63-6.73,32.4-4.19,21.59-5.29,32.35a52.6,52.6,0,0,0,.4,16,18.71,18.71,0,0,0,3.11,7.1,15.85,15.85,0,0,0,6.33,4.73l-.1.34a15.59,15.59,0,0,1-7.47-4,20.24,20.24,0,0,1-4.29-7.52c-1.7-5.54-1.78-11.3-1.57-16.89.67-11.23,3.48-22,6.07-32.72s5.44-21.37,7.77-32.12,4.45-21.58,4.3-32.6Z"/><path class="nona-svg-31" d="M1104.55,611.8c-6,29.77,8.35,106.63-18.83,147.37,0,0-16.82-.07-19-13.72,0,0,13.7-11.74,18.47-37.44s5.88-89.55,6-95.85c.08-5.06,8.57-2.77,11.94-1.46A4,4,0,0,1,1104.55,611.8Z"/><path class="nona-svg-32" d="M1103.07,610.5c-6.26,29.43,9.21,105.82-18.64,146.77,0,0-18.92-1.73-21.6-15.72,0,0,15.2-10.48,20.12-35.93s6.71-88.79,6.71-95.12S1103.07,610.5,1103.07,610.5Z"/><path class="nona-svg-32" d="M1035.16,611.36c-8.9,26.64-3.63,95.78-33.15,132.84,0,0-16.74-1.57-17.57-14.23,0,0,14.78-9.48,22-32.52s14.62-81.22,15.33-87c.57-4.62,8.8-1.76,12-.27A3.79,3.79,0,0,1,1035.16,611.36Z"/><path class="nona-svg-33" d="M1033.83,610.23c-8.9,26.64-3.63,95.77-33.15,132.83,0,0-16.74-1.57-17.57-14.22,0,0,14.78-9.49,22-32.52s16-80.35,16.68-86.09S1033.83,610.23,1033.83,610.23Z"/><path
									class="nona-svg-34"
									d="M1222.65,398.94c41.8,36.65-18.6,35.89-18.6,62.87,0,62.94-65.87,27.24-37.41,80.8,24.54,46.18-32.84,63.32-75.45,47.26-42.18-15.91-92.14-55-125.8-43.7-59.58,20-53.13-59.41,17.72-30.39s34.34-55.4,83.61-61.09c49-5.67,49.6-17.31,67.66-38.95C1155.05,391,1191.62,371.72,1222.65,398.94Z"/><path class="nona-svg-28" d="M1632.35,530.28s-12.33-29,16.49-55.17C1648.84,475.11,1667.28,510.31,1632.35,530.28Z"/><path class="nona-svg-28" d="M1800.13,584.11s11-37.32,58.94-39.67C1859.07,544.44,1849.08,592.44,1800.13,584.11Z"/><path class="nona-svg-28" d="M1639.67,592.05s38.49-7.68,63.07,34.05C1702.74,626.1,1655.17,639.67,1639.67,592.05Z"/><path class="nona-svg-28" d="M988.27,279.35s-23.66-11.62-19.73-43.91C968.54,235.44,999.45,247.62,988.27,279.35Z"/><path class="nona-svg-28" d="M897.87,386.39s-7.68-19.6,12-36.49C909.91,349.9,921.54,373.72,897.87,386.39Z"/><path class="nona-svg-28" d="M708.59,207.49s19.31-28.39,60.23-17.41C768.82,190.08,747.46,227.71,708.59,207.49Z"/><path class="nona-svg-28" d="M1515.81,326.13s-32.2-10.95-32.51-52.92C1483.3,273.21,1524.87,283.69,1515.81,326.13Z"/><path class="nona-svg-28" d="M1655.2,229.1s9.61-33.93,55.8-37.24C1711,191.86,1702.64,235.4,1655.2,229.1Z"/></g>
						</g>
					</g>
				</svg>
			</header>
		);
	},
	save: props => {
		return (
			<header className="hero">
				<div className="hero-content">
					<div className="hero-title">
						<h1>
							<div>{__("The", "wp-rig")}</div>
							<div>{__("NONA", "wp-rig")}</div>
							<div>{__("Experience", "wp-rig")}</div>
						</h1>
					</div>

					<h2 className="hero-subtitle">
						<RichText.Content 
							value={props.attributes.heroSubtitle}
						/>
					</h2>

					<p className="hero-body">
						<RichText.Content 
							value={props.attributes.heroBody}
						/>
					</p>

					<a className="hero-cta" href={props.attributes.heroCtaURL} role="button" >
						<RichText.Content 
							value={props.attributes.heroCta}
						/>
					</a>
				</div>	
				<svg class="hero-illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1883.06 1496.31" preserveAspectRatio="xMaxYMax meet">
					<defs>
						<linearGradient id="nona-svg-id" x1="960" y1="1496.31" x2="960" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2ac29"/><stop offset="0.06" stop-color="#f2b137"/><stop offset="0.18" stop-color="#f2be5b"/><stop offset="0.34" stop-color="#f1d395"/><stop offset="0.49" stop-color="#f1e9d2"/><stop offset="0.73" stop-color="#f8f4e9"/><stop offset="1" stop-color="#fff"/></linearGradient>
						<linearGradient id="nona-svg-id-1" x1="1221.06" y1="1080.54" x2="1221.06" y2="-275.08" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#f25430"/><stop offset="0.21" stop-color="#f2622f"/><stop offset="0.45" stop-color="#f2862c"/><stop offset="0.67" stop-color="#f2ac29"/><stop offset="0.69" stop-color="#f2b137"/><stop offset="0.74" stop-color="#f2be5b"/><stop offset="0.81" stop-color="#f1d395"/><stop offset="0.87" stop-color="#f1e9d2"/></linearGradient>
						<clipPath id="nona-svg-id-2"><path
							class="nona-svg"
							d="M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28,0,0-162.24,0-198.24,99-35.2,96.81-73.57,153-324,153q960,0,1920,1l-.13-253Z"/></clipPath>
						<linearGradient id="nona-svg-id-3" x1="808.67" y1="675.37" x2="2008.9" y2="675.37" gradientUnits="userSpaceOnUse"><stop offset="0.19" stop-color="#f1e9d2"/><stop offset="0.32" stop-color="#f1e6a1"/><stop offset="0.6" stop-color="#f2de29"/><stop offset="0.91" stop-color="#f98a25"/></linearGradient>
						<linearGradient id="nona-svg-id-4" x1="1299.25" y1="371.88" x2="2130.09" y2="371.88" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#f2de29"/><stop offset="0.27" stop-color="#f2d429"/><stop offset="0.36" stop-color="#f2c229"/><stop offset="0.48" stop-color="#f2b529"/><stop offset="0.64" stop-color="#f2ae29"/><stop offset="1" stop-color="#f2ac29"/></linearGradient>
						<linearGradient id="nona-svg-id-5" x1="554.7" y1="321.34" x2="1434.63" y2="321.34" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f27929"/><stop offset="0.5" stop-color="#f2aa29"/><stop offset="1" stop-color="#f2de29"/></linearGradient>
						<linearGradient id="nona-svg-id-6" x1="1450.5" y1="1255.46" x2="1450.5" y2="730.95" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c6c73"/><stop offset="0.08" stop-color="#357662"/><stop offset="0.22" stop-color="#118648"/><stop offset="0.3" stop-color="#038c3e"/><stop offset="0.46" stop-color="#4b8638"/><stop offset="0.68" stop-color="#a47f30"/><stop offset="0.83" stop-color="#dc7b2b"/><stop offset="0.9" stop-color="#f27929"/></linearGradient>
						<linearGradient id="nona-svg-id-7" x1="1182.44" y1="1211.26" x2="1182.44" y2="894.46" gradientUnits="userSpaceOnUse"><stop offset="0.17" stop-color="#024d22"/><stop offset="1" stop-color="#038039"/></linearGradient>
						<linearGradient id="nona-svg-id-8" x1="1385.38" y1="1375.24" x2="1385.38" y2="889.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#024d22"/><stop offset="0.06" stop-color="#024f23"/><stop offset="0.36" stop-color="#025727"/><stop offset="1" stop-color="#025928"/></linearGradient>
						<linearGradient id="nona-svg-id-9" x1="1155.04" y1="450.47" x2="1250.3" y2="450.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.14" stop-color="#be5938"/><stop offset="0.37" stop-color="#d56a2e"/><stop offset="0.56" stop-color="#ef7c23"/><stop offset="0.69" stop-color="#ed7a23"/><stop offset="0.76" stop-color="#e57522"/><stop offset="0.81" stop-color="#d76b20"/><stop offset="0.86" stop-color="#c45d1d"/><stop offset="0.9" stop-color="#ab4a1a"/><stop offset="0.94" stop-color="#8c3416"/><stop offset="0.98" stop-color="#681a11"/><stop offset="1" stop-color="#4f080e"/></linearGradient>
						<linearGradient id="nona-svg-id-10" x1="1134.34" y1="509.94" x2="1227.97" y2="509.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.27" stop-color="#c05b37"/><stop offset="0.74" stop-color="#dd6f2b"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
						<linearGradient id="nona-svg-id-11" x1="-114.13" y1="1107.54" x2="-302.66" y2="1107.54" gradientTransform="translate(1823.92 -49.56) rotate(39.38)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7a959"/><stop offset="0.06" stop-color="#f6a655"/><stop offset="0.67" stop-color="#f18731"/><stop offset="1" stop-color="#ef7c23"/></linearGradient>
						<linearGradient id="nona-svg-id-12" x1="1330.41" y1="605.03" x2="1052.4" y2="605.03" gradientTransform="translate(21.84 -8.13) rotate(0.49)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.64" stop-color="#f9b761"/><stop offset="1" stop-color="#f7a959"/></linearGradient>
						<linearGradient id="nona-svg-id-13" x1="1496.56" y1="939.53" x2="1041.03" y2="939.53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b5533c"/><stop offset="0.19" stop-color="#a74c3d"/><stop offset="0.72" stop-color="#833a3e"/><stop offset="1" stop-color="#75333f"/></linearGradient><linearGradient id="nona-svg-id-14" x1="1233.71" y1="965.74" x2="1054.91" y2="965.74" href="#nona-svg-id-13"/>
						<linearGradient id="nona-svg-id-15" x1="1347.97" y1="668.36" x2="951.35" y2="668.36" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed873"/><stop offset="0.32" stop-color="#fcc86a"/><stop offset="1" stop-color="#f7a959"/></linearGradient><linearGradient id="nona-svg-id-16" x1="1271.12" y1="751.78" x2="1078.74" y2="751.78" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" href="#nona-svg-id-11"/><linearGradient id="nona-svg-id-17" x1="1247.6" y1="628.53" x2="1055.95" y2="628.53" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" href="#nona-svg-id-12"/>
						<linearGradient id="nona-svg-id-18" x1="1084.55" y1="1021.86" x2="1084.55" y2="583.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b33e24"/><stop offset="0.3" stop-color="#c24327"/><stop offset="0.89" stop-color="#ea512e"/><stop offset="1" stop-color="#f25430"/></linearGradient>
						<linearGradient id="nona-svg-id-19" x1="1085.9" y1="548.86" x2="1085.9" y2="865.32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-20" x1="1124.44" y1="777.19" x2="1124.44" y2="1122.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5847e"/><stop offset="0.36" stop-color="#f37584"/><stop offset="1" stop-color="#ef5193"/></linearGradient><linearGradient id="nona-svg-id-21" x1="1057.91" y1="976.68" x2="1057.91" y2="804.29" gradientTransform="matrix(1, -0.1, -0.02, 1.11, 47.58, -182.31)" href="#nona-svg-id-19"/><linearGradient id="nona-svg-id-22" x1="1082.95" y1="795.87" x2="1082.95" y2="604.41" href="#nona-svg-id-19"/>
						<linearGradient id="nona-svg-id-23" x1="777.86" y1="798.75" x2="777.86" y2="626.36" gradientTransform="matrix(1, 0, -0.13, 1.01, 318.63, -28.44)" gradientUnits="userSpaceOnUse"><stop offset="0.03" stop-color="#d94b2b"/><stop offset="0.48" stop-color="#e8502e"/><stop offset="1" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-24" x1="776.39" y1="797.42" x2="776.39" y2="626.09" gradientTransform="matrix(1, 0, -0.13, 1.01, 318.63, -28.44)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d94b2b"/><stop offset="0.46" stop-color="#e8502e"/><stop offset="0.99" stop-color="#ff5833"/></linearGradient>
						<linearGradient id="nona-svg-id-25" x1="924.92" y1="490.72" x2="1259.18" y2="490.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3f0c0b"/><stop offset="0.51" stop-color="#410d0d"/><stop offset="0.69" stop-color="#481213"/><stop offset="0.82" stop-color="#531b1f"/><stop offset="0.93" stop-color="#64272f"/><stop offset="1" stop-color="#75333f"/></linearGradient>
					</defs>
					<g class="nona-svg-1">
						<g id="e1c17734-8238-419b-8f66-5ae7296f9edc" data-name="Layer 2">
							<g id="f4cf1625-042f-4f6e-96ae-24086ef3340d" data-name="Layer 1"><path
								class="nona-svg-2"
								d="M1919.87,0H496.49c-20.6,37.48-26.13,82.81-14.07,123.72,14.7,49.83,55.1,91.83,105.28,109.44,66.95,23.49,140.6,4.25,211.64-.14s156.1,16.42,180,81.56c18.36,50-7.37,103.8-27.06,153.32s-31,112.51,7.63,150c59.76,58,170.69-3.19,243.43,38.56,30.89,17.73,49.16,52.89,49.29,87.75s-16.53,68.71-41.84,93.41c-57.52,56.14-147.54,62.18-229.06,63.75s-171,4.93-231.5,58c-54.17,47.47-74.53,126.92-136.71,164-46.64,27.81-104.74,28.2-159.26,32.53C144,1180.52,351,1495.31,0,1495.31l1920,1Z"/><path
								class="nona-svg-3"
								d="M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28H1919.87Z"/>
								<g class="nona-svg-4"><circle class="nona-svg-5" cx="1408.63" cy="430.84" r="120.59"/><path
									class="nona-svg-6"
									d="M1963.6,718.53c-22-13.1-46.4-13.55-71.28-12.63-26.38,1-52,1.52-76.74-4.92-10.55-2.74-18.86-10.32-23.79-20a23.8,23.8,0,0,0-8.9-9.42c-9.15-5.61-19.26-3.66-28.58.21a1.54,1.54,0,0,1-2.1-1.66c3.89-30.2-16.94-59.75-49.46-62.47C1663.21,604.29,1643,639,1635.22,673a5,5,0,0,1-7.12,3.28c-7.16-3.47-15.59-2.55-20.91,6.61l-.13.22c-6.76,12-19,19.86-32.83,19.66-13.26-.2-26.5-.56-39.53-.59a290.78,290.78,0,0,0-81.38,11.32c-3.16.91-1.35,5,1.25,5.31,18,2.26,36.24,2.63,54.45,2.63,92.17,0,120.88,14.94,211.84,21.61,11.6.85,18.57.07,27.86-6.45,4.86-3.41,5.59-3.57,12-1.74,3.2.91,6.14,2.68,9.4,3.55,3.81,1,7.76,1.74,11.67.72,9.83-2.56,11.45-10.7,8.89-16.39,57.37,1.25,114.58,1.73,172,1.79C1966.32,724.56,1966.34,720.16,1963.6,718.53Z"/><path
									class="nona-svg-7"
									d="M1349.5,432.2c104.26-6.18,209.69-13,313,6.38a12.88,12.88,0,0,0-5.35,7.91c-3.6,15.67,15.07,22.91,27.28,22.79,31.43-.3,63.87-17,93.94-24.73,39.18-10,75.22-7.45,114.06,2.43,29.78,7.57,58.9,15,89.82,15.12,32.53.13,64.66-5.8,96.26-13.05,56.21-12.92,112.91-35.74,170.93-36.84,9.06.29,18.13.65,27.2.9,5.25.14,9.71-9.29,3.26-9.73C2274,403.07,2094.12,398,2020,394c-19.65,0-24.91-36.88-57.18-3.13a99.25,99.25,0,0,1,1-16.71c.5-5.93,1.21-11.68,1.07-17.66a94.29,94.29,0,0,0-10.83-42.33c-22.21-41.31-82.15-56.33-113.15-16a56.7,56.7,0,0,0-11.5,27c-2.91,22.33,11.82,42.9-15.34,57.84-8.59,4.73-26,10.72-23.33,21.93a186.36,186.36,0,0,0-66.93.65c-13.35,2.64-26.46,8-40.21,7s-23.1-7.77-32.91-16.9c-19.55-18.22-39.53-43.1-68.8-28.49-21.74,10.84-33.66,34.92-60.15,36.58-21,1.33-41.72-9.07-62.66-3.07-9.1,2.61-16,8.05-23.79,13.13-15.41,10-28.55,10-45.89,6.19-15.58-3.4-29.57-4.73-41.48,7.25C1346.21,429.05,1346.57,432.37,1349.5,432.2Z"/><path
									class="nona-svg-8"
									d="M1456.49,320.48c-61.46,1.22-123,2.71-184.5,2.58-13.43,0-11.71-9.38-18.36-16.72a13.3,13.3,0,0,0-10.77-4.22c-6.25.42-9.47,3.92-10.38,8.29-15.26-21.67-34.82-42.81-63-43.24-27.3-.41-44.49,22.95-38.19,48.4,3.2,12.95,5.45,34.08-15.61,24.77-4-1.79-8.39-4.09-13-3.67s-7.72,3.09-10.8,6.14c-9.16,9.11-15.79,13.52-29.2,14.9-44.91,4.59-90.39,5.6-135.43,8.82-5.73.41-1.59,8.86,3.14,8.66,28.05-1.24,56.11-2.06,84.18-2.85,40.45,1,80.91,1.55,121.38,2.12,26.25.37,52.59,1.45,78.84.89,23-.5,64.51-5.15,64-19.71-.35-10.22-37.81-9.64-39.42-13.67-4.13-10.33,41.94-2.64,102.11-2.64,39.72,0,79.36-1,117-14.77C1461.07,323.63,1458.2,320.44,1456.49,320.48Z"/><path class="nona-svg-9" d="M981,901.94c103.76-65.59,263.18-40.53,375.22,8.19,51.35,22.33,102.39,49.55,157.92,53.75,144,10.89,261.71-132.88,405.87-141.76v502.29H981Z"/><path class="nona-svg-10" d="M444.87,914.62c442-109.27,847.87,164.07,1082.9,106.75,325.69-79.43,392.23,303,392.23,303H444.87Z"/><path class="nona-svg-11" d="M850.76,1324.41S1233.28,981,1920,981v343.44Z"/><rect class="nona-svg-12" y="1244.31" width="1920" height="252"/><path class="nona-svg-12" d="M444.87,1016.75S1212.44,928.66,1920,1244.31H444.87Z"/><ellipse class="nona-svg-13" cx="1003.81" cy="1173.18" rx="184.59" ry="36.93"/><path class="nona-svg-14" d="M1806.27,380.34a1.49,1.49,0,1,1-1.49-1.49A1.49,1.49,0,0,1,1806.27,380.34Z"/><circle class="nona-svg-14" cx="1845.24" cy="519.74" r="8.37"/><path class="nona-svg-14" d="M1756.4,529.94a8.82,8.82,0,1,1-8.81-8.81A8.82,8.82,0,0,1,1756.4,529.94Z"/><circle class="nona-svg-14" cx="1780.46" cy="485.87" r="6.97"/><path class="nona-svg-14" d="M1731.06,501.64a8.45,8.45,0,1,1-8.45-8.44A8.45,8.45,0,0,1,1731.06,501.64Z"/><circle class="nona-svg-14" cx="1566.01" cy="596.92" r="8.14"/><circle class="nona-svg-14" cx="1691.27" cy="386.41" r="4.82"/><circle class="nona-svg-14" cx="1498.68" cy="321.9" r="8.61"/><path class="nona-svg-14" d="M1429.59,226a7.84,7.84,0,1,1-7.84-7.84A7.84,7.84,0,0,1,1429.59,226Z"/><circle class="nona-svg-14" cx="1173.65" cy="323.7" r="3.91"/><path class="nona-svg-14" d="M1226.74,443.32a1.36,1.36,0,1,1-1.36-1.36A1.36,1.36,0,0,1,1226.74,443.32Z"/><path class="nona-svg-14" d="M1336.88,491.83a2.82,2.82,0,1,1-2.82-2.82A2.82,2.82,0,0,1,1336.88,491.83Z"/><circle class="nona-svg-14" cx="1433.3" cy="691.15" r="1.91"/><path class="nona-svg-14" d="M1513.13,467a4.18,4.18,0,1,1-4.17-4.17A4.17,4.17,0,0,1,1513.13,467Z"/><path class="nona-svg-14" d="M1508.59,612.68a4.56,4.56,0,1,1-4.56-4.57A4.56,4.56,0,0,1,1508.59,612.68Z"/><circle class="nona-svg-14" cx="1520.88" cy="628.34" r="8.15"/><path class="nona-svg-14" d="M1583.25,779.39a8.32,8.32,0,1,1-8.32-8.32A8.32,8.32,0,0,1,1583.25,779.39Z"/><circle class="nona-svg-14" cx="1756.75" cy="322.92" r="7.34"/><path class="nona-svg-14" d="M1648.11,336.52a3.83,3.83,0,1,1-3.83-3.83A3.83,3.83,0,0,1,1648.11,336.52Z"/><path class="nona-svg-14" d="M1578.63,195.33a4.09,4.09,0,1,1-4.08-4.08A4.09,4.09,0,0,1,1578.63,195.33Z"/><path class="nona-svg-14" d="M1679.1,380.82a4.83,4.83,0,1,1-4.82-4.82A4.82,4.82,0,0,1,1679.1,380.82Z"/><circle class="nona-svg-14" cx="1587.99" cy="334.01" r="8.95"/><path class="nona-svg-14" d="M1548.1,199.15a3.32,3.32,0,1,1-3.32-3.31A3.32,3.32,0,0,1,1548.1,199.15Z"/><path class="nona-svg-14" d="M1572.74,280.48a3.15,3.15,0,1,1-3.15-3.14A3.15,3.15,0,0,1,1572.74,280.48Z"/></g><path class="nona-svg-15" d="M1233.34,450.47c0,32.87-17.81,59.51-39.78,59.51s-80.93-3.53-63.47-66.8c8.75-31.68,24.72-52.22,63.47-52.22C1215.53,391,1233.34,417.61,1233.34,450.47Z"/><path
									class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52"
									d="M1220.52,440c4.11-3,5.51-12.69,5.67-23.54C1219,401.07,1207.08,391,1193.56,391c-38.75,0-54.72,20.54-63.47,52.22-17.46,63.27,41.5,66.8,63.47,66.8a27.24,27.24,0,0,0,8.56-1.42c-10.53,3-18-4.34-11.65-7.93,7.34-4.11,18-14.59,16.45-30.05S1209.65,448,1220.52,440Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1205.26,507.35l.41-.2Z"/><path class="nona-svg-17" d="M1189.85,483.78c-18.36,35.19,8.87,62.39,8.87,62.39l-100-7L1134,474.64S1197.35,469.41,1189.85,483.78Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1134,474.64l-31.26,57.24,69.12.92c-2.47-19.71,11.78-28,11.78-28h0a54.29,54.29,0,0,1,6.2-21C1197.35,469.41,1134,474.64,1134,474.64Z"/><path class="nona-svg-18" d="M1022.67,621.56s-60.08,58.82-50.74,176.53c0,0-3.52,7-6.09,11.6s5.89,13.17,21.27,5.61c7.36-3.62-2.65-16.85-2.65-16.85s18-49,101.34-156.32Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1007.18,679.63c-.84,1-3.47.25-5.87-1.73s-3.68-4.4-2.84-5.42,3.47-.25,5.87,1.73S1008,678.61,1007.18,679.63Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1085.8,642.13l-63.13-20.57s-12.55,12.32-25.28,36.88c29.14,27.9,58.64,23.28,58.64,23.28h0C1064.9,669.52,1074.76,656.35,1085.8,642.13Z"/><path class="nona-svg-19" d="M1069.7,679c41.84-56.7,57.59-116.32,37.72-137.45-37-39.34-80,66.61-108.72,72.88,0,0-9.6,25.09,15.72,45.87S1069.7,679,1069.7,679Z"/><path
									class="nona-svg-20"
									d="M1010.11,759.7c-31.11,32.14-14.35,83.21,25.05,105,0,0,4.86,103-9.57,113.93-33.07,25.07-73.15,73.54-121.25,74.27-18.18-6,6.49,81.18,16,64.39,5.38-9.53,5.35-27,1-41.48,22.23.25,175.5-53.09,219-190.21C1182.44,752.85,1010.11,759.7,1010.11,759.7Z"/><path
									class="nona-svg-21"
									d="M1151.39,1165.29c-6.22-3.22-14.43-2-22.68,1.09,20.9-95.27,107.23-266.94,120.09-434.27H1092.63c-81.82,119,22.45,139.94,22.45,139.94,50.71,19.49-20.76,300.07-21.32,320.3.77,13,23.91,5.08,34.37-.89C1139.76,1184.81,1162.09,1170.83,1151.39,1165.29Z"/><path class="nona-svg-22" d="M1234.33,828c-3.2-25-26.75-31.07-65.8.16-64,51.17-142.94,44.34-163.25,8.3,0,0-26.74-33.41,4.89-76.78h231.38A282.54,282.54,0,0,1,1234.33,828Z"/><path class="nona-svg-23" d="M1132.72,524.69c129.08,0,122.89,175.36,114.55,216.86-11.62,57.89-221.58,121-265,7.1,0,0,62.36-25.87,72.22-105.56C1062.77,576.49,1084.63,524.69,1132.72,524.69Z"/><path class="nona-svg-24" d="M1182.44,778.41s58.18-82,53.2-145.66-19.9-86.38-50.11-81.32l-18.89-8.82s38.7-8.51,56,17.88c32.79,50-51.26,181.06-51.26,181.06Z"/><path class="nona-svg-25" d="M1190.16,669.74s-9.3,85.29,74.29,172.08c0,0,1.77,7.83,2.7,13.09s13.17,6.58,20.41-9.34c3.46-7.62-13-11.57-13-11.57s-17.49-50.34-21.29-188.92Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1215.54,725.57c0,1.35-2.57,2.44-5.74,2.44s-5.75-1.09-5.75-2.44,2.57-2.44,5.75-2.44S1215.54,724.22,1215.54,725.57Z"/><path class="e266e20b-d0f6-4fd9-a292-1e8a0efccd52" d="M1253.27,645.08l-63.11,24.66s-1.91,17.84,3.95,45.45c41,3.14,61.32-19.6,61.32-19.6h0C1254.53,680.22,1253.78,663.45,1253.27,645.08Z"/><path class="nona-svg-26" d="M1264.45,684.58c-3.72-71.81-29.9-129-59.26-132.83-54.65-7.07-20,104.36-38.55,127.88,0,0,8.66,26,42.09,26S1264.45,684.58,1264.45,684.58Z"/><path class="nona-svg-27" d="M1189.86,563c-10.34,47.48-15.49,80.43-15.49,142.61s19.08,79.24,0,103.24c-22.11,27.81-83.18,44.81-152.4,25.16-69.79-19.82-40-106-9.27-213.64C1035.09,542.1,1187.85,522.78,1189.86,563Z"/><path class="nona-svg-28" d="M1012.7,620.39c-7.27,25.44-14.41,49.46-20.18,71.64,47.7,23,146.19,15.52,155.41-4.76,10.15-22.33-25.1-134.11,41.93-124.25C1187.85,522.78,1035.09,542.1,1012.7,620.39Z"/><path class="nona-svg-29" d="M1035.35,543.35C1068.57,523,1185.79,519.2,1189.86,563c0,0-22.11-8-37.34,9s-14.19,77.12-12.13,106.53S952,684.8,986,659c0,0,15.76-8.2,26.71-38.62C1019.84,600.56,1001.75,563.92,1035.35,543.35Z"/><path
									class="nona-svg-30"
									d="M1133.66,705.62c.63,11.07-1,22.11-2.89,33s-4.47,21.63-6.73,32.4-4.19,21.59-5.29,32.35a52.6,52.6,0,0,0,.4,16,18.71,18.71,0,0,0,3.11,7.1,15.85,15.85,0,0,0,6.33,4.73l-.1.34a15.59,15.59,0,0,1-7.47-4,20.24,20.24,0,0,1-4.29-7.52c-1.7-5.54-1.78-11.3-1.57-16.89.67-11.23,3.48-22,6.07-32.72s5.44-21.37,7.77-32.12,4.45-21.58,4.3-32.6Z"/><path class="nona-svg-31" d="M1104.55,611.8c-6,29.77,8.35,106.63-18.83,147.37,0,0-16.82-.07-19-13.72,0,0,13.7-11.74,18.47-37.44s5.88-89.55,6-95.85c.08-5.06,8.57-2.77,11.94-1.46A4,4,0,0,1,1104.55,611.8Z"/><path class="nona-svg-32" d="M1103.07,610.5c-6.26,29.43,9.21,105.82-18.64,146.77,0,0-18.92-1.73-21.6-15.72,0,0,15.2-10.48,20.12-35.93s6.71-88.79,6.71-95.12S1103.07,610.5,1103.07,610.5Z"/><path class="nona-svg-32" d="M1035.16,611.36c-8.9,26.64-3.63,95.78-33.15,132.84,0,0-16.74-1.57-17.57-14.23,0,0,14.78-9.48,22-32.52s14.62-81.22,15.33-87c.57-4.62,8.8-1.76,12-.27A3.79,3.79,0,0,1,1035.16,611.36Z"/><path class="nona-svg-33" d="M1033.83,610.23c-8.9,26.64-3.63,95.77-33.15,132.83,0,0-16.74-1.57-17.57-14.22,0,0,14.78-9.49,22-32.52s16-80.35,16.68-86.09S1033.83,610.23,1033.83,610.23Z"/><path
									class="nona-svg-34"
									d="M1222.65,398.94c41.8,36.65-18.6,35.89-18.6,62.87,0,62.94-65.87,27.24-37.41,80.8,24.54,46.18-32.84,63.32-75.45,47.26-42.18-15.91-92.14-55-125.8-43.7-59.58,20-53.13-59.41,17.72-30.39s34.34-55.4,83.61-61.09c49-5.67,49.6-17.31,67.66-38.95C1155.05,391,1191.62,371.72,1222.65,398.94Z"/><path class="nona-svg-28" d="M1632.35,530.28s-12.33-29,16.49-55.17C1648.84,475.11,1667.28,510.31,1632.35,530.28Z"/><path class="nona-svg-28" d="M1800.13,584.11s11-37.32,58.94-39.67C1859.07,544.44,1849.08,592.44,1800.13,584.11Z"/><path class="nona-svg-28" d="M1639.67,592.05s38.49-7.68,63.07,34.05C1702.74,626.1,1655.17,639.67,1639.67,592.05Z"/><path class="nona-svg-28" d="M988.27,279.35s-23.66-11.62-19.73-43.91C968.54,235.44,999.45,247.62,988.27,279.35Z"/><path class="nona-svg-28" d="M897.87,386.39s-7.68-19.6,12-36.49C909.91,349.9,921.54,373.72,897.87,386.39Z"/><path class="nona-svg-28" d="M708.59,207.49s19.31-28.39,60.23-17.41C768.82,190.08,747.46,227.71,708.59,207.49Z"/><path class="nona-svg-28" d="M1515.81,326.13s-32.2-10.95-32.51-52.92C1483.3,273.21,1524.87,283.69,1515.81,326.13Z"/><path class="nona-svg-28" d="M1655.2,229.1s9.61-33.93,55.8-37.24C1711,191.86,1702.64,235.4,1655.2,229.1Z"/></g>
						</g>
					</g>
				</svg>
			</header>
		);
	}
});