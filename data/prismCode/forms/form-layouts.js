export let
    verticalForms = {
        script: `
    &lt;div class="mb-3">
        &lt;label for="form-text" class="form-label fs-14 text-dark">Enter name&lt;/label>
        &lt;input type="text" class="form-control" id="form-text" placeholder="full name">
    &lt;/div>
    &lt;div class="mb-3">
        &lt;label for="form-password" class="form-label fs-14 text-dark">Enter
            Password&lt;/label>
        &lt;input type="password" class="form-control" id="form-password" placeholder="password">
    &lt;/div>
    &lt;div class="form-check mb-3">
        &lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        &lt;label class="form-check-label" for="invalidCheck">
            Accept Policy
        &lt;/label>
    &lt;/div>
    &lt;button class="btn btn-primary" type="submit">Submit&lt;/button>` },
    horizontalform = {
        script: `
    &lt;form>
        &lt;div class="row mb-3">
            &lt;label for="inputEmail3" class="col-sm-2 col-form-label">Email&lt;/label>
            &lt;div class="col-sm-10">
                &lt;input type="email" class="form-control" id="inputEmail3">
            &lt;/div>
        &lt;/div>
        &lt;div class="row mb-3">
            &lt;label for="inputPassword3" class="col-sm-2 col-form-label">Password&lt;/label>
            &lt;div class="col-sm-10">
                &lt;input type="password" class="form-control" id="inputPassword3">
            &lt;/div>
        &lt;/div>
        &lt;fieldset class="row mb-3">
            &lt;legend class="col-form-label col-sm-2 pt-0">Qualified&lt;/legend>
            &lt;div class="col-sm-10">
                &lt;div class="form-check">
                    &lt;input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                        value="option1" checked>
                    &lt;label class="form-check-label" for="gridRadios1">
                        Prelims
                    &lt;/label>
                &lt;/div>
                &lt;div class="form-check disabled">
                    &lt;input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                        value="option3" disabled>
                    &lt;label class="form-check-label" for="gridRadios2">
                        Mains
                    &lt;/label>
                &lt;/div>
                &lt;div class="form-check">
                    &lt;input class="form-check-input" type="checkbox" id="gridCheck1">
                    &lt;label class="form-check-label" for="gridCheck1">
                        Certified
                    &lt;/label>
                &lt;/div>
            &lt;/div>
        &lt;/fieldset>
        &lt;button type="submit" class="btn btn-primary">Sign in&lt;/button>
    &lt;/form>` },
    verticalFormswithicon = {
        script: `
    &lt;div class="mb-3">
        &lt;label for="form-text1" class="form-label fs-14 text-dark">Enter name&lt;/label>
        &lt;div class="input-group">
            &lt;div class="input-group-text">&lt;i class="ri-user-line">&lt;/i>&lt;/div>
            &lt;input type="text" class="form-control" id="form-text1" placeholder="">
        &lt;/div>
    &lt;/div>
    &lt;div class="mb-3">
        &lt;label for="form-password1" class="form-label fs-14 text-dark">Enter
            Password&lt;/label>
        &lt;div class="input-group">
            &lt;div class="input-group-text">&lt;i class="ri-lock-line">&lt;/i>&lt;/div>
            &lt;input type="password" class="form-control" id="form-password1" placeholder="">
        &lt;/div>
    &lt;/div>
    &lt;div class="form-check mb-3">
        &lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck1" required>
        &lt;label class="form-check-label" for="invalidCheck1">
            Accept Policy
        &lt;/label>
    &lt;/div>
    &lt;button class="btn btn-primary" type="submit">Submit&lt;/button>` },
    horizontalformWithIcons = {
        script: `
    &lt;form>
        &lt;div class="row mb-3">
            &lt;label for="inputEmail1" class="col-sm-2 col-form-label">Email&lt;/label>
            &lt;div class="col-sm-10">
                &lt;div class="input-group">
                    &lt;input type="email" class="form-control" id="inputEmail1">
                    &lt;div class="input-group-text">
                        &lt;i class="ri-mail-line">&lt;/i>
                    &lt;/div>
                &lt;/div>
            &lt;/div>
        &lt;/div>
        &lt;div class="row mb-3">
            &lt;label for="inputPassword1" class="col-sm-2 col-form-label">Password&lt;/label>
            &lt;div class="col-sm-10">
                &lt;div class="input-group">
                    &lt;input type="password" class="form-control" id="inputPassword1">
                    &lt;div class="input-group-text">
                        &lt;i class="ri-lock-line">&lt;/i>
                    &lt;/div>
                &lt;/div>
            &lt;/div>
        &lt;/div>
        &lt;fieldset class="row mb-3">
            &lt;legend class="col-form-label col-sm-2 pt-0">Qualified&lt;/legend>
            &lt;div class="col-sm-10">
                &lt;div class="form-check">
                    &lt;input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4"
                        value="option1" checked>
                    &lt;label class="form-check-label" for="gridRadios4">
                        Prelims
                    &lt;/label>
                &lt;/div>
                &lt;div class="form-check disabled">
                    &lt;input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                        value="option3" disabled>
                    &lt;label class="form-check-label" for="gridRadios3">
                        Mains
                    &lt;/label>
                &lt;/div>
                &lt;div class="form-check">
                    &lt;input class="form-check-input" type="checkbox" id="gridCheck2">
                    &lt;label class="form-check-label" for="gridCheck2">
                        Certified
                    &lt;/label>
                &lt;/div>
            &lt;/div>
        &lt;/fieldset>
        &lt;button type="submit" class="btn btn-primary">Sign in&lt;/button>
    &lt;/form>` },
    inlineforms = {
        script: `
    &lt;form class="row row-cols-lg-auto g-3 align-items-center">
        &lt;div class="col-12">
            &lt;label class="visually-hidden" for="inlineFormInputGroupUsername">Username&lt;/label>
            &lt;div class="input-group">
                &lt;div class="input-group-text">@&lt;/div>
                &lt;input type="text" class="form-control" id="inlineFormInputGroupUsername"
                    placeholder="Username">
            &lt;/div>
        &lt;/div>
        &lt;div class="col-12">
            &lt;label class="visually-hidden" for="inlineFormSelectPref">Preference&lt;/label>
            &lt;select class="form-select" id="inlineFormSelectPref">
                &lt;option selected>Choose...&lt;/option>
                &lt;option value="1">One&lt;/option>
                &lt;option value="2">Two&lt;/option>
                &lt;option value="3">Three&lt;/option>
            &lt;/select>
        &lt;/div>
        &lt;div class="col-12">
            &lt;div class="form-check">
                &lt;input class="form-check-input" type="checkbox" id="inlineFormCheck">
                &lt;label class="form-check-label" for="inlineFormCheck">
                    Remember me
                &lt;/label>
            &lt;/div>
        &lt;/div>

        &lt;div class="col-12">
            &lt;button type="submit" class="btn btn-primary">Submit&lt;/button>
        &lt;/div>
    &lt;/form>` },
    columnsizing = {
        script: `
    &lt;div class="row g-3">
        &lt;div class="col-sm-7">
            &lt;input type="text" class="form-control" placeholder="City" aria-label="City">
        &lt;/div>
        &lt;div class="col-sm">
            &lt;input type="text" class="form-control" placeholder="State" aria-label="State">
        &lt;/div>
        &lt;div class="col-sm">
            &lt;input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
        &lt;/div>
    &lt;/div>` },
    utilities = {
        script: `
    &lt;div class="mb-3">
        &lt;label for="formGroupExampleInput" class="form-label">Example label&lt;/label>
        &lt;input type="text" class="form-control" id="formGroupExampleInput"
            placeholder="Example input placeholder">
    &lt;/div>
    &lt;div class="mb-1">
        &lt;label for="formGroupExampleInput2" class="form-label">Another label&lt;/label>
        &lt;input type="text" class="form-control" id="formGroupExampleInput2"
            placeholder="Another input placeholder">
    &lt;/div>` },
    horizontalformlabelsizing = {
        script: `
    &lt;div class="row mb-3">
        &lt;label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email&lt;/label>
        &lt;div class="col-sm-10">
            &lt;input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                placeholder="col-form-label-sm">
        &lt;/div>
    &lt;/div>
    &lt;div class="row mb-3">
        &lt;label for="colFormLabel" class="col-sm-2 col-form-label">Email&lt;/label>
        &lt;div class="col-sm-10">
            &lt;input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
        &lt;/div>
    &lt;/div>
    &lt;div class="row">
        &lt;label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email&lt;/label>
        &lt;div class="col-sm-10">
            &lt;input type="email" class="form-control form-control-lg" id="colFormLabelLg"
                placeholder="col-form-label-lg">
        &lt;/div>
    &lt;/div>` },
    autosizing = {
        script: `&lt;form class="row gy-2 gx-3 align-items-center mb-4">
    &lt;div class="col-auto">
        &lt;label class="visually-hidden" for="autoSizingInput">Name&lt;/label>
        &lt;input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
    &lt;/div>
    &lt;div class="col-auto">
        &lt;label class="visually-hidden" for="autoSizingInputGroup">Username&lt;/label>
        &lt;div class="input-group">
            &lt;div class="input-group-text">@&lt;/div>
            &lt;input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
        &lt;/div>
    &lt;/div>
    &lt;div class="col-auto">
        &lt;label class="visually-hidden" for="autoSizingSelect">Preference&lt;/label>
        &lt;select class="form-select" id="autoSizingSelect">
            &lt;option selected>Choose...&lt;/option>
            &lt;option value="1">One&lt;/option>
            &lt;option value="2">Two&lt;/option>
            &lt;option value="3">Three&lt;/option>
        &lt;/select>
    &lt;/div>
    &lt;div class="col-auto">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" id="autoSizingCheck">
            &lt;label class="form-check-label" for="autoSizingCheck">
                Remember me
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-auto">
        &lt;button type="submit" class="btn btn-primary">Submit&lt;/button>
    &lt;/div>
&lt;/form>
&lt;span class="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific
    column
    classes.&lt;/span>
&lt;form class="row gx-3 gy-2 align-items-center mt-0">
    &lt;div class="col-sm-3">
        &lt;label class="visually-hidden" for="specificSizeInputName">Name&lt;/label>
        &lt;input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
    &lt;/div>
    &lt;div class="col-sm-3">
        &lt;label class="visually-hidden" for="specificSizeInputGroupUsername">Username&lt;/label>
        &lt;div class="input-group">
            &lt;div class="input-group-text">@&lt;/div>
            &lt;input type="text" class="form-control" id="specificSizeInputGroupUsername"
                placeholder="Username">
        &lt;/div>
    &lt;/div>
    &lt;div class="col-sm-3">
        &lt;label class="visually-hidden" for="specificSizeSelect">Preference&lt;/label>
        &lt;select class="form-select" id="specificSizeSelect">
            &lt;option selected>Choose...&lt;/option>
            &lt;option value="1">One&lt;/option>
            &lt;option value="2">Two&lt;/option>
            &lt;option value="3">Three&lt;/option>
        &lt;/select>
    &lt;/div>
    &lt;div class="col-auto">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" id="autoSizingCheck2">
            &lt;label class="form-check-label" for="autoSizingCheck2">
                Remember me
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-auto">
        &lt;button type="submit" class="btn btn-primary">Submit&lt;/button>
    &lt;/div>
&lt;/form>` },
    formgrid = {
        script: `&lt;div class="row">
    &lt;div class="col-md-6 mb-3">
        &lt;label class="form-label">First Name&lt;/label>
        &lt;input type="text" class="form-control" placeholder="First name" aria-label="First name">
    &lt;/div>
    &lt;div class="col-md-6 mb-3">
        &lt;label class="form-label">Last Name&lt;/label>
        &lt;input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
    &lt;/div>
    &lt;div class="col-md-6 mb-3">
        &lt;label class="form-label">Address&lt;/label>
        &lt;div class="row">
            &lt;div class="col-xl-12 mb-3">
                &lt;input type="text" class="form-control" placeholder="Street" aria-label="Street">
            &lt;/div>
            &lt;div class="col-xl-12 mb-3">
                &lt;input type="text" class="form-control" placeholder="Landmark" aria-label="Landmark">
            &lt;/div>
            &lt;div class="col-xxl-6 col-xl-12 mb-3">
                &lt;input type="text" class="form-control" placeholder="City" aria-label="City">
            &lt;/div>
            &lt;div class="col-xxl-6 col-xl-12 mb-3">
                &lt;select id="inputState1" class="form-select">
                    &lt;option selected>State&lt;/option>
                    &lt;option>...&lt;/option>
                &lt;/select>
            &lt;/div>
            &lt;div class="col-xxl-6 col-xl-12 mb-3">
                &lt;input type="text" class="form-control" placeholder="Postal/Zip code"
                    aria-label="Postal/Zip code">
            &lt;/div>
            &lt;div class="col-xxl-6 col-xl-12 mb-3">
                &lt;select id="inputCountry" class="form-select">
                    &lt;option selected>Country&lt;/option>
                    &lt;option>...&lt;/option>
                &lt;/select>
            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-6 mb-3">
        &lt;div class="row">
            &lt;div class="col-xl-12 mb-3">
                &lt;label class="form-label">Email&lt;/label>
                &lt;input type="email" class="form-control" placeholder="Email" aria-label="email">
            &lt;/div>
            &lt;div class="col-xl-12 mb-3">
                &lt;label class="form-label">D.O.B&lt;/label>
                &lt;input type="date" class="form-control" aria-label="dateofbirth">
            &lt;/div>
            &lt;div class="col-xl-12 mb-3">
                &lt;div class="row">
                    &lt;label class="form-label mb-1">Maritial Status&lt;/label>
                    &lt;div class="col-xl-6">
                        &lt;div class="form-check">
                            &lt;input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">
                            &lt;label class="form-check-label" for="flexRadioDefault1">
                                Married
                            &lt;/label>
                        &lt;/div>
                    &lt;/div>
                    &lt;div class="col-xl-6">
                        &lt;div class="form-check">
                            &lt;input class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" checked>
                            &lt;label class="form-check-label" for="flexRadioDefault2">
                                Single
                            &lt;/label>
                        &lt;/div>
                    &lt;/div>
                &lt;/div>
            &lt;/div>
            &lt;div class="col-xl-12">

            &lt;/div>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-6 mb-3">
        &lt;label class="form-label">Contact Number&lt;/label>
        &lt;input type="number" class="form-control" placeholder="Phone number" aria-label="Phone number">
    &lt;/div>
    &lt;div class="col-md-6 mb-3">
        &lt;label class="form-label">Alternative Contact&lt;/label>
        &lt;input type="number" class="form-control" placeholder="Phone number" aria-label="Phone number">
    &lt;/div>
    &lt;div class="col-md-12">
        &lt;div class="form-check mb-3">
            &lt;input class="form-check-input" type="checkbox" id="gridCheck">
            &lt;label class="form-check-label" for="gridCheck">
                Check me out
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-md-12">
        &lt;button type="submit" class="btn btn-primary">Sign in&lt;/button>
    &lt;/div>
&lt;/div>` },
    gutters = {
        script: `&lt;form class="row g-3 mt-0">
    &lt;div class="col-md-6">
        &lt;label class="form-label">First Name&lt;/label>
        &lt;input type="text" class="form-control" placeholder="First name" aria-label="First name">
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label class="form-label">Last Name&lt;/label>
        &lt;input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="inputEmail4" class="form-label">Email&lt;/label>
        &lt;input type="email" class="form-control" id="inputEmail4" placeholder="Email id">
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="inputPassword4" class="form-label">Password&lt;/label>
        &lt;input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    &lt;/div>
    &lt;div class="col-12">
        &lt;label for="inputAddress" class="form-label">Address&lt;/label>
        &lt;input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    &lt;/div>
    &lt;div class="col-12">
        &lt;label for="inputAddress2" class="form-label">Address 2&lt;/label>
        &lt;input type="text" class="form-control" id="inputAddress2"
            placeholder="Apartment, studio, or floor">
    &lt;/div>
    &lt;div class="col-md-6">
        &lt;label for="inputCity" class="form-label">City&lt;/label>
        &lt;input type="text" class="form-control" id="inputCity">
    &lt;/div>
    &lt;div class="col-md-4">
        &lt;label for="inputState" class="form-label">State&lt;/label>
        &lt;select id="inputState" class="form-select form-select-lg">
            &lt;option selected>Choose...&lt;/option>
            &lt;option>...&lt;/option>
        &lt;/select>
    &lt;/div>
    &lt;div class="col-md-2">
        &lt;label for="inputZip" class="form-label">Zip&lt;/label>
        &lt;input type="text" class="form-control" id="inputZip">
    &lt;/div>
    &lt;div class="col-12">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" id="gridCheck3">
            &lt;label class="form-check-label" for="gridCheck3">
                Check me out
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;div class="col-12">
        &lt;button type="submit" class="btn btn-primary">Sign in&lt;/button>
    &lt;/div>
&lt;/form>` };