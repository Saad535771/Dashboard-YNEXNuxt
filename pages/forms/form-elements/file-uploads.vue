<script lang="ts">
import * as prism from '@/data/prismCode/forms/formelements/fileupload.js';
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";

// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
)

import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        FilePond, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "File Uploads",
                list: [
                    'Forms', 'Form Elements', 'File Uploads'
                ]
            },
            myFiles: [],
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.bootstrapFileInput" title="Bootstrap File Input">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Multiple files input
                        example</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
                <div class="mb-3">
                    <label for="formFileDisabled" class="form-label">Disabled file input
                        example</label>
                    <input class="form-control" type="file" id="formFileDisabled" disabled>
                </div>
                <div class="mb-3">
                    <label for="formFileSm" class="form-label">Small file input example</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file">
                </div>
                <div>
                    <label for="formFileLg" class="form-label">Large file input example</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file">
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <h6 class="mb-3">Filepond:</h6>
            <div class="row">
                <div class="col-xl-12">
                    <showcodeCard :code="prism.multipleUpload" title="Multiple Upload">
                        <file-pond name="test" ref="pond"
                            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                            allow-multiple="true" max-files="3" accepted-file-types="image/jpeg, image/png"
                            v-bind:files="myFiles" />
                    </showcodeCard>
                </div>
                <div class="col-xl-12">
                    <showcodeCard :code="prism.singleUpload" title="Single Upload">
                        <file-pond name="test" ref="pond"
                            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                            allow-multiple="false" max-files="1" accepted-file-types="image/jpeg, image/png"
                            v-bind:files="myFiles" />
                    </showcodeCard>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.dropzone" title="Dropzone">
                <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>
