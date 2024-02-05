<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';

export default {
    setup() {

        definePageMeta({
            middleware: [auth],
        })
        const picked = ref(new Date());
        return { picked }
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Contacts",
                list: [
                    'Apps', 'CRM', 'Contacts'
                ]
            },

            leadSourceValue: null,
            leadSourceOptions: ['Social Media', 'Direct mail', 'Blog Articles', 'Affiliates', 'Organic search'],

            tagsValue: null,
            tagsOptions: ['New Lead', 'Prospect', 'Customer', 'Hot Lead', 'Partner', 'LostCustomer', 'Influencer', 'Subscriber'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="card-title">
                        Contacts<span class="badge bg-light text-default rounded ms-1 fs-12 align-middle">28</span>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i
                                class="ri-add-line me-1 fw-semibold align-middle"></i>Create Contact</button>
                        <button class="btn btn-success-light btn-sm">Export As CSV</button>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-light btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                            aria-label="...">
                                    </th>
                                    <th scope="col">Contact Name</th>
                                    <th scope="col">Lead Score</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Lead Source</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/4.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span class="d-block fw-semibold">Lisa
                                                        Convay</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip
                                                        content-class="tooltip-primary" activator="parent"
                                                        location="top">Last Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>24, Jul
                                                    2023 - 4:45PM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        258
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>lisaconvay2981@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1678-28993-223</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/1.png" alt="">
                                                </span>
                                            </div>
                                            <div>Spruko Technologies</div>
                                        </div>
                                    </td>
                                    <td>
                                        Social Media
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-primary-transparent">New Lead</span>
                                            <span class="badge bg-primary-transparent">Prospect</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel2" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/12.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span class="d-block fw-semibold">Jacob
                                                        Smith</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip
                                                        content-class="tooltip-primary" activator="parent"
                                                        location="top">Last Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>15, Jul
                                                    2023 - 11:45AM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        335
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>jacobsmith289@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>8122-2342-4453</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/3.png" alt="">
                                                </span>
                                            </div>
                                            <div>Spice Infotech</div>
                                        </div>
                                    </td>
                                    <td>
                                        Direct mail
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-primary-transparent">Customer</span>
                                            <span class="badge bg-danger-transparent">Hot Lead</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel33" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/14.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span class="d-block fw-semibold">Jake
                                                        Sully</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip
                                                        content-class="tooltip-primary" activator="parent"
                                                        location="top">Last Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>10, Aug
                                                    2023 - 3:25PM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        685
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>jakesully789@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1902-2001-3023</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/4.png" alt="">
                                                </span>
                                            </div>
                                            <div>Logitech ecostics</div>
                                        </div>
                                    </td>
                                    <td>
                                        Blog Articles
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-success-transparent">Partner</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel3" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/6.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span class="d-block fw-semibold">Kiara
                                                        Advain</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>18, Aug
                                                    2023 - 10:10AM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        425
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>kiaraadvain290@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1603-2032-1123</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/5.png" alt="">
                                                </span>
                                            </div>
                                            <div>Initech Info</div>
                                        </div>
                                    </td>
                                    <td>
                                        Affiliates
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-light text-default">LostCustomer</span>
                                            <span class="badge bg-secondary-transparent">Influencer</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel4" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/8.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-semibold">Brenda Simpson</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>19, Jul
                                                    2023 - 12:41PM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        516
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>brendasimpson1993@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1129-2302-1092</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/6.png" alt="">
                                                </span>
                                            </div>
                                            <div>Massive Dynamic</div>
                                        </div>
                                    </td>
                                    <td>
                                        Organic search
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-pink-transparent">Subscriber</span>
                                            <span class="badge bg-success-transparent">Partner</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel5" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/9.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span class="d-block fw-semibold">Json
                                                        Taylor</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>14, Aug
                                                    2023 - 5:18PM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        127
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>jsontaylor345@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>9923-2344-2003</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/7.png" alt="">
                                                </span>
                                            </div>
                                            <div>Globex Corporation</div>
                                        </div>
                                    </td>
                                    <td>
                                        Social media
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-danger-transparent">Hot Lead</span>
                                            <span class="badge bg-info-transparent">Referral</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel6" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/15.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-semibold">Dwayne Jhonson</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>12, Jun
                                                    2023 - 11:38AM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        368
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>dwayenejhonson78@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>7891-2093-1994</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/8.png" alt="">
                                                </span>
                                            </div>
                                            <div>Acme Corporation</div>
                                        </div>
                                    </td>
                                    <td>
                                        Blog Articles
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-warning-transparent">Trial User</span>
                                            <span class="badge bg-purple-transparent">Cold Lead</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel7" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/1.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-semibold">Emiley Jackson</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>19, May
                                                    2023 - 1:57PM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        563
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>emileyjackson678@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1899-2993-0923</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/9.png" alt="">
                                                </span>
                                            </div>
                                            <div>Soylent Corp</div>
                                        </div>
                                    </td>
                                    <td>
                                        Organic search
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-success-transparent">Influencer</span>
                                            <span class="badge bg-info-transparent">Partner</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel8" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/3.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-semibold">Jessica Morris</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>28, Jul
                                                    2023 - 9:31AM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        185
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>jessicamorris289@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1768-2332-4934</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/10.png" alt="">
                                                </span>
                                            </div>
                                            <div>Umbrella Corporation</div>
                                        </div>
                                    </td>
                                    <td>
                                        Affiliates
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-primary-transparent">New Lead</span>
                                            <span class="badge bg-light text-default">Lost Customer</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact">
                                    <td>
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel9" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/9.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-semibold">Michael Jeremy</span></a>
                                                <span class="d-block text-muted fs-11"><v-tooltip activator="parent"
                                                        location="top" content-class="tooltip-primary">Last
                                                        Contacted</v-tooltip><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>28, Jul
                                                    2023 - 9:31AM</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        240
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>michaeljeremy186@gmail.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>4788-7822-4786</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/2.png" alt="">
                                                </span>
                                            </div>
                                            <div>Hooli Technologies</div>
                                        </div>
                                    </td>
                                    <td>
                                        Direct mail
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center flex-wrap gap-1">
                                            <span class="badge bg-primary-transparent">New Lead</span>
                                            <span class="badge bg-pink-transparent">Subscriber</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-warning-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-danger-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-top-0">
                    <div class="d-flex align-items-center">
                        <div>
                            Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">
                                            Prev
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">
                                            next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: Contact Details Offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
        <div class="offcanvas-body p-0">
            <div class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                <div>
                    <span class="avatar avatar-xxl avatar-rounded online me-3">
                        <img src="/images/faces/4.jpg" alt="">
                    </span>
                </div>
                <div class="flex-fill main-profile-info">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="fw-semibold mb-1 text-fixed-white">Lisa Convay</h6>
                        <button type="button" class="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <p class="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                    <p class="fs-12 text-fixed-white mb-4 op-5">
                        <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
                        <span><i class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                    </p>
                    <div class="d-flex mb-0">
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Deals</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">$12.2k</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Contributions</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">$10.67k</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Comitted</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <div class="mb-0">
                    <p class="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                    <p class="text-muted op-8 mb-0">
                        I am <b class="text-default">Lisa Convay,</b> here by conclude that,i am the founder and managing
                        director of the prestigeous company name laugh at all and acts as the cheif executieve officer of
                        the company.
                    </p>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-semibold">Contact Information :</p>
                <div class="">
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-mail-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            sonyataylor2531@gmail.com
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-phone-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            +(555) 555-1234
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-0">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-map-pin-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                <p class="fs-14 mb-0 me-4 fw-semibold">Social Networks :</p>
                <div class="btn-list mb-0">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-facebook-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-twitter-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-instagram-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-github-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-youtube-line fw-semibold"></i>
                    </button>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-semibold">Tags :</p>
                <div>
                    <span class="badge bg-light text-muted m-1">New Lead</span>
                    <span class="badge bg-light text-muted m-1">Others</span>
                </div>
            </div>
            <div class="p-4">
                <p class="fs-14 mb-2 fw-semibold">Relationship Manager :
                    <a class="fs-14 text-primary mb-0 float-end" href="javascript:void(0);"><i
                            class="ri-add-line me-1 align-middle"></i>Add Manager</a>
                </p>
                <div class="avatar-list-stacked">
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/10.jpg" alt="img">
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Contact Details Offcanvas -->

    <!-- Start:: Create Contact -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Create Contact</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="mb-0 text-center">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img src="/images/faces/9.jpg" alt="" id="profile-img">
                                    <span class="badge rounded-pill bg-primary avatar-badge">
                                        <input type="file" name="photo" class="position-absolute w-100 h-100 op-0"
                                            id="profile-change">
                                        <i class="fe fe-camera"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-title" class="form-label">Deal Title</label>
                            <input type="text" class="form-control" id="deal-title" placeholder="Deal Title">
                        </div>
                        <div class="col-xl-6">
                            <label for="contact-lead-score" class="form-label">Lead Score</label>
                            <input type="number" class="form-control" id="contact-lead-score" placeholder="Lead Score">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-mail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contact-mail" placeholder="Enter Email">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-phone" class="form-label">Phone No</label>
                            <input type="tel" class="form-control" id="contact-phone" placeholder="Enter Phone Number">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Lead Source</label>
                            <VueMultiselect :searchable="false" :show-labels="false" v-model="leadSourceValue"
                                placeholder="Select Option" :options="leadSourceOptions"></VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Last Contacted</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply v-model="picked"
                                        time-picker-inline>
                                        <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Tags</label>
                            <VueMultiselect :searchable="false" :show-labels="false" v-model="tagsValue"
                                placeholder="Select Tag" multiple="true" :options="tagsOptions"></VueMultiselect>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Contact</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Create Contact -->
</template>

<style scoped></style>

