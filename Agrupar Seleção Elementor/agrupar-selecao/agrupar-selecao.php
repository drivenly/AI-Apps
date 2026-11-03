<?php
/**
 * Plugin Name: Agrupar Seleção para Elementor
 * Plugin URI: https://github.com/drivenly/AI-Apps
 * Description: Adiciona ao editor do Elementor V4 atalhos para agrupar os elementos selecionados em um Div block (Ctrl+Alt+G) ou em um Flexbox (Shift+A), como no Figma.
 * Version: 1.0.0
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * Requires Plugins: elementor
 * Author: Drivenly
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: agrupar-selecao
 * Elementor tested up to: 4.3.5
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'elementor/editor/after_enqueue_scripts', function () {
	$file = plugin_dir_path( __FILE__ ) . 'agrupar-selecao.js';

	wp_enqueue_script(
		'agrupar-selecao',
		plugins_url( 'agrupar-selecao.js', __FILE__ ),
		[ 'elementor-editor' ],
		(string) filemtime( $file ),
		true
	);
} );
