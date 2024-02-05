export let
    basicProgress = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 0%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 25%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="50"
        aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 50%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 75%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-0" role="progressbar" aria-label="Basic example" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 100%">&lt;/div>
    &lt;/div>` },
    differentColoredProgress = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary" style="width: 20%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-warning" style="width: 40%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-info" style="width: 60%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success" style="width: 80%">&lt;/div>
    &lt;/div>
    &lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-danger" style="width: 100%">&lt;/div>
    &lt;/div>` },
    stripedProgress = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped" style="width: 10%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped bg-secondary" style="width: 25%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped bg-success" style="width: 50%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped bg-info" style="width: 75%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped bg-warning" style="width: 100%">&lt;/div>
    &lt;/div>` },
    progressHeight = {
        script: `
    &lt;div class="progress progress-xs mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-primary" style="width: 10%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm mb-3" role="progressbar" aria-valuenow="25" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-primary" style="width: 25%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-primary" style="width: 50%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-lg mb-3" role="progressbar" aria-valuenow="75" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-primary" style="width: 75%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl" role="progressbar" aria-valuenow="100" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-primary" style="width: 100%">&lt;/div>
    &lt;/div>` },
    progressWithLabels = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 10%;">10%&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary" style="width: 20%;">20%&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success" style="width: 40%;">40%&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-info" style="width: 60%;">60%&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-0" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-warning" style="width: 80%;">80%&lt;/div>
    &lt;/div>` },
    multipleBarsWithSizes = {
        script: `
    &lt;div class="progress-stacked progress-xs mb-3">
        &lt;div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0"
            aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-secondary" role="progressbar" style="width: 10%" aria-valuenow="10"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
    &lt;/div>
    &lt;div class="progress-stacked progress-sm mb-3">
        &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-info" role="progressbar" style="width: 15%" aria-valuenow="15"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
    &lt;/div>
    &lt;div class="progress-stacked mb-3">
        &lt;div class="progress-bar bg-info" role="progressbar" style="width: 15%" aria-valuenow="15"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-success" role="progressbar" style="width: 20%" aria-valuenow="20"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100">&lt;/div>
    &lt;/div>
    &lt;div class="progress-stacked progress-lg mb-3">
        &lt;div class="progress-bar bg-purple" role="progressbar" style="width: 20%" aria-valuenow="20"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-teal" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-orange" role="progressbar" style="width: 30%" aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
    &lt;/div>
    &lt;div class="progress-stacked progress-xl mb-0">
        &lt;div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-danger" role="progressbar" style="width: 30%" aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
        &lt;div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35"
            aria-valuemin="0" aria-valuemax="100">&lt;/div>
    &lt;/div>` },
    animatedStrippedProgress = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 10%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style="width: 20%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 40%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width: 60%">
        &lt;/div>
    &lt;/div>
    &lt;div class="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width: 80%">
        &lt;/div>
    &lt;/div>` },
    gradientProgress = {
        script: `
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-primary-gradient" style="width: 10%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary-gradient" style="width: 20%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success-gradient" style="width: 40%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-info-gradient" style="width: 60%">&lt;/div>
    &lt;/div>
    &lt;div class="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-warning-gradient" style="width: 80%">&lt;/div>
    &lt;/div>` },
    customAnimatedProgress = {
        script: `
    &lt;div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="10" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-primary-gradient" style="width: 10%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="20" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary-gradient" style="width: 20%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="40" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-success-gradient" style="width: 40%">&lt;/div>
    &lt;/div>
    &lt;div class="progress mb-3 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-info-gradient" style="width: 60%">&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-bar bg-warning-gradient" style="width: 80%">&lt;/div>
    &lt;/div>` },
    customProgress1 = {
        script: `
    &lt;div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        &lt;h6 class="progress-bar-title">Mobiles&lt;/h6>
        &lt;div class="progress-bar" style="width: 50%">
            &lt;div class="progress-bar-value">50%&lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar"
        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;h6 class="progress-bar-title bg-secondary">Watches&lt;/h6>
        &lt;div class="progress-bar bg-secondary" style="width: 60%">
            &lt;div class="progress-bar-value bg-secondary">60%&lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm progress-custom progress-animate" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100">
        &lt;h6 class="progress-bar-title bg-success">Shirts&lt;/h6>
        &lt;div class="progress-bar bg-success" style="width: 70%">
            &lt;div class="progress-bar-value bg-success">70%&lt;/div>
        &lt;/div>
    &lt;/div>` },
    customProgress2 = {
        script: `
    &lt;div class="progress progress-sm mb-4" role="progressbar" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-item-1 bg-primary">&lt;/div>
        &lt;div class="progress-item-2">&lt;/div>
        &lt;div class="progress-item-3">&lt;/div>
        &lt;div class="progress-bar" style="width: 50%">&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm mb-4" role="progressbar" aria-valuenow="60" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-item-1 bg-secondary">&lt;/div>
        &lt;div class="progress-item-2 bg-secondary">&lt;/div>
        &lt;div class="progress-item-3">&lt;/div>
        &lt;div class="progress-bar bg-secondary" style="width: 60%">&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm mb-4" role="progressbar" aria-valuenow="70" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-item-1 bg-success">&lt;/div>
        &lt;div class="progress-item-2 bg-success">&lt;/div>
        &lt;div class="progress-item-3">&lt;/div>
        &lt;div class="progress-bar bg-success" style="width: 70%">&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm mb-4" role="progressbar" aria-valuenow="80" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-item-1 bg-info">&lt;/div>
        &lt;div class="progress-item-2 bg-info">&lt;/div>
        &lt;div class="progress-item-3 bg-info">&lt;/div>
        &lt;div class="progress-bar bg-info" style="width: 80%">&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-sm" role="progressbar" aria-valuenow="90" aria-valuemin="0"
        aria-valuemax="100">
        &lt;div class="progress-item-1 bg-warning">&lt;/div>
        &lt;div class="progress-item-2 bg-warning">&lt;/div>
        &lt;div class="progress-item-3 bg-warning">&lt;/div>
        &lt;div class="progress-bar bg-warning" style="width: 90%">&lt;/div>
    &lt;/div>` },
    customProgress3 = {
        script: `
    &lt;div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar" style="width: 50%">
            &lt;div class="progress-bar-value">50%&lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar"
        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary" style="width: 60%">
            &lt;div class="progress-bar-value secondary">60%&lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success" style="width: 70%">
            &lt;div class="progress-bar-value success">70%&lt;/div>
        &lt;/div>
    &lt;/div>` },
    customProgress4 = {
        script: `
    &lt;div class="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar"
        aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-primary-gradient" style="width: 10%">&lt;/div>
        &lt;div class="progress-bar-label">10%&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar"
        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-secondary-gradient" style="width: 20%">&lt;/div>
        &lt;div class="progress-bar-label">20%&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-success-gradient" style="width: 40%">&lt;/div>
        &lt;div class="progress-bar-label">40%&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar"
        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-info-gradient" style="width: 60%">&lt;/div>
        &lt;div class="progress-bar-label">60%&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar"
        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-warning-gradient" style="width: 80%">&lt;/div>
        &lt;div class="progress-bar-label">80%&lt;/div>
    &lt;/div>
    &lt;div class="progress progress-xl progress-animate custom-progress-4 danger" role="progressbar"
        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        &lt;div class="progress-bar bg-danger-gradient" style="width: 90%">&lt;/div>
        &lt;div class="progress-bar-label">90%&lt;/div>
    &lt;/div>` },
    customProgress5 = {
        script: `
    &lt;h6 class="fw-semibold mb-2">Project Dependencies&lt;/h6>
    &lt;div class="progress-stacked progress-xl mb-5">
        &lt;div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100">25%&lt;/div>
        &lt;div class="progress-bar bg-secondary" role="progressbar" style="width: 35%" aria-valuenow="35"
            aria-valuemin="0" aria-valuemax="100">35%&lt;/div>
        &lt;div class="progress-bar bg-danger" role="progressbar" style="width: 40%" aria-valuenow="40"
            aria-valuemin="0" aria-valuemax="100">40%&lt;/div>
    &lt;/div>
    &lt;div class="row justify-content-center">
        &lt;div class="col-xl-5">
            &lt;div class="border p-3">
                &lt;p class="fs-12 fw-semibold mb-0 text-muted">Html&lt;span
                        class="float-end fs-10 fw-normal">25%&lt;/span>&lt;/p>
                &lt;div class="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">
                    &lt;div class="progress-bar bg-primary" style="width: 25%">
                    &lt;/div>
                &lt;/div>
                &lt;p class="fs-12 fw-semibold mb-0 text-muted">Css&lt;span
                        class="float-end fs-10 fw-normal">35%&lt;/span>&lt;/p>
                &lt;div class="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="35"
                    aria-valuemin="0" aria-valuemax="100">
                    &lt;div class="progress-bar bg-secondary" style="width: 35%">
                    &lt;/div>
                &lt;/div>
                &lt;p class="fs-12 fw-semibold mb-0 text-muted">Js&lt;span
                        class="float-end fs-10 fw-normal">40%&lt;/span>&lt;/p>
                &lt;div class="progress progress-xs mb-0 progress-animate" role="progressbar" aria-valuenow="40"
                    aria-valuemin="0" aria-valuemax="100">
                    &lt;div class="progress-bar bg-danger" style="width: 40%">
                    &lt;/div>
                &lt;/div>
            &lt;/div>
        &lt;/div>
    &lt;/div>` };