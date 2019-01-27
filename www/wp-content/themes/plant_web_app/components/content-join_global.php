<?php
the_field('options');
$titleJoin= get_field('title_join','options');
$subscribers= get_field('subscribers','options');
$videoChannel= get_field('video_channel','options');
$titleButton= get_field('tittle_button','options')

?>
<!-- join-us -->
<section class="join-us">

    <dl class="join-us__title">
        <dt><h2><?= $titleJoin; ?></h2></dt>
        <dd><?= $subscribers; ?></dd>
    </dl>

    <div class="join-us__swiper swiper-container">

        <div class="swiper-wrapper">
            <?php


            if( have_rows('video_join','options') ):


            while ( have_rows('video_join','options') ) : the_row(); ?>

            <!-- join-us__slide -->
            <a href="#" class="join-us__slide swiper-slide popup__open" data-popup="join-us-video" data-video="<?php the_sub_field('video_youtube');  ?>">
                <img src="<?php the_sub_field('image_join');  ?>" alt="img" />
            </a>
            <!-- /mobile-app__slide -->
            <?php endwhile;

            endif;
            ?>

        </div>

    </div>

    <a href="<?=$videoChannel?>" class="btn btn_color-1"><span>
                    <svg viewBox="0 0 32 32">
                        <g>
                            <path d="M31.67,9.179c0,0-0.312-2.353-1.271-3.389c-1.217-1.358-2.58-1.366-3.205-1.443C22.717,4,16.002,4,16.002,4   h-0.015c0,0-6.715,0-11.191,0.347C4.171,4.424,2.809,4.432,1.591,5.79C0.633,6.826,0.32,9.179,0.32,9.179S0,11.94,0,14.701v2.588   c0,2.763,0.32,5.523,0.32,5.523s0.312,2.352,1.271,3.386c1.218,1.358,2.815,1.317,3.527,1.459C7.677,27.919,15.995,28,15.995,28   s6.722-0.012,11.199-0.355c0.625-0.08,1.988-0.088,3.205-1.446c0.958-1.034,1.271-3.386,1.271-3.386s0.32-2.761,0.32-5.523v-2.588   C31.99,11.94,31.67,9.179,31.67,9.179z" fill="#fff"/>
                            <polygon fill="#9FB93C" points="12,10 12,22 22,16  "/>
                        </g>
                    </svg>
                    <?= $titleButton ?>
                </span></a>

</section>
<!-- /join-us -->