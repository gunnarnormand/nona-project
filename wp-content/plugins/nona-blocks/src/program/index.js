const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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

    // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
    edit() {
        return (
            <div className="alignwide">
                <h2 className="program-title">
                    {__("nona winter 2020 program", "nona")}
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
            </div>
        );
    },
    save() {
        return (
            <div className="alignwide">
                <h2 className="program-title">
                    {__("nona winter 2020 program", "nona")}
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
            </div>
        );
    }
});
