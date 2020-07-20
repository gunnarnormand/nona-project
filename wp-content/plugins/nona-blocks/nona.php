<?php

/**
 * Plugin Name: Nona Blocks
 * Plugin URI:
 * Description: Custom block plugin.
 * Version: 1.0.0
 * Author: Gunnar Normand
 *
 * @package nona
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load translations (if any) for the plugin from the /languages/ folder.
 * 
 * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
 */
add_action( 'init', 'nona_load_textdomain' );

function nona_load_textdomain() {
	load_plugin_textdomain( 'nona', false, basename( __DIR__ ) . '/languages' );
}

/** 
 * Add custom image size for block featured image.
 * 
 * @link https://developer.wordpress.org/reference/functions/add_image_size/
 */
add_action( 'init', 'nona_add_image_size' );

function nona_add_image_size() {
	add_image_size( 'nonaFeatImg', 300, 300, array( 'center', 'center' ) ); 
}

/** 
 * Register custom image size with sizes list to make it available.
 * 
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/image_size_names_choose
 */
add_filter( 'image_size_names_choose', 'nona_custom_sizes' );

function nona_custom_sizes( $sizes ) {
	return array_merge( $sizes, array(
		'nonaFeatImg' => __('Nona Featured Image'),
	) );
}

/** 
 * Add custom "Nona" block category
 * 
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter( 'block_categories', 'nona_block_categories', 10, 2 );

function nona_block_categories( $categories, $post ) {

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'nona',
				'title' => __( 'Nona', 'nona' ),
				'icon'  => 'admin-site',
			),
		)
	);
}

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action( 'init', 'nona_register_blocks' );

function nona_register_blocks() {

	// If Block Editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Register the block editor script.
	wp_register_script(
		'nona-editor-script',											// label
		plugins_url( 'build/index.js', __FILE__ ),						// script file
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),		// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )		// set version as file last modified time
	);

	// Register the block editor stylesheet.
	wp_register_style(
		'nona-editor-styles',											// label
		plugins_url( 'build/editor.css', __FILE__ ),					// CSS file
		array( 'wp-edit-blocks' ),										// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	// set version as file last modified time
	);

	// Register the front-end stylesheet.
	wp_register_style(
		'nona-front-end-styles',										// label
		plugins_url( 'build/style.css', __FILE__ ),						// CSS file
		array( ),														// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )	// set version as file last modified time
	);

	// Array of block created in this plugin.
	$blocks = [
		'nona/program',
		'nona/team',
		'nona/cta'
	];
	
	// Loop through $blocks and register each block with the same script and styles.
	foreach( $blocks as $block ) {
		register_block_type( $block, array(
			'editor_script' => 'nona-editor-script',					// Calls registered script above
			'editor_style' => 'nona-editor-styles',					// Calls registered stylesheet above
			'style' => 'nona-front-end-styles',						// Calls registered stylesheet above
		) );	  
	}

	if ( function_exists( 'wp_set_script_translations' ) ) {
	/**
	 * Adds internationalization support. 
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/internationalization/
	 * @link https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
	 */
	wp_set_script_translations( 'nona-editor-script', 'nona', plugin_dir_path( __FILE__ ) . '/languages' );
	}

}
