<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import * as prism from '@/data/prismCode/forms/formwizard.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        Wizard, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Form Wizard",
                list: [
                    'Forms', 'Form Wizard'
                ]
            },
            prism,
            currentTabIndex: 0,
        };
    },
    methods: {
        onChangeCurrentTab(index: number, oldIndex: number) {
            this.currentTabIndex = index;
        },
        onTabBeforeChange() {
            if (this.currentTabIndex === 0) {
            }
        },
        wizardCompleted() {
        },
        onSubmit() { }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col">
            <showcodeCard :code="prism.formWizardExamples" title="Form Wizard Examples">

                <Wizard :custom-tabs="[
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
                    <div class="col-xs-12" v-if="currentTabIndex === 0">

                    </div>
                    <div class="col-xs-12 text-start" v-if="currentTabIndex === 0">
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label class="control-label fw-semibold mb-2">Email</label>
                                <input class="form-control" type="text" placeholder="name@example.com" required="true" />
                            </div>
                            <div class="form-group">
                                <label class="control-label fw-semibold mb-2">Password</label>
                                <input class="form-control" type="password" placeholder="Password" required="true" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 text-start" v-if="currentTabIndex === 1">
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label class="control-label fw-semibold mb-2">Email</label>
                                <input class="form-control" type="text" placeholder="name@example.com" required="true" />
                            </div>
                            <div class="form-group">
                                <label class="control-label fw-semibold mb-2">Password</label>
                                <input class="form-control" type="password" placeholder="Password" required="true" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 text-start" v-if="currentTabIndex === 2">
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label class="control-label fw-semibold mb-2">Birth date</label>
                                <input class="form-control" type="date" required="true" />
                            </div>
                            <div class="form-group">
                                <label class="control-label fw-semibold mb-2">Have Passport</label>
                                <input class="form-control" type="text" placeholder="yes/No" required="true" />
                            </div>
                        </div>
                    </div>
                </Wizard>
            </showcodeCard>
        </div>
    </div>
</template>

<style scoped></style>

