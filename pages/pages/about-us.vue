<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';
import CountUp from 'vue-countup-v3'

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader, CountUp
    },
    data() {
        return {
            dataToPass: {
                current: "About Us",
                list: [
                    'Pages', 'About Us'
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
            <div class="about-container mb-4">
                <div class="aboutus-banner">
                    <div class="aboutus-banner-content">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6">
                                <div class="row justify-content-center">
                                    <div class="col-xxl-9 col-xl-9 col-lg-10 col-md-8 col-sm-10 col-12">
                                        <div class="p-3 text-start mb-4">
                                            <h6 class="fw-semibold text-fixed-white pb-4">
                                                <span class="about-heading-white">About Us</span>
                                            </h6>
                                            <h3 class="fw-semibold mb-2 text-fixed-white">
                                                DISCIPLINE IS WHAT <span class="text-success">MOTIVATES</span>
                                                YOU MOST
                                            </h3>
                                            <p class="mb-4 fw-normal op-7 fs-16">
                                                You fight like a younger man, there’s nothing held back. It’s
                                                admirable, but mistaken. When their enemies were at the gates
                                                the Romans would suspend democracy and appoint one man to
                                                protect the city...
                                            </p>
                                            <button class="btn btn-success btn-wave">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 aboutus-banner-img">
                                <img src="/images/media/media-80.svg" class="img-fluid" alt="">
                            </div>
                            <div class="col-xl-12 about-company-stats">
                                <div class="row justify-content-center">
                                    <div class="col-xxl-5 col-xl-8 col-lg-10 col-md-8 col-sm-10 col-10">
                                        <div class="card custom-card text-default shadow border">
                                            <div class="card-body p-0">
                                                <div class="row">
                                                    <div
                                                        class="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-4 about-company-stats-border">
                                                        <div
                                                            class="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                            <div>
                                                                <span class="fw-semibold">Projects</span>
                                                                <p class="text-dark fs-2 mb-0 d-flex">
                                                                        <count-up :end-val="137"></count-up>
                                                                        +</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-4 about-company-stats-border">
                                                        <div
                                                            class="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                            <div>
                                                                <span class="fw-semibold">Happy Customers</span>
                                                                <p class="text-dark fs-2 mb-0 d-flex"><span><count-up :end-val="2500"></count-up></span>+</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-4">
                                                        <div
                                                            class="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                            <div>
                                                                <span class="fw-semibold">Clients</span>
                                                                <p class="text-dark fs-2 mb-0"><count-up :end-val="22"></count-up></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pb-5 px-3 about-motto">
                    <div class="col-xxl-5 col-xl-8 col-lg-10 col-md-10 col-sm-12">
                        <div class="text-justify">
                            <div class="text-dark fs-26 fw-semibold mb-4"><span class="about-heading">Our Mission</span>
                            </div>
                            <p class="fs-14 mb-4 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Quibusdam similique provident Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Natus, aliquam voluptas repellat eum beatae veniam, cumque eligendi earum
                                praesentium, in corrupti reprehenderit cum architecto quisquam? Quibusdam
                                quaerat veritatis perferendis iusto. !</p>
                            <div>
                                <div class="d-flex mb-4">
                                    <div> <svg class="motto-icon" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                            <path fill="#28d193"
                                                d="M20,4H4.30273c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1H20c0.55228,0,1,0.44772,1,1S20.55228,4,20,4z M15,19v3H9v-3c0-1.65685,1.34315-3,3-3l0,0C13.65685,16,15,17.34315,15,19z M4,12L4,12c-1.10457,0-2-0.89543-2-2V7c0-0.55228,0.44772-1,1-1h3v4C6,11.10457,5.10457,12,4,12z">
                                            </path>
                                            <path fill="#94ebcb"
                                                d="M8,12L8,12c-1.10457,0-2-0.89543-2-2V6h4v4C10,11.10457,9.10457,12,8,12z">
                                            </path>
                                            <path fill="#28d193"
                                                d="M12,12L12,12c-1.10457,0-2-0.89543-2-2V6h4v4C14,11.10457,13.10457,12,12,12z">
                                            </path>
                                            <path fill="#94ebcb"
                                                d="M16,12L16,12c-1.10457,0-2-0.89543-2-2V6h4v4C18,11.10457,17.10457,12,16,12z">
                                            </path>
                                            <path fill="#28d193"
                                                d="M20,12L20,12c-1.10457,0-2-0.89543-2-2V6h3c0.55228,0,1,0.44772,1,1v3C22,11.10457,21.10457,12,20,12z">
                                            </path>
                                            <path fill="#bff3e0"
                                                d="M18,10c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2v9c0,0.55231,0.44769,1,1,1h4v-3c0-1.65686,1.34314-3,3-3s3,1.34314,3,3v3h4c0.55231,0,1-0.44769,1-1v-9C18.89545,12,18,11.10455,18,10z">
                                            </path>
                                        </svg> </div>
                                    <div class="ms-4">
                                        <h5>High Standards in design !</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Adipisci
                                            quos sint, officia vel ab perferendis, dolores placeat dolor aliquam
                                            debitis eius, illum ullam ratione blanditiis fugiat omnis beatae
                                            odio vitae!</p>
                                    </div>
                                </div>
                                <div class="d-flex mb-4">
                                    <div> <svg class="motto-icon" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                            <path fill="#94ebcb"
                                                d="M18,20V3c-0.00005-0.55215-0.44769-0.99971-0.99984-0.99966c-0.17446,0.00002-0.34588,0.04569-0.49723,0.13247L13.5,3.85352l-3.00293-1.72071c-0.3079-0.17643-0.68624-0.17643-0.99414,0L6.5,3.85352L3.49707,2.13281c-0.47899-0.27466-1.08994-0.10903-1.3646,0.36996C2.04569,2.65411,2.00002,2.82554,2,3v17c0,1.10457,0.89543,2,2,2h16C18.89543,22,18,21.10457,18,20z">
                                            </path>
                                            <path fill="#28d193"
                                                d="M21.999,14v6c0,1.10457-0.89543,2-2,2l0,0c-1.10457,0-2-0.89543-2-2v-8h2C21.10357,12,21.999,12.89543,21.999,14z M12,10H8c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55229,0,1,0.44771,1,1S12.55229,10,12,10z M9,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S9.55229,14,9,14z M9,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1S9.55229,18,9,18z M13,14c-0.54662,0.00567-0.99433-0.43286-1-0.97947c-0.00143-0.13758,0.02585-0.27396,0.08008-0.40041c0.19341-0.50537,0.75987-0.75826,1.26524-0.56486c0.13406,0.0513,0.25521,0.13144,0.35488,0.23474c0.09659,0.09256,0.17161,0.20525,0.21972,0.33008C13.97119,12.74027,13.9984,12.86934,14,13C13.99622,13.55071,13.55071,13.99622,13,14z M13,18c-0.13064-0.00161-0.25971-0.02881-0.37988-0.08008c-0.12124-0.05058-0.23289-0.12162-0.33008-0.21c-0.09109-0.09725-0.16564-0.20875-0.2207-0.33008C12.02149,17.25901,11.99793,17.12994,12,17c0.00346-0.26481,0.10708-0.51849,0.29-0.71c0.23601-0.23439,0.57326-0.33583,0.89941-0.27051c0.06633,0.00976,0.13064,0.03021,0.19043,0.06055c0.06372,0.02159,0.12418,0.05182,0.17969,0.08984c0.0525,0.03702,0.10274,0.07713,0.15047,0.12012c0.18254,0.19176,0.28609,0.44528,0.29,0.71c0.00226,0.26594-0.1022,0.52169-0.29,0.71c-0.09735,0.08817-0.20896,0.15918-0.33008,0.21C13.25973,17.97124,13.13065,17.99842,13,18z">
                                            </path>
                                        </svg> </div>
                                    <div class="ms-4">
                                        <h5>Most anticipated techniques .</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Adipisci
                                            quos sint, officia vel ab perferendis illum ullam ratione blanditiis
                                            fugiat omnis beatae odio vitae!</p>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div> <svg class="motto-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
                                            viewBox="0 0 24 24">
                                            <path fill="#94ebcb"
                                                d="M12,18a3.5,3.5,0,1,1,3.5-3.5A3.50424,3.50424,0,0,1,12,18Z">
                                            </path>
                                            <path fill="#28d193"
                                                d="M14.64026,16.77179a3.452,3.452,0,0,1-5.28052,0A4.98821,4.98821,0,0,0,7,21a.99974.99974,0,0,0,1,1h8a.99974.99974,0,0,0,1-1A4.98821,4.98821,0,0,0,14.64026,16.77179Z">
                                            </path>
                                            <path fill="#94ebcb"
                                                d="M21,12a.99554.99554,0,0,1-.66406-.25244L12,4.33789,3.66406,11.74756a.99991.99991,0,0,1-1.32812-1.49512l9-8a.99893.99893,0,0,1,1.32812,0l9,8A1,1,0,0,1,21,12Z">
                                            </path>
                                            <path fill="#bff3e0"
                                                d="M12,4.33789,4,11.449V21a.99974.99974,0,0,0,1,1H8a.99974.99974,0,0,1-1-1,4.98821,4.98821,0,0,1,2.35974-4.22821l.00006.00006A3.46882,3.46882,0,0,1,8.5,14.5a3.5,3.5,0,0,1,7,0,3.46882,3.46882,0,0,1-.8598,2.27185l.00006-.00006A4.98821,4.98821,0,0,1,17,21a.99974.99974,0,0,1-1,1h3a.99974.99974,0,0,0,1-1V11.449Z">
                                            </path>
                                        </svg> </div>
                                    <div class="ms-4">
                                        <h5>Even rated customers ?</h5>
                                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Adipisci
                                            quos sint, officia vel ab perferendis, dolores placeat dolor aliquam
                                            debitis eius, illum ullam ratione blanditiis fugiat omnis beatae
                                            odio vitae!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5 px-3 bg-light">
                    <div class="row justify-content-center">
                        <div class="col-xxl-8 col-xl-10">
                            <div class="text-dark fs-26 fw-semibold mb-4">
                                <span class="about-heading">Our Team</span>
                            </div>
                            <div class="row">
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/4.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Samantha Taylor</p>
                                            <span class="text-muted fs-12">samanthataylor2145@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/15.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Peter Parker</p>
                                            <span class="text-muted fs-12">peterparker29@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Andrew garfield</p>
                                            <span class="text-muted fs-12">andrewgarfield98@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/5.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Elizabeth Rose</p>
                                            <span class="text-muted fs-12">elizabethrose@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/11.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Stuart Benny</p>
                                            <span class="text-muted fs-12">stuartbenny@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/2.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Sasha Banks</p>
                                            <span class="text-muted fs-12">sashabanks89@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/8.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Alicia Keys</p>
                                            <span class="text-muted fs-12">aliciakeys99@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                    <div class="card custom-card text-center">
                                        <div class="card-body">
                                            <span class="avatar avatar-xl avatar-rounded mb-3">
                                                <img src="/images/faces/9.jpg" alt="">
                                            </span>
                                            <p class="fw-semibold fs-15 mb-0">Jason Mama</p>
                                            <span class="text-muted fs-12">jasonmama143@gmail.com</span>
                                        </div>
                                        <div class="card-footer">
                                            <div class="btn-list">
                                                <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                    <i class="ri-facebook-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                    <i class="ri-twitter-line"></i>
                                                </button>
                                                <button class="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                    <i class="ri-instagram-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5 px-3 bg-primary rounded-bottom">
                    <div class="row justify-content-center">
                        <div class="col-xl-4">
                            <div class="text-center">
                                <h6 class="fw-semibold text-fixed-white pb-4 mb-0">
                                    <span class="about-heading-white">For any queries</span>
                                </h6>
                                <p class="fw-semibold text-fixed-white">
                                    Feel free to contact us any time
                                </p>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Ask Here" aria-label="Ask Here"
                                        aria-describedby="button-addon2">
                                    <button class="btn btn-success btn-wave" type="button" id="button-addon2">Send</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--End::row-1 --></template>

<style scoped></style>

