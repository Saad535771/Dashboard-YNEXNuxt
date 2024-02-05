<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { VueDraggableNext } from 'vue-draggable-next'

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
        draggable: VueDraggableNext,
    },
    data() {
        return {
            dataToPass: {
                current: "Deals",
                list: [
                    'Apps', 'CRM', 'Deals'
                ]
            },
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
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <div class="d-flex align-items-center">
                            <span class="fw-semibold fs-16 me-1">Deals</span><span
                                class="badge bg-light text-default align-middle">16</span>
                        </div>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                data-bs-target="#create-contact"><i
                                    class="ri-add-line me-1 fw-semibold align-middle"></i>New Deal</button>
                            <button class="btn btn-success-light btn-sm">Export As CSV</button>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="btn btn-light btn-sm btn-wave waves-effect waves-light"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 lead-discovered">Leads Discovered</div>
                            <span class=" badge bg-light text-default">24 Leads</span>
                        </div>
                        <div>
                            <span class="text-primary fw-semibold">$25,238</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 lead-qualified">Qualified Leads</div>
                            <span class=" badge bg-light text-default">17 Leads</span>
                        </div>
                        <div>
                            <span class="text-warning fw-semibold">$32,453</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 contact-initiated">Contact Initiated</div>
                            <span class=" badge bg-light text-default">5 Leads</span>
                        </div>
                        <div>
                            <span class="text-success fw-semibold">$13,756</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 need-identified">Needs Identified</div>
                            <span class=" badge bg-light text-default">43 Leads</span>
                        </div>
                        <div>
                            <span class="text-info fw-semibold">$47,093</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 negotiation">Negotiation</div>
                            <span class=" badge bg-light text-default">15 Leads</span>
                        </div>
                        <div>
                            <span class="text-danger fw-semibold">$26,146</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between">
                        <div>
                            <div class="fw-semibold fs-15 deal-finalized">Deal Finalized</div>
                            <span class=" badge bg-light text-default">127 Deals</span>
                        </div>
                        <div>
                            <span class="text-secondary fw-semibold">$1,74,679</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="leads-discovered">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/12.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Service Upgrade</div>
                        </div>
                        <div>$5000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Spruko Technologies</a>
                        </div>
                        <div class="text-muted fs-12">24,Jun 2023 - 12:45PM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/5.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Product Demo</div>
                        </div>
                        <div>$50,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Acme Corporation LTD</a>
                        </div>
                        <div class="text-muted fs-12">18,Apr 2023 - 11:22AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/15.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Website Redesign</div>
                        </div>
                        <div>$20,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Embark Technologies</a>
                        </div>
                        <div class="text-muted fs-12">12,Jul 2023 - 10:15AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/6.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Consulting Services</div>
                        </div>
                        <div>$10,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Adam Johnson</a>
                        </div>
                        <div class="text-muted fs-12">29,Jul 2023 - 4:45PM</div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="leads-qualified">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/11.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Event Sponsorship</div>
                        </div>
                        <div>$10,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Initech Info</a>
                        </div>
                        <div class="text-muted fs-12">21,May 2023 - 10:25AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/11.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Sales Training</div>
                        </div>
                        <div>$6,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Soylent Corp</a>
                        </div>
                        <div class="text-muted fs-12">10,May 2023 - 9:20AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/14.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Content Creation</div>
                        </div>
                        <div>$3,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Hooli Technologies</a>
                        </div>
                        <div class="text-muted fs-12">25,Aug 2023 - 3:38PM</div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="contact-initiated">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/3.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">E-commerce Integration</div>
                        </div>
                        <div>$12,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Spice Infotech</a>
                        </div>
                        <div class="text-muted fs-12">15,Sep 2023 - 8:32PM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/16.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Ad Campaign</div>
                        </div>
                        <div>$5,500</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Umbrella Corp</a>
                        </div>
                        <div class="text-muted fs-12">17,Jun 2023 - 10:54AM</div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="needs-identified">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/10.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Webinar Series</div>
                        </div>
                        <div>$9,500</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Massive Dynamic</a>
                        </div>
                        <div class="text-muted fs-12">16,May 2023 - 11:22AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/13.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">SEO Audit</div>
                        </div>
                        <div>$3,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Logitech ecostics</a>
                        </div>
                        <div class="text-muted fs-12">27,Apr 2023 - 5:15PM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/8.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Loyalty Program</div>
                        </div>
                        <div>$12,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">Globex Corp</a>
                        </div>
                        <div class="text-muted fs-12">26,Jul 2023 - 5:28AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/9.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">CRM Integration</div>
                        </div>
                        <div>$10,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">CrystalClear Consulting</a>
                        </div>
                        <div class="text-muted fs-12">14,May 2023 - 11:29PM</div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="negotiation">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/16.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Media Analytics</div>
                        </div>
                        <div>$9,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">GlobalConnect</a>
                        </div>
                        <div class="text-muted fs-12">18,Mar 2023 - 2:32PM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded bg-light">
                                    <img src="/images/faces/21.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Lead Nurturing Strategy</div>
                        </div>
                        <div>$4,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">AlphaTech Solutions</a>
                        </div>
                        <div class="text-muted fs-12">16,Jul 2023 - 7:53AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    PL
                                </span>
                            </div>
                            <div class="fs-14">Website Maintenance</div>
                        </div>
                        <div>$7,500</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">RedRock Industries</a>
                        </div>
                        <div class="text-muted fs-12">30,Jul 2023 - 6:30AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/2.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Newsletter Campaign</div>
                        </div>
                        <div>$2,500</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">CoreTech Solutions</a>
                        </div>
                        <div class="text-muted fs-12">12,May 2023 - 10:22AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/17.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Graphic Design</div>
                        </div>
                        <div>$5,000</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">TechPro Services</a>
                        </div>
                        <div class="text-muted fs-12">10,Jul 2023 - 10:15PM</div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="deal-finalized">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/1.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">CRM Training</div>
                        </div>
                        <div>$4,200</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">BlueSky Industries</a>
                        </div>
                        <div class="text-muted fs-12">15,May 2023 - 8:20AM</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img src="/images/faces/10.jpg" alt="">
                                </span>
                            </div>
                            <div class="fs-14">Market Research</div>
                        </div>
                        <div>$10,500</div>
                    </div>
                    <div class="deal-description">
                        <div class="my-1">
                            <a href="javascript:void(0);" class="company-name">BrightStar Solutions</a>
                        </div>
                        <div class="text-muted fs-12">28,Jun 2023 - 9:27PM</div>
                    </div>
                </div>
            </div>
        </draggable>
    </div>
    <!-- End::row-3 -->

    <!-- Start:: New Deal -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">New Deal</h6>
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
                            <label for="deal-name" class="form-label">Contact Name</label>
                            <input type="text" class="form-control" id="deal-name" placeholder="Contact Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-lead-score" class="form-label">Deal Value</label>
                            <input type="number" class="form-control" id="deal-lead-score" placeholder="Deal Value">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
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
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Deal</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: New Deal -->
</template>

<style scoped></style>

