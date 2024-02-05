export let
    customValidation = {
        script: `
        

        data() {
            return {
                ...
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
        
&lt;form class="row g-3 needs-validation" @submit="checkForm">
    &lt;div class="col-md-4">
        &lt;label for="validationCustom01" class="form-label">First name&lt;/label>
        &lt;input type="text" class="form-control" id="validationCustom01" v-model="firstname"
            name="firstname">
        &lt;div v-if="errors?.[0]?.firstname" class="invalid-feedback d-block">
            {{ errors?.[0]?.firstname }}
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationCustom02" class="form-label">Last name&lt;/label>
        &lt;input type="text" class="form-control" id="validationCustom02" v-model="lastname" name="lastname">
        &lt;div v-if="errors?.[0]?.lastname" class="invalid-feedback d-block">
            {{ errors?.[0]?.lastname }}
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationCustomUsername" class="form-label">Username&lt;/label>
        &lt;div class="input-group has-validation">
            &lt;span class="input-group-text" id="inputGroupPrepend">@&lt;/span>
            &lt;input type="text" class="form-control" id="validationCustomUsername"
                aria-describedby="inputGroupPrepend" v-model="username">
            &lt;div v-if="errors?.[0]?.username" class="invalid-feedback d-block">
                {{ errors?.[0]?.username }}
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="validationCustom03" class="form-label">City&lt;/label>
        &lt;input type="text" class="form-control" id="validationCustom03" v-model="city">
        &lt;div v-if="errors?.[0]?.city" class="invalid-feedback d-block">
            {{ errors?.[0]?.city }}
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationCustom04" class="form-label">State&lt;/label>
        &lt;select class="form-select" id="validationCustom04" v-model="state">
            &lt;option selected disabled value="">Choose...&lt;/option>
            &lt;option>...&lt;/option>
        &lt;/select>
        &lt;div v-if="errors?.[0]?.state" class="invalid-feedback d-block">
            {{ errors?.[0]?.state }}
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationCustom05" class="form-label">Zip&lt;/label>
        &lt;input type="text" class="form-control" id="validationCustom05" v-model="zip">
        &lt;div v-if="errors?.[0]?.zip" class="invalid-feedback d-block">
            {{ errors?.[0]?.zip }}
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck" v-model="agree">
            &lt;label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
            &lt;/label>
            &lt;div v-if="errors?.[0]?.agree" class="invalid-feedback d-block">
                You must agree before submitting.
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;button class="btn btn-primary" type="submit">Submit form&lt;/button>
    &lt;/div>
&lt;/form>` },
    browserDefaultValidation = {
        script: `
&lt;form class="row g-3">
    &lt;div class="col-md-4">
        &lt;label for="validationDefault01" class="form-label">First name&lt;/label>
        &lt;input type="text" class="form-control" id="validationDefault01" value="Mark" required>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationDefault02" class="form-label">Last name&lt;/label>
        &lt;input type="text" class="form-control" id="validationDefault02" value="Otto" required>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationDefaultUsername" class="form-label">Username&lt;/label>
        &lt;div class="input-group">
            &lt;span class="input-group-text" id="inputGroupPrepend2">@&lt;/span>
            &lt;input type="text" class="form-control" id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2" required>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="validationDefault03" class="form-label">City&lt;/label>
        &lt;input type="text" class="form-control" id="validationDefault03" required>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationDefault04" class="form-label">State&lt;/label>
        &lt;select class="form-select" id="validationDefault04" required>
            &lt;option selected disabled value="">Choose...&lt;/option>
            &lt;option>...&lt;/option>
        &lt;/select>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationDefault05" class="form-label">Zip&lt;/label>
        &lt;input type="text" class="form-control" id="validationDefault05" required>
    &lt;/div>
    &lt;div class="col-12">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            &lt;label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;button class="btn btn-primary" type="submit">Submit form&lt;/button>
    &lt;/div>
&lt;/form>` },
    serversideValidation = {
        script: `
&lt;form class="row g-3">
    &lt;div class="col-md-4">
        &lt;label for="validationServer01" class="form-label">First
            name&lt;/label>
        &lt;input type="text" class="form-control is-valid" id="validationServer01" value="Mark"
            required>
        &lt;div class="valid-feedback">
            Looks good!
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationServer02" class="form-label">Last
            name&lt;/label>
        &lt;input type="text" class="form-control is-valid" id="validationServer02" value="Otto"
            required>
        &lt;div class="valid-feedback">
            Looks good!
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="validationServerUsername" class="form-label">Username&lt;/label>
        &lt;div class="input-group has-validation">
            &lt;span class="input-group-text" id="inputGroupPrepend3">@&lt;/span>
            &lt;input type="text" class="form-control is-invalid" id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
            &lt;div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a username.
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="validationServer03" class="form-label">City&lt;/label>
        &lt;input type="text" class="form-control is-invalid" id="validationServer03"
            aria-describedby="validationServer03Feedback" required>
        &lt;div id="validationServer03Feedback" class="invalid-feedback">
            Please provide a valid city.
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationServer04" class="form-label">State&lt;/label>
        &lt;select class="form-select is-invalid" id="validationServer04"
            aria-describedby="validationServer04Feedback" required>
            &lt;option selected disabled value="">Choose...&lt;/option>
            &lt;option>...&lt;/option>
        &lt;/select>
        &lt;div id="validationServer04Feedback" class="invalid-feedback">
            Please select a valid state.
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-3">
        &lt;label for="validationServer05" class="form-label">Zip&lt;/label>
        &lt;input type="text" class="form-control is-invalid" id="validationServer05"
            aria-describedby="validationServer05Feedback" required>
        &lt;div id="validationServer05Feedback" class="invalid-feedback">
            Please provide a valid zip.
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;div class="form-check">
            &lt;input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback" required>
            &lt;label class="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
            &lt;/label>
            &lt;div id="invalidCheck3Feedback" class="invalid-feedback">
                You must agree before submitting.
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;button class="btn btn-primary" type="submit">Submit
            form&lt;/button>
    &lt;/div>
&lt;/form>` },
    vutifyValidation = {
        script: `

        data() {
            return {
                ...
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

&lt;form @submit.prevent="submit">
    &lt;v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
        label="Name">&lt;/v-text-field>

    &lt;v-text-field v-model="phone.value.value" :counter="7"
        :error-messages="phone.errorMessage.value" label="Phone Number">&lt;/v-text-field>

    &lt;v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
        label="E-mail">&lt;/v-text-field>

    &lt;v-select v-model="select.value.value" :items="items"
        :error-messages="select.errorMessage.value" label="Select">&lt;/v-select>

    &lt;v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value"
        value="1" label="Option" type="checkbox">&lt;/v-checkbox>

    &lt;v-btn class="me-4" type="submit">
        submit
    &lt;/v-btn>

    &lt;v-btn @click="handleReset">
        clear
    &lt;/v-btn>
&lt;/form>` },
    supportedElements = {
        script: `
&lt;form class="was-validated">
    &lt;div class="mb-3">
        &lt;label for="validationTextarea" class="form-label">Textarea&lt;/label>
        &lt;textarea class="form-control is-invalid" id="validationTextarea"
            placeholder="Required example textarea" required>&lt;/textarea>
        &lt;div class="invalid-feedback">
            Please enter a message in the textarea.
        &lt;/div>
    &lt;/div>

    &lt;div class="form-check mb-3">
        &lt;input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
        &lt;label class="form-check-label" for="validationFormCheck1">Check this
            checkbox&lt;/label>
        &lt;div class="invalid-feedback">Example invalid feedback text&lt;/div>
    &lt;/div>

    &lt;div class="form-check">
        &lt;input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked"
            required>
        &lt;label class="form-check-label" for="validationFormCheck2">Toggle this
            radio&lt;/label>
    &lt;/div>
    &lt;div class="form-check mb-3">
        &lt;input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked"
            required>
        &lt;label class="form-check-label" for="validationFormCheck3">Or toggle
            this
            other radio&lt;/label>
        &lt;div class="invalid-feedback">More example invalid feedback text&lt;/div>
    &lt;/div>

    &lt;div class="mb-3">
        &lt;select class="form-select" required aria-label="select example">
            &lt;option value="">Open this select menu&lt;/option>
            &lt;option value="1">One&lt;/option>
            &lt;option value="2">Two&lt;/option>
            &lt;option value="3">Three&lt;/option>
        &lt;/select>
        &lt;div class="invalid-feedback">Example invalid select feedback&lt;/div>
    &lt;/div>

    &lt;div class="mb-3">
        &lt;input type="file" class="form-control" aria-label="file example" required>
        &lt;div class="invalid-feedback">Example invalid form file feedback&lt;/div>
    &lt;/div>

    &lt;div class="mb-3">
        &lt;button class="btn btn-primary" type="submit" disabled>Submit
            form&lt;/button>
    &lt;/div>
&lt;/form>` };