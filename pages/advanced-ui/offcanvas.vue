<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/advancedUi/offcanvas.js';
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
                current: "offCanvas",
                list: [
                    'AdvancedUI', 'offCanvas'
                ]
            },
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-4">

            <showcodeCard :code="prism.LiveDemo" title="Live demo">
                <a class="btn btn-primary mb-1 me-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                    aria-controls="offcanvasExample">
                    Link with href
                </a>
                <button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Button with data-bs-target
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>30 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>45 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>28 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard :code="prism.BodyScrolling" title="Body scrolling">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
                    body scrolling
                </button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>30 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>45 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>28 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard :code="prism.StaticBackdrop" title="Static backdrop">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop">
                    Toggle static offcanvas
                </button>
                <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>30 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>45 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>28 mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-3">

            <showcodeCard :code="prism.BodyScrollingAndBackdrop" title="Body scrolling and backdrop">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both
                    scrolling &amp;
                    backdrop</button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>30
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>45
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>28
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-5">
            <showcodeCard :code="prism.Placement" title="Placement">
                <button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                    offcanvas</button>
                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        ...
                    </div>
                </div>
                <button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                    offcanvas</button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel1">
                    <div class="offcanvas-header border-bottom border-block-end-dashed">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel1">Notifications
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <div>
                            <ul class="list-group list-group-flush mb-0">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-primary avatar-rounded">
                                                NW
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">New Website Created<span
                                                    class="badge bg-light text-muted float-end">20 Nov 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>30
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Brenda New product launching<span
                                                    class="badge bg-light text-muted float-end">1 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>7 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-secondary avatar-rounded">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Medeleine Hey! there i'm available<span
                                                    class="badge bg-light text-muted float-end">5 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                OL
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Olivia New schedule release<span
                                                    class="badge bg-light text-muted float-end">6 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>45
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-warning avatar-rounded">
                                                A
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Kamala Preparing for new admin launch<span
                                                    class="badge bg-light text-muted float-end">7 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>28
                                                mins
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span
                                                    class="badge bg-light text-muted float-end">10 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>14 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-danger avatar-rounded">
                                                CH
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for the new project<span
                                                    class="badge bg-light text-muted float-end">3 Jan 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>2 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-info avatar-rounded">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Decide the live discussion<span
                                                    class="badge bg-light text-muted float-end">17 Feb 2023</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>3 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Meeting at 3:00 pm<span
                                                    class="badge bg-light text-muted float-end">29 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                RC
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0">Prepare for presentation<span
                                                    class="badge bg-light text-muted float-end">31 Dec 2022</span>
                                            </p>
                                            <span class="fs-12 text-muted"><i
                                                    class="ri-time-line align-middle me-1"></i>4 hrs
                                                ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
                    bottom
                    offcanvas</button>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body small">
                        ...
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>

