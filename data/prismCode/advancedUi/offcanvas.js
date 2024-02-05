export let
    LiveDemo = {
        script: `&lt;a class="btn btn-primary mb-1 me-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
    aria-controls="offcanvasExample">
    Link with href
&lt;/a>
&lt;button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    Button with data-bs-target
&lt;/button>
&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    &lt;div class="offcanvas-header border-bottom border-block-end-dashed">
        &lt;h5 class="offcanvas-title" id="offcanvasExampleLabel">Notifications&lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body p-0">
        &lt;div>
            &lt;ul class="list-group list-group-flush mb-0">
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-primary avatar-rounded">
                                NW
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">New Website Created&lt;span
                                    class="badge bg-light text-muted float-end">20 Nov 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>30 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/12.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/1.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Brenda New product launching&lt;span
                                    class="badge bg-light text-muted float-end">1 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>7 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-secondary avatar-rounded">
                                M
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Medeleine Hey! there i'm available&lt;span
                                    class="badge bg-light text-muted float-end">5 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                OL
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Olivia New schedule release&lt;span
                                    class="badge bg-light text-muted float-end">6 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>45 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-warning avatar-rounded">
                                A
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Kamala Preparing for new admin launch&lt;span
                                    class="badge bg-light text-muted float-end">7 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>28 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/6.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner&lt;span
                                    class="badge bg-light text-muted float-end">10 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>14 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/14.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    BodyScrolling = {
        script: `&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
    body scrolling
&lt;/button>
&lt;div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    &lt;div class="offcanvas-header border-bottom border-block-end-dashed">
        &lt;h5 class="offcanvas-title" id="offcanvasScrollingLabel">Notifications&lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body p-0">
        &lt;div>
            &lt;ul class="list-group list-group-flush mb-0">
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-primary avatar-rounded">
                                NW
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">New Website Created&lt;span
                                    class="badge bg-light text-muted float-end">20 Nov 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>30 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/12.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/1.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Brenda New product launching&lt;span
                                    class="badge bg-light text-muted float-end">1 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>7 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-secondary avatar-rounded">
                                M
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Medeleine Hey! there i'm available&lt;span
                                    class="badge bg-light text-muted float-end">5 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                OL
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Olivia New schedule release&lt;span
                                    class="badge bg-light text-muted float-end">6 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>45 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-warning avatar-rounded">
                                A
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Kamala Preparing for new admin launch&lt;span
                                    class="badge bg-light text-muted float-end">7 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>28 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/6.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner&lt;span
                                    class="badge bg-light text-muted float-end">10 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>14 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/14.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    StaticBackdrop = {
        script: `&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop">
    Toggle static offcanvas
&lt;/button>
&lt;div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
    aria-labelledby="staticBackdropLabel">
    &lt;div class="offcanvas-header border-bottom border-block-end-dashed">
        &lt;h5 class="offcanvas-title" id="staticBackdropLabel">Notifications&lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body p-0">
        &lt;div>
            &lt;ul class="list-group list-group-flush mb-0">
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-primary avatar-rounded">
                                NW
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">New Website Created&lt;span
                                    class="badge bg-light text-muted float-end">20 Nov 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>30 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/12.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/1.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Brenda New product launching&lt;span
                                    class="badge bg-light text-muted float-end">1 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>7 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-secondary avatar-rounded">
                                M
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Medeleine Hey! there i'm available&lt;span
                                    class="badge bg-light text-muted float-end">5 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                OL
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Olivia New schedule release&lt;span
                                    class="badge bg-light text-muted float-end">6 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>45 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-warning avatar-rounded">
                                A
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Kamala Preparing for new admin launch&lt;span
                                    class="badge bg-light text-muted float-end">7 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>28 mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/6.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner&lt;span
                                    class="badge bg-light text-muted float-end">10 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>14 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/14.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>&lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    BodyScrollingAndBackdrop = {
        script: `&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both
    scrolling &amp;
    backdrop&lt;/button>
&lt;div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel">
    &lt;div class="offcanvas-header border-bottom border-block-end-dashed">
        &lt;h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications&lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body p-0">
        &lt;div>
            &lt;ul class="list-group list-group-flush mb-0">
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-primary avatar-rounded">
                                NW
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">New Website Created&lt;span
                                    class="badge bg-light text-muted float-end">20 Nov 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>30
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/12.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/1.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Brenda New product launching&lt;span
                                    class="badge bg-light text-muted float-end">1 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>7 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-secondary avatar-rounded">
                                M
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Medeleine Hey! there i'm available&lt;span
                                    class="badge bg-light text-muted float-end">5 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                OL
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Olivia New schedule release&lt;span
                                    class="badge bg-light text-muted float-end">6 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>45
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-warning avatar-rounded">
                                A
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Kamala Preparing for new admin launch&lt;span
                                    class="badge bg-light text-muted float-end">7 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>28
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/6.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner&lt;span
                                    class="badge bg-light text-muted float-end">10 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>14 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/14.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
&lt;/div>` },
    Placement = {
        script: `&lt;button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
    aria-controls="offcanvasTop">Toggle top
    offcanvas&lt;/button>
&lt;div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    &lt;div class="offcanvas-header">
        &lt;h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top&lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body">
        ...
    &lt;/div>
&lt;/div>
&lt;button class="btn btn-primary mb-1  me-2" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
    offcanvas&lt;/button>
&lt;div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel1">
    &lt;div class="offcanvas-header border-bottom border-block-end-dashed">
        &lt;h5 class="offcanvas-title" id="offcanvasRightLabel1">Notifications
        &lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body p-0">
        &lt;div>
            &lt;ul class="list-group list-group-flush mb-0">
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-primary avatar-rounded">
                                NW
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">New Website Created&lt;span
                                    class="badge bg-light text-muted float-end">20 Nov 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>30
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/12.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/1.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Brenda New product launching&lt;span
                                    class="badge bg-light text-muted float-end">1 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>7 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-secondary avatar-rounded">
                                M
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Medeleine Hey! there i'm available&lt;span
                                    class="badge bg-light text-muted float-end">5 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                OL
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Olivia New schedule release&lt;span
                                    class="badge bg-light text-muted float-end">6 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>45
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-warning avatar-rounded">
                                A
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Kamala Preparing for new admin launch&lt;span
                                    class="badge bg-light text-muted float-end">7 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>28
                                mins
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/6.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Oisha Meeting with clinet for dinner&lt;span
                                    class="badge bg-light text-muted float-end">10 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>14 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-danger avatar-rounded">
                                CH
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for the new project&lt;span
                                    class="badge bg-light text-muted float-end">3 Jan 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>2 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-info avatar-rounded">
                                S
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Decide the live discussion&lt;span
                                    class="badge bg-light text-muted float-end">17 Feb 2023&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>3 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md avatar-rounded">
                                &lt;img src="/images/faces/14.jpg" alt="">
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Meeting at 3:00 pm&lt;span
                                    class="badge bg-light text-muted float-end">29 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
                &lt;li class="list-group-item">
                    &lt;div class="d-flex align-items-center">
                        &lt;div class="me-2">
                            &lt;span class="avatar avatar-md bg-success avatar-rounded">
                                RC
                            &lt;/span>
                        &lt;/div>
                        &lt;div class="flex-fill">
                            &lt;p class="fw-semibold mb-0">Prepare for presentation&lt;span
                                    class="badge bg-light text-muted float-end">31 Dec 2022&lt;/span>
                            &lt;/p>
                            &lt;span class="fs-12 text-muted">&lt;i
                                    class="ri-time-line align-middle me-1 d-inline-block">&lt;/i>4 hrs
                                ago&lt;/span>
                        &lt;/div>
                    &lt;/div>
                &lt;/li>
            &lt;/ul>
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;button class="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
    bottom
    offcanvas&lt;/button>
&lt;div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel">
    &lt;div class="offcanvas-header">
        &lt;h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
        &lt;/h5>
        &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">&lt;/button>
    &lt;/div>
    &lt;div class="offcanvas-body small">
        ...
    &lt;/div>
&lt;/div>` };