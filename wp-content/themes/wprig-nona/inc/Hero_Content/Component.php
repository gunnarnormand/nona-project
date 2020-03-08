<?php
/**
 * WP_Rig\WP_Rig\Hero_Content\Component class
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig\Hero_Content;

use WP_Rig\WP_Rig\Component_Interface;
use WP_Customize_Manager;
use function add_action;
use function __;

/**
 * Class for allowing administrators to change hero region content.
 */
class Component implements Component_Interface {

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'hero_content';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {
		add_action( 'customize_register', array( $this, 'action_register_hero_customizer_controls' ) );
	}

	/**
	 * Adds a Customizer setting and controls for custom hero region content.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager instance.
	 */
	public function action_register_hero_customizer_controls( WP_Customize_Manager $wp_customize ) {

		// Register the Customizer hero_subtitle setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'hero_subtitle',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the hero_subtitle setting, using a text field.
		$wp_customize->add_control(
			'hero_subtitle',
			array(
				'label'    => __( 'Hero Subtitle', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'hero_subtitle',
				'type'     => 'text',
			)
		);

		// Register the Customizer hero_textarea setting and ensure its value is sanitized textarea field.
		$wp_customize->add_setting(
			'hero_textarea',
			array(
				'sanitize_callback' => 'sanitize_textarea_field',
			)
		);

		// Register the Customizer control for the hero_textarea setting, using a textarea.
		$wp_customize->add_control(
			'hero_textarea',
			array(
				'label'    => __( 'Hero Text Area Content', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'hero_textarea',
				'type'     => 'textarea',
			)
		);

		// Register the Customizer hero_url setting and ensure its value is a url.
		$wp_customize->add_setting(
			'hero_url',
			array(
				'capability'        => 'edit_theme_options',
				'sanitize_callback' => 'esc_url_raw',
			)
		);

		// Register the Customizer control for the hero_url setting, using a url.
		$wp_customize->add_control(
			'hero_url',
			array(
				'label'    => __( 'Hero URL Link', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'hero_url',
				'type'     => 'url',
			)
		);

		// Register the Customizer hero_url_text setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'hero_url_text',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the hero_url_text setting, using a text field.
		$wp_customize->add_control(
			'hero_url_text',
			array(
				'label'    => __( 'Hero URL Text', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'hero_url_text',
				'type'     => 'text',
			)
		);

	}
}
