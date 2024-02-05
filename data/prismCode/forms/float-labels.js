export let
    basicExamples = {
        script: `
&lt;div class="form-floating mb-3">
    &lt;input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    &lt;label for="floatingInput">Email address&lt;/label>
&lt;/div>
&lt;div class="form-floating">
    &lt;input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    &lt;label for="floatingPassword">Password&lt;/label>
&lt;/div>` },
    readonlyplaintext = {
        script: `
&lt;div class="form-floating mb-3">
    &lt;input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput"
        placeholder="name@example.com">
    &lt;label for="floatingEmptyPlaintextInput">Empty input&lt;/label>
&lt;/div>
&lt;div class="form-floating">
    &lt;input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput"
        placeholder="name@example.com" value="name@example.com">
    &lt;label for="floatingPlaintextInput">Input with value&lt;/label>
&lt;/div>` },
    floatingLabelsWithPreDefinedValues = {
        script: `
&lt;form class="form-floating my-3">
    &lt;input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
        value="test@example.com">
    &lt;label for="floatingInputValue">Input with value&lt;/label>
&lt;/form>
&lt;form class="form-floatin">
    &lt;input type="email" class="form-control is-invalid" id="floatingInputInvalid"
        placeholder="name@example.com" value="test@example.com">
    &lt;label for="floatingInputInvalid">Invalid input&lt;/label>
&lt;/form>` },
    textareas = {
        script: `
&lt;div class="form-floating mb-4">
    &lt;textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">&lt;/textarea>
    &lt;label for="floatingTextarea">Description&lt;/label>
&lt;/div>
&lt;div class="form-floating">
    &lt;textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="1"
        disabled>&lt;/textarea>
    &lt;label for="floatingTextarea2">Disabled&lt;/label>
&lt;/div>` },
    floatingLabelsInSelect = {
        script: `
&lt;div class="form-floating">
    &lt;select class="form-select" id="floatingSelect" aria-label="Floating label select example">
        &lt;option selected>Open this select menu&lt;/option>
        &lt;option value="1">One&lt;/option>
        &lt;option value="2">Two&lt;/option>
        &lt;option value="3">Three&lt;/option>
    &lt;/select>
    &lt;label for="floatingSelect">Works with selects&lt;/label>
&lt;/div>` },
    floatingLabelsWithLayouts = {
        script: `
&lt;div class="row g-2">
    &lt;div class="col-md">
        &lt;div class="form-floating">
            &lt;input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com"
                value="mdo@example.com">
            &lt;label for="floatingInputGrid">Email address&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md">
        &lt;div class="form-floating">
            &lt;select class="form-select" id="floatingSelectGrid">
                &lt;option selected>Open this select menu&lt;/option>
                &lt;option value="1">One&lt;/option>
                &lt;option value="2">Two&lt;/option>
                &lt;option value="3">Three&lt;/option>
            &lt;/select>
            &lt;label for="floatingSelectGrid">Works with selects&lt;/label>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    floatingLabelColors = {
        script: `
&lt;div class="row gy-4">
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-primary">
            &lt;input type="email" class="form-control" id="floatingInputprimary"
                placeholder="name@example.com">
            &lt;label for="floatingInputprimary">primary&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-secondary">
            &lt;input type="email" class="form-control" id="floatingInputsecondary"
                placeholder="name@example.com">
            &lt;label for="floatingInputsecondary">secondary&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-warning">
            &lt;input type="email" class="form-control" id="floatingInputwarning"
                placeholder="name@example.com">
            &lt;label for="floatingInputwarning">warning&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-info">
            &lt;input type="email" class="form-control" id="floatingInputinfo" placeholder="name@example.com">
            &lt;label for="floatingInputinfo">info&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-success">
            &lt;input type="email" class="form-control" id="floatingInputsuccess"
                placeholder="name@example.com">
            &lt;label for="floatingInputsuccess">success&lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xl-4">
        &lt;div class="form-floating mb-4 floating-danger">
            &lt;input type="email" class="form-control" id="floatingInputdanger"
                placeholder="name@example.com">
            &lt;label for="floatingInputdanger">danger&lt;/label>
        &lt;/div>
    &lt;/div>
&lt;/div>` };