<?php //Template Name: Page blog
get_header();
?>
<!-- site__content -->
<div class="site__content">

    <!-- hero-article -->
    <div class="hero-article">

        <div class="hero-article__wrap article">

            <h1><?= get_field('blog_tittle');?></h1>

            <p><?= get_field('blog_description');?></p>

        </div>

        <div class="hero-article__back js-back-picture">
            <img src="<?= DIRECT;?>img/blog-hero-back.jpg" alt="img" />
        </div>

    </div>
    <!-- /hero-article -->

    <!-- categories -->
    <div class="categories">
        <div class="categories__wrap">
            <?php $categories= get_categories();

            foreach   ($categories as $category): ?>
            <a href="#" role="radio" class="categories__item" data-id="<?= $category->term_id;?>"><?= $category->name ?></a>
        <?php endforeach;?>
        </div>


    </div>
    <!-- /categories -->

    <!-- search -->
    <div class="search">

        <!-- search__form -->
        <div class="search__form" data-action="get_posts_autocomplete">

            <input type="text" placeholder="Search here" />
            <button type="submit" class="search__btn-find">
                <svg viewBox="0 0 32 32">
                    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                        <g>
                            <path d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"/>
                        </g>
                    </g>
                </svg>
            </button>

        </div>
        <!-- /search__form -->

        <!-- search__popup -->
        <div class="search__popup">
            <div class="search__popup-scroll-wrap">
                <div class="search__result"></div>
            </div>
            <div class="search__preloader">
                <div class="preload__book">
                    <hr/><hr/><hr/>
                </div>
            </div>
            <div class="search__empty">
                Nothing Found :(
            </div>
        </div>
        <!-- /search__popup -->

    </div>
    <!-- /search -->

    <!-- site__wrap -->
    <div class="site__wrap">

        <!-- site__content-wrap -->
        <div class="site__content-wrap">

            <!-- blog -->
            <div class="blog">

                <h1 class="blog__title">Latest Picks</h1>

                <!-- blog__wrap -->
                <div class="blog__wrap">

                    <!-- blog__list -->
                    <div class="blog__list"></div>
                    <!-- /blog__list -->

                    <div class="blog__preload">
                        <div class="preload__book">
                            <hr/><hr/><hr/>
                        </div>
                    </div>
                    <div class="blog__empty">
                        Nothing Found :(
                    </div>

                </div>
                <!-- /blog__wrap -->

            </div>
            <!-- /blog -->

        </div>
        <!-- /site__content-wrap -->

        <!-- site__aside -->



        <?php get_template_part ('components/content','weightredaction');?>
        <!-- /site__aside -->

    </div>
    <!-- /site__wrap -->

    <!-- follow-us -->
    <?php get_template_part ('components/content','follow_global');?>
    <!-- /follow-us -->

</div>
<!-- /site__content -->

<?php

?>
