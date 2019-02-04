<?php //Template Name: Page terms
get_header();
?>
<!-- site__content -->
<div class="site__content">

    <!-- site__wrap -->
    <div class="site__wrap">

        <!-- site__content-wrap -->
        <div class="site__content-wrap">

            <div class="blog-article article">

  <?=get_field('hch_terms_and_conditions');?>
            </div>
            <!-- /blog-article -->

        </div>
        <!-- /site__content-wrap -->

        <?php get_template_part ('components/content','weightredaction');?>
    </div>
    <!-- /site__wrap -->

    <!-- follow-us -->
    <?php get_template_part ('components/content','follow_global');?>
    <!-- /follow-us -->

</div>
<!-- /site__content -->

