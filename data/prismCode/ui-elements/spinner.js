export let
    BorderSpinner = {
        script: `
    &lt;div class="spinner-border" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    Colors = {
        script: `
    &lt;div class="spinner-border text-primary" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-secondary" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-success" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-danger" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-warning" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-info" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-light" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border text-dark" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    GrowingSpinner = {
        script: `
    &lt;div class="spinner-grow" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    GrowingSpinner1 = {
        script: `
    &lt;div class="spinner-grow text-primary" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-secondary" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-success" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-danger" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-warning" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-info" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-light" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow text-dark" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    AlignmentFlex = {
        script: `
    &lt;div class="d-flex justify-content-center mb-4">
        &lt;div class="spinner-border" role="status">
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/div>
    &lt;/div>
    &lt;div class="d-flex align-items-center">
        &lt;strong>Loading...&lt;/strong>
        &lt;div class="spinner-border ms-auto" role="status" aria-hidden="true">&lt;/div>
    &lt;/div>` },
    AlignmentFloat = {
        script: `
    &lt;div class="clearfix mb-4">
        &lt;div class="spinner-border float-end" role="status">
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/div>
    &lt;/div>
    &lt;div class="clearfix">
        &lt;div class="spinner-border float-start" role="status">
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/div>
    &lt;/div>` },
    AlignmentTextCenter = {
        script: `
    &lt;div class="text-center">
        &lt;div class="spinner-border" role="status">
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/div>
    &lt;/div>` },
    SpinnerSizes = {
        script: `
    &lt;div class="spinner-border spinner-border-sm me-4" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow spinner-grow-sm me-4" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-border me-4" style="width: 3rem; height: 3rem;" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>
    &lt;div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    AlignmentMargin = {
        script: `
    &lt;div class="spinner-border m-5" role="status">
        &lt;span class="visually-hidden">Loading...&lt;/span>
    &lt;/div>` },
    Buttons = {
        script: `
    &lt;div class="btn-list">
        &lt;button class="btn btn-primary-light" type="button" disabled>
            &lt;span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/button>
        &lt;button class="btn btn-primary-light" type="button" disabled>
            &lt;span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-primary-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            &lt;span class="visually-hidden">Loading...&lt;/span>
        &lt;/button>
        &lt;button class="btn btn-primary-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-secondary-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-success-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-info-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-warning-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-danger-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-light" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
        &lt;button class="btn btn-dark text-fixed-white" type="button" disabled>
            &lt;span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true">&lt;/span>
            Loading...
        &lt;/button>
    &lt;/div>` };