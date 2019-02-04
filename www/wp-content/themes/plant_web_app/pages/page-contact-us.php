<?php //Template Name: Page contact-us
get_header();
?>
<!-- site__content -->
<div class="site__content">

    <!-- contact-us -->
    <div class="contact-us">

        <!--  -->
        <div class="contact-us__wrap">

            <div class="contact-us__text article">

                <h1><?= get_field('title_contact_us');?></h1>

                <p><?= get_field('description_contact_us');?></p>

            </div>

            <div class="contact-us__form">

                <form>

                    <label>
                        <input type="email" placeholder="E-mail" required />
                    </label>

                    <label>
                        <input type="text" placeholder="Name*" required />
                    </label>

                    <label>
                        <input type="text" placeholder="Subject" />
                    </label>

                    <label>
                        <textarea placeholder="Message*" required></textarea>
                    </label>

                    <div class="contact-us__form-note">* - Required</div>

                    <button type="submit" class="btn btn_color-1 btn_type-general"><span>Send</span></button>

                    <div class="wpcf7-validation-errors">Can’t be blank</div>

                </form>

            </div>

        </div>

        <div class="contact-us__back js-back-picture">
            <img src="<?= DIRECT;?>img/contact-us-back.jpg" alt="img" />
        </div>

    </div>
    <!-- /contact-us -->

    <!-- follow-us -->
    <?php get_template_part ('components/content','follow_global');?>
    <!-- /follow-us -->

</div>
<!-- /site__content -->
