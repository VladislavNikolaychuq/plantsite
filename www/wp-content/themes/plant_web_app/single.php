<?php
get_header();

?>
        <!-- site__content -->
        <div class="site__content">

            <!-- blog-thumbnail -->
            <div class="blog-thumbnail js-back-picture">
                <img src="<?= DIRECT;?>pic/img-007.jpg" alt="img"/>
            </div>
            <!-- /blog-thumbnail -->

            <!-- site__wrap -->
            <div class="site__wrap">

                <!-- site__content-wrap -->
                <div class="site__content-wrap">

                    <!-- blog-article -->
                    <div class="blog-article article">

                        <div class="blog-article__author">By Hannah</div>

                        <h1><?= get_the_title();?></h1>

                       <?= get_field('learn_new_recipes'); ?>
                        <iframe class="youtube-frame" src="https://www.youtube.com/embed/<?= get_field('video_thanksgiving');?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                        <?= get_field('description_learn'); ?>
                        <!-- blog-article__tags -->
                        <div class="blog-article__tags">
                            <p><a href="#">High Carb Hannah</a></p>
                            <p><a href="#">Mommy Tang</a></p>
                        </div>
                        <!-- /blog-article__tags -->

                        <div class="blog__item-share">

                            <a href="#" class="blog__item-share-link s_facebook" rel="nofollow" data-social='{"title": "facebook", "image": "Image", "text": "Text", "url": "Url"}'>
                                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-160.000000, -2933.000000)" fill-rule="nonzero">
                                            <g transform="translate(160.000000, 2933.000000)">
                                                <g>
                                                    <g>
                                                        <path d="M17.87472,0 C8.01864,0 0,8.01864 0,17.87472 C0,27.73008 8.01864,35.74944 17.87472,35.74944 C27.73008,35.74944 35.74944,27.73008 35.74944,17.87472 C35.74944,8.01864 27.73152,0 17.87472,0 Z M22.32,18.504 L19.41192,18.504 C19.41192,23.15016 19.41192,28.86912 19.41192,28.86912 L15.10272,28.86912 C15.10272,28.86912 15.10272,23.2056 15.10272,18.504 L13.05432,18.504 L13.05432,14.84064 L15.10272,14.84064 L15.10272,12.47112 C15.10272,10.77408 15.90912,8.12232 19.45152,8.12232 L22.64472,8.13456 L22.64472,11.69064 C22.64472,11.69064 20.70432,11.69064 20.32704,11.69064 C19.94976,11.69064 19.41336,11.87928 19.41336,12.68856 L19.41336,14.84136 L22.69656,14.84136 L22.32,18.504 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>

                            <a href="#" class="blog__item-share-link s_twitter" rel="nofollow" data-social='{"title": "twittew", "image": "Image", "text": "Text", "url": "Url"}'>
                                <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-931.000000, -10453.000000)" fill-rule="nonzero">
                                            <g transform="translate(-138.000000, 8602.000000)">
                                                <g transform="translate(265.000000, 1668.000000)">
                                                    <g transform="translate(0.000000, 11.000000)">
                                                        <g transform="translate(0.000000, 127.000000)">
                                                            <g transform="translate(774.000000, 45.000000)">
                                                                <g transform="translate(30.000000, 0.000000)">
                                                                    <g>
                                                                        <path d="M27.80512,0 C12.47344,0 0,12.47344 0,27.80512 C0,43.13568 12.47344,55.61024 27.80512,55.61024 C43.13568,55.61024 55.61024,43.13568 55.61024,27.80512 C55.61024,12.47344 43.13792,0 27.80512,0 Z M40.20912,21.44128 C40.22144,21.7168 40.22816,21.99456 40.22816,22.27232 C40.22816,30.72944 33.79264,40.47792 22.01808,40.47792 C18.40384,40.47792 15.03936,39.42176 12.208,37.60512 C12.70864,37.66448 13.21824,37.69472 13.73456,37.69472 C16.73392,37.69472 19.49248,36.67104 21.6832,34.9552 C18.8832,34.90368 16.51888,33.05344 15.70464,30.50992 C16.0944,30.58384 16.49648,30.62528 16.90752,30.62528 C17.49104,30.62528 18.05776,30.54912 18.59424,30.4024 C15.66656,29.81552 13.46128,27.22944 13.46128,24.12704 C13.46128,24.10016 13.46128,24.07216 13.4624,24.0464 C14.3248,24.52464 15.31152,24.8136 16.35984,24.84608 C14.644,23.70032 13.51392,21.74032 13.51392,19.52048 C13.51392,18.34672 13.82864,17.24688 14.37968,16.3016 C17.53472,20.17456 22.25216,22.72144 27.56992,22.99024 C27.46016,22.52096 27.40528,22.03376 27.40528,21.53088 C27.40528,17.99728 30.27024,15.1312 33.80384,15.1312 C35.64512,15.1312 37.30608,15.90848 38.47536,17.15168 C39.93472,16.86496 41.30112,16.33408 42.54096,15.59824 C42.05936,17.09344 41.048,18.34672 39.72304,19.13968 C41.01888,18.98512 42.25536,18.6424 43.39888,18.1328 C42.54544,19.41408 41.46016,20.54192 40.20912,21.44128 Z"></path>
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
                            </a>

                            <a href="#" class="blog__item-share-link s_pinterest" rel="nofollow" data-social='{"title": "pinterest", "image": "Image", "text": "Text", "url": "Url"}'>
                                <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1172.000000, -10454.000000)" fill-rule="nonzero">
                                            <g transform="translate(-138.000000, 8602.000000)">
                                                <g transform="translate(265.000000, 1668.000000)">
                                                    <g transform="translate(0.000000, 11.000000)">
                                                        <g transform="translate(0.000000, 127.000000)">
                                                            <g transform="translate(1015.000000, 46.000000)">
                                                                <g transform="translate(30.000000, 0.000000)">
                                                                    <g>
                                                                        <path d="M28,0 C12.5363137,0 0,12.5363137 0,28 C0,43.4635948 12.5363137,56 28,56 C43.4635948,56 56,43.4635948 56,28 C56,12.5363137 43.4635948,0 28,0 Z M30.576,36.4788758 C28.5065621,36.4788758 26.559281,35.336 25.8898431,34.0377516 C25.8898431,34.0377516 24.7774379,38.5483137 24.540719,39.4188758 C24.1435948,40.8901569 23.3774379,42.3589673 22.6671895,43.5222484 C21.6541569,44.8458431 20.4857516,43.8633725 20.3457516,42.656719 C20.3,41.312719 20.3483137,39.7218431 20.6817516,38.2735294 C21.0508758,36.6852157 23.1483137,27.6055294 23.1483137,27.6055294 C23.1483137,27.6055294 22.5348758,26.3556863 22.5348758,24.5076863 C22.5348758,21.6058431 24.1818431,19.4396863 26.2334379,19.4396863 C27.9770327,19.4396863 28.8195948,20.7786536 28.8195948,22.3796863 C28.8195948,24.1691242 27.7021569,26.8469673 27.1268758,29.3262484 C26.6457516,31.4033725 28.1475948,33.0960915 30.1534379,33.0960915 C33.7857516,33.0960915 36.2345621,28.3309673 36.2345621,22.6876863 C36.2345621,18.3960915 33.4039085,15.1862484 28.2545621,15.1862484 C22.4381569,15.1862484 18.8134379,19.615281 18.8134379,24.5611242 C18.8134379,26.2665621 19.304719,27.4705621 20.0785621,28.3996863 C20.4324052,28.8273725 20.483281,29.0004052 20.3534379,29.4917778 C20.2618431,29.8532157 20.0505621,30.7186536 19.964,31.0622484 C19.836719,31.5586536 19.4421569,31.7343399 19.0043137,31.5510588 C16.324,30.4335294 15.076719,27.4375294 15.076719,24.0724967 C15.076719,18.5106536 19.671281,11.8415294 28.7814379,11.8415294 C36.1021569,11.8415294 40.920719,17.2506536 40.920719,23.0568105 C40.9231895,30.7414379 36.7410327,36.4788758 30.576,36.4788758 Z"></path>
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
                            </a>

                        </div>

                        <time datetime="2017-06-19">Nov 19, 2017</time>

                    </div>
                    <!-- /blog-article -->

                    <!-- about-author -->
                    <div class="about-author">

                        <div class="about-author__photo">
                            <img src="pic/photo-001.jpg" alt="img"/>
                        </div>

                        <div class="about-author__text article">
                            <p><strong>About Derek</strong></p>
                            <p>I have lost over 20 pounds following a whole foods plant based diet over the past 4 years (175-155lbs). I have ridden my bike over 25,000km through 7 countries over the past 4 years and have a passion for living the unconventional life. I have documented my entire journey on my <a href="#">YouTube channel</a>. I love challenging the status quo and inspiring others to think differently.</p>
                        </div>

                    </div>
                    <!-- /about-author -->

                </div>
                <!-- /site__content-wrap -->

                <!-- site__aside -->
                <aside class="site__aside top-null">

                    <!-- app-promo -->
                    <?php get_template_part ('components/content','weightredaction');?>
                    <!-- /app-promo -->

                    <!-- success-stories -->

                                <!-- /hero__slide -->

                                <!-- hero__slide -->
                               
                    <!-- /success-stories -->

                </aside>
                <!-- /site__aside -->

            </div>
            <!-- /site__wrap -->

            <!-- comments-frame -->
            <div class="comments-frame">

            </div>
            <!-- /comments-frame -->

            <!-- follow-us -->
            <?php get_template_part ('components/content','follow_global');?>
            <!-- follow-us -->


        </div>
        <!-- /site__content -->



    <script src="js/vendors/jquery-3.3.1.min.js"></script>
    <script src="js/vendors/swiper.min.js"></script>
    <script src="js/vendors/socialShare.js"></script>
    <script src="js/common.min.js"></script>
</body>
</html>