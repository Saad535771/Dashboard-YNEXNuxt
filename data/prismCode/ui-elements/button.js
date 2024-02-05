export let
    defaultButtons = {
        script: `
    &lt;div class="btn-list">
        &lt;button type="button" class="btn btn-primary btn-wave">Primary&lt;/button>
        &lt;button type="button" class="btn btn-secondary btn-wave">Secondary&lt;/button>
        &lt;button type="button" class="btn btn-success btn-wave">Success&lt;/button>
        &lt;button type="button" class="btn btn-danger btn-wave">Danger&lt;/button>
        &lt;button type="button" class="btn btn-warning btn-wave">Warning&lt;/button>
        &lt;button type="button" class="btn btn-info btn-wave">Info&lt;/button>
        &lt;button type="button" class="btn btn-light btn-wave">Light&lt;/button>
        &lt;button type="button" class="btn btn-dark btn-wave text-white">Dark&lt;/button>
        &lt;button type="button" class="btn btn-link btn-wave">Link&lt;/button>
    &lt;/div>` },
    roundedButtons = {
        script: `
    &lt;button type="button" class="btn btn-primary rounded-pill btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-secondary rounded-pill btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-success rounded-pill btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-danger rounded-pill btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-warning rounded-pill btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-info rounded-pill btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-light rounded-pill btn-wave">Light&lt;/button>
    &lt;button type="button" class="btn btn-dark rounded-pill btn-wave text-white">Dark&lt;/button>
    &lt;button type="button" class="btn btn-link rounded-pill btn-wave">Link&lt;/button>
&lt;/div>` },
    lightButtons = {
        script: `
    &lt;div class="btn-list">
        &lt;button type="button" class="btn btn-primary-light btn-wave">Primary&lt;/button>
        &lt;button type="button" class="btn btn-secondary-light btn-wave">Secondary&lt;/button>
        &lt;button type="button" class="btn btn-success-light btn-wave">Success&lt;/button>
        &lt;button type="button" class="btn btn-danger-light btn-wave">Danger&lt;/button>
        &lt;button type="button" class="btn btn-warning-light btn-wave">Warning&lt;/button>
        &lt;button type="button" class="btn btn-info-light btn-wave">Info&lt;/button>
        &lt;button type="button" class="btn btn-purple-light btn-wave">purple&lt;/button>
        &lt;button type="button" class="btn btn-teal-light btn-wave">teal&lt;/button>
        &lt;button type="button" class="btn btn-orange-light btn-wave">orange&lt;/button>
    &lt;/div>` },
    lightRoundedButtons = {
        script: `
    &lt;div class="btn-list">
        &lt;button type="button" class="btn btn-primary-light rounded-pill btn-wave">Primary&lt;/button>
        &lt;button type="button" class="btn btn-secondary-light rounded-pill btn-wave">Secondary&lt;/button>
        &lt;button type="button" class="btn btn-success-light rounded-pill btn-wave">Success&lt;/button>
        &lt;button type="button" class="btn btn-danger-light rounded-pill btn-wave">Danger&lt;/button>
        &lt;button type="button" class="btn btn-warning-light rounded-pill btn-wave">Warning&lt;/button>
        &lt;button type="button" class="btn btn-info-light rounded-pill btn-wave">Info&lt;/button>
        &lt;button type="button" class="btn btn-purple-light rounded-pill btn-wave">purple&lt;/button>
        &lt;button type="button" class="btn btn-teal-light rounded-pill btn-wave">teal&lt;/button>
        &lt;button type="button" class="btn btn-orange-light rounded-pill btn-wave">orange&lt;/button>
    &lt;/div>` },
    outlineButtons = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-outline-primary btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-outline-secondary btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-outline-success btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-outline-danger btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-outline-warning btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-outline-info btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-outline-light btn-wave">Light&lt;/button>
    &lt;button type="button" class="btn btn-outline-dark btn-wave">Dark&lt;/button>
&lt;/div>` },
    roundedOutlineButtons = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-outline-primary rounded-pill btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-outline-secondary rounded-pill btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-outline-success rounded-pill btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-outline-danger rounded-pill btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-outline-warning rounded-pill btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-outline-info rounded-pill btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-outline-light rounded-pill btn-wave">Light&lt;/button>
    &lt;button type="button" class="btn btn-outline-dark rounded-pill btn-wave">Dark&lt;/button>
&lt;/div>` },
    gradientButtons = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-primary-gradient btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-secondary-gradient btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-success-gradient btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-danger-gradient btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-warning-gradient btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-info-gradient btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-orange-gradient btn-wave">Orange&lt;/button>
    &lt;button type="button" class="btn btn-purple-gradient btn-wave">Purple&lt;/button>
    &lt;button type="button" class="btn btn-teal-gradient btn-wave">Teal&lt;/button>
&lt;/div>` },
    roundedGradientButtons = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-primary-gradient rounded-pill btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-secondary-gradient rounded-pill btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-success-gradient rounded-pill btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-danger-gradient rounded-pill btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-warning-gradient rounded-pill btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-info-gradient rounded-pill btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-orange-gradient rounded-pill btn-wave">Orange&lt;/button>
    &lt;button type="button" class="btn btn-purple-gradient rounded-pill btn-wave">Purple&lt;/button>
    &lt;button type="button" class="btn btn-teal-gradient rounded-pill btn-wave">Teal&lt;/button>
&lt;/div>` },
    ghostButtons = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-primary-ghost btn-wave">Primary&lt;/button>
    &lt;button type="button" class="btn btn-secondary-ghost btn-wave">Secondary&lt;/button>
    &lt;button type="button" class="btn btn-success-ghost btn-wave">Success&lt;/button>
    &lt;button type="button" class="btn btn-danger-ghost btn-wave">Danger&lt;/button>
    &lt;button type="button" class="btn btn-warning-ghost btn-wave">Warning&lt;/button>
    &lt;button type="button" class="btn btn-info-ghost btn-wave">Info&lt;/button>
    &lt;button type="button" class="btn btn-orange-ghost btn-wave">Orange&lt;/button>
    &lt;button type="button" class="btn btn-purple-ghost btn-wave">Purple&lt;/button>
    &lt;button type="button" class="btn btn-teal-ghost btn-wave">Teal&lt;/button>
&lt;/div>` },
    buttonTags = {
        script: `&lt;div class="btn-list">
    &lt;a class="btn btn-primary btn-wave" href="javascript:void(0);" role="button">Link&lt;/a>
    &lt;button class="btn btn-secondary btn-wave" type="submit">Button&lt;/button>
    &lt;input class="btn btn-info" type="button" value="Input">
    &lt;input class="btn btn-warning" type="submit" value="Submit">
    &lt;input class="btn btn-success" type="reset" value="Reset">
&lt;/div>` },
    disabledStateWithAnchorTags = {
        script: `&lt;div class="btn-list">
    &lt;div class="mb-4">
        &lt;button type="button" class="btn btn-primary" disabled>Primary
            button&lt;/button>
        &lt;button type="button" class="btn btn-secondary" disabled>Button&lt;/button>
        &lt;button type="button" class="btn btn-outline-primary" disabled>Primary
            button&lt;/button>
        &lt;button type="button" class="btn btn-outline-secondary" disabled>Button&lt;/button>
    &lt;/div>

    &lt;div>
        &lt;a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary
            link&lt;/a>
        &lt;a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link&lt;/a>
    &lt;/div>
&lt;/div>` },
    buttonPluginToggleStates = {
        script: `&lt;div class="btn-list">
    &lt;div class="mb-4">
        &lt;button type="button" class="btn btn-primary btn-wave" data-bs-toggle="button">Toggle
            button&lt;/button>
        &lt;button type="button" class="btn btn-secondary active btn-wave" data-bs-toggle="button"
            aria-pressed="true">Active toggle button&lt;/button>
        &lt;button type="button" class="btn btn-teal btn-wave" disabled data-bs-toggle="button">Disabled toggle
            button&lt;/button>
    &lt;/div>
    &lt;div>
        &lt;a href="javascript:void(0);" class="btn btn-primary btn-wave" role="button"
            data-bs-toggle="button">Toggle
            link&lt;/a>
        &lt;a href="javascript:void(0);" class="btn btn-secondary active btn-wave" role="button"
            data-bs-toggle="button" aria-pressed="true">Active toggle link&lt;/a>
        &lt;a class="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
            data-bs-toggle="button">Disabled toggle link&lt;/a>
    &lt;/div>
&lt;/div>` },
    linkFunctionallyCaveat = {
        script: `&lt;div class="btn-list">
    &lt;a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary
        link&lt;/a>
    &lt;a class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link&lt;/a>
&lt;/div>` },
    loadingButtons = {
        script: `&lt;div class="btn-list d-md-flex flex-wrap">
    &lt;button class="btn btn-primary btn-loader">
        &lt;span class="me-2">Loading&lt;/span>
        &lt;span class="loading">&lt;i class="ri-loader-2-fill fs-16">&lt;/i>&lt;/span>
    &lt;/button>
    &lt;button class="btn btn-outline-secondary btn-loader">
        &lt;span class="me-2">Loading&lt;/span>
        &lt;span class="loading">&lt;i class="ri-loader-2-fill fs-16">&lt;/i>&lt;/span>
    &lt;/button>
    &lt;button class="btn btn-info-transparent btn-loader">
        &lt;span class="me-2">Loading&lt;/span>
        &lt;span class="loading">&lt;i class="ri-loader-4-line fs-16">&lt;/i>&lt;/span>
    &lt;/button>
    &lt;button class="btn btn-warning-transparent btn-loader">
        &lt;span class="me-2">Loading&lt;/span>
        &lt;span class="loading">&lt;i class="ri-loader-5-line fs-16">&lt;/i>&lt;/span>
    &lt;/button>
    &lt;button class="btn btn-success btn-loader disabled">
        &lt;span class="me-2">Disabled&lt;/span>
        &lt;span class="loading">&lt;i class="ri-refresh-line fs-16">&lt;/i>&lt;/span>
    &lt;/button>
&lt;/div>` },
    iconButtons = {
        script: `&lt;div class="btn-list d-md-flex d-block">
    &lt;div class="mb-md-0 mb-2">
        &lt;button class="btn btn-icon btn-primary btn-wave">
            &lt;i class="ri-bank-fill">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-info btn-wave">
            &lt;i class="ri-medal-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-danger btn-wave">
            &lt;i class="ri-archive-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-warning btn-wave me-5">
            &lt;i class="ri-calendar-2-line">&lt;/i>
        &lt;/button>
    &lt;/div>
    &lt;div class="mb-md-0 mb-2">
        &lt;button class="btn btn-icon btn-primary-transparent rounded-pill btn-wave">
            &lt;i class="ri-home-smile-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-secondary-transparent rounded-pill btn-wave">
            &lt;i class="ri-delete-bin-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-success-transparent rounded-pill btn-wave">
            &lt;i class="ri-notification-3-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-danger-transparent rounded-pill btn-wave me-5">
            &lt;i class="ri-chat-settings-line">&lt;/i>
        &lt;/button>
    &lt;/div>
    &lt;div class="">
        &lt;button class="btn btn-icon btn-outline-primary rounded-pill btn-wave">
            &lt;i class="ri-phone-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-outline-teal rounded-pill btn-wave">
            &lt;i class="ri-customer-service-2-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-outline-success rounded-pill btn-wave">
            &lt;i class="ri-live-line">&lt;/i>
        &lt;/button>
        &lt;button class="btn btn-icon btn-outline-secondary rounded-pill btn-wave">
            &lt;i class="ri-save-line">&lt;/i>
        &lt;/button>
    &lt;/div>
&lt;/div>` },
    socialButtons = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-icon btn-facebook btn-wave">
        &lt;i class="ri-facebook-line">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-icon btn-twitter btn-wave">
        &lt;i class="ri-twitter-line">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-icon btn-instagram btn-wave">
        &lt;i class="ri-instagram-line">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-icon btn-github btn-wave">
        &lt;i class="ri-github-line">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-icon btn-youtube btn-wave">
        &lt;i class="ri-youtube-line">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-icon btn-google btn-wave">
        &lt;i class="ri-google-line">&lt;/i>
    &lt;/button>
&lt;/div>` },
    sizes = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-primary btn-sm btn-wave">Small
        button&lt;/button>
    &lt;button type="button" class="btn btn-secondary btn-wave">Default
        button&lt;/button>
    &lt;button type="button" class="btn btn-success btn-lg btn-wave">Large
        button&lt;/button>
&lt;/div>` },
    buttonWidths = {
        script: `&lt;div class="btn-list">
    &lt;button type="button" class="btn btn-primary btn-w-xs btn-wave">XS&lt;/button>
    &lt;button type="button" class="btn btn-secondary btn-w-sm btn-wave">SM&lt;/button>
    &lt;button type="button" class="btn btn-warning btn-w-md btn-wave">MD&lt;/button>
    &lt;button type="button" class="btn btn-info btn-w-lg btn-wave">LG&lt;/button>
&lt;/div>` },
    buttonsWithDifferentShadows = {
        script: `&lt;div class="btn-list d-flex">
    &lt;div class="me-5">
        &lt;button class="btn btn-primary shadow-sm btn-wave">Button&lt;/button>
        &lt;button class="btn btn-primary shadow btn-wave">Button&lt;/button>
        &lt;button class="btn btn-primary shadow-lg btn-wave">Button&lt;/button>
    &lt;/div>
    &lt;div>
        &lt;button class="btn btn-secondary btn-sm shadow-sm btn-wave">Button&lt;/button>
        &lt;button class="btn btn-info shadow btn-wave">Button&lt;/button>
        &lt;button class="btn btn-lg btn-success shadow-lg btn-wave">Button&lt;/button>
    &lt;/div>
&lt;/div>` },
    differentColoredButtonsWithShadows = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-primary shadow-primary btn-wave">Button&lt;/button>
    &lt;button class="btn btn-secondary shadow-secondary btn-wave">Button&lt;/button>
    &lt;button class="btn btn-success shadow-success btn-wave">Button&lt;/button>
    &lt;button class="btn btn-info shadow-info btn-wave">Button&lt;/button>
    &lt;button class="btn btn-warning shadow-warning btn-wave">Button&lt;/button>
    &lt;button class="btn btn-danger shadow-danger btn-wave">Button&lt;/button>
    &lt;button class="btn btn-purple shadow-purple btn-wave">Button&lt;/button>
    &lt;button class="btn btn-orange shadow-orange btn-wave">Button&lt;/button>
&lt;/div>` },
    raisedButtons = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-primary btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-secondary btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-success btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-info btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-warning btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-danger btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-purple btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-orange btn-raised-shadow btn-wave">Button&lt;/button>
&lt;/div>` },
    labelButtons = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-primary label-btn">
        &lt;i class="ri-chat-smile-line label-btn-icon me-2">&lt;/i>
        Primary
    &lt;/button>
    &lt;button class="btn btn-secondary label-btn">
        &lt;i class="ri-settings-4-line label-btn-icon me-2">&lt;/i>
        Secondary
    &lt;/button>
    &lt;button class="btn btn-warning label-btn rounded-pill">
        &lt;i class="ri-spam-2-line label-btn-icon me-2 rounded-pill">&lt;/i>
        Warning
    &lt;/button>
    &lt;button class="btn btn-info label-btn rounded-pill">
        &lt;i class="ri-phone-line label-btn-icon me-2 rounded-pill">&lt;/i>
        Info
    &lt;/button>
    &lt;button class="btn btn-success label-btn label-end">
        Success
        &lt;i class="ri-thumb-up-line label-btn-icon ms-2">&lt;/i>
    &lt;/button>
    &lt;button class="btn btn-danger label-btn label-end rounded-pill">
        Cancel
        &lt;i class="ri-close-line label-btn-icon ms-2 rounded-pill">&lt;/i>
    &lt;/button>
&lt;/div>` },
    customButtons = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-info custom-button rounded-pill">
        &lt;span class="custom-btn-icons">&lt;i class="ri-twitter-line text-info">&lt;/i>&lt;/span>
        Twitter
    &lt;/button>
    &lt;button class="btn btn-teal-light btn-border-down">Border&lt;/button>
    &lt;button class="btn btn-secondary-light btn-border-start">Border&lt;/button>
    &lt;button class="btn btn-purple-light btn-border-end">Border&lt;/button>
    &lt;button class="btn btn-warning-light btn-border-top">Border&lt;/button>
    &lt;button class="btn btn-secondary btn-glare">&lt;span>Glare Button&lt;/span>&lt;/button>
    &lt;button class="btn btn-danger btn-hover btn-hover-animate">Like&lt;/button>
    &lt;button class="btn btn-success btn-darken-hover">Hover&lt;/button>
    &lt;button class="btn btn-orange btn-custom-border">Hover&lt;/button>
&lt;/div>` },
    blockButtons = {
        script: `&lt;div class="btn-list">
    &lt;div class="d-grid gap-2 mb-4">
        &lt;button class="btn btn-primary btn-wave" type="button">Button&lt;/button>
        &lt;button class="btn btn-secondary btn-wave" type="button">Button&lt;/button>
    &lt;/div>
    &lt;div class="d-grid gap-2 d-md-block">
        &lt;button class="btn btn-info btn-wave" type="button">Button&lt;/button>
        &lt;button class="btn btn-success btn-wave" type="button">Button&lt;/button>
    &lt;/div>
    &lt;div class="d-grid gap-2 col-6 mx-auto">
        &lt;button class="btn btn-danger btn-wave" type="button">Button&lt;/button>
        &lt;button class="btn btn-warning btn-wave" type="button">Button&lt;/button>
    &lt;/div>
    &lt;div class="d-grid gap-2 d-md-flex justify-content-md-end">
        &lt;button class="btn btn-teal me-md-2 btn-wave" type="button">Button&lt;/button>
        &lt;button class="btn btn-purple btn-wave" type="button">Button&lt;/button>
    &lt;/div>
&lt;/div>` };
