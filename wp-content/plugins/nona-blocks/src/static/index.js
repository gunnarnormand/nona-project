const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as Logo } from "./logo.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("nona/static", {
  title: __("Like & Subscribe", "nona"),
  icon: { src: Logo },
  category: "nona",

  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit() {
    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <Logo />
        </figure>
        <div className="podkit-info">
          <h3 className="podkit-title">
            {__("The Binaryville Podcast", "nona")}
          </h3>
          <div className="podkit-cta">
            <a href="#">{__("Like & Subscribe!", "nona")}</a>
          </div>
        </div>
      </div>
    );
  },
  save() {
    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <Logo />
        </figure>
        <div className="podkit-info">
          <h3 className="podkit-title">
            {__("The Binaryville Podcast", "nona")}
          </h3>
          <div className="podkit-cta">
            <a href="/subscribe">{__("Like & Subscribe!", "nona")}</a>
          </div>
        </div>
      </div>
    );
  }
});
