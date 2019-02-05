<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">

    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">

    <title>Title</title>

    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <?php wp_head();?>
</head>
<body data-action="<?= admin_url('admin-ajax.php'); ?>">

<div class="preload">
    <div class="preload__book">
        <hr/><hr/><hr/>
    </div>
</div>

<!-- site -->
<div class="site">

    <!-- site__header -->
    <header class="site__header">




        <?php if(is_front_page()){ ?>
            <h1 class="logo">
                <img src="<?php echo DIRECT; ?>img/logo.svg" alt="img" />
            </h1>
        <?php } else { ?>
            <a href="<?php echo get_permalink(2)?>" class="logo">
                <img src="<?php echo DIRECT;?>img/logo.svg" alt="img" />
            </a>
        <?php } ?>



        <div class="site__header-wrap">
            <?php
            $locations= get_nav_menu_locations();

            $menu_items= wp_get_nav_menu_items($locations['menu_header']);
            $currentPageID = get_the_ID();
            ?>

            <?php if(count($menu_items)>0): ?>
            <div class="site__header-layout">



                <!-- menu -->
                <nav class="menu">
                    <ul>




                        <?php  foreach ($menu_items as $menu_item):




                        if($menu_item->object_id == $currentPageID) {
                            $isCurrentPage = 'id="is-current"';
                        } else {
                            $isCurrentPage = '';

                        }



                        ?>


                        <li>
                            <a <?= $isCurrentPage;?> href="<?= $menu_item->url;?>">
                                <?= $menu_item->title; ?>
                            </a>
                        </li>
                <?php endforeach; ?>
                    </ul>
                </nav>


                <a href="#" class="btn btn_color-1"><span>Login</span></a>

                <!-- site__header-fixed -->
                <div class="site__header-fixed">
                    <?php endif;?>


                    <a role="button" class="hamburger">
                        <span></span>
                    </a>

                    <!-- basket -->
                    <a href="#" class="basket">
                        <svg viewBox="0 0 42 35">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(1.000000, 1.000000)" stroke-width="2">
                                    <g>
                                        <g>
                                            <path d="M40.0000523,0 L35.5503972,0 C35.1124661,0 34.7421213,0.325875 34.6869489,0.7596875 L34.1035006,5.4168125 C33.9945351,6.2844375 33.2545351,6.9348125 32.3779834,6.9348125 L2.60901785,6.9348125 C1.77798337,6.9348125 0.998673021,7.3280625 0.506259228,7.9949375 C0.0159144004,8.6618125 -0.128913186,9.521875 0.118673021,10.30975 L2.83660406,18.9784375 C3.17660406,20.065375 4.3759144,20.8044375 5.51729371,20.625 L30.4352247,20.625 C31.3952247,20.8044375 31.7241903,21.7298125 31.7241903,22.6875 C31.7241903,23.6451875 31.3952247,24.2721875 30.4352247,24.75 L6.08694888,24.75" stroke-linecap="round"></path>
                                            <path d="M33.2834483,10.3125 L32.4137931,18.11425" stroke-linecap="round"></path>
                                            <path d="M31.7241379,30.25 C31.7241379,31.769375 30.4889655,33 28.9655172,33 C27.442069,33 26.2068966,31.769375 26.2068966,30.25 C26.2068966,28.732 27.442069,27.5 28.9655172,27.5 C30.4889655,27.5 31.7241379,28.732 31.7241379,30.25 L31.7241379,30.25 Z"></path>
                                            <path d="M12.4137931,30.25 C12.4137931,31.769375 11.1786207,33 9.65517241,33 C8.13172414,33 6.89655172,31.769375 6.89655172,30.25 C6.89655172,28.732 8.13172414,27.5 9.65517241,27.5 C11.1786207,27.5 12.4137931,28.732 12.4137931,30.25 L12.4137931,30.25 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>$69</span>
                    </a>
                    <!-- /basket -->

                </div>
                <!-- /site__header-fixed -->

            </div>
        </div>

    </header>
    <!-- /site__header -->