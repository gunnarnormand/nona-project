<?php
/**
 * WP_Rig\WP_Rig\Archive_Content\Component class
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig\Archive_Content;

use WP_Rig\WP_Rig\Component_Interface;
use WP_Customize_Manager;
use function add_action;
use function __;

/**
 * Class for allowing administrators to decide whether to display content or excerpt in archives.
 */
class Component implements Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'archive_content';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {
		add_action( 'customize_register', array( $this, 'action_register_customizer_control' ) );
	}

	/**
	 * Adds a Customizer setting and control for toggling usage of `the_content()` or `the_excerpt()` in archives.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager instance.
	 */
	public function action_register_customizer_control( WP_Customize_Manager $wp_customize ) {
		// Register the Customizer setting and ensure its value is a boolean.
		$wp_customize->add_setting(
			'archives_use_excerpt',
			array(
				'default'           => false,
				'sanitize_callback' => 'rest_sanitize_boolean',
			)
		);

		// Register the Customizer control for the setting, using a checkbox.
		$wp_customize->add_control(
			'archives_use_excerpt',
			array(
				'label'   => __( 'Use excerpts in archive views?', 'wp-rig' ),
				'section' => 'theme_options',
				'type'    => 'checkbox',
			)
		);
	}
}
