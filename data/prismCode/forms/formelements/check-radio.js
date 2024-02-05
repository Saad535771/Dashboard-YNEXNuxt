export let
    checks = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        &lt;label class="form-check-label" for="flexCheckDefault">
            Default checkbox
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        &lt;label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
        &lt;/label>
    &lt;/div>` },
    disabledChecks = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
        &lt;label class="form-check-label" for="flexCheckDisabled">
            Disabled checkbox
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
        &lt;label class="form-check-label" for="flexCheckCheckedDisabled">
            Disabled checked checkbox
        &lt;/label>
    &lt;/div>` },
    radios = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        &lt;label class="form-check-label" for="flexRadioDefault1">
            Default radio
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        &lt;label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
        &lt;/label>
    &lt;/div>` },
    disabledRadios = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
        &lt;label class="form-check-label" for="flexRadioDisabled">
            Disabled radio
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"
            checked disabled>
        &lt;label class="form-check-label" for="flexRadioCheckedDisabled">
            Disabled checked radio
        &lt;/label>
    &lt;/div>` },
    stacjedDefault = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        &lt;label class="form-check-label" for="defaultCheck1">
            Default checkbox
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
        &lt;label class="form-check-label" for="defaultCheck2">
            Disabled checkbox
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
            checked>
        &lt;label class="form-check-label" for="exampleRadios1">
            Default radio
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-0">
        &lt;input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
            disabled>
        &lt;label class="form-check-label" for="exampleRadios3">
            Disabled radio
        &lt;/label>
    &lt;/div>` },
    switchers = {
        script: `
    &lt;div class="form-check form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        &lt;label class="form-check-label" for="flexSwitchCheckDefault">Default switch
            checkbox input&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        &lt;label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
            checkbox input&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
        &lt;label class="form-check-label" for="flexSwitchCheckDisabled">Disabled
            switch
            checkbox input&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-switch mb-0">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"
            checked disabled>
        &lt;label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
            checked switch checkbox input&lt;/label>
    &lt;/div>` },
    checkboxSize = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked>
        &lt;label class="form-check-label" for="checkebox-sm">
            Default
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-md d-flex align-items-center">
        &lt;input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked>
        &lt;label class="form-check-label" for="checkebox-md">
            Medium
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-lg d-flex align-items-center">
        &lt;input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked>
        &lt;label class="form-check-label" for="checkebox-lg">
            Large
        &lt;/label>
    &lt;/div>` },
    radioSizes = {
        script: `
    &lt;div class="form-check">
        &lt;input class="form-check-input" type="radio" name="Radio" id="Radio-sm">
        &lt;label class="form-check-label" for="Radio-sm">
            default
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-md">
        &lt;input class="form-check-input" type="radio" name="Radio" id="Radio-md">
        &lt;label class="form-check-label" for="Radio-md">
            Medium
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-lg">
        &lt;input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked>
        &lt;label class="form-check-label" for="Radio-lg">
            Large
        &lt;/label>
    &lt;/div>` },
    switchSizes = {
        script: `
    &lt;div class="form-check form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="switch-sm">
        &lt;label class="form-check-label" for="switch-sm">Default&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-md form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="switch-md">
        &lt;label class="form-check-label" for="switch-md">Medium&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-lg form-switch">
        &lt;input class="form-check-input" type="checkbox" role="switch" id="switch-lg">
        &lt;label class="form-check-label" for="switch-lg">Large&lt;/label>
    &lt;/div>` },
    inilne = {
        script: `
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        &lt;label class="form-check-label" for="inlineCheckbox1">1&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        &lt;label class="form-check-label" for="inlineCheckbox2">2&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
        &lt;label class="form-check-label" for="inlineCheckbox3">3 (disabled)&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="option1">
        &lt;label class="form-check-label" for="inlineRadio1">1&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
            value="option2">
        &lt;label class="form-check-label" for="inlineRadio2">2&lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-inline">
        &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
            disabled>
        &lt;label class="form-check-label" for="inlineRadio3">3 (disabled)&lt;/label>
    &lt;/div>` },
    withoutlabels = {
        script: `
    &lt;span class="me-3">
        &lt;input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
    &lt;/span>
    &lt;span>
        &lt;input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value=""
            aria-label="...">
    &lt;/span>` },
    reverse = {
        script: `
    &lt;div class="form-check form-check-reverse mb-3">
        &lt;input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
        &lt;label class="form-check-label" for="reverseCheck1">
            Reverse checkbox
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check form-check-reverse mb-3">
        &lt;input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
        &lt;label class="form-check-label" for="reverseCheck2">
            Disabled reverse checkbox
        &lt;/label>
    &lt;/div>

    &lt;div class="form-check form-switch form-check-reverse">
        &lt;input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
        &lt;label class="form-check-label" for="flexSwitchCheckReverse">Reverse
            switch
            checkbox input&lt;/label>
    &lt;/div>` },
    outlinedStyles = {
        script: `
    &lt;input type="checkbox" class="btn-check" id="btn-check-outlined">
    &lt;label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single
        toggle&lt;/label>&lt;br>

    &lt;input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked>
    &lt;label class="btn btn-outline-secondary mb-3" for="btn-check-2-outlined">Checked&lt;/label>&lt;br>

    &lt;input type="radio" class="btn-check" name="options-outlined" id="success-outlined" checked>
    &lt;label class="btn btn-outline-success m-1" for="success-outlined">Checked success
        radio&lt;/label>

    &lt;input type="radio" class="btn-check" name="options-outlined" id="danger-outlined">
    &lt;label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio&lt;/label>` },
    radioToggleButtons = {
        script: `
    &lt;input type="radio" class="btn-check" name="options" id="option1" checked>
    &lt;label class="btn btn-primary m-1" for="option1">Checked&lt;/label>

    &lt;input type="radio" class="btn-check" name="options" id="option2">
    &lt;label class="btn btn-primary m-1" for="option2">Radio&lt;/label>

    &lt;input type="radio" class="btn-check" name="options" id="option3" disabled>
    &lt;label class="btn btn-primary m-1" for="option3">Disabled&lt;/label>

    &lt;input type="radio" class="btn-check" name="options" id="option4">
    &lt;label class="btn btn-primary m-1" for="option4">Radio&lt;/label>` },
    checkboxToggleButtons = {
        script: `
    &lt;input type="checkbox" class="btn-check" id="btn-check">
    &lt;label class="btn btn-primary m-1" for="btn-check">Single toggle&lt;/label>
    &lt;input type="checkbox" class="btn-check" id="btn-check-2" checked>
    &lt;label class="btn btn-primary m-1" for="btn-check-2">Checked&lt;/label>
    &lt;input type="checkbox" class="btn-check" id="btn-check-3" disabled>
    &lt;label class="btn btn-primary m-1" for="btn-check-3">Disabled&lt;/label>` },
    coloredCheckboxes = {
        script: `
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input" type="checkbox" value="" id="primaryChecked" checked>
        &lt;label class="form-check-label" for="primaryChecked">
            Primary
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked"
            checked>
        &lt;label class="form-check-label" for="secondaryChecked">
            Secondary
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked"
            checked>
        &lt;label class="form-check-label" for="warningChecked">
            Warning
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" checked>
        &lt;label class="form-check-label" for="infoChecked">
            Info
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-success" type="checkbox" value="" id="successChecked"
            checked>
        &lt;label class="form-check-label" for="successChecked">
            Success
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" checked>
        &lt;label class="form-check-label" for="dangerChecked">
            Danger
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-0">
        &lt;input class="form-check-input form-checked-dark" type="checkbox" value="" id="darkChecked" checked>
        &lt;label class="form-check-label" for="darkChecked">
            Dark
        &lt;/label>
    &lt;/div>` },
    outlineCheckboxes = {
        script: `
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked"
            checked>
        &lt;label class="form-check-label" for="primaryoutlineChecked">
            Primary
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value=""
            id="secondaryoutlineChecked" checked>
        &lt;label class="form-check-label" for="secondaryoutlineChecked">
            Secondary
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline form-checked-warning" type="checkbox" value=""
            id="warningoutlineChecked" checked>
        &lt;label class="form-check-label" for="warningoutlineChecked">
            Warning
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline form-checked-info" type="checkbox" value=""
            id="infooutlineChecked" checked>
        &lt;label class="form-check-label" for="infooutlineChecked">
            Info
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline form-checked-success" type="checkbox" value=""
            id="successoutlineChecked" checked>
        &lt;label class="form-check-label" for="successoutlineChecked">
            Success
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-2">
        &lt;input class="form-check-input form-checked-outline form-checked-danger" type="checkbox" value=""
            id="dangeroutlineChecked" checked>
        &lt;label class="form-check-label" for="dangeroutlineChecked">
            Danger
        &lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-0">
        &lt;input class="form-check-input form-checked-outline form-checked-dark" type="checkbox" value=""
            id="darkoutlineChecked" checked>
        &lt;label class="form-check-label" for="darkoutlineChecked">
            Dark
        &lt;/label>
    &lt;/div>` },
    coloredRadios = {
        script: `&lt;div class="form-check mb-2">
    &lt;input class="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" checked>
    &lt;label class="form-check-label" for="primaryRadio">
        Primary
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-secondary" type="radio" name="secondaryRadio"
        id="secondaryRadio" checked>
    &lt;label class="form-check-label" for="secondaryRadio">
        Secondary
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio"
        checked>
    &lt;label class="form-check-label" for="warningRadio">
        Warning
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" checked>
    &lt;label class="form-check-label" for="InfoRadio">
        Info
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio"
        checked>
    &lt;label class="form-check-label" for="successRadio">
        Success
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio"
        checked>
    &lt;label class="form-check-label" for="dangerRadio">
        Danger
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-0">
    &lt;input class="form-check-input form-checked-dark" type="radio" name="darkRadio" id="darkRadio" checked>
    &lt;label class="form-check-label" for="darkRadio">
        Dark
    &lt;/label>
&lt;/div>` },
    outlineRadios = {
        script: `&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio"
        id="primaryoutlineRadio" checked>
    &lt;label class="form-check-label" for="primaryoutlineRadio">
        Primary
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline form-checked-secondary" type="radio"
        name="secondaryoutlineRadio" id="secondaryoutlineRadio" checked>
    &lt;label class="form-check-label" for="secondaryoutlineRadio">
        Secondary
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline form-checked-warning" type="radio"
        name="warningoutlineRadio" id="warningoutlineRadio" checked>
    &lt;label class="form-check-label" for="warningoutlineRadio">
        Warning
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline form-checked-info" type="radio"
        name="InfooutlineRadio" id="InfooutlineRadio" checked>
    &lt;label class="form-check-label" for="InfooutlineRadio">
        Info
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline form-checked-success" type="radio"
        name="successoutlineRadio" id="successoutlineRadio" checked>
    &lt;label class="form-check-label" for="successoutlineRadio">
        Success
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-2">
    &lt;input class="form-check-input form-checked-outline form-checked-danger" type="radio"
        name="dangeroutlineRadio" id="dangeroutlineRadio" checked>
    &lt;label class="form-check-label" for="dangeroutlineRadio">
        Danger
    &lt;/label>
&lt;/div>
&lt;div class="form-check mb-0">
    &lt;input class="form-check-input form-checked-outline form-checked-dark" type="radio"
        name="darkoutlineRadio" id="darkoutlineRadio" checked>
    &lt;label class="form-check-label" for="darkoutlineRadio">
        Dark
    &lt;/label>
&lt;/div>` },
    switchesColors = {
        script: `&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input" type="checkbox" role="switch" id="switch-primary" checked>
    &lt;label class="form-check-label" for="switch-primary">Primary&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input form-checked-secondary" type="checkbox" role="switch"
        id="switch-secondary" checked>
    &lt;label class="form-check-label" for="switch-secondary">Secondary&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input form-checked-warning" type="checkbox" role="switch" id="switch-warning"
        checked>
    &lt;label class="form-check-label" for="switch-warning">Warning&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input form-checked-info" type="checkbox" role="switch" id="switch-info"
        checked>
    &lt;label class="form-check-label" for="switch-info">Info&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input form-checked-success" type="checkbox" role="switch" id="switch-success"
        checked>
    &lt;label class="form-check-label" for="switch-success">Success&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-2">
    &lt;input class="form-check-input form-checked-danger" type="checkbox" role="switch" id="switch-danger"
        checked>
    &lt;label class="form-check-label" for="switch-danger">Danger&lt;/label>
&lt;/div>
&lt;div class="form-check form-switch mb-0">
    &lt;input class="form-check-input form-checked-dark" type="checkbox" role="switch" id="switch-dark"
        checked>
    &lt;label class="form-check-label" for="switch-dark">Dark&lt;/label>
&lt;/div>` },
    toggleSwitchesStyle1 = {
        script: `
    &lt;div class="row gy-1">
        &lt;div class="col-xl-4">
            &lt;div class="toggle on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-secondary on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-warning on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-info on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-success on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-danger on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-light on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="toggle toggle-dark on mb-3">
                &lt;span>&lt;/span>
            &lt;/div>
        &lt;/div>
    &lt;/div>` },
    toggleSwitchesStyle2 = {
        script: `
    &lt;div class="row gy-1">
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchPrimary" class="label-primary">&lt;/label>&lt;span class="ms-3">Primary&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchSecondary" class="label-secondary">&lt;/label>&lt;span
                    class="ms-3">Secondary&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchWarning" class="label-warning">&lt;/label>&lt;span class="ms-3">Warning&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchInfo" class="label-info">&lt;/label>&lt;span class="ms-3">Info&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchSuccess" class="label-success">&lt;/label>&lt;span class="ms-3">Success&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchDanger" class="label-danger">&lt;/label>&lt;span class="ms-3">Danger&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchLight" class="label-light">&lt;/label>&lt;span class="ms-3">Light&lt;/span>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="custom-toggle-switch d-flex align-items-center mb-4">
                &lt;input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked>
                &lt;label for="toggleswitchDark" class="label-dark">&lt;/label>&lt;span class="ms-3">Dark&lt;/span>
            &lt;/div>
        &lt;/div>
    &lt;/div>` },
    ToggleSwitch1Sizes = {
        script: `
    &lt;div class="d-flex align-items-center flex-wrap mb-3">
        &lt;div class="">
            &lt;p class="text-muted m-0">Small size toggle switch &lt;code>toggle-sm&lt;/code>&lt;/p>
        &lt;/div>
        &lt;div class="toggle toggle-sm on mb-0">
            &lt;span>&lt;/span>
        &lt;/div>
    &lt;/div>
    &lt;div class="d-flex align-items-center flex-wrap mb-3">
        &lt;div class="">
            &lt;p class="text-muted m-0">Default toggle switch &lt;code>&lt;/code>&lt;/p>
        &lt;/div>
        &lt;div class="toggle toggle-secondary on mb-0">
            &lt;span>&lt;/span>
        &lt;/div>
    &lt;/div>
    &lt;div class="d-flex align-items-center flex-wrap">
        &lt;div class="">
            &lt;p class="text-muted m-0">Large size toggle switch &lt;code>toggle-lg&lt;/code>&lt;/p>
        &lt;/div>
        &lt;div class="toggle toggle-lg toggle-success on mb-0">
            &lt;span>&lt;/span>
        &lt;/div>
    &lt;/div>` },
    ToggleSwitch2Sizes = {
        script: `
    &lt;div class="d-flex align-items-center flex-wrap mb-4">
        &lt;div class="">
            &lt;p class="text-muted m-0">Small size toggle switch &lt;code>toggle-sm&lt;/code>&lt;/p>
        &lt;/div>
        &lt;div class="custom-toggle-switch toggle-sm ms-2">
            &lt;input id="size-sm" name="toggleswitchsize" type="checkbox" checked>
            &lt;label for="size-sm" class="label-primary">&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="d-flex align-items-center flex-wrap mb-4">
        &lt;div class="">
            &lt;p class="text-muted m-0">Default toggle switch&lt;/p>
        &lt;/div>
        &lt;div class="custom-toggle-switch ms-2">
            &lt;input id="size-default" name="toggleswitchsize" type="checkbox" checked>
            &lt;label for="size-default" class="label-secondary mb-1">&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="d-sm-flex d-block align-items-center flex-wrap">
        &lt;div class="mb-sm-0 mb-2">
            &lt;p class="text-muted m-0">Large size toggle switch &lt;code>toggle-lg&lt;/code>&lt;/p>
        &lt;/div>
        &lt;div class="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
            &lt;input id="size-lg" name="toggleswitchsize" type="checkbox" checked>
            &lt;label for="size-lg" class="label-success mb-2">&lt;/label>
        &lt;/div>
    &lt;/div>` };