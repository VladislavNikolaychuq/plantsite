<?php


add_action('wp_ajax_get_posts_by_category','get_posts_by_category');
add_action('wp_ajax_nopriv_get_posts_by_category','get_posts_by_category');

function get_posts_by_category(){

    $page=$_POST['page'];
    $taxId=$_POST['taxId']    ;

    $parameters= array(
        'paged'=> $page,
        'post_type'=> 'post',
        'fields'=> 'ids',
        'posts_per_page'=> 6,
        'tax_query'=> array(
        array(
            'taxonomy'=> 'category',
            'field'=> 'term_id',
            'terms'=> $taxId
))
);
    $postsQuery = new WP_Query($parameters);
    $posts = [];


    foreach ($postsQuery->posts as $postID) {

        $tags = wp_get_post_categories($postID);
        if (!is_null($tags)) {

            if (in_array($taxId, $tags)) {
                $tagsID = $taxId;

            } else {
                $tagsID = null;
            }

        } else {
            $tagsID = null;

        }
        if (!is_null($tagsID)) {
            $tagTitle = get_category($tagsID)->name;
        } else {
            $tagTitle = '';


        }
        $newiItem = array(
            'link' => get_permalink($postID),
            'title' => get_the_title($postID),
            'content' => get_field('preview_text', $postID),
            'author' => "Hannah",
            'tag' => $tagTitle,
            'date' => get_field('date_of_creation', $postID),
            'image' => get_field('preview_image',$postID)

        );

        $posts[] = $newiItem;
    }
    $output=[
        "maxPages"=> $postsQuery -> max_num_pages,
        "blog"=> $posts


    ];
    $result = json_encode($output);

    echo $result;

    exit;



    }

//    $response= ' {
//  "maxPages": 4,
//  "blog": [
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "'.$page.'",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    },
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "Recipe 1",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    },
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "Recipe 1",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    },
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "Recipe 1",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    },
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "Recipe 1",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    },
//    {
//      "link": "#",
//      "image": "img/blog-hero-back.jpg",
//      "title": "Recipe 1",
//      "content": "This Thanksgiving I wanted to give you a number of healthy recipes that are easy to make and create for yourself and your family. I made the mashed potatoes, cornbread, pumpkin pie balls and vegetable gravy from scratch but I used…",
//      "author": "Hannah",
//      "tag": "Recent News",
//      "date": "2017-11-30"
//    }
//  ]
//}';
//
//   echo $response;
//   exit;
//
//
//}
//
