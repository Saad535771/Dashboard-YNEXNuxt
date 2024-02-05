export let
    defaultEditor = {
        script: `
    &lt;vue-editor v-model="content">&lt;/vue-editor>` },
    customToolbar = {
        script: `

        data(){ 
            return {
                ...
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"]
            ],
        }}
    &lt;vue-editor v-model="content" :editorToolbar="customToolbar">&lt;/vue-editor>` };