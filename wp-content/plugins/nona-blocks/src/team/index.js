const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.blockEditor;
const { Button, IconButton } = wp.components;

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/team", {
    title: __("Team Member", "nona"),
    icon: 'groups',
    category: "nona",
    attributes: {
        teamImage: {
            type: "string",
            source: "attribute",
            selector: ".team-card-img img",
            attribute: "src",
        },
        teamName: {
            type: "string",
            source: "html",
            selector: ".team-card-name",
        },
        teamRole: {
            type: "string",
            source: "html",
            selector: ".team-card-role",
        },
        teamDesc: {
            type: "string",
            source: "html",
            selector: ".team-card-description",
        },
    },

    // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
    edit: ( props ) => {

        const {
            setAttributes,
            attributes: {
                teamImage, 
                teamName,
                teamRole,
                teamDesc,
            },
        } = props;

        const onTeamImageSelect = teamImageObject => {
            setAttributes({teamImage:teamImageObject.sizes.nonaFeatImg.url});
        };

        const onChangeTeamName = newTeamName => {
            setAttributes({teamName:newTeamName});
        };

        const onChangeTeamRole = newTeamRole => {
            setAttributes({teamRole:newTeamRole});
        };

        const onChangeTeamDesc = newTeamDesc => {
            setAttributes({teamDesc:newTeamDesc});
        };

        return (
            <div className="card">
                <div className="team-card-img">
                    <img src={teamImage} alt="" />
                    <MediaUpload
                        onSelect={onTeamImageSelect}
                        type="image"
                        value={teamImage}
                        render={({open}) => (
                            <IconButton
                                className="team-card-img_button"
                                onClick={open}
                                icon="format-image"
                                showTooltip="true"
                                label={__("Select Image.", "nona")}
                            />
                        )}
                    />
                </div>
                <div className="team-card-info">
                    <h3 className="team-card-name">
                        <RichText 
                            placeholder={__("Team Member Name", "nona")}
                            value={teamName}
                            onChange={onChangeTeamName}
                        />
                    </h3>
                    <h4 className="team-card-role">
                        <RichText 
                            placeholder={__("Role | Title", "nona")}
                            value={teamRole}
                            onChange={onChangeTeamRole}
                        /> 
                    </h4>
                    <p className="team-card-description">
                        <RichText 
                            placeholder={__("Team Member Description", "nona")}
                            value={teamDesc}
                            onChange={onChangeTeamDesc}
                        /> 
                    </p>
                </div>
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div className="card">
                <div className="team-card-img">
                    <img src={props.attributes.teamImage} alt="" />
                </div>
                <div className="team-card-info">
                    <h3 className="team-card-name">
                        <RichText.Content value={props.attributes.teamName} />
                    </h3>
                    <h4 className="team-card-role">
                        <RichText.Content value={props.attributes.teamRole} /> 
                    </h4>
                    <p className="team-card-description">
                        <RichText.Content value={props.attributes.teamDesc} /> 
                    </p>
                </div>
            </div>
        );
    }
});
