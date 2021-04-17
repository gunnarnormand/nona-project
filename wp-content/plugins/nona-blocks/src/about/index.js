const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/about", {
	title: __("About", "nona"),
	icon: "text-page",
	category: "nona",
	attributes: {
		firstTitle: {
			type: "string",
			source: "html",
			selector: ".first-about-region .about-title"
		},
		firstContent: {
			type: "string",
			source: "html",
			selector: ".first-about-region .about-content"
		},
		secondTitle: {
			type: "string",
			source: "html",
			selector: ".second-about-region .about-title"
		},
		secondContent: {
			type: "string",
			source: "html",
			selector: ".second-about-region .about-content"
		},
		thirdTitle: {
			type: "string",
			source: "html",
			selector: ".third-about-region .about-title"
		},
		thirdContent: {
			type: "string",
			source: "html",
			selector: ".third-about-region .about-content"
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
				firstTitle,
				firstContent,
				secondTitle,
				secondContent,
				thirdTitle,
				thirdContent
			},
			setAttributes
		} = props;

		const onChangeFirstTitle = newFirstTitle => {
			setAttributes({firstTitle:newFirstTitle});
		};

		const onChangeFirstContent = newFirstContent => {
			setAttributes({firstContent:newFirstContent});
		};

		const onChangeSecondTitle = newSecondTitle => {
			setAttributes({secondTitle:newSecondTitle});
		};

		const onChangeSecondContent = newSecondContent => {
			setAttributes({secondContent:newSecondContent});
		};

		const onChangeThirdTitle = newThirdTitle => {
			setAttributes({thirdTitle:newThirdTitle});
		};

		const onChangeThirdContent = newThirdContent => {
			setAttributes({thirdContent:newThirdContent});
		};

		return (
			<section className="about">

				<div className="about-region first-about-region">
					<h2 className="about-title">
						<RichText 
							placeholder={__("WHY NONA EXISTS", "nona")}
							value={firstTitle}
							onChange={onChangeFirstTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText 
							placeholder={__("We want to see the youth of the Apache reservation prosper in life. Our goal is to mentor them into adulthood and be a helping hand when it comes to creating a life based off of their passions.   We hope to plant seeds of hope and ambition to increase prosperity in their lives.", "nona")}
							value={firstContent}
							onChange={onChangeFirstContent}
						/>
					</p>
				</div>

				<div className="about-region second-about-region">
					<h2 className="about-title">
						<RichText 
							placeholder={__("HOW WE STARTED", "nona")}
							value={secondTitle}
							onChange={onChangeSecondTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText 
							placeholder={__("Back in June of 2018 a group of us volunteered at a basketball camp for two weeks in the Apache reservation. We grew an immense bond with the youth there and saw a lot of the hardships that the kids face on a daily basis. We decided that we would create a program that would help enhance the lives of each young person we connected with.", "nona")}
							value={secondContent}
							onChange={onChangeSecondContent}
						/>
					</p>
				</div>

				<div className="about-region third-about-region">
					<h2 className="about-title">
						<RichText 
							placeholder={__("WHAT WE DO", "nona")}
							value={thirdTitle}
							onChange={onChangeThirdTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText 
							placeholder={__("At Nona we work individually with each student to uncover their passions and aspirations. During the week long journey to Orlando we hope to instill a sense of excitement and purpose for their lives. We want to be a resource for their career and life goals. If we can help one kid prosper in their lives then little by little we can help their whole community prosper.", "nona")}
							value={thirdContent}
							onChange={onChangeThirdContent}
						/>
					</p>
				</div>

				<svg className="about-accent about-accent-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.98 1625.63">
					<defs>
						<clipPath id="about-svg-id" transform="translate(-0.02 3.55)"><path className="about-svg" d="M0,0C173.93,43.89,351,110.4,360,208.5c6.37,69.68-78.12,89.53-162,225-107.6,173.76-107.83,366-108,504-.16,131.47.65,141,18,252,15.52,99.24,6.39,243.8-108,437Z"/></clipPath>
						<linearGradient id="about-svg-id-1" x1="184.49" y1="1625.63" x2="184.49" gradientUnits="userSpaceOnUse"><stop offset="0.48" stop-color="#f25430"/><stop offset="1" stop-color="#f2c129"/></linearGradient>
					</defs>
					<g id="aa2ba105-2e60-4b60-a0db-849ba7515a7b">
						<g id="a7621c7c-ce26-4de0-8301-258fa2fbf5a5">
							<g className="about-svg-1"><rect className="about-svg-2" width="368.98" height="1625.63"/></g>
						</g>
					</g>
				</svg>

				<svg className="about-accent about-accent-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 1784">
					<defs>
						<clipPath id="about-svg2-id" transform="translate(0.7 3.03)"><path
							className="about-svg2"
							d="M191.3,1781c-14.12-171.52-60.47-281.77-102-352-46.44-78.55-66.76-106.72-72-171-8.61-105.75,54.57-139.36,90-288,17.25-72.38,19.24-130.87,9-252C92.21,432.9-33,352.15,8.3,204,23,151.27,63.2,74.19,190.25,0Z"/></clipPath>
						<linearGradient id="about-svg2-id-1" x1="96" y1="1784" x2="96" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#286573"/><stop offset="0.26" stop-color="#105d40"/><stop offset="0.74" stop-color="#038c3e"/></linearGradient>
					</defs>
					<g id="a550ca0c-e303-4949-bdb1-9e24610a25f0">
						<g id="bb8aefae-4802-4cec-888c-1bb5489b9357">
							<g className="about-svg2-1"><rect className="about-svg2-2" width="192" height="1784"/></g>
						</g>
					</g>
				</svg>

			</section>
		);
	},
	save: props => {
		return (
			<section className="about">

				<div className="about-region first-about-region">
					<h2 className="about-title">
						<RichText.Content 
							value={props.attributes.firstTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText.Content 
							value={props.attributes.firstContent}
						/>
					</p>
				</div>

				<div className="about-region second-about-region">
					<h2 className="about-title">
						<RichText.Content 
							value={props.attributes.secondTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText.Content 
							value={props.attributes.secondContent}
						/>
					</p>
				</div>

				<div className="about-region third-about-region">
					<h2 className="about-title">
						<RichText.Content 
							value={props.attributes.thirdTitle}
						/>
					</h2>

					<p className="about-content">
						<RichText.Content 
							value={props.attributes.thirdContent}
						/>
					</p>
				</div>

				<svg className="about-accent about-accent-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.98 1625.63">
					<defs>
						<clipPath id="about-svg-id" transform="translate(-0.02 3.55)"><path className="about-svg" d="M0,0C173.93,43.89,351,110.4,360,208.5c6.37,69.68-78.12,89.53-162,225-107.6,173.76-107.83,366-108,504-.16,131.47.65,141,18,252,15.52,99.24,6.39,243.8-108,437Z"/></clipPath>
						<linearGradient id="about-svg-id-1" x1="184.49" y1="1625.63" x2="184.49" gradientUnits="userSpaceOnUse"><stop offset="0.48" stop-color="#f25430"/><stop offset="1" stop-color="#f2c129"/></linearGradient>
					</defs>
					<g id="aa2ba105-2e60-4b60-a0db-849ba7515a7b">
						<g id="a7621c7c-ce26-4de0-8301-258fa2fbf5a5">
							<g className="about-svg-1"><rect className="about-svg-2" width="368.98" height="1625.63"/></g>
						</g>
					</g>
				</svg>

				<svg className="about-accent about-accent-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 1784">
					<defs>
						<clipPath id="about-svg2-id" transform="translate(0.7 3.03)"><path
							className="about-svg2"
							d="M191.3,1781c-14.12-171.52-60.47-281.77-102-352-46.44-78.55-66.76-106.72-72-171-8.61-105.75,54.57-139.36,90-288,17.25-72.38,19.24-130.87,9-252C92.21,432.9-33,352.15,8.3,204,23,151.27,63.2,74.19,190.25,0Z"/></clipPath>
						<linearGradient id="about-svg2-id-1" x1="96" y1="1784" x2="96" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#286573"/><stop offset="0.26" stop-color="#105d40"/><stop offset="0.74" stop-color="#038c3e"/></linearGradient>
					</defs>
					<g id="a550ca0c-e303-4949-bdb1-9e24610a25f0">
						<g id="bb8aefae-4802-4cec-888c-1bb5489b9357">
							<g className="about-svg2-1"><rect className="about-svg2-2" width="192" height="1784"/></g>
						</g>
					</g>
				</svg>

			</section>
		);
	}
});