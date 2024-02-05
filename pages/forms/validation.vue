<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
definePageMeta({
    middleware: [auth],
})
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value:string) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        phone(value:number) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
        },
        email(value:string) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        select(value:string) {
            if (value) return true

            return 'Select an item.'
        },
        checkbox(value:string) {
            if (value === '1') return true

            return 'Must be checked.'
        },
    },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>
<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/formvalidation.js';

const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

import auth from '@/middleware/auth';


export default {
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Validation",
                list: [
                    'Forms', 'Validation'
                ]
            },
            prism,
            firstname: '',
            lastname: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            agree: '',
            errors: []
        };
    },
    methods: {
        checkForm: function (e: Event) {
            this.errors = [];
            if (!this.firstname) this.errors.push({ 'firstname': "First Name required." });
            if (!this.lastname) this.errors.push({ 'lastname': "Last Name required." });
            if (!this.username) this.errors.push({ 'username': "UserName required." });
            if (!this.city) this.errors.push({ 'city': "City required." });
            if (!this.state) this.errors.push({ 'state': "State required." });
            if (!this.zip) this.errors.push({ 'zip': "Zip required." });
            if (!this.agree) this.errors.push({ 'agree': "agree required." });
            e.preventDefault();
        },
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.customValidation" title="Custom Validation">
                <form class="row g-3 needs-validation" @submit="checkForm">
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" v-model="firstname"
                            name="firstname">
                        <div v-if="errors?.[0]?.firstname" class="invalid-feedback d-block">
                            {{ errors?.[0]?.firstname }}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="lastname" name="lastname">
                        <div v-if="errors?.[0]?.lastname" class="invalid-feedback d-block">
                            {{ errors?.[0]?.lastname }}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend" v-model="username">
                            <div v-if="errors?.[0]?.username" class="invalid-feedback d-block">
                                {{ errors?.[0]?.username }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom03" v-model="city">
                        <div v-if="errors?.[0]?.city" class="invalid-feedback d-block">
                            {{ errors?.[0]?.city }}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">State</label>
                        <select class="form-select" id="validationCustom04" v-model="state">
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div v-if="errors?.[0]?.state" class="invalid-feedback d-block">
                            {{ errors?.[0]?.state }}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" v-model="zip">
                        <div v-if="errors?.[0]?.zip" class="invalid-feedback d-block">
                            {{ errors?.[0]?.zip }}
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" v-model="agree">
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div v-if="errors?.[0]?.agree" class="invalid-feedback d-block">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.browserDefaultValidation" title="Browser Default Validation">
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control" id="validationDefaultUsername"
                                aria-describedby="inputGroupPrepend2" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationDefault03" required>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">State</label>
                        <select class="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" required>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <showcodeCard :code="prism.serversideValidation" title="Server side Validation">
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label for="validationServer01" class="form-label">First
                                    name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" value="Mark"
                                    required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationServer02" class="form-label">Last
                                    name</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" value="Otto"
                                    required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationServerUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                    <input type="text" class="form-control is-invalid" id="validationServerUsername"
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationServer03" class="form-label">City</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03"
                                    aria-describedby="validationServer03Feedback" required>
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer04" class="form-label">State</label>
                                <select class="form-select is-invalid" id="validationServer04"
                                    aria-describedby="validationServer04Feedback" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                                <div id="validationServer04Feedback" class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer05" class="form-label">Zip</label>
                                <input type="text" class="form-control is-invalid" id="validationServer05"
                                    aria-describedby="validationServer05Feedback" required>
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
                                        aria-describedby="invalidCheck3Feedback" required>
                                    <label class="form-check-label" for="invalidCheck3">
                                        Agree to terms and conditions
                                    </label>
                                    <div id="invalidCheck3Feedback" class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit
                                    form</button>
                            </div>
                        </form>
                    </showcodeCard>
                </div>
                <div class="col-xl-12">
                    <showcodeCard :code="prism.vutifyValidation" title="Vutify Validation">
                        <form @submit.prevent="submit">
                            <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                                label="Name"></v-text-field>

                            <v-text-field v-model="phone.value.value" :counter="7"
                                :error-messages="phone.errorMessage.value" label="Phone Number"></v-text-field>

                            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                label="E-mail"></v-text-field>

                            <v-select v-model="select.value.value" :items="items"
                                :error-messages="select.errorMessage.value" label="Select"></v-select>

                            <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value"
                                value="1" label="Option" type="checkbox"></v-checkbox>

                            <v-btn class="me-4 " color="primary" type="submit">
                                submit
                            </v-btn>

                            <v-btn @click="handleReset" color="error">
                                clear
                            </v-btn>
                        </form>
                    </showcodeCard>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.supportedElements" title="Supported elements">
                <form class="was-validated">
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Textarea</label>
                        <textarea class="form-control is-invalid" id="validationTextarea"
                            placeholder="Required example textarea" required></textarea>
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                    </div>

                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                        <label class="form-check-label" for="validationFormCheck1">Check this
                            checkbox</label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>

                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked"
                            required>
                        <label class="form-check-label" for="validationFormCheck2">Toggle this
                            radio</label>
                    </div>
                    <div class="form-check mb-3">
                        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked"
                            required>
                        <label class="form-check-label" for="validationFormCheck3">Or toggle
                            this
                            other radio</label>
                        <div class="invalid-feedback">More example invalid feedback text</div>
                    </div>

                    <div class="mb-3">
                        <select class="form-select" required aria-label="select example">
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="invalid-feedback">Example invalid select feedback</div>
                    </div>

                    <div class="mb-3">
                        <input type="file" class="form-control" aria-label="file example" required>
                        <div class="invalid-feedback">Example invalid form file feedback</div>
                    </div>

                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit" disabled>Submit
                            form</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>

