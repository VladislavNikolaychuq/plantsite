<?php
function recipes_type() {
    register_post_type( 'recipes',
        array(
            'labels' => array(
                'name' => __( 'recipes' ),
                'singular_name' => __( 'recipes' ),
                'add_new' => 'Add recipe'
            ),
            'public' => true,
            'has_archive' => true,

        )
    );
}
add_action( 'init', 'recipes_type' );
