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
                current: "Contacts",
                list: [
                    'Pages', 'Contacts'
                ]
            },
        };
    },
};
</script>

<template>
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card mt-4">
                <div class="card-body">
                    <div class="contact-header">
                        <div class="d-sm-flex d-block align-items-center justify-content-between">
                            <div class="h5 fw-semibold mb-0">Contacts</div>
                            <div class="d-flex mt-sm-0 mt-2 align-items-center">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0" placeholder="Search Contact"
                                        aria-describedby="search-contact-member">
                                    <button class="btn btn-light" type="button" id="search-contact-member"><i
                                            class="ri-search-line text-muted"></i></button>
                                </div>
                                <div class="dropdown ms-2">
                                    <button class="btn btn-icon btn-primary-light btn-wave" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Copy All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Move To</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-icon btn-secondary-light ms-2"><v-tooltip activator="parent"
                                        location="top">Add Contact</v-tooltip><i class="ri-add-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top ">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/4.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Melissa Jane
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 354 2345
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-fill fs-16 text-danger"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top ">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/15.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Simon Cowall
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 873 8923
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Susana Sane
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">susanasane@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 347 0923
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-fill fs-16 text-danger"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/13.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Sahne Watson
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 674 7824
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/media/media-39.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Dwayne Happy
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">dwaynehappy235@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 985 2893
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/5.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Meisha Tite
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">meishatite456@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 675 4680
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/10.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Andrew Gerfield
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">andrewgerfield00@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 765 8937
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/21.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Samantha Melon
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">samanthamelon@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 890 5687
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/11.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Elisha Smith
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">elishasmith@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 972 9883
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/media/media-63.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Devon Convoy
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">devonconvoy65@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 693 7836
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-fill fs-16 text-danger"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded bg-primary">
                                SJ
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Shensovic Jeremy
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">shensovicjeremy@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 238 2342
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/12.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Jason Mama
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">jasonmama96@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 875 6789
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/1.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Monika Karen
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">monikakaren@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 568 9234
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/media/media-13.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Tom Holland
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">tomholland98@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 892 4334
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/media/media-36.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Anelica Julie
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">angelicajulie@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 882 3445
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/8.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Aneera Khan
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">aneerakhan@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 973 8734
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/21.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Linda Simson
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">lindasimson@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 234 9345
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-fill fs-16 text-danger"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/faces/14.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Umaga Nigel
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 783 0213
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-line fs-16 text-muted"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                            type="button">
                            <i class="ri-heart-3-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-body contact-action">
                    <div class="contact-overlay"></div>
                    <div class="d-flex align-items-top">
                        <div class="d-flex flex-fill flex-wrap gap-3">
                            <div class="avatar avatar-xl avatar-rounded">
                                <img src="/images/media/media-8.jpg" alt="">
                            </div>
                            <div>
                                <h6 class="mb-1 fw-semibold">
                                    Json Taylor
                                </h6>
                                <p class="mb-1 text-muted contact-mail text-truncate">jsontaylor@gmail.com</p>
                                <p class="fw-semibold fs-11 mb-0 text-primary">
                                    +1(555) 234 2452
                                </p>
                            </div>
                        </div>
                        <div>
                            <i class="ri-heart-3-fill fs-16 text-danger"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                        <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                            View Contact
                        </button>
                        <div class="dropdown contact-hover-dropdown">
                            <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-share-line me-2 align-middle"></i>Share</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                            class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                                </li>
                            </ul>
                        </div>
                        <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                        type="button">
                        <i class="ri-heart-3-fill text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
            <div class="card-body contact-action">
                <div class="contact-overlay"></div>
                <div class="d-flex align-items-top">
                    <div class="d-flex flex-fill flex-wrap gap-3">
                        <div class="avatar avatar-xl avatar-rounded">
                            <img src="/images/faces/7.jpg" alt="">
                        </div>
                        <div>
                            <h6 class="mb-1 fw-semibold">
                                Karizma Tope
                            </h6>
                            <p class="mb-1 text-muted contact-mail text-truncate">Karizmatope@gmail.com</p>
                            <p class="fw-semibold fs-11 mb-0 text-primary">
                                +1(555) 890 2455
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="ri-heart-3-line fs-16 text-muted"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                    <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                        View Contact
                    </button>
                    <div class="dropdown contact-hover-dropdown">
                        <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-share-line me-2 align-middle"></i>Share</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                            </li>
                        </ul>
                    </div>
                    <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                        type="button">
                        <i class="ri-heart-3-fill text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
            <div class="card-body contact-action">
                <div class="contact-overlay"></div>
                <div class="d-flex align-items-top">
                    <div class="d-flex flex-fill flex-wrap gap-3">
                        <div class="avatar avatar-xl avatar-rounded">
                            <img src="/images/media/media-34.jpg" alt="">
                        </div>
                        <div>
                            <h6 class="mb-1 fw-semibold">
                                Gahaskar Shaik
                            </h6>
                            <p class="mb-1 text-muted contact-mail text-truncate">gahaskarshaik@gmail.com</p>
                            <p class="fw-semibold fs-11 mb-0 text-primary">
                                +1(555) 982 7648
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="ri-heart-3-line fs-16 text-muted"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                    <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                        View Contact
                    </button>
                    <div class="dropdown contact-hover-dropdown">
                        <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-share-line me-2 align-middle"></i>Share</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                            </li>
                        </ul>
                    </div>
                    <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                        type="button">
                        <i class="ri-heart-3-fill text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
            <div class="card-body contact-action">
                <div class="contact-overlay"></div>
                <div class="d-flex align-items-top">
                    <div class="d-flex flex-fill flex-wrap gap-3">
                        <div class="avatar avatar-xl avatar-rounded">
                            <img src="/images/media/media-21.jpg" alt="">
                        </div>
                        <div>
                            <h6 class="mb-1 fw-semibold">
                                Balvinder Singh
                            </h6>
                            <p class="mb-1 text-muted contact-mail text-truncate">balvindersingh@gmail.com</p>
                            <p class="fw-semibold fs-11 mb-0 text-primary">
                                +1(555) 002 1239
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="ri-heart-3-line fs-16 text-muted"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                    <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                        View Contact
                    </button>
                    <div class="dropdown contact-hover-dropdown">
                        <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-share-line me-2 align-middle"></i>Share</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                            </li>
                        </ul>
                    </div>
                    <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                        type="button">
                        <i class="ri-heart-3-fill text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
            <div class="card-body contact-action">
                <div class="contact-overlay"></div>
                <div class="d-flex align-items-top">
                    <div class="d-flex flex-fill flex-wrap gap-3">
                        <div class="avatar avatar-xl avatar-rounded">
                            <img src="/images/faces/6.jpg" alt="">
                        </div>
                        <div>
                            <h6 class="mb-1 fw-semibold">
                                Ramika Missi
                            </h6>
                            <p class="mb-1 text-muted contact-mail text-truncate">ramikamissi@gmail.com</p>
                            <p class="fw-semibold fs-11 mb-0 text-primary">
                                +1(555) 982 4834
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="ri-heart-3-line fs-16 text-muted"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                    <button type="button" class="btn btn-sm btn-light contact-hover-btn">
                        View Contact
                    </button>
                    <div class="dropdown contact-hover-dropdown">
                        <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-share-line me-2 align-middle"></i>Share</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-phone-line me-2 align-middle"></i>Call</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-chat-2-line me-2 align-middle"></i>Message</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-video-chat-line me-2 align-middle"></i>Video Call</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri ri-heart-3-line me-2 align-middle"></i>Favourite</a>
                            </li>
                        </ul>
                    </div>
                    <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1"
                        type="button">
                        <i class="ri-heart-3-fill text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-end">
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
        </ul>
    </nav>
</div>
<!--End::row-1 --></template>

<style scoped></style>

