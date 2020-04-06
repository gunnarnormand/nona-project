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
    icon: 'carrot',
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
        }
    },


    // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
    edit: ( props ) => {

        console.info(props);

        const {
            className,
            attributes: {
                programTitle,
                buttonText,
            },
            setAttributes,
        } = props;
        
        const onChangeProgramTitle = newProgramTitle => {
            setAttributes({programTitle:newProgramTitle});
        };

        const onChangeButtonText = newButtonText => {
            setAttributes({buttonText:newButtonText});
        };

        return (
            <div className={`${className} alignfull`}>
                <h2 className="program-title">
                    <RichText
                        placeholder={__("nona winter 2020 program", "nona")}
                        value={programTitle}
                        onChange={onChangeProgramTitle}
                    />
                </h2>

                <div className="program-cards">
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What is the NONA Experience?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg1 />
                        </div>
                        <div className="program-card-description">
                            <p>
                                {__("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona")}
                            </p>
                        </div>
                    </div>
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What are the requirements to apply?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg2 />
                        </div>
                        <div className="program-card-description">
                            <ul>
                                <li>{__("Must be between the ages of 14-17 years old.", "nona")}</li>
                                <li>{__("Minimum 3.0 GPA. Must submit proof in application.", "nona")}</li>
                                <li>{__("Volunteered at least 15 hours at the Kennel.", "nona")}</li>
                                <li>{__("Have a teacher or parent write a letter of recommendation.", "nona")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What is the date of the program?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg3 />
                        </div>
                        <div className="program-card-description">
                            <p>
                                {__("The program is between December 5th through December 10th, 2020.", "nona")}
                            </p>
                        </div>
                    </div>
                </div>

                <a href="#" role="button" className="register-button">
                    <RichText
                        placeholder={__("Register Now")}
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
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What is the NONA Experience?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg1 />
                        </div>
                        <div className="program-card-description">
                            <p>
                                {__("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona")}
                            </p>
                        </div>
                    </div>
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What are the requirements to apply?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg2 />
                        </div>
                        <div className="program-card-description">
                            <ul>
                                <li>{__("Must be between the ages of 14-17 years old.", "nona")}</li>
                                <li>{__("Minimum 3.0 GPA. Must submit proof in application.", "nona")}</li>
                                <li>{__("Volunteered at least 15 hours at the Kennel.", "nona")}</li>
                                <li>{__("Have a teacher or parent write a letter of recommendation.", "nona")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="program-card">
                        <h3 className="program-card-title">
                            {__("What is the date of the program?", "nona")}
                        </h3>
                        <div className="program-card-illustration">
                            <ProgramSvg3 />
                        </div>
                        <div className="program-card-description">
                            <p>
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
