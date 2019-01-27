<?php

the_field('options');

$titleLossStory=get_field('title_loss_story','options');
$videoLinkStory=get_field('videolink_story','options');
$firstTextedPart=get_field('first_texted_part','options');
$secondTextedPart=get_field('second_texted_part','options');
$readMore=get_field('read_more','option');
// $sapLeonardo=get_field('sap_leonardo_link','options');
// пример $facebook=get_field('название поля ','название нужного options');
?>
<!-- loss-story -->
<section class="loss-story article">

    <h2><?php echo $titleLossStory ;?></h2>

    <div class="loss-story__video">
        <iframe class="youtube-frame" src="<?php echo $videoLinkStory  ;?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

    <div class="loss-story__text">
        <p><strong><?= $firstTextedPart ;?></strong></p>
        <p><?= $secondTextedPart ;?></p>
    </div>

    <a href="#" class="btn btn_color-1 btn_type-general"><span>Read More</span></a>

</section>
<!-- /loss-story -->

