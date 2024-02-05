export let
    dropdowns = {
        script: `
    &lt;div class="btn-list d-flex align-items-center flex-wrap">
        &lt;div class="dropdown">
            &lt;button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="dropdown">
            &lt;a class="btn btn-secondary dropdown-toggle" href="javascript:void(0);" role="button"
                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
            &lt;/a>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    singleDropdownButtons = {
        script: `
    &lt;div class="btn-` },
    roundedButtonDropdowns = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-primary dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-secondary dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-success dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-info dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-warning dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-danger dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    outlineButtonDropdowns = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    roundedOutlineDropdowns = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    splitButtons = {
        script: `
    &lt;!-- Example split danger button -->
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-primary">Action&lt;/button>
        &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-secondary">Action&lt;/button>
        &lt;button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-info">Action&lt;/button>
        &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-success">Action&lt;/button>
        &lt;button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-warning">Action&lt;/button>
        &lt;button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button type="button" class="btn btn-danger">Action&lt;/button>
        &lt;button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropdownSizing = {
        script: `
    &lt;div class="btn-group my-1 me-2">
        &lt;button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Large button
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1 me-2">
        &lt;button class="btn btn-light btn-lg" type="button">
            Large split button
        &lt;/button>
        &lt;button type="button" class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;!-- samll button groups (default and split) -->
    &lt;div class="btn-group my-1 me-2">
        &lt;button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Small button
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group my-1">
        &lt;button class="btn btn-light btn-sm" type="button">
            Small split button
        &lt;/button>
        &lt;button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropup = {
        script: `
    &lt;div class="btn-group dropup mx-1">
        &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropup
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group dropup mx-1">
        &lt;button type="button" class="btn btn-info">
            Split dropup
        &lt;/button>
        &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropupRight = {
        script: `
    &lt;div class="btn-group dropend mx-1">
        &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropright
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group dropend mx-1">
        &lt;button type="button" class="btn btn-info">
            Split dropend
        &lt;/button>
        &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown" aria-expanded="false">
            &lt;span class="visually-hidden">Toggle Dropright&lt;/span>
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropupLeft = {
        script: `
    &lt;div class="btn-group dropstart mx-1">
        &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropleft
        &lt;/button>
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>
    &lt;div class="btn-group">
        &lt;div class="btn-group dropstart my-1" role="group">
            &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
                &lt;span class="visually-hidden">Toggle Dropstart&lt;/span>
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;button type="button" class="btn btn-info my-1">
            Split dropleft
        &lt;/button>
    &lt;/div>` },
    active = {
        script: `
    &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        Dropstart
    &lt;/button>
    &lt;ul class="dropdown-menu">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Regular link&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
                link&lt;/a>
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another link&lt;/a>&lt;/li>
    &lt;/ul>` },
    disabled = {
        script: `
    &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        Dropstart
    &lt;/button>
    &lt;ul class="dropdown-menu">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Regular link&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item disabled" href="javascript:void(0);" aria-current="true">Active
                link&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another link&lt;/a>&lt;/li>
    &lt;/ul>` },
    autoCloseBehavior = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown"
                data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                Default dropdown
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
                data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                Clickable outside
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside"
                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Clickable inside
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuClickable"
                data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                Manual close
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    dropdownsWithForms = {
        script: `
    &lt;button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
        aria-expanded="false">
        Dropdown
    &lt;/button>
    &lt;div class="dropdown-menu">
        &lt;form class="px-4 py-3">
            &lt;div class="mb-3">
                &lt;label for="exampleDropdownFormEmail1" class="form-label">Email
                    address&lt;/label>
                &lt;input type="email" class="form-control" id="exampleDropdownFormEmail1"
                    placeholder="email@example.com">
            &lt;/div>
            &lt;div class="mb-3">
                &lt;label for="exampleDropdownFormPassword1" class="form-label">Password&lt;/label>
                &lt;input type="password" class="form-control" id="exampleDropdownFormPassword1"
                    placeholder="Password">
            &lt;/div>
            &lt;div class="mb-3">
                &lt;div class="form-check">
                    &lt;input type="checkbox" class="form-check-input" id="dropdownCheck">
                    &lt;label class="form-check-label" for="dropdownCheck">
                        Remember me
                    &lt;/label>
                &lt;/div>
            &lt;/div>
            &lt;button class="btn btn-primary">Sign in&lt;/button>
        &lt;/form>
        &lt;div class="dropdown-divider">&lt;/div>
        &lt;a class="dropdown-item" href="javascript:void(0);">New around here? Sign up&lt;/a>
        &lt;a class="dropdown-item" href="javascript:void(0);">Forgot password?&lt;/a>
    &lt;/div>` },
    dropdownMenuCentered = {
        script: `
    &lt;p class="card-title mb-3">Use &lt;code>.dropdown-center&lt;/code> on the parent element.
    &lt;/p>
    &lt;div class="dropdown-center">
        &lt;button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn"
            data-bs-toggle="dropdown" aria-expanded="false">
            Centered dropdown
        &lt;/button>
        &lt;ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action two&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropupCentered = {
        script: `
    &lt;p class="card-title mb-3">Use &lt;code>.dropup-center&lt;/code>
        on the parent element.
    &lt;/p>
    &lt;div class="dropup-center dropup">
        &lt;button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn"
            data-bs-toggle="dropdown" aria-expanded="false">
            Centered dropup
        &lt;/button>
        &lt;ul class="dropdown-menu" aria-labelledby="dropupCenterBtn">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action two&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action three&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    menuItems = {
        script: `
    &lt;p class="card-title mb-3">You can use &lt;code>&lt;a&gt;&lt;/code> or &lt;code>&lt;button&gt;&lt;/code>
        as
        dropdown items.&lt;/p>
    &lt;div class="dropdown">
        &lt;button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown
        &lt;/button>
        &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            &lt;li>&lt;button class="dropdown-item" type="button">Action&lt;/button>&lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Another action&lt;/button>
            &lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Something else
                    here&lt;/button>
            &lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropdownsOptions = {
        script: `
    &lt;p class="card-title mb-3">Use &lt;code>data-bs-offset&lt;/code> or &lt;code>data-bs-reference&lt;/code>
        to
        change
        the location of the dropdown.&lt;/p>
    &lt;div class="d-flex align-items-center">
        &lt;div class="dropdown me-1">
            &lt;button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset"
                data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                Offset
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-info">Reference&lt;/button>
            &lt;button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-reference="parent">
                &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    alignmentOptions = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-secondary dropdown-toggle mb-0" data-bs-toggle="dropdown"
                aria-expanded="false">
                Right-aligned menu
            &lt;/button>
            &lt;ul class="dropdown-menu dropdown-menu-end">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown"
                data-bs-display="static" aria-expanded="false">
                Left-aligned, right-aligned lg
            &lt;/button>
            &lt;ul class="dropdown-menu dropdown-menu-lg-end">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-warning dropdown-toggle mb-0" data-bs-toggle="dropdown"
                data-bs-display="static" aria-expanded="false">
                Right-aligned, left-aligned lg
            &lt;/button>
            &lt;ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group dropstart">
            &lt;button type="button" class="btn btn-success dropdown-toggle mb-0" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropstart
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group dropend">
            &lt;button type="button" class="btn btn-danger dropdown-toggle mb-0" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropend
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group dropup">
            &lt;button type="button" class="btn btn-teal dropdown-toggle mb-0" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropup
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Menu item&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    darkDropdowns = {
        script: `
    &lt;div class="dropdown">
        &lt;button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        &lt;/button>
        &lt;ul class="dropdown-menu dropdown-menu-dark">
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    menuAlignment = {
        script: `
    &lt;div class="btn-group">
    &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Right-aligned menu example
        &lt;/button>
        &lt;ul class="dropdown-menu dropdown-menu-end">
            &lt;li>&lt;button class="dropdown-item" type="button">Action&lt;/button>
            &lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Another
                    action&lt;/button>&lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Something else
                    here&lt;/button>
            &lt;/li>
        &lt;/ul>
    &lt;/div>` },
    responsiveAlignmentEnd = {
        script: `
    &lt;div class="btn-group">
        &lt;button type="button" class="btn btn-secondary dropdown-toggle text-wrap" data-bs-toggle="dropdown"
            data-bs-display="static" aria-expanded="false">
            Left-aligned but right aligned when large screen
        &lt;/button>
        &lt;ul class="dropdown-menu dropdown-menu-lg-end">
            &lt;li>&lt;button class="dropdown-item" type="button">Action&lt;/button>
            &lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Another
                    action&lt;/button>&lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Something else
                    here&lt;/button>
            &lt;/li>
        &lt;/ul>
    &lt;/div>` },
    responsiveAlignmentLeft = {
        script: `
    &lt;div class="btn-group">
        &lt;button type="button" class="btn btn-info dropdown-toggle text-wrap" data-bs-toggle="dropdown"
            data-bs-display="static" aria-expanded="false">
            Left-aligned but right aligned when large screen
        &lt;/button>
        &lt;ul class="dropdown-menu dropdown-menu-lg-start">
            &lt;li>&lt;button class="dropdown-item" type="button">Action&lt;/button>
            &lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Another
                    action&lt;/button>&lt;/li>
            &lt;li>&lt;button class="dropdown-item" type="button">Something else
                    here&lt;/button>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    customDropdownMenus = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Primary
            &lt;/button>
            &lt;ul class="dropdown-menu dropdown-menu-primary">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                secondary
            &lt;/button>
            &lt;ul class="dropdown-menu dropdown-menu-secondary">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                warning
            &lt;/button>
            &lt;ul class="dropdown-menu dropmenu-item-warning">
                &lt;li>&lt;a class="dropdown-item active" href="javascript:void(0);">Active&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                info
            &lt;/button>
            &lt;ul class="dropdown-menu dropmenu-item-info">
                &lt;li>&lt;a class="dropdown-item active" href="javascript:void(0);">Active&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-success-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                success
            &lt;/button>
            &lt;ul class="dropdown-menu dropmenu-light-success">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item active" href="javascript:void(0);">Active&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button class="btn btn-danger-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                danger
            &lt;/button>
            &lt;ul class="dropdown-menu dropmenu-light-danger">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item active" href="javascript:void(0);">Active&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    ghostButtonDropdowns = {
        script: `
    &lt;div class="btn-list">
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-primary-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Primary
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-secondary-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Secondary
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-success-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Success
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-info-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Info
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-warning-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Warning
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
        &lt;div class="btn-group">
            &lt;button type="button" class="btn btn-danger-ghost dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Danger
            &lt;/button>
            &lt;ul class="dropdown-menu">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else
                        here&lt;/a>
                &lt;/li>
                &lt;li>
                    &lt;hr class="dropdown-divider">
                &lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` },
    nonInteractiveDropdownItems = {
        script: `
    &lt;p class="card-title mb-3">Use &lt;code>.dropdown-item-text.&lt;/code> to create
        non-interactive
        dropdown
        items.&lt;/p>
    &lt;div class="bd-example">
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;span class="dropdown-item-text">Dropdown item text&lt;/span>
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropdownHeaders = {
        script: `
    &lt;p class="card-titlte mb-3">Add a &lt;code>.dropdown-header&lt;/code> to label sections of
        actions
        in
        any
        dropdown menu.&lt;/p>
    &lt;div class="bd-example">
        &lt;ul class="dropdown-menu">
            &lt;li>
                &lt;h6 class="dropdown-header">Dropdown header&lt;/h6>
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropdownDividers = {
        script: `
    &lt;div class="bd-example">
        &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-header" href="javascript:void(0);">Heading&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>
            &lt;/li>
            &lt;li>
                &lt;hr class="dropdown-divider">
            &lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/div>` },
    dropdownMenuText = {
        script: `
    &lt;div class="bd-example">
        &lt;div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
            &lt;p>
                Some example text that's free-flowing within the dropdown menu.
            &lt;/p>
            &lt;p class="mb-0">
                And this is more example text.
            &lt;/p>
        &lt;/div>
    &lt;/div>` };