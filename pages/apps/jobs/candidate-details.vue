<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, EffectCube, EffectFade, EffectCoverflow, EffectFlip, FreeMode, Thumbs } from 'swiper/modules';
import auth from '@/middleware/auth';

export default {
    setup() {

        definePageMeta({
            middleware: [auth],
        })
        return {
            modules: [Navigation]
        }
    },
    components: {
        PageHeader,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            dataToPass: {
                current: "Candidate Details",
                list: [
                    'Apps', 'Jobs', 'Candidate Details'
                ]
            },
        };
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xl-12">
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">
                            <div class="d-flex flex-wrap gap-2">
                                <div>
                                    <span class="avatar avatar-xxl avatar-rounded">
                                        <img src="/images/faces/1.jpg" class="rounded-circle img-fluid" alt="">
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <h4 class="fw-bold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> Brenda
                                            Simpson <i class="bi bi-check-circle-fill text-success fs-16"><v-tooltip
                                                    activator="parent" location="top">Verified candidate</v-tooltip></i></a>
                                    </h4>
                                    <a href="javascript:void(0);" class="fw-semibold"><i class="bi bi-briefcase me-1"></i>
                                        Software Developer</a>
                                    <div class="d-flex flex-wrap gap-2 align-items-center fs-11 text-muted">
                                        <p class="fs-11 mb-0">Ratings : </p>
                                        <div class="min-w-fit-content ms-2">
                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                        </div>
                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                            <span>(142)</span>
                                            <span>Ratings</span>
                                        </a>
                                    </div>
                                    <div class="d-flex fs-14 mt-3">
                                        <div>
                                            <p class="mb-1"><i class="bi bi-geo-alt me-2"></i>Banglore, Karnataka</p>
                                            <p><i class="bi bi-briefcase me-2"></i>1 Year Experience</p>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-1"><i class="bi bi-coin me-2"></i>Package (Yearly) : <span
                                                    class="fw-semibold"><v-tooltip activator="parent" location="top">Current
                                                        Salary</v-tooltip>$10,000</span> - <span
                                                    class="fw-semibold"><v-tooltip activator="parent"
                                                        location="top">Expected Salary</v-tooltip>$20,000</span></p>
                                            <p><i class="bi bi-mortarboard me-2"></i>Graduate</p>
                                        </div>
                                    </div>
                                    <div class="popular-tags">
                                        <a href="javascript:void(0);" class="badge rounded-pill bg-info-transparent me-2"><i
                                                class="bi bi-moon-stars me-1"></i>Full Time</a>
                                        <a href="javascript:void(0);" class="badge rounded-pill bg-danger-transparent"><i
                                                class="bi bi-clock me-1"></i> Immediate Joinee</a>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-list">
                                <a href="javascript:void(0);" class="btn btn-primary"><i class="bi bi-download me-1"></i>
                                    Download CV</a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                                    <i class="ri-heart-line fs-13"></i>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                                    <i class="ri-share-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->

        <!-- Start::row-2 -->
        <div class="row">

            <div class="col-lg-8">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            <h5 class="mb-0 fw-semibold fs-22">
                                Candidate Profile Information
                            </h5>
                        </div>
                    </div>
                    <div class="card-body p-0 candidate-edu-timeline">
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-briefcase fs-13"></i></span> Career Objective :</h5>
                            <div class="ms-4 ps-3">
                                <p class="op-9">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                    sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et
                                    kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A
                                    officiis optio temporibus minima facilis...</p>
                                <p class="mb-0 op-9">Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit
                                    ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero
                                    sanctus labore..</p>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-mortarboard fs-13"></i></span> Education :</h5>
                            <div class="ms-4 ps-3">
                                <p class="fw-semibold fs-14 mb-0">Bachelors of science in computer science</p>
                                <div class="d-flex gap-2">
                                    <p class="mb-0">Dwayne University</p>
                                    <p class="mb-0 text-muted"><i class="bi bi-geo-alt fs-12"></i> Nellore</p>
                                </div>
                                <p class="mb-4"> (2019 Mar - 2022 Apr)</p>
                                <p class="fw-semibold fs-14 mb-0">Intermediate (MPC)</p>
                                <div class="d-flex gap-2">
                                    <p class="mb-0">Sprect College</p>
                                    <p class="mb-0 text-muted"><i class="bi bi-geo-alt fs-12"></i> Warangal</p>
                                </div>
                                <p class="mb-0"> (2017 Mar - 2019 Apr)</p>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-award fs-13"></i></span> Certifications :</h5>
                            <div class="ms-4 ps-3">
                                <p class="fw-semibold fs-14 mb-0">Web Development (3 Months)</p>
                                <p class="mb-4">EMC Solutions Pvt Ltd</p>
                                <p class="fw-semibold fs-14 mb-0">Python Development (6 Months)</p>
                                <p class="mb-0">Dabre Services Pvt Ltd</p>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-journal-medical fs-13"></i></span> Publications :</h5>
                            <div class="ms-3">
                                <ol class="list-group border-0 list-bullets">
                                    <li class="border-0 py-1"><span class="fw-semibold">“One of a Kind Design,”</span> Web
                                        Design Book, Poulin Publishing, 2018</li>
                                    <li class="border-0 py-1"><span class="fw-semibold">“Website Design in 2019,”</span> A
                                        List Apart, June 2019</li>
                                    <li class="border-0 py-1"><span class="fw-semibold">“Usable Information
                                            Architecture,”</span> SitePoint, Feb 2019</li>
                                </ol>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-activity fs-13"></i></span> Activities and Interests :</h5>
                            <div class="ms-3">
                                <ol class="list-group border-0 list-bullets">
                                    <li class="border-0 py-1">Community Involvement</li>
                                    <li class="border-0 py-1">Yoga</li>
                                    <li class="border-0 py-1">Travel</li>
                                    <li class="border-0 py-1">Art</li>
                                </ol>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-link-45deg fs-13"></i></span> References :</h5>
                            <div class="ms-4 ps-3">
                                <p><span class="fw-semibold">Name : </span> Nicole Chiu</p>
                                <p><span class="fw-semibold">Designation : </span> Software Developer</p>
                                <p><span class="fw-semibold">Company Name : </span> Spotech Technical Solutions</p>
                                <p><span class="fw-semibold">Mobile : </span> +91 7865443679</p>
                                <p><span class="fw-semibold">Email : </span> nchiu@email.com</p>
                                <p class="mb-0"><span class="fw-semibold">Location : </span> Hyderabad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            <h5 class="mb-0 fw-semibold">Experience Overview</h5>
                        </div>
                    </div>
                    <div class="card-body p-0 candidate-edu-timeline">
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-briefcase fs-13"></i></span> Experience :</h5>
                            <div class="ms-4 ps-3">
                                <p class="fw-semibold fs-14 mb-0">Full Stack Developer (2019 Mar - 2022 Apr)</p>
                                <div class="d-flex gap-2">
                                    <p>Spotech Technical Solutions</p>
                                    <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad
                                    </p>
                                </div>
                                <p class="fw-semibold mb-2">Responsibilities :</p>
                                <ol class="list-group border-0 list-bullets">
                                    <li class="border-0 py-1">Design thoughtful, beautiful, and useful software user
                                        interfaces and experiences in a team environment..</li>
                                    <li class="border-0 py-1">Create user-centered designs by considering market analysis,
                                        customer feedback, and usability findings.</li>
                                </ol>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h5 class="fw-semibold fs-17 d-flex align-items-center gap-2"><span
                                    class="avatar avatar-rounded bg-primary avatar-sm"><i
                                        class="bi bi-people fs-13"></i></span> Volunteer Experience :</h5>
                            <div class="ms-4 ps-3">
                                <p class="fw-semibold fs-14 mb-0">Volunteer in the Student Organization</p>
                                <p class="mb-2 text-muted"><i class="bi bi-geo-alt fs-12"></i> Warangal, 2015</p>
                                <ol class="list-group border-0 list-bullets">
                                    <li class="border-0 py-1">In charge of Organizing activities for approximately 100+
                                        internation schools in 2015</li>
                                    <li class="border-0 py-1">In charge of Organizing activities for approximately 100+
                                        internation schools in 2015</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card custom-card border bg-primary-transparent shadow-none">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <h5 class="fw-semibold mb-0">&#128400; Was this profile fit for someone?</h5>
                            </div>
                            <div class="col-lg-6 text-end">
                                <a href="javascript:void(0);" class="btn btn-success btn-lg" role="button">
                                    <i class="ri-share-line me-2"></i>Share Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="fw-semibold mb-0">Related Profiles</h4>
                    <p class="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <swiper :navigation="true" :modules="modules" class="notification-slider">
                        <swiper-slide>
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span class="avatar avatar-lg avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <h5 class="fw-semibold mb-0 d-flex align-items-center"><a
                                                    href="javascript:void(0);"> Brenda Simpson <i
                                                        class="bi bi-check-circle-fill text-success fs-16"><v-tooltip
                                                            activator="parent" location="top">Verified
                                                            candidate</v-tooltip></i></a></h5>
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);">Software Developer</a>
                                                <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i>
                                                    Kondapur, Hyderabad</p>
                                            </div>
                                            <div class="d-flex align-items-center fs-12 text-muted">
                                                <p class="fs-12 mb-0">Ratings : </p>
                                                <div class="min-w-fit-content ms-2">
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                </div>
                                                <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="btn-list">
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-primary text-fixed-white"><v-tooltip
                                                    activator="parent" location="top">Download Resume</v-tooltip><span><i
                                                        class="ri-download-2-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">Add to Wishlist</v-tooltip><span><i
                                                        class="ri-heart-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">View Profile</v-tooltip><span><i
                                                        class="ri-eye-line fs-13 align-middle"></i></span></a>
                                        </div>
                                    </div>
                                    <div class="popular-tags">
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-mortarboard text-muted me-1"></i> Graduate</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-moon-stars text-muted me-1"></i> flexible-shift</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-clock text-muted me-1"></i> Immediate Joinee</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-broadcast text-muted me-1"></i> Good at English</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 class="mb-0 fw-semibold">Skills :</h6>
                                        <div class="popular-tags flex-grow-1">
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">HTML</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">CSS</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">Javascript</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">Angular</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-primary-transparent"><i class="bi bi-plus"></i>
                                                More</a>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge badge-md rounded-pill bg-info-transparent"><v-tooltip
                                                    activator="parent" location="top">1 year bond accepted</v-tooltip><i
                                                    class="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge badge-md rounded-pill bg-primary-transparent"><i
                                                    class="bi bi-briefcase me-1"></i>Exp : 2 Years</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span class="avatar avatar-lg avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <h5 class="fw-semibold mb-0 d-flex align-items-center"><a
                                                    href="javascript:void(0);"> Dwayne Stort <i
                                                        class="bi bi-check-circle-fill text-success fs-16"><v-tooltip
                                                            activator="parent" location="top">Verified
                                                            candidate</v-tooltip></i></a></h5>
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);">Web Developer</a>
                                                <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i>
                                                    Gachibowli, Hyderabad</p>
                                            </div>
                                            <div class="d-flex align-items-center fs-12 text-muted">
                                                <p class="fs-12 mb-0">Ratings : </p>
                                                <div class="min-w-fit-content ms-2">
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star"></i></span>
                                                </div>
                                                <a href="javascript:void(0);"
                                                    class="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(35)</span>
                                                    <span>Ratings</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="btn-list">
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-primary text-fixed-white"><v-tooltip
                                                    activator="parent" location="top">Download Resume</v-tooltip><span><i
                                                        class="ri-download-2-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">Add to Wishlist</v-tooltip><span><i
                                                        class="ri-heart-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">View Profile</v-tooltip><span><i
                                                        class="ri-eye-line fs-13 align-middle"></i></span></a>
                                        </div>
                                    </div>
                                    <div class="popular-tags">
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-mortarboard text-muted me-1"></i> Post Graduate</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-moon-stars text-muted me-1"></i> flexible-shift</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-clock text-muted me-1"></i> Within 10 Days</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-broadcast text-muted me-1"></i> Good at English</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 class="mb-0 fw-semibold">Skills :</h6>
                                        <div class="popular-tags flex-grow-1">
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">React</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">Javascript</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">React Navtive</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-primary-transparent"><i class="bi bi-plus"></i>
                                                More</a>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge badge-md rounded-pill bg-info-transparent"><v-tooltip
                                                    activator="parent" location="top">1 year bond accepted</v-tooltip><i
                                                    class="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge badge-md rounded-pill bg-primary-transparent"><i
                                                    class="bi bi-briefcase me-1"></i>Exp : 4 Years</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span class="avatar avatar-lg avatar-rounded">
                                                <img src="/images/faces/21.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <h5 class="fw-semibold mb-0 d-flex align-items-center"><a
                                                    href="javascript:void(0);"> Jasmine Kova <i
                                                        class="bi bi-check-circle-fill text-success fs-16"><v-tooltip
                                                            activator="parent" location="top">Verified
                                                            candidate</v-tooltip></i></a></h5>
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);">Python Developer</a>
                                                <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i>
                                                    Gachibowli, Chennai</p>
                                            </div>
                                            <div class="d-flex align-items-center fs-12 text-muted">
                                                <p class="fs-12 mb-0">Ratings : </p>
                                                <div class="min-w-fit-content ms-2">
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star"></i></span>
                                                    <span class="text-warning"><i class="bi bi-star"></i></span>
                                                </div>
                                                <a href="javascript:void(0);"
                                                    class="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(56)</span>
                                                    <span>Ratings</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="btn-list">
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-primary text-fixed-white"><v-tooltip
                                                    activator="parent" location="top">Download Resume</v-tooltip><span><i
                                                        class="ri-download-2-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">Add to Wishlist</v-tooltip><span><i
                                                        class="ri-heart-line fs-13 align-middle"></i></span></a>
                                            <a href="javascript:void(0);"
                                                class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip
                                                    activator="parent" location="top">View Profile</v-tooltip><span><i
                                                        class="ri-eye-line fs-13 align-middle"></i></span></a>
                                        </div>
                                    </div>
                                    <div class="popular-tags">
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-mortarboard text-muted me-1"></i> MBA</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-moon-stars text-muted me-1"></i> Day-shift</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-clock text-muted me-1"></i> Within 30 Days</a>
                                        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
                                                class="bi bi-broadcast text-muted me-1"></i> Avg at English</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 class="mb-0 fw-semibold">Skills :</h6>
                                        <div class="popular-tags flex-grow-1">
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">Python</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">Java</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-light text-default">React</a>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge rounded-pill bg-primary-transparent"><i class="bi bi-plus"></i>
                                                More</a>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);"
                                                class="me-1 badge badge-md rounded-pill bg-primary-transparent"><i
                                                    class="bi bi-briefcase me-1"></i>Exp : 5 Years</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            Skills
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="popular-tags">
                            <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1">HTML</a>
                            <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1">CSS</a>
                            <a href="javascript:void(0);"
                                class="badge rounded-pill bg-light text-default me-1">Javascript</a>
                            <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1">Angular</a>
                            <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default">React</a>
                        </div>
                    </div>
                </div>
                <div class="card custom-card overflow-hidden">
                    <div class="card-header">
                        <div class="card-title">
                            Tools Used
                        </div>
                    </div>
                    <div class="card-body d-flex flex-wrap gap-2">
                        <span class="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/1.png" alt="">
                        </span>
                        <span class="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/2.png" alt="">
                        </span>
                        <span class="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/3.png" alt="">
                        </span>
                        <span class="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/4.png" alt="">
                        </span>
                        <span class="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/5.png" alt="">
                        </span>
                        <span class="avatar avatar-rounded bg-white shadow-sm border p-2">
                            <img src="/images/company-logos/6.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            Languages
                        </div>
                    </div>
                    <div class="card-body">
                        <p><span class="fw-semibold">English : </span>Fluent</p>
                        <p><span class="fw-semibold">Hindi : </span>Intermediate</p>
                        <p class="mb-0"><span class="fw-semibold">Telugu : </span>Expert</p>
                    </div>
                </div>
                <div class="card custom-card overflow-hidden">
                    <div class="card-header">
                        <div class="card-title">
                            Personal Information
                        </div>
                    </div>
                    <div class="card-body p-2">
                        <div class="table-responsive">
                            <table class="table table-responsive table-borderless">
                                <tbody>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Full Name</span>
                                        </td>
                                        <td>: Brenda Simpson</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Email</span>
                                        </td>
                                        <td>: brendra@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">D.O.B</span>
                                        </td>
                                        <td>: 13 Jan 2022</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Gender</span>
                                        </td>
                                        <td>: Female</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Age</span>
                                        </td>
                                        <td>: 35</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Mobile </span>
                                        </td>
                                        <td>: +91 7865343874</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Mother Tongue </span>
                                        </td>
                                        <td>: Telugu</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Marital Status </span>
                                        </td>
                                        <td>: Unmarried</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Blood Group </span>
                                        </td>
                                        <td>: o +ve</td>
                                    </tr>
                                    <tr>
                                        <td class="w-50">
                                            <span class="fw-semibold">Address </span>
                                        </td>
                                        <td> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex align-items-center">
                            <p class="fs-15 mb-0 me-4 fw-semibold">Social :</p>
                            <div class="btn-list mb-0">
                                <button
                                    class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xxl-0">
                                    <i class="ri-facebook-line"></i>
                                </button>
                                <button
                                    class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xxl-0">
                                    <i class="ri-twitter-line"></i>
                                </button>
                                <button
                                    class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xxl-0">
                                    <i class="ri-instagram-line"></i>
                                </button>
                                <button
                                    class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xxl-0">
                                    <i class="ri-github-line"></i>
                                </button>
                                <button
                                    class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xxl-0">
                                    <i class="ri-youtube-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="">
                            <h5 class="fw-semibold mb-3">Get Latest Alerts</h5>
                            <p>Latest candidate updates on the go to recieved direct to your email. Stay updated with your
                                latest new candidates list.</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Email Here" aria-label="blog-email"
                                    aria-describedby="blog-subscribe">
                                <button class="btn btn-primary" type="button" id="blog-subscribe">Subscribe</button>
                            </div>
                            <label class="form-check-label">
                                By Subscribing you accept to <a href="javascript:void(0);" class="text-success"><u>privacy
                                        policy</u></a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->
</div></template>

<style scoped></style>

