export let
    borders = {
        script: `
    &lt;span class="border border-container">&lt;/span>
    &lt;span class="border-top border-container">&lt;/span>
    &lt;span class="border-end border-container">&lt;/span>
    &lt;span class="border-bottom border-container">&lt;/span>
    &lt;span class="border-start border-container">&lt;/span>` },
    removeBorders = {
        script: `
    &lt;span class="border-0 border-container">&lt;/span>
    &lt;span class="border border-top-0 border-container">&lt;/span>
    &lt;span class="border border-end-0 border-container">&lt;/span>
    &lt;span class="border border-bottom-0 border-container">&lt;/span>
    &lt;span class="border border-start-0 border-container">&lt;/span>` },
    borderWidths = {
        script: `
    &lt;span class="border border-container border-1">&lt;/span>
    &lt;span class="border border-container border-2">&lt;/span>
    &lt;span class="border border-container border-3">&lt;/span>
    &lt;span class="border border-container border-4">&lt;/span>
    &lt;span class="border border-container border-5">&lt;/span>` },
    borderColors = {
        script: `
    &lt;span class="border border-container border-primary">&lt;/span>
    &lt;span class="border border-container border-secondary">&lt;/span>
    &lt;span class="border border-container border-success">&lt;/span>
    &lt;span class="border border-container border-danger">&lt;/span>
    &lt;span class="border border-container border-warning">&lt;/span>
    &lt;span class="border border-container border-info">&lt;/span>
    &lt;span class="border border-container border-light">&lt;/span>
    &lt;span class="border border-container border-dark">&lt;/span>
    &lt;span class="border border-container border-white">&lt;/span>` },
    borderColorStyling = {
        script: `
    &lt;div class="mb-4">
        &lt;label for="exampleFormControlInput1" class="form-label">Email
            address&lt;/label>
        &lt;input type="email" class="form-control border-success" id="exampleFormControlInput1"
            placeholder="name@example.com">
    &lt;/div>
    &lt;div class="h4 pb-3 mb-4 text-danger border-bottom border-danger">
        Below Shows Danger Border
    &lt;/div>
    &lt;div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
        Customizing borders with background colors
    &lt;/div>` },
    borderWithOpacity = {
        script: `
    &lt;div class="border border-success p-2 mb-2">This is default success border&lt;/div>
    &lt;div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border
    &lt;/div>
    &lt;div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border
    &lt;/div>
    &lt;div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border
    &lt;/div>
    &lt;div class="border border-success p-2 border-opacity-10">This is 10% opacity success border
    &lt;/div>` },
    borderRadius = {
        script: `
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-top" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-end" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-bottom" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-start" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-circle" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  rounded-pill" alt="...">` },
    sizes = {
        script: `
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-0" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-1" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-2" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-3" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-4" alt="...">
    &lt;img src="/images/media/media-58.jpg" class="bd-placeholder-img  bd-placeholder-img rounded-5" alt="...">` };