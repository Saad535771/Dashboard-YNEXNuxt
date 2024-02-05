<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Mail Settings",
                list: [
                    'Pages', 'Email', 'Mail Settings'
                ]
            },
            languageSelect: null,
            languageOptions: ['English', 'French', 'Arabic', 'Hindi'],
            countrySelect: null,
            countryOptions: ['Usa', 'Australia', 'Dubai'],
            perPageSelect: null,
            perPageOptions: ['10', '50', '100', '120'],
            loginAttemptsSelect: null,
            loginAttemptsOptions: ['3 Attempts', '5 Attempts', '10 Attempts', '20 Attempts'],
            freezeSelect: null,
            freezeOptions: ['1 Day', '1 Hour', '1 Day', '1 Year'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row mb-5">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header d-sm-flex d-block">
                    <ul class="nav nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                        <li class="nav-item m-1">
                            <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                href="#personal-info" aria-selected="true">Personal Information</a>
                        </li>
                        <li class="nav-item m-1">
                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#account-settings"
                                aria-selected="true">Account Settings</a>
                        </li>
                        <li class="nav-item m-1">
                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#email-settings"
                                aria-selected="true">Email</a>
                        </li>
                        <li class="nav-item m-1">
                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#labels"
                                aria-selected="true">Labels</a>
                        </li>
                        <li class="nav-item m-1">
                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                href="#notification-settings" aria-selected="true">Notifications</a>
                        </li>
                        <li class="nav-item m-1">
                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#security"
                                aria-selected="true">Security</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane show active" id="personal-info" role="tabpanel">
                            <div class="p-sm-3 p-0">
                                <h6 class="fw-semibold mb-3">
                                    Photo :
                                </h6>
                                <div class="mb-4 d-sm-flex align-items-center">
                                    <div class="mb-0 me-5">
                                        <span class="avatar avatar-xxl avatar-rounded">
                                            <img src="/images/faces/9.jpg" alt="" id="profile-img">
                                            <a href="javascript:void(0);"
                                                class="badge rounded-pill bg-primary avatar-badge">
                                                <input type="file" name="photo" class="position-absolute w-100 h-100 op-0"
                                                    id="profile-change">
                                                <i class="fe fe-camera"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn btn-primary">Change</button>
                                        <button class="btn btn-light">Remove</button>
                                    </div>
                                </div>
                                <h6 class="fw-semibold mb-3">
                                    Profile :
                                </h6>
                                <div class="row gy-4 mb-4">
                                    <div class="col-xl-6">
                                        <label for="first-name" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="first-name" placeholder="Firt Name">
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="last-name" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="last-name" placeholder="Last Name">
                                    </div>
                                    <div class="col-xl-12">
                                        <label class="form-label">User Name</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">user2413@gmail.com</span>
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3">
                                        </div>
                                    </div>
                                </div>
                                <h6 class="fw-semibold mb-3">
                                    Personal information :
                                </h6>
                                <div class="row gy-4 mb-4">
                                    <div class="col-xl-6">
                                        <label for="email-address" class="form-label">Email Address :</label>
                                        <input type="text" class="form-control" id="email-address"
                                            placeholder="xyz@gmail.com">
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="Contact-Details" class="form-label">Contact Details :</label>
                                        <input type="text" class="form-control" id="Contact-Details"
                                            placeholder="contact details">
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="language" class="form-label">Language :</label>

                                        <VueMultiselect :show-labels="false" :options="languageOptions" :multiple="true"
                                            v-model="languageSelect">
                                        </VueMultiselect>
                                    </div>
                                    <div class="col-xl-6">
                                        <label class="form-label">Country :</label>

                                        <VueMultiselect :show-labels="false" :options="countryOptions" :multiple="false"
                                            v-model="countrySelect">
                                        </VueMultiselect>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="bio" class="form-label">Bio :</label>
                                        <textarea class="form-control" id="bio"
                                            rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="account-settings" role="tabpanel">
                            <div class="row gap-3 justify-content-between">
                                <div class="col-xl-7">
                                    <div class="card custom-card shadow-none mb-0 border">
                                        <div class="card-body">
                                            <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Two Step Verification</p>
                                                    <p class="fs-12 text-muted mb-0">Two step verificatoin is very secured
                                                        and restricts in happening faulty practices.</p>
                                                </div>
                                                <div class="custom-toggle-switch ms-sm-2 ms-0">
                                                    <input id="two-step" name="toggleswitchsize" type="checkbox" checked>
                                                    <label for="two-step" class="label-primary mb-1"></label>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                <div class="mb-sm-0 mb-2">
                                                    <p class="fs-14 mb-2 fw-semibold">Authentication</p>
                                                    <div class="mb-0 authentication-btn-group">
                                                        <div class="btn-group" role="group"
                                                            aria-label="Basic radio toggle button group">
                                                            <input type="radio" class="btn-check" name="btnradio"
                                                                id="btnradio1" checked>
                                                            <label class="btn btn-outline-primary" for="btnradio1"><i
                                                                    class="ri-lock-unlock-line me-1 align-middle"></i>Pin</label>
                                                            <input type="radio" class="btn-check" name="btnradio"
                                                                id="btnradio2">
                                                            <label class="btn btn-outline-primary" for="btnradio2"><i
                                                                    class="ri-lock-password-line me-1 align-middle"></i>Password</label>
                                                            <input type="radio" class="btn-check" name="btnradio"
                                                                id="btnradio3">
                                                            <label class="btn btn-outline-primary" for="btnradio3"><i
                                                                    class="ri-fingerprint-line me-1 align-middle"></i>Finger
                                                                Print</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="custom-toggle-switch ms-sm-2 ms-0">
                                                    <input id="authentication" name="toggleswitchsize" type="checkbox"
                                                        checked>
                                                    <label for="authentication" class="label-primary mb-1"></label>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Recovery Mail</p>
                                                    <p class="fs-12 text-muted mb-0">Incase of forgetting password mails are
                                                        sent to heifo@gmail.com</p>
                                                </div>
                                                <div class="custom-toggle-switch ms-sm-2 ms-0">
                                                    <input id="recovery-mail" name="toggleswitchsize" type="checkbox"
                                                        checked>
                                                    <label for="recovery-mail" class="label-primary mb-1"></label>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">SMS Recovery</p>
                                                    <p class="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of
                                                        recovery</p>
                                                </div>
                                                <div class="custom-toggle-switch ms-sm-2 ms-0">
                                                    <input id="sms-recovery" name="toggleswitchsize" type="checkbox"
                                                        checked>
                                                    <label for="sms-recovery" class="label-primary mb-1"></label>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Reset Password</p>
                                                    <p class="fs-12 text-muted">Password should be min of <b
                                                            class="text-success">8 digits<sup>*</sup></b>,atleast <b
                                                            class="text-success">One Capital letter<sup>*</sup></b> and <b
                                                            class="text-success">One Special Character<sup>*</sup></b>
                                                        included.</p>
                                                    <div class="mb-2">
                                                        <label for="current-password" class="form-label">Current
                                                            Password</label>
                                                        <input type="text" class="form-control" id="current-password"
                                                            placeholder="Current Password">
                                                    </div>
                                                    <div class="mb-2">
                                                        <label for="new-password" class="form-label">New Password</label>
                                                        <input type="text" class="form-control" id="new-password"
                                                            placeholder="New Password">
                                                    </div>
                                                    <div class="mb-0">
                                                        <label for="confirm-password" class="form-label">Confirm
                                                            Password</label>
                                                        <input type="text" class="form-control" id="confirm-password"
                                                            placeholder="Confirm PAssword">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="card custom-card shadow-none mb-0 border">
                                        <div class="card-header justify-content-between d-sm-flex d-block">
                                            <div class="card-title">Registered Devices</div>
                                            <div class="mt-sm-0 mt-2">
                                                <button class="btn btn-sm btn-primary">Signout from all devices</button>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <div class="d-sm-flex d-block align-items-top">
                                                        <div class="lh-1 mb-sm-0 mb-2"><i
                                                                class="bi bi-phone me-2 fs-16 align-middle text-muted"></i>
                                                        </div>
                                                        <div class="lh-1 flex-fill">
                                                            <p class="mb-1">
                                                                <span class="fw-semibold">Mobile-LG-1023</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="text-muted fs-11">Manchester, UK-Nov 30,
                                                                    04:45PM</span>
                                                            </p>
                                                        </div>
                                                        <div class="dropdown mt-sm-0 mt-2">
                                                            <a href="javascript:void(0);"
                                                                class="btn btn-icon btn-sm btn-light"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Another action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Something else here</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="d-sm-flex d-block align-items-top">
                                                        <div class="lh-1 mb-sm-0 mb-2"><i
                                                                class="bi bi-laptop me-2 fs-16 align-middle text-muted"></i>
                                                        </div>
                                                        <div class="lh-1 flex-fill">
                                                            <p class="mb-1">
                                                                <span class="fw-semibold">Lenovo-1291203</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="text-muted fs-11">England, UK-Aug 12,
                                                                    12:25PM</span>
                                                            </p>
                                                        </div>
                                                        <div class="dropdown mt-sm-0 mt-2">
                                                            <a href="javascript:void(0);"
                                                                class="btn btn-icon btn-sm btn-light"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Another action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Something else here</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="d-sm-flex d-block align-items-top">
                                                        <div class="lh-1 mb-sm-0 mb-2"><i
                                                                class="bi bi-laptop me-2 fs-16 align-middle text-muted"></i>
                                                        </div>
                                                        <div class="lh-1 flex-fill">
                                                            <p class="mb-1">
                                                                <span class="fw-semibold">Macbook-Suzika</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="text-muted fs-11">Brightoon, UK-Jul 18,
                                                                    8:34AM</span>
                                                            </p>
                                                        </div>
                                                        <div class="dropdown mt-sm-0 mt-2">
                                                            <a href="javascript:void(0);"
                                                                class="btn btn-icon btn-sm btn-light"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Another action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Something else here</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="d-sm-flex d-block align-items-top">
                                                        <div class="lh-1 mb-sm-0 mb-2"><i
                                                                class="bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted"></i>
                                                        </div>
                                                        <div class="lh-1 flex-fill">
                                                            <p class="mb-1">
                                                                <span class="fw-semibold">Apple-Desktop</span>
                                                            </p>
                                                            <p class="mb-0">
                                                                <span class="text-muted fs-11">Darlington, UK-Jan 14,
                                                                    11:14AM</span>
                                                            </p>
                                                        </div>
                                                        <div class="dropdown mt-sm-0 mt-2">
                                                            <a href="javascript:void(0);"
                                                                class="btn btn-icon btn-sm btn-light"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Another action</a></li>
                                                                <li><a class="dropdown-item"
                                                                        href="javascript:void(0);">Something else here</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane p-0" id="email-settings" role="tabpanel">
                            <ul class="list-group list-group-flush rounded-3">
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                            <span class="fs-14 fw-semibold mb-0">Menu View :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Default View
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Advanced View
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="menu-view" name="toggleswitchsize" type="checkbox" checked>
                                                <label for="menu-view" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-3 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Language :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <label for="mail-language" class="form-label">Languages :</label>

                                            <VueMultiselect :show-labels="false" :options="languageOptions"
                                                :multiple="false" v-model="languageSelect">
                                            </VueMultiselect>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="mail-languages" name="toggleswitchsize" type="checkbox">
                                                <label for="mail-languages" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Images :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="images-open"
                                                    id="images-open1">
                                                <label class="form-check-label" for="images-open1">
                                                    Always Open Images
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="images-open"
                                                    id="images-hide2" checked>
                                                <label class="form-check-label" for="images-hide2">
                                                    Ask For Permission
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="mails-images" name="toggleswitchsize" type="checkbox">
                                                <label for="mails-images" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Keyboard Shortcuts :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="keyboard-enable"
                                                    id="keyboard-enable1">
                                                <label class="form-check-label" for="keyboard-enable1">
                                                    Keyboard Shortcuts Enable
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="keyboard-enable"
                                                    id="keyboard-disable2" checked>
                                                <label class="form-check-label" for="keyboard-disable2">
                                                    Keyboard Shortcuts Disable
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="keyboard-shortcuts" name="toggleswitchsize" type="checkbox">
                                                <label for="keyboard-shortcuts" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Notifications :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="desktop-notifications" checked>
                                                <label class="form-check-label" for="desktop-notifications">
                                                    Desktop Notifications
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="mobile-notifications">
                                                <label class="form-check-label" for="mobile-notifications">
                                                    Mobile Notifications
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="float-sm-end">
                                                <a href="javascript:void(0)"
                                                    class="btn btn-success-ghost btn-sm">Learn-more</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-3 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Maximum Mails Per Page :</span>
                                        </div>
                                        <div class="col-xl-4">

                                            <VueMultiselect :show-labels="false" :options="perPageOptions" :multiple="false"
                                                v-model="perPageSelect">
                                            </VueMultiselect>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="mails-per-page" name="toggleswitchsize" type="checkbox">
                                                <label for="mails-per-page" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Mail Composer :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="mail-composer"
                                                    id="mail-composeron1">
                                                <label class="form-check-label" for="mail-composeron1">
                                                    Mail Composer On
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="mail-composer"
                                                    id="mail-composeroff2" checked>
                                                <label class="form-check-label" for="mail-composeroff2">
                                                    Mail Composer Off
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="mail-composer" name="toggleswitchsize" type="checkbox">
                                                <label for="mail-composer" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Auto Correct :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="auto-correct"
                                                    id="auto-correcton1">
                                                <label class="form-check-label" for="auto-correcton1">
                                                    Auto Correct On
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="auto-correct"
                                                    id="auto-correctoff2" checked>
                                                <label class="form-check-label" for="auto-correctoff2">
                                                    Auto Correct Off
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="custom-toggle-switch float-sm-end">
                                                <input id="auto-correct" name="toggleswitchsize" type="checkbox">
                                                <label for="auto-correct" class="label-danger mb-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                                        <div class="col-xl-3">
                                            <span class="fs-14 fw-semibold mb-0">Mail Send Action :</span>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="on-keyboard"
                                                    checked>
                                                <label class="form-check-label" for="on-keyboard">
                                                    On Keyboard Action
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="on-buttonclick">
                                                <label class="form-check-label" for="on-buttonclick">
                                                    On Button Click
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="float-sm-end">
                                                <a href="javascript:void(0)"
                                                    class="btn btn-success-ghost btn-sm">Learn-more</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="labels" role="tabpanel">
                            <p class="fs-14 fw-semibold mb-3">Mail Labels :</p>
                            <div class="row gy-2">
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">All Mails</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-allmails"
                                                        id="all-mails-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="all-mails-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-allmails"
                                                        id="all-mails-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="all-mails-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Inbox</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-inbox"
                                                        id="inbox-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="inbox-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-inbox"
                                                        id="inbox-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="inbox-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Sent</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-sent" id="sent-enable"
                                                        checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="sent-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-sent"
                                                        id="sent-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="sent-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Drafts</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-drafts"
                                                        id="drafts-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="drafts-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-drafts"
                                                        id="drafts-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="drafts-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Spam</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-spam" id="spam-enable"
                                                        checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="spam-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-spam"
                                                        id="spam-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="spam-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Important</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-important"
                                                        id="important-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="important-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-important"
                                                        id="important-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="important-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Trash</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-trash"
                                                        id="trash-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="trash-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-trash"
                                                        id="trash-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="trash-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Archive</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-archive"
                                                        id="archive-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="archive-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-archive"
                                                        id="archive-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="archive-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Starred</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-starred"
                                                        id="starred-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="starred-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-starred"
                                                        id="starred-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="starred-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="fs-14 fw-semibold mb-3">Settings :</p>
                            <div class="row gy-2">
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Settings</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-settings"
                                                        id="settings-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="settings-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-settings"
                                                        id="settings-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="settings-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="fs-14 fw-semibold mb-3">Custom Labels :</p>
                            <div class="row gy-2">
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Mail</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-custom-mail"
                                                        id="custom-mail-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="custom-mail-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-custom-mail"
                                                        id="custom-mail-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="custom-mail-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Home</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-home" id="home-enable"
                                                        checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="home-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-home"
                                                        id="home-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="home-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Work</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-work" id="work-enable"
                                                        checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="work-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-work"
                                                        id="work-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="work-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3">
                                    <div class="card custom-card shadow-none border">
                                        <div
                                            class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div class="">
                                                <span class="fw-semibold">Friends</span>
                                            </div>
                                            <div>
                                                <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="label-friends"
                                                        id="friends-enable" checked>
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="friends-enable">Enable</label>
                                                    <input type="radio" class="btn-check" name="label-friends"
                                                        id="friends-disable">
                                                    <label class="btn btn-sm btn-outline-primary"
                                                        for="friends-disable">Disable</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane p-0" id="notification-settings" role="tabpanel">
                            <ul class="list-group list-group-flush list-unstyled rounded-3">
                                <li class="list-group-item">
                                    <div class="row gx-5 gy-3">
                                        <div class="col-xl-5">
                                            <p class="fs-16 mb-1 fw-semibold">Email Notifications</p>
                                            <p class="fs-12 mb-0 text-muted">Email notifications are the notifications you
                                                will receeive when you are offline, you can customize them by enabling or
                                                disabling them.</p>
                                        </div>
                                        <div class="col-xl-7">
                                            <div class="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Updates & Features</p>
                                                    <p class="fs-12 mb-0 text-muted">Notifications about new updates and
                                                        their features.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="update-features" name="toggleswitchsize" type="checkbox"
                                                            checked>
                                                        <label for="update-features" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Early Access</p>
                                                    <p class="fs-12 mb-0 text-muted">Users are selected for beta testing of
                                                        new update,notifications relating or participate in any of paid
                                                        product promotion.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="early-access" name="toggleswitchsize" type="checkbox">
                                                        <label for="early-access" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Email Shortcuts</p>
                                                    <p class="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="email-shortcut" name="toggleswitchsize" type="checkbox"
                                                            checked>
                                                        <label for="email-shortcut" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">New Mails</p>
                                                    <p class="fs-12 mb-0 text-muted">Notifications related to new mails
                                                        received.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="new-mails" name="toggleswitchsize" type="checkbox"
                                                            checked>
                                                        <label for="new-mails" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
                                                    <p class="fs-12 mb-0 text-muted">Any of new messages are received will
                                                        be updated through notifications.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="mail-chat-messages" name="toggleswitchsize"
                                                            type="checkbox" checked>
                                                        <label for="mail-chat-messages" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gx-5 gy-3">
                                        <div class="col-xl-5">
                                            <p class="fs-16 mb-1 fw-semibold">Push Notifications</p>
                                            <p class="fs-12 mb-0 text-muted">Push notifications are recieved when you are
                                                online, you can customize them by enabling or disabling them.</p>
                                        </div>
                                        <div class="col-xl-7">
                                            <div class="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">New Mails</p>
                                                    <p class="fs-12 mb-0 text-muted">Notifications related to new mails
                                                        received.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="push-new-mails" name="toggleswitchsize" type="checkbox"
                                                            checked>
                                                        <label for="push-new-mails" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
                                                    <p class="fs-12 mb-0 text-muted">Any of new messages are received will
                                                        be updated through notifications.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="push-mail-chat-messages" name="toggleswitchsize"
                                                            type="checkbox" checked>
                                                        <label for="push-mail-chat-messages"
                                                            class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-top justify-content-between mt-3">
                                                <div class="mail-notification-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Mail Extensions</p>
                                                    <p class="fs-12 mb-0 text-muted">Notifications related to the extensions
                                                        received by new emails and thier propertied also been displayed.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="mail-extensions" name="toggleswitchsize" type="checkbox">
                                                        <label for="mail-extensions" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane p-0" id="security" role="tabpanel">
                            <ul class="list-group list-group-flush list-unstyled rounded-3">
                                <li class="list-group-item">
                                    <div class="row gx-5 gy-3">
                                        <div class="col-xl-4">
                                            <p class="fs-16 mb-1 fw-semibold">Logging In</p>
                                            <p class="fs-12 mb-0 text-muted">Security settings related to logging into our
                                                email account and taking down account if any mischevious action happended.
                                            </p>
                                        </div>
                                        <div class="col-xl-8">
                                            <div
                                                class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                <div class="mail-security-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Max Limit for login attempts</p>
                                                    <p class="fs-12 mb-0 text-muted">Account will freeze for 24hrs while
                                                        attempt to login with wrong credentials for selected number of times
                                                    </p>
                                                </div>
                                                <div>

                                                    <VueMultiselect :show-labels="false" :options="loginAttemptsOptions"
                                                        :multiple="false" v-model="loginAttemptsSelect">
                                                    </VueMultiselect>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Account Freeze time management</p>
                                                    <p class="fs-12 mb-0 text-muted">You can change the time for the account
                                                        freeze when attempts for </p>
                                                </div>
                                                <div>

                                                    <VueMultiselect :show-labels="false" :options="freezeOptions"
                                                        :multiple="false" v-model="freezeSelect">
                                                    </VueMultiselect>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gx-5 gy-3">
                                        <div class="col-xl-4">
                                            <p class="fs-16 mb-1 fw-semibold">Password Requirements</p>
                                            <p class="fs-12 mb-0 text-muted">Security settings related to password strength.
                                            </p>
                                        </div>
                                        <div class="col-xl-8">
                                            <div
                                                class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3">
                                                <div class="mail-security-settings">
                                                    <p class="fs-14 mb-1 fw-semibold">Minimum number of characters in the
                                                        password</p>
                                                    <p class="fs-12 mb-0 text-muted">There should be a minimum number of
                                                        characters for a password to be validated that shouls be set here.
                                                    </p>
                                                </div>
                                                <div>
                                                    <input type="text" class="form-control" value="8">
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Contain A Number</p>
                                                    <p class="fs-12 mb-0 text-muted">Password should contain a number.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="password-number" name="toggleswitchsize" type="checkbox">
                                                        <label for="password-number" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Contain A Special Character</p>
                                                    <p class="fs-12 mb-0 text-muted">Password should contain a special
                                                        Character.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="password-special-character" name="toggleswitchsize"
                                                            type="checkbox" checked>
                                                        <label for="password-special-character"
                                                            class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Atleast One Capital Letter</p>
                                                    <p class="fs-12 mb-0 text-muted">Password should contain atleast one
                                                        capital letter.</p>
                                                </div>
                                                <div>
                                                    <div class="custom-toggle-switch float-sm-end">
                                                        <input id="password-capital" name="toggleswitchsize" type="checkbox"
                                                            checked>
                                                        <label for="password-capital" class="label-success mb-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                <div>
                                                    <p class="fs-14 mb-1 fw-semibold">Maximum Password Length</p>
                                                    <p class="fs-12 mb-0 text-muted">Maximum password lenth should be
                                                        selected here.</p>
                                                </div>
                                                <div>
                                                    <input type="text" class="form-control" value="16">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row gx-5 gy-3">
                                        <div class="col-xl-4">
                                            <p class="fs-16 mb-1 fw-semibold">Unknown Chats</p>
                                            <p class="fs-12 mb-0 text-muted">Security settings related to unknown chats.</p>
                                        </div>
                                        <div class="col-xl-8">
                                            <div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="unknown-messages"
                                                        id="unknown-messages-show1">
                                                    <label class="form-check-label" for="unknown-messages-show1">
                                                        Show
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="unknown-messages"
                                                        id="unknown-messages-hide2" checked>
                                                    <label class="form-check-label" for="unknown-messages-hide2">
                                                        Hide
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="float-end">
                        <button class="btn btn-light m-1">
                            Restore Default
                        </button>
                        <button class="btn btn-primary m-1">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

