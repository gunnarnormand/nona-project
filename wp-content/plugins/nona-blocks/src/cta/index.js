const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, URLInputButton } = wp.blockEditor;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as OverlaySvg } from "./overlay.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/cta", {
    title: __("Donate Call to Action", "nona"),
    icon: 'megaphone',
    category: "nona",
    attributes: {
        ctaText: {
            type: "string",
            source: "text",
            selector: ".cta-text",
        },
        ctaButtonText: {
            type: "string",
            source: "text",
            selector: ".cta-button",
        },
        ctaURL: {
            type: "string",
            source: "attribute",
            selector: ".cta-button",
            attribute: "href"
        }
    },

    // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
    edit: (props) => {

        const {
            className,
            attributes: {
                ctaText,
                ctaButtonText,
                ctaURL,
            },
            setAttributes,
        } = props;

        const onChangeCtaText = newCtaText => {
            setAttributes({ ctaText: newCtaText });
        };

        const onChangeCtaButtonText = newCtaButtonText => {
            setAttributes({ ctaButtonText: newCtaButtonText });
        };

        const onChangeCtaURL = newCtaURL => {
            setAttributes({ ctaURL: newCtaURL });
        }

        return (
            <div className={`${className} alignfull`}>
                <OverlaySvg />
                <div className="cta-wrap">
                    <p className="cta-text">
                        <RichText
                            placeholder={__("Enter CTA Text Here.", "nona")}
                            value={ctaText}
                            onChange={onChangeCtaText}
                        />
                    </p>
                    <a href="#" role="button" className="cta-button">
                        <RichText
                            placeholder={__("Enter Button Text Here.")}
                            value={ctaButtonText}
                            onChange={onChangeCtaButtonText}
                        />
                        <URLInputButton
                            className="button-dropdown__input"
                            label={__("Button URL", "nona")}
                            onChange={onChangeCtaURL}
                            url={ctaURL}
                        />
                    </a>
                </div>
            </div>
        );
    },
    save: (props) => {
        return (
            <div className={`${props.attributes.className} alignfull`}>
                <OverlaySvg />
                <div className="cta-wrap">
                    <p className="cta-text">
                        <RichText.Content value={props.attributes.ctaText} />
                    </p>
                    <a href={props.attributes.ctaURL} role="button" className="cta-button">
                        <RichText.Content value={props.attributes.ctaButtonText} />
                    </a>
                </div>
            </div>
        );
    }
});
