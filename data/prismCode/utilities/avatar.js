export let

    avatars = {
        script: `
    &lt;span class="avatar me-2 avatar-radius-0">
        &lt;img src="/images/faces/1.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar me-2">
        &lt;img src="/images/faces/2.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar me-2 avatar-rounded">
        &lt;img src="/images/faces/3.jpg" alt="img">
    &lt;/span>` },
    avatarSizes = {
        script: `
    &lt;span class="avatar avatar-xs me-2">
        &lt;img src="/images/faces/4.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-sm me-2">
        &lt;img src="/images/faces/5.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-md me-2">
        &lt;img src="/images/faces/6.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-lg me-2">
        &lt;img src="/images/faces/7.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xl me-2">
        &lt;img src="/images/faces/8.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xxl me-2">
        &lt;img src="/images/faces/9.jpg" alt="img">
    &lt;/span>` },
    avatarWithIcons = {
        script: `
    &lt;span class="avatar avatar-xs me-2 avatar-rounded">
        &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge bg-success rounded-pill avatar-badge">&lt;i
                class="fe fe-camera">&lt;/i>&lt;/a>
    &lt;/span>
    &lt;span class="avatar avatar-sm me-2 avatar-rounded">
        &lt;img src="/images/faces/3.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge rounded-pill bg-secondary avatar-badge">&lt;i
                class="fe fe-edit">&lt;/i>&lt;/a>
    &lt;/span>
    &lt;span class="avatar avatar-md me-2 avatar-rounded">
        &lt;img src="/images/faces/14.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge rounded-pill bg-warning avatar-badge">&lt;i
                class="fe fe-plus">&lt;/i>&lt;/a>
    &lt;/span>
    &lt;span class="avatar avatar-lg me-2 avatar-rounded">
        &lt;img src="/images/faces/13.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge rounded-pill bg-info avatar-badge">&lt;i
                class="fe fe-edit">&lt;/i>&lt;/a>
    &lt;/span>
    &lt;span class="avatar avatar-xl me-2 avatar-rounded">
        &lt;img src="/images/faces/15.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge rounded-pill bg-success avatar-badge">&lt;i
                class="fe fe-camera">&lt;/i>&lt;/a>
    &lt;/span>
    &lt;span class="avatar avatar-xxl me-2 avatar-rounded">
        &lt;img src="/images/faces/9.jpg" alt="img">
        &lt;a href="javascript:void(0);" class="badge rounded-pill bg-danger avatar-badge">&lt;i
                class="fe fe-plus">&lt;/i>&lt;/a>
    &lt;/span>` },
    avatarWithOnlineStatusIndicators = {
        script: `
    &lt;span class="avatar avatar-xs me-2 online avatar-rounded">
        &lt;img src="/images/faces/8.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-sm online me-2 avatar-rounded">
        &lt;img src="/images/faces/10.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-md me-2 online avatar-rounded">
        &lt;img src="/images/faces/12.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-lg me-2 online avatar-rounded">
        &lt;img src="/images/faces/13.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xl me-2 online avatar-rounded">
        &lt;img src="/images/faces/14.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xxl me-2 online avatar-rounded">
        &lt;img src="/images/faces/15.jpg" alt="img">
    &lt;/span>` },
    avatarWithOfflineStatusIndicators = {
        script: `
    &lt;span class="avatar avatar-xs me-2 offline avatar-rounded">
        &lt;img src="/images/faces/2.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-sm offline me-2 avatar-rounded">
        &lt;img src="/images/faces/3.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-md me-2 offline avatar-rounded">
        &lt;img src="/images/faces/4.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-lg me-2 offline avatar-rounded">
        &lt;img src="/images/faces/5.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xl me-2 offline avatar-rounded">
        &lt;img src="/images/faces/6.jpg" alt="img">
    &lt;/span>
    &lt;span class="avatar avatar-xxl me-2 offline avatar-rounded">
        &lt;img src="/images/faces/7.jpg" alt="img">
    &lt;/span>` },
    avatarsWithNumberBadges = {
        script: `
    &lt;span class="avatar avatar-xs me-2 avatar-rounded">
        &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-primary avatar-badge">2&lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-sm me-2 avatar-rounded">
        &lt;img src="/images/faces/3.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-secondary avatar-badge">5&lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-md me-2 avatar-rounded">
        &lt;img src="/images/faces/14.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-warning avatar-badge">1&lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-lg me-2 avatar-rounded">
        &lt;img src="/images/faces/13.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-info avatar-badge">7&lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-xl me-2 avatar-rounded">
        &lt;img src="/images/faces/15.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-success avatar-badge">3&lt;/span>
    &lt;/span>
    &lt;span class="avatar avatar-xxl me-2 avatar-rounded">
        &lt;img src="/images/faces/9.jpg" alt="img">
        &lt;span class="badge rounded-pill bg-danger avatar-badge">9&lt;/span>
    &lt;/span>` },
    avatarWithInitials = {
        script: `
    &lt;span class="avatar avatar-xs m-2 bg-primary">
        xs
    &lt;/span>
    &lt;span class="avatar avatar-sm m-2 bg-secondary">
        SM
    &lt;/span>
    &lt;span class="avatar avatar-md m-2 bg-warning">
        MD
    &lt;/span>
    &lt;span class="avatar avatar-lg m-2 bg-danger">
        LG
    &lt;/span>
    &lt;span class="avatar avatar-xl m-2 bg-success">
        XL
    &lt;/span>
    &lt;span class="avatar avatar-xxl m-2 bg-info">
        XXL
    &lt;/span>` },
    stackedAvatars = {
        script: `
    &lt;div class="avatar-list-stacked">
        &lt;span class="avatar">
            &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar">
            &lt;img src="/images/faces/8.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar">
            &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar">
            &lt;img src="/images/faces/10.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar">
            &lt;img src="/images/faces/4.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar">
            &lt;img src="/images/faces/13.jpg" alt="img">
        &lt;/span>
        &lt;a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
            +8
        &lt;/a>
    &lt;/div>` },
    roundedStackedAvatars = {
        script: `
    &lt;div class="avatar-list-stacked">
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/8.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/2.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/10.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/4.jpg" alt="img">
        &lt;/span>
        &lt;span class="avatar avatar-rounded">
            &lt;img src="/images/faces/13.jpg" alt="img">
        &lt;/span>
        &lt;a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
            +8
        &lt;/a>
    &lt;/div>` };