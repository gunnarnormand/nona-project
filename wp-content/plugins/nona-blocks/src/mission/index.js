const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/mission", {
	title: __("Mission Header", "nona"),
	icon: "archive",
	category: "nona",
	attributes: {
		missionTitle: {
			type: "string",
			source: "html",
			selector: ".mission-title"
		},
		missionText: {
			type: "string",
			source: "html",
			selector: ".mission-text"
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
				missionTitle,
				missionText
			},
			setAttributes
		} = props;

		const onChangeMissionTitle = newMissionTitle => {
			setAttributes({missionTitle:newMissionTitle});
		};

		const onChangeMissionText = newMissionText => {
			setAttributes({missionText:newMissionText});
		};

		return (
			<section id="mission" className="mission">

				<h2 className="mission-title">
					<RichText 
						placeholder={__("Our Mission", "nona")}
						value={missionTitle}
						onChange={onChangeMissionTitle}
					/>
				</h2>

				<p className="mission-text">
					<RichText 
						placeholder={__("Our Mission is to mentor and inspire kids so that together we can change our communities.", "nona")}
						value={missionText}
						onChange={onChangeMissionText}
					/>
				</p>

				<svg className="mission-mask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.33 144.15">
					<defs>
						<clipPath id="mission-svg-id" transform="translate(0.33 0.5)">
							<path className="mission-svg" d="M0,127.82S288-80.88,765,35.07s477,23.19,585,0,339,0,570,92.75V143H0Z"/>
						</clipPath>
						<linearGradient id="mission-scg-id-1" x1="960" y1="-0.5" x2="960" y2="143" gradientTransform="translate(1920 142.5) rotate(180)" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#f2ac29"/>
							<stop offset="0.05" stop-color="#f2b137"/>
							<stop offset="0.15" stop-color="#f2be5b"/>
							<stop offset="0.29" stop-color="#f1d395"/>
							<stop offset="0.41" stop-color="#f1e9d2"/>
							<stop offset="0.52" stop-color="#f8f4e9"/>
							<stop offset="0.63" stop-color="#fff"/>
						</linearGradient>
					</defs>
					<g id="a8c157f3-b45f-49d5-b931-425d501ef2d9">
						<g id="ae2d8b4f-721c-4502-896e-cf62e96936c1">
							<g className="mission-svg-1">
								<rect className="mission-svg-2" y="-0.5" width="1920" height="143.5" transform="translate(1920.33 143) rotate(-180)"/>
								<path className="mission-svg-3" d="M-.33,131.87s288-162,765-72,477,18,585,0,339,0,570,72v11.78H-.33Z" transform="translate(0.33 0.5)"/>
							</g>
						</g>
					</g>
				</svg>
			</section>
		);
	},
	save: props => {
		return (
			<section id="mission" className="mission">

				<h2 className="mission-title">
					<RichText.Content 
						value={props.attributes.missionTitle}
					/>
				</h2>

				<p className="mission-text">
					<RichText.Content 
						value={props.attributes.missionText}
					/>
				</p>

				<svg className="mission-mask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.33 144.15">
					<defs>
						<clipPath id="mission-svg-id" transform="translate(0.33 0.5)">
							<path className="mission-svg" d="M0,127.82S288-80.88,765,35.07s477,23.19,585,0,339,0,570,92.75V143H0Z"/>
						</clipPath>
						<linearGradient id="mission-scg-id-1" x1="960" y1="-0.5" x2="960" y2="143" gradientTransform="translate(1920 142.5) rotate(180)" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#f2ac29"/>
							<stop offset="0.05" stop-color="#f2b137"/>
							<stop offset="0.15" stop-color="#f2be5b"/>
							<stop offset="0.29" stop-color="#f1d395"/>
							<stop offset="0.41" stop-color="#f1e9d2"/>
							<stop offset="0.52" stop-color="#f8f4e9"/>
							<stop offset="0.63" stop-color="#fff"/>
						</linearGradient>
					</defs>
					<g id="a8c157f3-b45f-49d5-b931-425d501ef2d9">
						<g id="ae2d8b4f-721c-4502-896e-cf62e96936c1">
							<g className="mission-svg-1">
								<rect className="mission-svg-2" y="-0.5" width="1920" height="143.5" transform="translate(1920.33 143) rotate(-180)"/>
								<path className="mission-svg-3" d="M-.33,131.87s288-162,765-72,477,18,585,0,339,0,570,72v11.78H-.33Z" transform="translate(0.33 0.5)"/>
							</g>
						</g>
					</g>
				</svg>
			</section>
		);
	}
});