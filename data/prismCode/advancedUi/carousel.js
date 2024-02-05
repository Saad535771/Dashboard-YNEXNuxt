export let
    slidesOnly = {
        script: `
    &lt;div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        &lt;div class="carousel-inner">
            &lt;div class="carousel-item active">
                &lt;img src="/images/media/media-26.jpg" class="d-block w-100" alt="...">
            &lt;/div>
            &lt;div class="carousel-item">
                &lt;img src="/images/media/media-27.jpg" class="d-block w-100" alt="...">
            &lt;/div>
            &lt;div class="carousel-item">
                &lt;img src="/images/media/media-33.jpg" class="d-block w-100" alt="...">
            &lt;/div>
        &lt;/div>
    &lt;/div>` },
    withControls = {
        script: `
    &lt;div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        &lt;div class="carousel-inner">
            &lt;div class="carousel-item active">
                &lt;img src="/images/media/media-28.jpg" class="d-block w-100" alt="...">
            &lt;/div>
            &lt;div class="carousel-item">
                &lt;img src="/images/media/media-31.jpg" class="d-block w-100" alt="...">
            &lt;/div>
            &lt;div class="carousel-item">
                &lt;img src="/images/media/media-32.jpg" class="d-block w-100" alt="...">
            &lt;/div>
        &lt;/div>
        &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
            &lt;span class="visually-hidden">Previous&lt;/span>
        &lt;/button>
        &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
            &lt;span class="visually-hidden">Next&lt;/span>
        &lt;/button>
    &lt;/div>` },
    withIndicators = {
        script: `&lt;div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    &lt;div class="carousel-indicators">
        &lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3">&lt;/button>
    &lt;/div>
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active">
            &lt;img src="/images/media/media-25.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-29.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-30.jpg" class="d-block w-100" alt="...">
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` },
    withCaptions = {
        script: `&lt;div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    &lt;div class="carousel-indicators">
        &lt;button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3">&lt;/button>
    &lt;/div>
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active">
            &lt;img src="/images/media/media-59.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">First slide label&lt;/h5>
                &lt;p>Some representative placeholder content for the first slide.&lt;/p>
            &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-60.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">Second slide label&lt;/h5>
                &lt;p>Some representative placeholder content for the second slide.&lt;/p>
            &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-61.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">Third slide label&lt;/h5>
                &lt;p>Some representative placeholder content for the third slide.&lt;/p>
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` },
    crossfade = {
        script: `&lt;div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active">
            &lt;img src="/images/media/media-43.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-44.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-45.jpg" class="d-block w-100" alt="...">
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` },
    individualCarouselItemInterval = {
        script: `&lt;div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active" data-bs-interval="10000">
            &lt;img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item" data-bs-interval="2000">
            &lt;img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` },
    disableTouchSwiping = {
        script: `&lt;div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
    data-bs-interval="false">
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active">
            &lt;img src="/images/media/media-13.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-14.jpg" class="d-block w-100" alt="...">
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-18.jpg" class="d-block w-100" alt="...">
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` },
    darkVariant = {
        script: `&lt;div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
    &lt;div class="carousel-indicators">
        &lt;button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2">&lt;/button>
        &lt;button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3">&lt;/button>
    &lt;/div>
    &lt;div class="carousel-inner">
        &lt;div class="carousel-item active" data-bs-interval="10000">
            &lt;img src="/images/media/media-63.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">First slide label&lt;/h5>
                &lt;p class="op-7">Some representative placeholder content for the first slide.&lt;/p>
            &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item" data-bs-interval="2000">
            &lt;img src="/images/media/media-64.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">Second slide label&lt;/h5>
                &lt;p class="op-7">Some representative placeholder content for the second slide.&lt;/p>
            &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item">
            &lt;img src="/images/media/media-62.jpg" class="d-block w-100" alt="...">
            &lt;div class="carousel-caption d-none d-md-block">
                &lt;h5 class="text-fixed-white">Third slide label&lt;/h5>
                &lt;p class="op-7">Some representative placeholder content for the third slide.&lt;/p>
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
        data-bs-slide="prev">
        &lt;span class="carousel-control-prev-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Previous&lt;/span>
    &lt;/button>
    &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
        data-bs-slide="next">
        &lt;span class="carousel-control-next-icon" aria-hidden="true">&lt;/span>
        &lt;span class="visually-hidden">Next&lt;/span>
    &lt;/button>
&lt;/div>` };