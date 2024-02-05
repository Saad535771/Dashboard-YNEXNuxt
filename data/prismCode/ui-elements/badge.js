export let
    badges = {
        script: `
    &lt;span class="badge bg-primary">Primary&lt;/span>
    &lt;span class="badge bg-secondary">Secondary&lt;/span>
    &lt;span class="badge bg-success">Success&lt;/span>
    &lt;span class="badge bg-danger">Danger&lt;/span>
    &lt;span class="badge bg-warning">Warning&lt;/span>
    &lt;span class="badge bg-info">Info&lt;/span>
    &lt;span class="badge bg-light text-dark">Light&lt;/span>
    &lt;span class="badge bg-dark text-white">Dark&lt;/span>` },
    pillBadges = {
        script: `
    &lt;div class="">
        &lt;span class="badge rounded-pill bg-primary">Primary&lt;/span>
        &lt;span class="badge rounded-pill bg-secondary">Secondary&lt;/span>
        &lt;span class="badge rounded-pill bg-success">Success&lt;/span>
        &lt;span class="badge rounded-pill bg-danger">Danger&lt;/span>
        &lt;span class="badge rounded-pill bg-warning">Warning&lt;/span>
        &lt;span class="badge rounded-pill bg-info">Info&lt;/span>
        &lt;span class="badge rounded-pill bg-light text-dark">Light&lt;/span>
        &lt;span class="badge rounded-pill bg-dark text-white">Dark&lt;/span>
    &lt;/div>` },
    lightBadges = {
        script: `
    &lt;span class="badge bg-primary-transparent">Primary&lt;/span>
    &lt;span class="badge bg-secondary-transparent">Secondary&lt;/span>
    &lt;span class="badge bg-success-transparent">Success&lt;/span>
    &lt;span class="badge bg-danger-transparent">Danger&lt;/span>
    &lt;span class="badge bg-warning-transparent">Warning&lt;/span>
    &lt;span class="badge bg-info-transparent">Info&lt;/span>
    &lt;span class="badge bg-light-transparent text-dark">Light&lt;/span>
    &lt;span class="badge bg-dark-transparent">Dark&lt;/span>` },
    lightPillBadges = {
        script: `
    &lt;span class="badge rounded-pill bg-primary-transparent">Primary&lt;/span>
    &lt;span class="badge rounded-pill bg-secondary-transparent">Secondary&lt;/span>
    &lt;span class="badge rounded-pill bg-success-transparent">Success&lt;/span>
    &lt;span class="badge rounded-pill bg-danger-transparent">Danger&lt;/span>
    &lt;span class="badge rounded-pill bg-warning-transparent">Warning&lt;/span>
    &lt;span class="badge rounded-pill bg-info-transparent">Info&lt;/span>
    &lt;span class="badge rounded-pill bg-light-transparent text-dark">Light&lt;/span>
    &lt;span class="badge rounded-pill bg-dark-transparent">Dark&lt;/span>` },
    gradientBadges = {
        script: `
    &lt;span class="badge bg-primary-gradient">Primary&lt;/span>
    &lt;span class="badge bg-secondary-gradient">Secondary&lt;/span>
    &lt;span class="badge bg-success-gradient">Success&lt;/span>
    &lt;span class="badge bg-danger-gradient">Danger&lt;/span>
    &lt;span class="badge bg-warning-gradient">Warning&lt;/span>
    &lt;span class="badge bg-info-gradient">Info&lt;/span>
    &lt;span class="badge bg-orange-gradient">orange&lt;/span>
    &lt;span class="badge bg-purple-gradient">purple&lt;/span>` },
    gradientPillBadges = {
        script: `
    &lt;span class="badge rounded-pill bg-primary-gradient">Primary&lt;/span>
    &lt;span class="badge rounded-pill bg-secondary-gradient">Secondary&lt;/span>
    &lt;span class="badge rounded-pill bg-success-gradient">Success&lt;/span>
    &lt;span class="badge rounded-pill bg-danger-gradient">Danger&lt;/span>
    &lt;span class="badge rounded-pill bg-warning-gradient">Warning&lt;/span>
    &lt;span class="badge rounded-pill bg-info-gradient">Info&lt;/span>
    &lt;span class="badge rounded-pill bg-orange-gradient">orange&lt;/span>
    &lt;span class="badge rounded-pill bg-purple-gradient">purple&lt;/span>` },
    outlineBadges = {
        script: `
    &lt;span class="badge bg-outline-primary">Primary&lt;/span>
    &lt;span class="badge bg-outline-secondary">Secondary&lt;/span>
    &lt;span class="badge bg-outline-success">Success&lt;/span>
    &lt;span class="badge bg-outline-danger">Danger&lt;/span>
    &lt;span class="badge bg-outline-warning">Warning&lt;/span>
    &lt;span class="badge bg-outline-info">Info&lt;/span>
    &lt;span class="badge bg-outline-light text-dark">Light&lt;/span>
    &lt;span class="badge bg-outline-dark">Dark&lt;/span>` },
    outlinePillBadges = {
        script: `
    &lt;span class="badge rounded-pill bg-outline-primary">Primary&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-secondary">Secondary&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-success">Success&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-danger">Danger&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-warning">Warning&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-info">Info&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-light text-dark">Light&lt;/span>
    &lt;span class="badge rounded-pill bg-outline-dark">Dark&lt;/span>` },
    buttonsWithBadges = {
        script: `
    &lt;button type="button" class="btn btn-primary my-1 me-2">
        Notifications &lt;span class="badge ms-2 bg-secondary">4&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-secondary my-1 me-2">
        Notifications &lt;span class="badge ms-2 bg-primary">7&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-success my-1 me-2">
        Notifications &lt;span class="badge ms-2 bg-danger">12&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-info my-1 me-2">
        Notifications &lt;span class="badge ms-2 bg-warning">32&lt;/span>
    &lt;/button>` },
    outlineButtonBadges = {
        script: `
    &lt;button type="button" class="btn btn-outline-primary my-1 me-2">
        Notifications &lt;span class="badge ms-2">4&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-outline-secondary my-1 me-2">
        Notifications &lt;span class="badge ms-2">7&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-outline-success my-1 me-2">
        Notifications &lt;span class="badge ms-2">12&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-outline-info my-1 me-2">
        Notifications &lt;span class="badge ms-2">32&lt;/span>
    &lt;/button>` },
    headings = {
        script: `
    &lt;h1>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h1>
    &lt;h2>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h2>
    &lt;h3>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h3>
    &lt;h4>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h4>
    &lt;h5>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h5>
    &lt;h6>Example heading &lt;span class="badge bg-primary">New&lt;/span>&lt;/h6>` },
    positionedBadges = {
        script: `
    &lt;button type="button" class="btn btn-primary position-relative">
        Inbox &lt;span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+&lt;span class="visually-hidden">unread messages&lt;/span>&lt;/span>
    &lt;/button>
    &lt;button type="button" class="btn btn-secondary position-relative">
        Profile 
        &lt;span class="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">&lt;span class="visually-hidden">New alerts&lt;/span>&lt;/span>
    &lt;/button>
    &lt;span class="avatar">
        &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">&lt;span class="visually-hidden">New alerts&lt;/span>
        &lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-rounded">
        &lt;img src="/images/faces/15.jpg" alt="img">
        &lt;span class="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
            &lt;span class="visually-hidden">New alerts&lt;/span>
        &lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-rounded">
        &lt;img src="/images/faces/10.jpg" alt="img">
        &lt;span class="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
            &lt;span class="visually-hidden">New alerts&lt;/span>
        &lt;/span>
    &lt;/span>` },
    customBadges = {
        script: `
    &lt;div class="d-flex align-items-center gap-5 flex-wrap">
        &lt;div>
            &lt;span class="badge bg-outline-secondary custom-badge fs-15 d-inline-flex align-items-center">&lt;i class="ti ti-flame me-1">&lt;/i>Hot&lt;/span>
        &lt;/div>
        &lt;div>
            &lt;span class="icon-badge">
                &lt;svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    &lt;path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                &lt;/svg>
                &lt;span class="badge rounded-pill bg-success">14&lt;/span>
            &lt;/span>
        &lt;/div>
        &lt;div>
            &lt;span class="badge border bg-light text-default custom-badge">&lt;i class="fe fe-eye me-2 d-inline-block">&lt;/i>13.2k&lt;/span>
        &lt;/div>
        &lt;div>
            &lt;span class="text-badge">
                &lt;span class="text fs-18">Inbox&lt;/span>
                &lt;span class="badge rounded-pill bg-success">32&lt;/span>
            &lt;/span>
        &lt;/div>
    &lt;/div>` };