<?php
/**
 * WP_Rig\WP_Rig\Front_Page_Content\Component class
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig\Front_Page_Content;

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
		return 'front_page_content';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {
		add_action( 'customize_register', array( $this, 'action_register_hero_customizer_controls' ) );
		add_action( 'customize_register', array( $this, 'action_register_mission_customizer_controls' ) );
		add_action( 'customize_register', array( $this, 'action_register_about_customizer_controls' ) );
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

	/**
	 * Adds a Customizer setting and controls for mission region content.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager instance.
	 */
	public function action_register_mission_customizer_controls( WP_Customize_Manager $wp_customize ) {

		// Register the Customizer mission_title setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'mission_title',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the mission_title setting, using a text field.
		$wp_customize->add_control(
			'mission_title',
			array(
				'label'    => __( 'Mission Title', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'mission_title',
				'type'     => 'text',
			)
		);

		// Register the Customizer mission_textarea setting and ensure its value is sanitized textarea field.
		$wp_customize->add_setting(
			'mission_textarea',
			array(
				'sanitize_callback' => 'sanitize_textarea_field',
			)
		);

		// Register the Customizer control for the mission_textarea setting, using a textarea.
		$wp_customize->add_control(
			'mission_textarea',
			array(
				'label'    => __( 'Mission Text Area Content', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'mission_textarea',
				'type'     => 'textarea',
			)
		);

	}

	/**
	 * Adds a Customizer setting and controls for about region content.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer manager instance.
	 */
	public function action_register_about_customizer_controls( WP_Customize_Manager $wp_customize ) {

		// Register the Customizer first_about_title setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'first_about_title',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the first_about_title setting, using a text field.
		$wp_customize->add_control(
			'first_about_title',
			array(
				'label'    => __( 'First About Title', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'first_about_title',
				'type'     => 'text',
			)
		);

		// Register the Customizer first_about_content setting and ensure its value is sanitized textarea field.
		$wp_customize->add_setting(
			'first_about_content',
			array(
				'sanitize_callback' => 'sanitize_textarea_field',
			)
		);

		// Register the Customizer control for the first_about_content setting, using a textarea.
		$wp_customize->add_control(
			'first_about_content',
			array(
				'label'    => __( 'First About Content', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'first_about_content',
				'type'     => 'textarea',
			)
		);

		// Register the Customizer second_about_title setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'second_about_title',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the second_about_title setting, using a text field.
		$wp_customize->add_control(
			'second_about_title',
			array(
				'label'    => __( 'Second About Title', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'second_about_title',
				'type'     => 'text',
			)
		);

		// Register the Customizer second_about_content setting and ensure its value is sanitized textarea field.
		$wp_customize->add_setting(
			'second_about_content',
			array(
				'sanitize_callback' => 'sanitize_textarea_field',
			)
		);

		// Register the Customizer control for the second_about_content setting, using a textarea.
		$wp_customize->add_control(
			'second_about_content',
			array(
				'label'    => __( 'Second About Content', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'second_about_content',
				'type'     => 'textarea',
			)
		);

		// Register the Customizer third_about_title setting and ensure its value is sanitized text field.
		$wp_customize->add_setting(
			'third_about_title',
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Register the Customizer control for the third_about_title setting, using a text field.
		$wp_customize->add_control(
			'third_about_title',
			array(
				'label'    => __( 'Third About Title', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'third_about_title',
				'type'     => 'text',
			)
		);

		// Register the Customizer third_about_content setting and ensure its value is sanitized textarea field.
		$wp_customize->add_setting(
			'third_about_content',
			array(
				'sanitize_callback' => 'sanitize_textarea_field',
			)
		);

		// Register the Customizer control for the third_about_content setting, using a textarea.
		$wp_customize->add_control(
			'third_about_content',
			array(
				'label'    => __( 'Third About Content', 'wp-rig' ),
				'section'  => 'theme_options',
				'settings' => 'third_about_content',
				'type'     => 'textarea',
			)
		);

	}
}
