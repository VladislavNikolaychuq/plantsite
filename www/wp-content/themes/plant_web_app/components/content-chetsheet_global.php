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
                    <svg viewBox="0 0 39 58">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-242.000000, -1027.000000)">
                                <g>
                                    <g transform="translate(196.000000, 1027.000000)">
                                        <g>
                                            <g transform="translate(46.000000, 0.000000)">
                                                <path d="M37.4583333,9.66666667 C37.3870417,9.66666667 37.3858333,9.66666667 5.97641667,13.2904583 C4.00804167,13.256625 2.41666667,11.6435 2.41666667,9.66666667 C2.41666667,7.08445833 2.41666667,6.873 13.427,5.368625 C18.0005417,4.745125 24.26575,3.889625 32.8328333,2.39854167 C33.4901667,2.28495833 33.93,1.65904167 33.8152083,1.0005 C33.701625,0.344375 33.085375,-0.09425 32.4171667,0.018125 C23.8947917,1.50075 17.6561667,2.352625 13.10075,2.97491667 C2.51454167,4.42008333 0,4.76325 0,9.66666667 C0,12.9980417 2.71029167,15.7083333 6.04166667,15.7083333 C6.08758333,15.7083333 6.1335,15.7059167 6.17941667,15.7010833 C6.17941667,15.7010833 30.2445833,12.923125 36.25,12.23075 L36.25,52.0997083 L8.39066667,55.582125 C7.69466667,55.5652083 2.41666667,55.2425833 2.41666667,49.5416667 L2.41666667,19.3333333 C2.41666667,18.6663333 1.87654167,18.125 1.20833333,18.125 C0.540125,18.125 0,18.6663333 0,19.3333333 L0,49.5416667 C0,56.2322083 5.53295833,58 8.45833333,58 C8.507875,58 8.558625,57.9975833 8.60816667,57.9903333 L37.6081667,54.3653333 C38.2123333,54.2904167 38.6666667,53.776875 38.6666667,53.1666667 L38.6666667,10.875 C38.6666667,10.208 38.1265417,9.66666667 37.4583333,9.66666667"></path>
                                                <path d="M6.0523,9.8248375 C6.13084167,10.4338375 6.650425,10.8760875 7.24855,10.8760875 C7.30050833,10.8760875 7.353675,10.8724625 7.40563333,10.8664208 L35.1973,7.24142083 C35.8594667,7.15562917 36.3270917,6.5478375 36.2388833,5.88687917 C36.1530917,5.22350417 35.5308,4.75104583 34.88555,4.84529583 L7.09388333,8.47029583 C6.43171667,8.5560875 5.9653,9.1614625 6.0523,9.8248375"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
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