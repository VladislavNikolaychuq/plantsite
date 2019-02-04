<?php //Template Name: Page my-story
$full_fields_story=get_field('full_fields_story');

//$=get_field('');
//$=get_field('');
//$=get_field('');





get_header();
?>
<!-- site__content -->
<div class="site__content">

    <!-- hero-story -->
    <div class="hero-story">

        <!-- hero-story__wrap -->
        <div class="hero-story__wrap">

            <div class="hero-story__picture js-back-picture">
                <img src="<?= get_field('weight_loss_image');?>" alt="img" />
            </div>

            <!-- hero-story__content -->
            <div class="hero-story__content article">

                <h1><?= get_field('weight_loss_tittle');?></h1>

                <p><?= get_field('weight_loss_description');?></p>

            </div>
            <!-- /hero-story__content -->

        </div>
        <!-- /hero-story__wrap -->

        <div class="hero-story__back js-back-picture">
            <img src="<?= DIRECT;?>img/hero-back-index.jpg" alt="img" />
        </div>

    </div>
    <!-- /hero-story -->

    <!-- about-me -->
    <div class="about-me">

        <div class="about-me__item">

            <div class="about-me__text article">

                <svg viewBox="0 0 201 79.6"  xmlns="http://www.w3.org/2000/svg">
                    <g style="opacity:.8">
                        <g transform="translate(-221.000000, -1211.000000)">
                            <path style="fill:#4A4A4A;" class="st1" d="M278.1,1217.8c-1.2,0.9-1.8,1.4-1.9,1.4c-0.5,0.5-0.9,1.2-1.2,2c-1.6,4.2-2.6,15.7-2.9,34.5
                                c2.6,0.6,4,1.5,4,2.6c0,0.7-0.3,1.6-1,2.5c-0.7,0.3-1.8,0.7-3.2,1.3c0,3.2,0.4,8,1.1,14.2c0.1,0.4,0.4,1.5,1.1,3.3
                                c0.5,1.5,0.8,2.5,0.8,3.1c0,0.9-0.3,1.8-1,2.6s-1.4,1.3-2.3,1.3c-2,0-3.3-1.5-4.1-4.4c-0.1-0.4-0.4-2.7-0.9-7
                                c-0.5-4.3-0.8-7.1-0.8-8.3c0-1.3,0.1-2.6,0.3-3.7c-4.5,0.1-9.9,0.7-16.1,1.9c-5.3,1-10.6,2.1-15.8,3.2l-2,2
                                c0.1,2.8,0.1,5.6,0.1,8.5c0.3,4.3,1,7.1,2.1,8.4c-0.3,1-0.8,1.4-1.4,1.4c-0.6,0-1.4,0.2-2.2,0.5c-0.8,0.3-1.5,0.5-1.9,0.5
                                c-1.4,0-2.3-2.8-2.6-8.2c-0.1-3.4-0.3-6.9-0.3-10.3l-0.8-1.1l-0.4,0.1c-1,0-1.8-0.3-2.6-0.8c-0.8-0.6-1.2-1.3-1.2-2.1
                                c0-0.6,0.3-1.4,1-2.5s1.3-1.6,2-1.6c0.1,0,0.3,0,0.6,0.1c0.3,0.1,0.5,0.1,0.6,0.1l0.6-0.1c0.1-3.2,0.1-9.7,0.1-19.4
                                c0-12.8,0.9-21.6,2.6-26.2c0.8-2,2.1-3,4-3c1.2,0,2.3,0.4,3.4,1.2c1.1,0.8,1.6,1.7,1.6,2.9c0,0.4-0.3,1.4-1,3
                                c-0.7,1.8-1.1,2.9-1.2,3.2c-2,7-3,17.7-3,31.9c0,3.3,0.6,4.9,1.9,4.9c0.4,0,2.3-0.4,5.8-1.1c7.9-1.5,13.2-2.2,15.8-2.2
                                c0.7,0,1.8-0.2,3.4-0.6s3.1-0.6,4.6-0.6c1.5,0,2.2-1,2.1-3.1l-0.2-9.7c-0.1-6.2,0.1-12.5,0.9-18.7c1.1-9.8,3.1-14.7,5.9-14.7
                                c1.5,0,2.8,0.8,4,2.3C277.5,1214.7,278,1216.2,278.1,1217.8z M318.3,1276.4c0,3.2-2.2,6.1-6.5,8.7c-3.9,2.3-7.6,3.5-11,3.5
                                c-9.8,0-14.7-6.2-14.7-18.7c0-5.5,1-11.4,3-17.7c2.6-8.2,6-12.3,10.1-12.3c3.5,0,7.4,1.8,11.5,5.3c4.2,3.6,6.3,7.1,6.3,10.6
                                c0,4.5-1.8,8.5-5.5,11.9c-3.7,3.4-7.8,5.1-12.4,5.1c-0.4,0-1.4-0.4-2.8-1.1c-1.4-0.7-2.4-1.1-2.9-1.1c-1,0-1.4,0.3-1.4,0.9
                                c0,8.4,2.8,12.7,8.4,12.7c2.9,0,5.5-1,7.9-2.9c1.5-1.1,3.1-2.8,4.8-5.2c1.4-1.8,2.3-2.8,2.8-2.8
                                C317.5,1273.4,318.3,1274.4,318.3,1276.4z M310.7,1256.2c0-2.6-0.7-5-2.2-7.2s-3.4-3.4-5.8-3.4c-2.9,0-5.3,1.8-7.1,5.5
                                c-1.5,3.1-2.3,6.3-2.3,9.6c0,2.1,0.7,3.9,2,5.3c1.4,1.4,3.1,2.1,5.2,2.1c3,0,5.5-1.3,7.5-3.8
                                C309.8,1262,310.7,1259.3,310.7,1256.2z M334.4,1286.2c0,1.9-1,2.9-3.1,2.9c-3.2,0-4.8-6.6-4.7-19.9l0.3-49.4c0-0.8-0.1-2-0.3-3.5
                                s-0.3-2.6-0.3-3.4c1.4-1,2.6-1.5,3.5-1.5c1,0,2.1,0.4,3.1,1.1c1,0.7,1.5,1.6,1.5,2.6c0,0.7-0.2,1.7-0.5,2.9
                                c-0.4,1.5-0.7,2.4-0.8,2.8c-0.9,5-1.3,12-1.3,20.9c0,14.4,0,21.4-0.1,20.9c0.2,9,0.8,15.8,1.8,20.3c0,0.2,0.2,0.7,0.5,1.5
                                C334.3,1285.2,334.4,1285.8,334.4,1286.2z M352,1286.2c0,1.9-1,2.9-3.1,2.9c-3.2,0-4.8-6.6-4.7-19.9l0.3-49.4c0-0.8-0.1-2-0.3-3.5
                                s-0.3-2.6-0.3-3.4c1.4-1,2.6-1.5,3.5-1.5c1,0,2.1,0.4,3.1,1.1c1,0.7,1.5,1.6,1.5,2.6c0,0.7-0.2,1.7-0.6,2.9
                                c-0.4,1.5-0.7,2.4-0.8,2.8c-0.9,5-1.3,12-1.3,20.9c0,14.4,0,21.4-0.1,20.9c0.2,9,0.8,15.8,1.8,20.3c0,0.2,0.2,0.7,0.5,1.5
                                C351.8,1285.2,352,1285.8,352,1286.2z M395.4,1265.7c0,6.3-1.4,11.8-4.2,16.5c-3.3,5.6-7.9,8.5-13.8,8.5c-5.9,0-10.4-2.3-13.3-6.9
                                c-2.4-3.8-3.6-8.9-3.6-15.2c0-6.2,1.4-12.4,4.2-18.4c3.5-7.4,8-11.1,13.4-11.1c1.4,0,3.4,0.8,5.9,2.4
                                C391.6,1246.2,395.4,1254.2,395.4,1265.7z M390.1,1265.6c0-4.7-0.6-8.9-1.9-12.7c-1.8-5.2-4.7-7.8-8.5-7.8
                                c-4.4,0-7.8,2.9-10.3,8.7c-1.9,4.5-2.9,9.3-2.9,14.4c0,4.6,0.7,8.5,2,11.7c1.9,4.3,4.9,6.5,8.9,6.5c4.4,0,7.7-2.5,10-7.5
                                C389.2,1275,390.1,1270.5,390.1,1265.6z M422,1215.5c-0.4,0.6-1,1.6-1.6,3c-2.9,10.6-4.8,22.1-5.5,34.8c0,0.4-0.1,1.2-0.3,2.4
                                c-0.2,1.1-0.3,2-0.3,2.7c0,0.9,0.6,3.7,1.8,8.4c-0.3,0.3-0.8,0.7-1.5,1.3c-0.3,0.1-0.8,0.1-1.6,0.1c-1,0-1.8-0.1-2.4-0.4
                                c-0.7-1.5-1.1-4.1-1.1-7.9v-1.1l3.2-38.3c0-0.3-0.2-1.2-0.7-2.7c-0.4-1.5-0.7-2.3-0.8-2.5c1.7-1.5,3.6-2.2,5.6-2.2
                                C418.5,1213,420.3,1213.8,422,1215.5z M418.6,1281c0,5.1-2.8,7.6-8.5,7.6c-1,0-3-0.7-5.8-2c-0.6-1.1-0.9-2.3-0.9-3.6
                                c0-2.2,0.6-3.7,1.9-4.4c0.9-0.6,2.4-0.9,4.6-0.9C415.7,1277.7,418.6,1278.8,418.6,1281z"/>
                        </g>
                    </g>
                </svg>

                <p><?php echo $full_fields_story[0]['full_tittles_my_story']?></p>


            </div>

            <div class="about-me__picture">
                <img src="<?= DIRECT;?>img/about-me-001.jpg" alt="about me"/>
            </div>

        </div>

        <div class="about-me__item">

            <div class="about-me__text article">
                <?php echo $full_fields_story[0]['full_description_my_story']?>
            </div>

            <div class="about-me__picture">
                <img src="<?= DIRECT;?>img/about-me-002.jpg" alt="about me"/>
            </div>

        </div>

        <div class="about-me__item">

            <img src="<?= DIRECT;?>pic/img-014.jpg" alt="img"/>

            <div class="about-me__text article">

                <blockquote>
                    <?php echo $full_fields_story[1]['full_tittles_my_story']?>
                </blockquote>
                <?php echo $full_fields_story[1]['full_description_my_story']?>


            </div>

        </div>

        <div class="about-me__item">

            <div class="about-me__picture">
                <img src="<?= DIRECT;?>img/about-me-003.jpg" alt="about me"/>
            </div>

            <div class="about-me__text article">

                <blockquote>
                    <?php echo $full_fields_story[2]['full_tittles_my_story']?>
                </blockquote>
                <?php echo $full_fields_story[2]['full_description_my_story']?>
            </div>

        </div>

        <div class="about-me__item">

            <div class="about-me__text article">

                <h2><?= get_field('watch_video_tittle')?></h2>

                <div class="about-me__video">
                    <iframe class="youtube-frame" src="https://www.youtube.com/embed/<?= get_field('watch_video');?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>

                <?= get_field('watch_video_description');?>
            </div>

        </div>

    </div>
    <!-- /about-me -->

    <!-- cheat-sheet -->
    <?php get_template_part ('components/content','chetsheet_global');?>
    <!-- /cheat-sheet -->

    <!-- join-us -->
    <?php get_template_part ('components/content','join_global');?>
    <!-- /join-us -->

    <!-- follow-us -->
    <?php get_template_part ('components/content','follow_global');?>
    <!-- /follow-us -->

</div>
<!-- /site__content -->

