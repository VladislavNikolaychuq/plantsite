<?php
the_field('options');
$titleSuccess= get_field('tittle_success','options')



?>
<!-- success-stories -->
            <section class="success-stories">

                <h2 class="success-stories__title"><?=$titleSuccess?></h2>

                <div class="success-stories__slider swiper-container">

                    <div class="swiper-wrapper">


                        <!-- hero__slide -->
                        <?php


                        if( have_rows('stories','options') ):


                            while ( have_rows('stories','options') ) : the_row(); ?>
                        <div class="success-stories__slide swiper-slide">



                            <div class="success-stories__slide-picture">
                                <img src="<?php echo DIRECT; ?>pic/success-stories-001.png" alt="img" />
                            </div>

                            <dl class="success-stories__slide-text">


                                <dt>    <?php the_sub_field('rebecca_title','options');  ?></dt>

                                <dd>
                                    <p>    <?php the_sub_field('part_story','options');  ?></p>
                                </dd>

                            </dl>


                        </div>
                        <?php endwhile;

                        endif;
                        ?>
                        <!-- /hero__slide -->

                    </div>


                    <div class="success-stories__slider-pagination pagination"></div>

                </div>

            </section>
            <!-- /success-stories -->