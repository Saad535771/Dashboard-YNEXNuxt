<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/form-layouts.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Form Layouts",
                list: [
                    'Forms', 'Form Layouts'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.verticalForms" title="Vertical Forms">
                <div class="mb-3">
                    <label for="form-text" class="form-label fs-14 text-dark">Enter name</label>
                    <input type="text" class="form-control" id="form-text" placeholder="full name">
                </div>
                <div class="mb-3">
                    <label for="form-password" class="form-label fs-14 text-dark">Enter
                        Password</label>
                    <input type="password" class="form-control" id="form-password" placeholder="password">
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        Accept Policy
                    </label>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.horizontalform" title="Horizontal form">
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3">
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Qualified</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                    value="option1" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Prelims
                                </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                    value="option3" disabled>
                                <label class="form-check-label" for="gridRadios2">
                                    Mains
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1">
                                <label class="form-check-label" for="gridCheck1">
                                    Certified
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.verticalFormswithicon" title="Vertical Forms with icon">
                <div class="mb-3">
                    <label for="form-text1" class="form-label fs-14 text-dark">Enter name</label>
                    <div class="input-group">
                        <div class="input-group-text"><i class="ri-user-line"></i></div>
                        <input type="text" class="form-control" id="form-text1" placeholder="">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="form-password1" class="form-label fs-14 text-dark">Enter
                        Password</label>
                    <div class="input-group">
                        <div class="input-group-text"><i class="ri-lock-line"></i></div>
                        <input type="password" class="form-control" id="form-password1" placeholder="">
                    </div>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck1" required>
                    <label class="form-check-label" for="invalidCheck1">
                        Accept Policy
                    </label>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.horizontalformWithIcons" title="Horizontal form With Icons">
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <input type="email" class="form-control" id="inputEmail1">
                                <div class="input-group-text">
                                    <i class="ri-mail-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <input type="password" class="form-control" id="inputPassword1">
                                <div class="input-group-text">
                                    <i class="ri-lock-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Qualified</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4"
                                    value="option1" checked>
                                <label class="form-check-label" for="gridRadios4">
                                    Prelims
                                </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                    value="option3" disabled>
                                <label class="form-check-label" for="gridRadios3">
                                    Mains
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck2">
                                <label class="form-check-label" for="gridCheck2">
                                    Certified
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.inlineforms" title="Inline forms">
                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                                placeholder="Username">
                        </div>
                    </div>
                    <div class="col-12">
                        <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                        <select class="form-select" id="inlineFormSelectPref">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                            <label class="form-check-label" for="inlineFormCheck">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.columnsizing" title="Column sizing">
                <div class="row g-3">
                    <div class="col-sm-7">
                        <input type="text" class="form-control" placeholder="City" aria-label="City">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" placeholder="State" aria-label="State">
                    </div>
                    <div class="col-sm">
                        <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.utilities" title="Utilities">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput"
                        placeholder="Example input placeholder">
                </div>
                <div class="mb-1">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2"
                        placeholder="Another input placeholder">
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.horizontalformlabelsizing" title="Horizontal form label sizing">
                <div class="row mb-3">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                            placeholder="col-form-label-sm">
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
                    </div>
                </div>
                <div class="row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control form-control-lg" id="colFormLabelLg"
                            placeholder="col-form-label-lg">
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.autosizing" title="Auto sizing">
                <form class="row gy-2 gx-3 align-items-center mb-4">
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
                        </div>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                        <select class="form-select" id="autoSizingSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                            <label class="form-check-label" for="autoSizingCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <span class="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific
                    column
                    classes.</span>
                <form class="row gx-3 gy-2 align-items-center mt-0">
                    <div class="col-sm-3">
                        <label class="visually-hidden" for="specificSizeInputName">Name</label>
                        <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
                    </div>
                    <div class="col-sm-3">
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <input type="text" class="form-control" id="specificSizeInputGroupUsername"
                                placeholder="Username">
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                        <select class="form-select" id="specificSizeSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                            <label class="form-check-label" for="autoSizingCheck2">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.formgrid" title="Form grid">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Address</label>
                        <div class="row">
                            <div class="col-xl-12 mb-3">
                                <input type="text" class="form-control" placeholder="Street" aria-label="Street">
                            </div>
                            <div class="col-xl-12 mb-3">
                                <input type="text" class="form-control" placeholder="Landmark" aria-label="Landmark">
                            </div>
                            <div class="col-xxl-6 col-xl-12 mb-3">
                                <input type="text" class="form-control" placeholder="City" aria-label="City">
                            </div>
                            <div class="col-xxl-6 col-xl-12 mb-3">
                                <select id="inputState1" class="form-select">
                                    <option selected>State</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-xxl-6 col-xl-12 mb-3">
                                <input type="text" class="form-control" placeholder="Postal/Zip code"
                                    aria-label="Postal/Zip code">
                            </div>
                            <div class="col-xxl-6 col-xl-12 mb-3">
                                <select id="inputCountry" class="form-select">
                                    <option selected>Country</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="row">
                            <div class="col-xl-12 mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Email" aria-label="email">
                            </div>
                            <div class="col-xl-12 mb-3">
                                <label class="form-label">D.O.B</label>
                                <input type="date" class="form-control" aria-label="dateofbirth">
                            </div>
                            <div class="col-xl-12 mb-3">
                                <div class="row">
                                    <label class="form-label mb-1">Maritial Status</label>
                                    <div class="col-xl-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Married
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" checked>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Single
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12">

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Contact Number</label>
                        <input type="number" class="form-control" placeholder="Phone number" aria-label="Phone number">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Alternative Contact</label>
                        <input type="number" class="form-control" placeholder="Phone number" aria-label="Phone number">
                    </div>
                    <div class="col-md-12">
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.gutters" title="Gutters">
                <form class="row g-3 mt-0">
                    <div class="col-md-6">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email id">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2"
                            placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select form-select-lg">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck3">
                            <label class="form-check-label" for="gridCheck3">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-6 -->
</template>

<style scoped></style>

