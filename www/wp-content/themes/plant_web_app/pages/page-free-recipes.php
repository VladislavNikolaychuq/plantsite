<?php //Template Name: Page free-recipes
get_header();
?>
<!-- site__content -->
<div class="site__content">

    <!-- hero-article -->
    <div class="hero-article">

        <div class="hero-article__wrap article">

            <h1><?=get_field('recipes_tittle');?></h1>

            <p><?= get_field('recipes_description');?></p>

        </div>

        <div class="hero-article__back js-back-picture">
            <img src="<?= DIRECT;?>img/hero-back-index.jpg" alt="img" />
        </div>

    </div>
    <!-- /hero-article -->

    <!-- free-recipes -->
    <section class="free-recipes is-title">

        <!-- free-recipes__categories -->
        <div class="free-recipes__categories">

            <div class="free-recipes__categories-wrap">
                <a href="#" role="radio" class="free-recipes__categories-item" data-id="001">All Recipes</a>
                <a href="#" role="radio" class="free-recipes__categories-item" data-id="002">S.O.S. Free</a>
                <a href="#" role="radio" class="free-recipes__categories-item" data-id="003">Badass Vegan Kitchen</a>
                <a href="#" role="radio" class="free-recipes__categories-item" data-id="004">Quick, Cheap & Easy</a>
                <a href="#" role="radio" class="free-recipes__categories-item" data-id="005">Instant Pot</a>
            </div>

        </div>
        <!-- /free-recipes__categories -->

        <!-- search -->
        <div class="search">

            <!-- search__form -->
            <div class="search__form" data-action="get_recipes_autocomplete">

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

        <!-- free-recipes__catalog -->
        <div class="free-recipes__catalog">
            <ul class="free-recipes__catalog-wrap"></ul>
            <div class="free-recipes__preload">
                <div class="preload__book">
                    <hr/><hr/><hr/>
                </div>
            </div>
        </div>
        <!-- /free-recipes__catalog -->

        <div class="free-recipes__pagination"></div>

    </section>
    <!-- /free-recipes -->

    <!-- recipe-books-promo -->
    <?php get_template_part ('components/content','recipe_global');?>
    <!-- /recipe-books-promo -->

    <!-- loss-story -->
    <?php get_template_part ('components/content','lossstory_global');?>
    <!-- /loss-story -->

    <!-- mobile-app -->
    <?php get_template_part ('components/content','savetime_global');?>
    <!-- /mobile-app -->

    <!-- join-us -->
    <?php get_template_part ('components/content','join_global');?>
    <!-- /join-us -->

    <!-- follow-us -->
    <?php get_template_part ('components/content','follow_global');?>
    <!-- /follow-us -->

</div>
<!-- /site__content -->
