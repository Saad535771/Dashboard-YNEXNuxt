export let formWizardExamples = {
    script: `&lt;Wizard :custom-tabs="[
        {

            title: 'Registration',
        },
        {

            title: 'Email',
        },
        {

            title: 'Birth Date',
        },
    ]" :beforeChange="onTabBeforeChange" @change="onChangeCurrentTab" @complete:wizard="wizardCompleted"
        @submit.prevent="onSubmit">
        &lt;div class="col-xs-12" v-if="currentTabIndex === 0">

        &lt;/div>
        &lt;div class="col-xs-12 text-start" v-if="currentTabIndex === 0">
            &lt;div class="col-md-12">
                &lt;div class="form-group mb-3">
                    &lt;label class="control-label fw-semibold mb-2">Email&lt;/label>
                    &lt;input class="form-control" type="text" placeholder="name@example.com" required="true" />
                &lt;/div>
                &lt;div class="form-group">
                    &lt;label class="control-label fw-semibold mb-2">Password&lt;/label>
                    &lt;input class="form-control" type="password" placeholder="Password" required="true" />
                &lt;/div>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xs-12 text-start" v-if="currentTabIndex === 1">
            &lt;div class="col-md-12">
                &lt;div class="form-group mb-3">
                    &lt;label class="control-label fw-semibold mb-2">Email&lt;/label>
                    &lt;input class="form-control" type="text" placeholder="name@example.com" required="true" />
                &lt;/div>
                &lt;div class="form-group">
                    &lt;label class="control-label fw-semibold mb-2">Password&lt;/label>
                    &lt;input class="form-control" type="password" placeholder="Password" required="true" />
                &lt;/div>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xs-12 text-start" v-if="currentTabIndex === 2">
            &lt;div class="col-md-12">
                &lt;div class="form-group mb-3">
                    &lt;label class="control-label fw-semibold mb-2">Birth date&lt;/label>
                    &lt;input class="form-control" type="date" required="true" />
                &lt;/div>
                &lt;div class="form-group">
                    &lt;label class="control-label fw-semibold mb-2">Have Passport&lt;/label>
                    &lt;input class="form-control" type="text" placeholder="yes/No" required="true" />
                &lt;/div>
            &lt;/div>
        &lt;/div>
    &lt;/Wizard>`
};