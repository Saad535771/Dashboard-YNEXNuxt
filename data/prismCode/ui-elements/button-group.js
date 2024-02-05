export let
    BasicExample = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic example">
        &lt;button type="button" class="btn btn-info btn-wave">&lt;i class="bi bi-skip-backward">&lt;/i>&lt;/button>
        &lt;button type="button" class="btn btn-info btn-wave">&lt;i class="bi bi-pause">&lt;/i>&lt;/button>
        &lt;button type="button" class="btn btn-info btn-wave">&lt;i class="bi bi-skip-forward">&lt;/i>&lt;/button>
    &lt;/div>` },
    Navigation = {
        script: `
    &lt;div class="btn-group">
        &lt;a href="javascript:void(0);" class="btn btn-primary active btn-wave" aria-current="page">Active
            link&lt;/a>
        &lt;a href="javascript:void(0);" class="btn btn-primary">Link&lt;/a>
        &lt;a href="javascript:void(0);" class="btn btn-primary">Link&lt;/a>
    &lt;/div>` },
    MixedStyle = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic mixed styles example">
        &lt;button type="button" class="btn btn-danger btn-wave">Left&lt;/button>
        &lt;button type="button" class="btn btn-warning btn-wave">Middle&lt;/button>
        &lt;button type="button" class="btn btn-success btn-wave">Right&lt;/button>
    &lt;/div>` },
    OutlineStyled = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic outlined example">
        &lt;button type="button" class="btn btn-outline-primary btn-wave">Left&lt;/button>
        &lt;button type="button" class="btn btn-outline-primary btn-wave">Middle&lt;/button>
        &lt;button type="button" class="btn btn-outline-primary btn-wave">Right&lt;/button>
    &lt;/div>` },
    CheckboxButtonGroups = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        &lt;input type="checkbox" class="btn-check" id="btncheck1">
        &lt;label class="btn btn-outline-primary" for="btncheck1">Checkbox 1&lt;/label>

        &lt;input type="checkbox" class="btn-check" id="btncheck2">
        &lt;label class="btn btn-outline-primary" for="btncheck2">Checkbox 2&lt;/label>

        &lt;input type="checkbox" class="btn-check" id="btncheck3">
        &lt;label class="btn btn-outline-primary" for="btncheck3">Checkbox 3&lt;/label>
    &lt;/div>` },
    RadioButtonGroups = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        &lt;input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
        &lt;label class="btn btn-outline-primary" for="btnradio1">Radio 1&lt;/label>

        &lt;input type="radio" class="btn-check" name="btnradio" id="btnradio2">
        &lt;label class="btn btn-outline-primary" for="btnradio2">Radio 2&lt;/label>

        &lt;input type="radio" class="btn-check" name="btnradio" id="btnradio3">
        &lt;label class="btn btn-outline-primary" for="btnradio3">Radio 3&lt;/label>
    &lt;/div>` },
    Sizing = {
        script: `
    &lt;div class="btn-group btn-group-lg my-1 mx-1" role="group" aria-label="Large button group">
        &lt;button type="button" class="btn btn-outline-success">Left&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Middle&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Right&lt;/button>
    &lt;/div>
    &lt;div class="btn-group my-1 mx-1" role="group" aria-label="Default button group">
        &lt;button type="button" class="btn btn-outline-success">Left&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Middle&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Right&lt;/button>
    &lt;/div>
    &lt;div class="btn-group btn-group-sm my-1 mx-1" role="group" aria-label="Small button group">
        &lt;button type="button" class="btn btn-outline-success">Left&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Middle&lt;/button>
        &lt;button type="button" class="btn btn-outline-success">Right&lt;/button>
    &lt;/div>` },
    ButtonToolbar = {
        script: `
    &lt;div class="btn-toolbar mb-4" role="toolbar" aria-label="Toolbar with button groups">
        &lt;div class="btn-group me-2 my-1" role="group" aria-label="First group">
            &lt;button type="button" class="btn btn-primary">1&lt;/button>
            &lt;button type="button" class="btn btn-primary">2&lt;/button>
            &lt;button type="button" class="btn btn-primary">3&lt;/button>
            &lt;button type="button" class="btn btn-primary">4&lt;/button>
        &lt;/div>
        &lt;div class="btn-group me-2 my-1" role="group" aria-label="Second group">
            &lt;button type="button" class="btn btn-secondary">5&lt;/button>
            &lt;button type="button" class="btn btn-secondary">6&lt;/button>
            &lt;button type="button" class="btn btn-secondary">7&lt;/button>
        &lt;/div>
        &lt;div class="btn-group my-1" role="group" aria-label="Third group">
            &lt;button type="button" class="btn btn-info">8&lt;/button>
        &lt;/div>
    &lt;/div>
    &lt;div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        &lt;div class="btn-group me-2 my-1" role="group" aria-label="First group">
            &lt;button type="button" class="btn btn-outline-secondary">1&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">2&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">3&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">4&lt;/button>
        &lt;/div>
        &lt;div class="input-group">
            &lt;div class="input-group-text" id="btnGroupAddon">@&lt;/div>
            &lt;input type="text" class="form-control" placeholder="Input group example"
                aria-label="Input group example" aria-describedby="btnGroupAddon">
        &lt;/div>
    &lt;/div>
    &lt;div class="btn-toolbar justify-content-between d-sm-flex d-block" role="toolbar"
        aria-label="Toolbar with button groups">
        &lt;div class="btn-group my-1" role="group" aria-label="First group">
            &lt;button type="button" class="btn btn-outline-secondary">1&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">2&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">3&lt;/button>
            &lt;button type="button" class="btn btn-outline-secondary">4&lt;/button>
        &lt;/div>
        &lt;div class="input-group">
            &lt;div class="input-group-text" id="btnGroupAddon2">@&lt;/div>
            &lt;input type="text" class="form-control" placeholder="Input group example"
                aria-label="Input group example" aria-describedby="btnGroupAddon2">
        &lt;/div>
    &lt;/div>` },
    SocialGroupButtons = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Basic example">
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
    VerticalVariation = {
        script: `
    &lt;div class="row gap-2">
        &lt;div class="col-sm-3">
            &lt;div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                &lt;button type="button" class="btn btn-primary">Button&lt;/button>
                &lt;button type="button" class="btn btn-primary">Button&lt;/button>
                &lt;div class="btn-group" role="group">
                    &lt;button id="btnGroupVerticalDrop1" type="button"
                        class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    &lt;/button>
                    &lt;ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                    &lt;/ul>
                &lt;/div>
                &lt;button type="button" class="btn btn-primary">Button&lt;/button>
                &lt;button type="button" class="btn btn-primary">Button&lt;/button>
                &lt;div class="btn-group" role="group">
                    &lt;button id="btnGroupVerticalDrop2" type="button"
                        class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    &lt;/button>
                    &lt;ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                    &lt;/ul>
                &lt;/div>
                &lt;div class="btn-group" role="group">
                    &lt;button id="btnGroupVerticalDrop3" type="button"
                        class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    &lt;/button>
                    &lt;ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                    &lt;/ul>
                &lt;/div>
                &lt;div class="btn-group" role="group">
                    &lt;button id="btnGroupVerticalDrop4" type="button"
                        class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    &lt;/button>
                    &lt;ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown
                                link&lt;/a>
                        &lt;/li>
                    &lt;/ul>
                &lt;/div>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-sm-3">
            &lt;div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
                &lt;button type="button" class="btn btn-info">Button&lt;/button>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-sm-3">
            &lt;div class="btn-group-vertical" role="group"
                aria-label="Vertical radio toggle button group">
                &lt;input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" checked>
                &lt;label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1&lt;/label>
                &lt;input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2">
                &lt;label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2&lt;/label>
                &lt;input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3">
                &lt;label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3&lt;/label>
            &lt;/div>
        &lt;/div>
    &lt;/div>` },
    Nesting = {
        script: `
    &lt;div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        &lt;button type="button" class="btn btn-primary">1&lt;/button>
        &lt;button type="button" class="btn btn-primary">2&lt;/button>

        &lt;div class="btn-group" role="group">
            &lt;button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            &lt;/button>
            &lt;ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown link&lt;/a>&lt;/li>
                &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Dropdown link&lt;/a>&lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>` };
