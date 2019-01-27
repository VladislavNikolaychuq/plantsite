<?php
define( 'TEMPLATEINC', TEMPLATEPATH . '/inc' );
define( 'TEMPLATEURI', get_template_directory_uri() );
define( 'DIRECT', TEMPLATEURI.'/assets/' );

show_admin_bar( false );

if( function_exists('acf_add_options_page') ) {

//    acf_add_options_page();

    // add parent
    $parent = acf_add_options_page(array(
        'page_title' 	=> 'options',
        'menu_title' 	=> 'option',
        'redirect' 		=> false
    ));


    // add sub page
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Loss story ',
        'menu_title' 	=> 'Loss story',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'cheat sheet ',
        'menu_title' 	=> 'cheat sheet',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Get Free Access',
        'menu_title' 	=> 'Get Free Access',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Success stories ',
        'menu_title' 	=> 'Success stories',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Recipe books ',
        'menu_title' 	=> 'Recipe books ',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Save time and money',
        'menu_title' 	=> 'Save time and money',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Join us',
        'menu_title' 	=> 'Join us',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Follow us',
        'menu_title' 	=> 'Follow us',
        'parent_slug' 	=> $parent['menu_slug'],
    ));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Free recipes',
        'menu_title' 	=> 'Free recipes',
        'parent_slug' 	=> $parent['menu_slug'],
    ));


}

function add_scripts() {
    wp_deregister_script('jquery');
    wp_register_style('preload_css', DIRECT . 'css/preload.css');
    wp_register_style('swiper.min_css', DIRECT . 'css/swiper.min.css');
    wp_register_style('common-css', DIRECT . 'css/common.css');
    wp_register_style('account_css', DIRECT . 'css/account.css');
    wp_register_style('app-page_css', DIRECT . 'css/app-page.css');
    wp_register_style('blog-page_css', DIRECT . 'css/blog-page.css');
    wp_register_style('books-page_css', DIRECT . 'css/books-page.css');
    wp_register_style('recipe-page_css', DIRECT . 'css/recipe-page.css');
    wp_register_style('story-page_css', DIRECT . 'css/story-page.css');


    wp_register_script('main-js', DIRECT . 'js/common.min.js');
    wp_register_script('jquery', DIRECT . 'js/vendors/jquery-3.3.1.min.js');
    wp_register_script('scrollbar.min-js', DIRECT . 'js/vendors/perfect-scrollbar.min.js');
    wp_register_script('swiper-js', DIRECT . 'js/vendors/swiper.min.js');
    wp_register_script('social-js', DIRECT . 'js/vendors/socialShare.js');

    wp_enqueue_style('preload_css');
    wp_enqueue_style('swiper.min_css');
    wp_enqueue_style('common-css');
    wp_enqueue_style('account_css');
    wp_enqueue_style('app-page_css');
    wp_enqueue_style('blog-page_css');
    wp_enqueue_style('books-page_css');
    wp_enqueue_style('recipe-page_css');
    wp_enqueue_style('story-page_css');


    wp_enqueue_script('jquery');
    wp_enqueue_script('main-js');
    wp_enqueue_script('scrollbar.min-js');
    wp_enqueue_script('swiper-js');
    wp_enqueue_script('social-js');





}
add_action( 'wp_enqueue_scripts', 'add_scripts' );