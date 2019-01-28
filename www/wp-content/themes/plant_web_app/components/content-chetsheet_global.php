<?php
the_field('options');

$titleCheat=get_field('tittle_cheat','options');
$textedPart=get_field('texted_part','options');
//$=get_field('','options');
?>
<!-- cheat-sheet -->
<section class="cheat-sheet">

    <div class="cheat-sheet__wrap">

        <h2 class="cheat-sheet__title"><?= $titleCheat?></h2>

        <!-- cheat-sheet__layout -->
        <div class="cheat-sheet__layout">

            <div class="cheat-sheet__text article">
                <p><strong><?=$textedPart ?></strong></p>
            </div>

            <div class="cheat-sheet__picture">
                <img src="<?php echo DIRECT; ?>img/cheat-sheet-ipad.png" alt="img" />
                <img src="<?php echo DIRECT; ?>img/cheat-sheet-ipad-shadow.png" alt="img" />
            </div>

        </div>
        <!-- /cheat-sheet__layout -->


        <ul class="cheat-sheet__advantages">
            <?php


            if( have_rows('weight_loss','options') ):


            while ( have_rows('weight_loss','options') ) : the_row(); ?>
            <li>
                <div class="cheat-sheet__advantages-icon">
                    <?php $image= get_sub_field('image_loss');?>
                    <img class="style-svg" src="<?=$image;?> "/>
                </div>
                <?php the_sub_field('text_loss','options');  ?>
            </li>
            <?php endwhile;

            endif;
            ?>
        </ul>

        <!-- access-form -->
        <div class="access-form">

            <div class="access-form__text article">
                <p><strong>Get Free Access</strong></p>
                <p>to the Weight Loss Cheat Sheet and jump start your journey to your optimal weight today</p>
            </div>

            <form>
                <label><input type="email" placeholder="E-mail"></label>
                <label><input type="text" placeholder="Name"></label>
                <button type="submit" class="btn btn_color-1 btn_type-general"><span>Get It Now</span></button>
            </form>

            <div class="access-form__note">We value your privacy and would never spam you</div>

            <img src="<?php echo DIRECT; ?>img/access-form-back.png" alt="img"/>

        </div>
        <!-- /access-form -->

    </div>

    <div class="cheat-sheet__back js-back-picture">
        <img src="<?php echo DIRECT; ?>img/cheat-sheet-back-index.jpg" alt="img" />
    </div>

</section>
<!-- /cheat-sheet -->