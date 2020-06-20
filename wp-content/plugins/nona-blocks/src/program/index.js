const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as ProgramSvg1 } from "./program-illustration-1.svg";
import { ReactComponent as ProgramSvg2 } from "./program-illustration-2.svg";
import { ReactComponent as ProgramSvg3 } from "./program-illustration-3.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/program", {
    title: __("Program", "nona"),
    icon: 'feedback',
    category: "nona",
    attributes: {
        programTitle: {
            type: "string",
            source: "html",
            selector: ".program-title",
        },
        buttonText: {
            type: "string",
            source: "text",
            selector: ".register-button",
        },
        cardTitle1: {
            type: "string",
            source: "html",
            selector: ".program-card-title-1",
        },
        cardTitle2: {
            type: "string",
            source: "html",
            selector: ".program-card-title-2",
        },
        cardTitle3: {
            type: "string",
            source: "html",
            selector: ".program-card-title-3",
        },
        cardDesc1: {
            type: "string",
            source: "html",
            selector: ".program-card-description-1",
        },
        cardDesc2: {
            type: "string",
            source: "html",
            selector: ".program-card-description-2",
        },
        cardDesc3: {
            type: "string",
            source: "html",
            selector: ".program-card-description-3",
        },
    },

    // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
    edit: ( props ) => {

        const {
            className,
            attributes: {
                programTitle,
                buttonText,
                cardTitle1,
                cardTitle2,
                cardTitle3,
                cardDesc1,
                cardDesc2,
                cardDesc3,
            },
            setAttributes,
        } = props;
        
        const onChangeProgramTitle = newProgramTitle => {
            setAttributes({programTitle:newProgramTitle});
        };

        const onChangeButtonText = newButtonText => {
            setAttributes({buttonText:newButtonText});
        };

        const onChangeCardTitle1 = newCardTitle1 => {
            setAttributes({cardTitle1:newCardTitle1});
        };

        const onChangeCardTitle2 = newCardTitle2 => {
            setAttributes({cardTitle2:newCardTitle2});
        };

        const onChangeCardTitle3 = newCardTitle3 => {
            setAttributes({cardTitle3:newCardTitle3});
        };

        const onChangeCardDesc1 = newCardDesc1 => {
            setAttributes({cardDesc1:newCardDesc1});
        };

        const onChangeCardDesc2 = newCardDesc2 => {
            setAttributes({cardDesc2:newCardDesc2});
        };

        const onChangeCardDesc3 = newCardDesc3 => {
            setAttributes({cardDesc3:newCardDesc3});
        };

        return (
            <div className={`${className} alignfull`}>
                <h2 className="program-title">
                    <RichText
                        placeholder={__("Enter program title here.", "nona")}
                        value={programTitle}
                        onChange={onChangeProgramTitle}
                    />
                </h2>

                <div className="program-cards">
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-1">
                            <RichText
                                placeholder={__("Enter title text here.", "nona")}
                                value={cardTitle1}
                                onChange={onChangeCardTitle1}
                            />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg1 />
                        </div>
                        <div className="program-card-description program-card-description-1">
                            <p>
                                <RichText
                                    value={cardDesc1}
                                    onChange={onChangeCardDesc1}
                                    placeholder={__("Enter description text here.", "nona")}
                                    keepPlaceholderOnFocus={true}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-2">
                            <RichText
                                placeholder={__("Enter title text here.", "nona")}
                                value={cardTitle2}
                                onChange={onChangeCardTitle2}
                            />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg2 />
                        </div>
                        <div className="program-card-description program-card-description-2">
                            <ul>
                                <RichText
                                    multiline="li"
                                    value={cardDesc2}
                                    onChange={onChangeCardDesc2}
                                    placeholder={ __("Enter list text here.", "nona") }
                                    keepPlaceholderOnFocus={true}
                                />
                            </ul>
                        </div>
                    </div>
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-3">
                            <RichText
                                placeholder={__("Enter title text here.", "nona")}
                                value={cardTitle3}
                                onChange={onChangeCardTitle3}
                            />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg3 />
                        </div>
                        <div className="program-card-description program-card-description-3">
                            <p>
                                <RichText
                                    value={cardDesc3}
                                    onChange={onChangeCardDesc3}
                                    placeholder={__("Enter description text here.", "nona")}
                                    keepPlaceholderOnFocus={true}
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <a href="#" role="button" className="register-button">
                    <RichText
                        placeholder={__("Enter Button Text Here.")}
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                </a>

            </div>
        );
    },
    save: ( props ) => {

        return (
            <div className={`${props.className} alignfull`}>
                <h2 className="program-title">
                    <RichText.Content value={props.attributes.programTitle} />
                </h2>

                <div className="program-cards">
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-1">
                            <RichText.Content value={props.attributes.cardTitle1} />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg1 />
                        </div>
                        <div className="program-card-description">
                            <p>
                                <RichText.Content value={props.attributes.cardDesc1} />
                                {__("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona")}
                            </p>
                        </div>
                    </div>
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-2">
                            <RichText.Content value={props.attributes.cardTitle2} />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg2 />
                        </div>
                        <div className="program-card-description">
                            <ul>
                                <RichText.Content value={props.attributes.cardDesc2} />
                            </ul>
                        </div>
                    </div>
                    <div className="card program-card">
                        <h3 className="program-card-title program-card-title-3">
                            <RichText.Content value={props.attributes.cardTitle3} />
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg3 />
                        </div>
                        <div className="program-card-description">
                            <p>
                                <RichText.Content value={props.attributes.cardDesc3} />
                                {__("The program is between December 5th through December 10th, 2020.", "nona")}
                            </p>
                        </div>
                    </div>
                </div>

                <a href="#" role="button" className="register-button">
                    <RichText.Content value={props.attributes.buttonText} />    
                </a>

            </div>
        );
    }
});
