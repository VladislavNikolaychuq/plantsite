<?php
the_field('option');
$titleFollow= get_field('title_follow','option')
?>

<!-- follow-us -->
            <section class="follow-us">

                <h2 class="follow-us__title"><?=$titleFollow?></h2>

                <div class="follow-us__wrap">
                    <?php


                    if( have_rows('','options') ):


                        while ( have_rows('','options') ) : the_row(); ?>

                    <a href=" <?php the_sub_field('text_loss','options');  ?>" class="follow-us__item" target="_blank" rel="nofollow">

                        <div class="follow-us__icon">
                            <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-209.000000, -10454.000000)" fill-rule="nonzero">
                                        <g transform="translate(-138.000000, 8602.000000)">
                                            <g transform="translate(265.000000, 1668.000000)">
                                                <g transform="translate(0.000000, 11.000000)">
                                                    <g transform="translate(0.000000, 127.000000)">
                                                        <g transform="translate(52.000000, 46.000000)">
                                                            <g transform="translate(30.000000, 0.000000)">
                                                                <g>
                                                                    <path d="M27.9959831,55.9919662 C12.5342286,55.9919662 0,43.4577377 0,27.9959831 C0,12.5342286 12.5342286,0 27.9959831,0 C43.4577377,0 55.9919662,12.5342286 55.9919662,27.9959831 C55.9919662,43.4577377 43.4577377,55.9919662 27.9959831,55.9919662 Z M42.6463629,22.593519 C42.6463629,20.2465992 40.7450802,18.3443713 38.3994599,18.3443713 L18.4743291,18.3443713 C16.1291814,18.3443713 14.2282532,20.2470717 14.2282532,22.593519 L14.2282532,33.9877468 C14.2282532,36.3346667 16.1295359,38.2368945 18.4743291,38.2368945 L38.3991055,38.2368945 C40.7451983,38.2368945 42.6460084,36.3341941 42.6460084,33.9877468 L42.6460084,22.593519 L42.6463629,22.593519 Z M25.5945992,33.0974177 L25.5945992,22.3955105 L33.7104641,27.7467004 L25.5945992,33.0974177 Z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p>551,993</p>
                        <p>subscribers</p>

                    </a>

                    <?php endwhile;

                    endif;
                    ?>
                </div>

            </section>
            <!-- /follow-us -->