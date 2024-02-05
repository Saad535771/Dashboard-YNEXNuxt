export let
    LiveExample = {
        script: `
    &lt;button type="button" class="btn btn-primary btn-wave" id="liveToastBtn">Show live
        toast&lt;/button>
    &lt;div class="toast-container position-fixed top-0 end-0 p-3">
        &lt;div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            &lt;div class="toast-header text-default">
                &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
                    alt="...">
                &lt;strong class="me-auto">Ynex&lt;/strong>
                &lt;small>11 mins ago&lt;/small>
                &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
            &lt;/div>
            &lt;div class="toast-body">
                Hello, world! This is a toast message.
            &lt;/div>
        &lt;/div>
    &lt;/div>` },
    ColorSchemes = {
        script: `
    &lt;div class="toast align-items-center text-bg-primary border-0 fade show mb-4" role="alert"
        aria-live="assertive" aria-atomic="true">
        &lt;div class="d-flex">
            &lt;div class="toast-body">
                Hello, world! This is the Primary toast message.
            &lt;/div>
            &lt;button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                aria-label="Close">&lt;/button>
        &lt;/div>
    &lt;/div>
    &lt;div class="toast align-items-center text-bg-secondary border-0 fade show mb-4" role="alert"
        aria-live="assertive" aria-atomic="true">
        &lt;div class="d-flex">
            &lt;div class="toast-body">
                Hello, world! This is the Secondary toast.
            &lt;/div>
            &lt;button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                aria-label="Close">&lt;/button>
        &lt;/div>
    &lt;/div>
    &lt;div class="toast align-items-center text-bg-success border-0 fade show mb-4" role="alert"
        aria-live="assertive" aria-atomic="true">
        &lt;div class="d-flex">
            &lt;div class="toast-body">
                Hello, world! This is the Success toast message.
            &lt;/div>
            &lt;button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                aria-label="Close">&lt;/button>
        &lt;/div>
    &lt;/div>
    &lt;div class="toast align-items-center text-bg-info border-0 fade show" role="alert" aria-live="assertive"
        aria-atomic="true">
        &lt;div class="d-flex">
            &lt;div class="toast-body">
                Hello, world! This is the info toast message.
            &lt;/div>
            &lt;button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                aria-label="Close">&lt;/button>
        &lt;/div>
    &lt;/div>` },
    BasicExample = {
        script: ` &lt;div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    &lt;div class="toast-header text-default">
        &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
            alt="...">

        &lt;strong class="me-auto">Ynex&lt;/strong>
        &lt;small>11 mins ago&lt;/small>
        &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="toast-body">
        Hello, world! This is a toast message.
    &lt;/div>
&lt;/div>` },
    Stacking = {
        script: `&lt;div class="toast-container position-static">
    &lt;div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        &lt;div class="toast-header text-default">
            &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
                alt="...">

            &lt;strong class="me-auto">Ynex&lt;/strong>
            &lt;small class="text-muted">just now&lt;/small>
            &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
        &lt;/div>
        &lt;div class="toast-body">
            See? Just like this.
        &lt;/div>
    &lt;/div>
    &lt;div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        &lt;div class="toast-header text-default">
            &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
                alt="...">

            &lt;strong class="me-auto">Ynex&lt;/strong>
            &lt;small class="text-muted">2 seconds ago&lt;/small>
            &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
        &lt;/div>
        &lt;div class="toast-body">
            Heads up, toasts will stack automatically
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    Translucent = {
        script: `&lt;div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    &lt;div class="toast-header text-default">
        &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
            alt="...">

        &lt;strong class="me-auto">Ynex&lt;/strong>
        &lt;small class="text-muted">11 mins ago&lt;/small>
        &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="toast-body">
        Hello, world! This is a toast message.
    &lt;/div>
&lt;/div>` },
    CustomContent = {
        script: `&lt;div class="toast align-items-center fade show mb-3" role="alert" aria-live="assertive" aria-atomic="true">
    &lt;div class="d-flex">
        &lt;div class="toast-body">
            Hello, world! This is a toast message.
        &lt;/div>
        &lt;button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
        &lt;/button>
    &lt;/div>
&lt;/div>
&lt;div>
    &lt;span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    &lt;/span>
&lt;/div>
&lt;div class="toast fade show mt-2" role="alert" aria-live="assertive" aria-atomic="true">
    &lt;div class="toast-body">
        Hello, world! This is a toast message.
        &lt;div class="mt-2 pt-2 border-top">
            &lt;button type="button" class="btn btn-primary btn-sm btn-wave me-2">Take
                action&lt;/button>
            &lt;button type="button" class="btn btn-secondary btn-sm btn-wave"
                data-bs-dismiss="toast">Close&lt;/button>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    ToastVariants = {
        script: `&lt;div class="btn-list">
    &lt;button v-on:click="successToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn">success&lt;/button>
    &lt;button v-on:click="warningToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn">warning&lt;/button>
    &lt;button v-on:click="infoToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn">info&lt;/button>
    &lt;button v-on:click="errorToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn">danger&lt;/button>
&lt;/div>` },
    ToastOptions = {
        script: `&lt;div class="btn-list">
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-right', 1000, false, true
    )" type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn">Newest
        on
        Top&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right', 3000, false, false
    )" type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn">Delay&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-right', 1000, true, false
    )" type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn">Close on
        Click&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn">Disable
        Auto
        Close&lt;/button>

    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        false,
        'zoom',
        1000,
        'top-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Show
        ProgressBar&lt;/button>
&lt;/div>` },
    ToastPlacements = {
        script: `&lt;div class="btn-list">
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-left'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn">Top
        Left&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-center'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn">Top
        Center&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn">Top
        Right&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'bottom-left'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn">Bottom
        Left&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'bottom-center'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn">Bottom
        Center&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'bounce',
        1000,
        'bottom-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn">Bottom
        Right&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'flip',
        1000,
        'top-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn">Flip
        Animation&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'slide',
        1000,
        'top-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn">Slide
        Animation&lt;/button>
    &lt;button v-on:click="toster(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Ynex&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        false,
        true,
        'zoom',
        1000,
        'top-right'
    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Zoom
        Animation&lt;/button>
&lt;/div>` },
    AligningToastUsingFlexbox = {
        script: `&lt;div class="bd-example bg-light bd-example-toasts d-flex p-0">
    &lt;div aria-live="polite" aria-atomic="true"
        class="d-flex justify-content-center align-items-center w-100">
        &lt;div class="toast fade show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
            &lt;div class="toast-header text-default">
                &lt;img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico"
                    alt="...">
                &lt;strong class="me-auto">Ynex&lt;/strong>
                &lt;small>11 mins ago&lt;/small>
                &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">&lt;/button>
            &lt;/div>
            &lt;div class="toast-body">
                Hello, world! This is a toast message.
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>` };