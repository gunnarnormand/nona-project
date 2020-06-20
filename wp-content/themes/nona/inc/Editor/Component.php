<?php
/**
 * WP_Rig\WP_Rig\Editor\Component class
 *
 * @package nona
 */

namespace WP_Rig\WP_Rig\Editor;

use WP_Rig\WP_Rig\Component_Interface;
use function add_action;
use function add_theme_support;

/**
 * Class for integrating with the block editor.
 *
 * @link https://wordpress.org/gutenberg/handbook/extensibility/theme-support/
 */
class Component implements Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'editor';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {
		add_action( 'after_setup_theme', [ $this, 'action_add_editor_support' ] );
	}

	/**
	 * Adds support for various editor features.
	 */
	public function action_add_editor_support() {
		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Add support for default block styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for wide-aligned images.
		add_theme_support( 'align-wide' );

		/**
		 * Add support for color palettes.
		 *
		 * To preserve color behavior across themes, use these naming conventions:
		 * - Use primary and secondary color for main variations.
		 * - Use `theme-[color-name]` naming standard for standard colors (red, blue, etc).
		 * - Use `custom-[color-name]` for non-standard colors.
		 *
		 * Add the line below to disable the custom color picker in the editor.
		 * add_theme_support( 'disable-custom-colors' );
		 */
		add_theme_support(
			'editor-color-palette',
			[
				[
					'name'  => __( 'Primary', 'nona' ),
					'slug'  => 'theme-primary',
					'color' => '#f25430',
				],
				[
					'name'  => __( 'Secondary', 'nona' ),
					'slug'  => 'theme-secondary',
					'color' => '#57d6f2',
				],
				[
					'name'  => __( 'Green', 'nona' ),
					'slug'  => 'theme-green',
					'color' => '#038e3e',
				],
				[
					'name'  => __( 'Yellow', 'nona' ),
					'slug'  => 'theme-yellow',
					'color' => '#f2ac29',
				],
				[
					'name'  => __( 'Black', 'nona' ),
					'slug'  => 'theme-black',
					'color' => '#1c2833',
				],
				[
					'name'  => __( 'Grey', 'nona' ),
					'slug'  => 'theme-grey',
					'color' => '#95a5a6',
				],
				[
					'name'  => __( 'White', 'nona' ),
					'slug'  => 'theme-white',
					'color' => '#ffffff',
				],
				[
					'name'  => __( 'Ghostwhite', 'nona' ),
					'slug'  => 'theme-ghostwhite',
					'color' => '#f8f8ff',
				],
				[
					'name'  => __( 'Dark Blue', 'nona' ),
					'slug'  => 'custom-dark-blue',
					'color' => '#296573',
				],
			]
		);

		/*
		 * Add support custom font sizes.
		 *
		 * Add the line below to disable the custom color picker in the editor.
		 * add_theme_support( 'disable-custom-font-sizes' );
		 */
		add_theme_support(
			'editor-font-sizes',
			[
				[
					'name'      => __( 'Small', 'nona' ),
					'shortName' => __( 'S', 'nona' ),
					'size'      => 14,
					'slug'      => 'small',
				],
				[
					'name'      => __( 'Regular', 'nona' ),
					'shortName' => __( 'M', 'nona' ),
					'size'      => 16,
					'slug'      => 'medium',
				],
				[
					'name'      => __( 'Medium', 'nona' ),
					'shortName' => __( 'M', 'nona' ),
					'size'      => 20,
					'slug'      => 'medium',
				],
				[
					'name'      => __( 'Large', 'nona' ),
					'shortName' => __( 'L', 'nona' ),
					'size'      => 36,
					'slug'      => 'large',
				],
				[
					'name'      => __( 'Larger', 'nona' ),
					'shortName' => __( 'XL', 'nona' ),
					'size'      => 48,
					'slug'      => 'larger',
				],
			]
		);
	}
}
