export let

    bootstrapFileInput = {
        script: `
&lt;div class="mb-3">
    &lt;label for="formFile" class="form-label">Default file input example&lt;/label>
    &lt;input class="form-control" type="file" id="formFile">
&lt;/div>
&lt;div class="mb-3">
    &lt;label for="formFileMultiple" class="form-label">Multiple files input
        example&lt;/label>
    &lt;input class="form-control" type="file" id="formFileMultiple" multiple>
&lt;/div>
&lt;div class="mb-3">
    &lt;label for="formFileDisabled" class="form-label">Disabled file input
        example&lt;/label>
    &lt;input class="form-control" type="file" id="formFileDisabled" disabled>
&lt;/div>
&lt;div class="mb-3">
    &lt;label for="formFileSm" class="form-label">Small file input example&lt;/label>
    &lt;input class="form-control form-control-sm" id="formFileSm" type="file">
&lt;/div>
&lt;div>
    &lt;label for="formFileLg" class="form-label">Large file input example&lt;/label>
    &lt;input class="form-control form-control-lg" id="formFileLg" type="file">
&lt;/div>` },
    multipleUpload = {
        script: `
    &lt;file-pond name="test" ref="pond"
        label-idle="Drop files here or &lt;span class='filepond--label-action'>Browse&lt;/span>"
        allow-multiple="true" max-files="3" accepted-file-types="image/jpeg, image/png"
        v-bind:files="myFiles" />` },
    singleUpload = {
        script: `
    &lt;file-pond name="test" ref="pond"
        label-idle="Drop files here or &lt;span class='filepond--label-action'>Browse&lt;/span>"
        allow-multiple="false" max-files="1" accepted-file-types="image/jpeg, image/png"
        v-bind:files="myFiles" />` },
    dropzone = { script: `&lt;DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />` };