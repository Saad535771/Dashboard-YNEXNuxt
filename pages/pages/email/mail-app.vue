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
                current: "Mail App",
                list: [
                    'Pages', 'Email', 'Mail App'
                ]
            },
            content: '',
            singleSelecteValue: null,
            singleSelecteOptions: ['kimo@gmail.com', 'don@gmail.com', 'kia@gmail.com', 'jay@gmail.com'],
            WindowPreSize: [window.innerWidth],
        };
    },
    methods: {
        responsiveMaiView() {
            this.WindowPreSize.push(window.innerWidth);
            if (this.WindowPreSize.length > 2) { this.WindowPreSize.shift() }
            if (this.WindowPreSize.length > 1) {
                if ((this.WindowPreSize[this.WindowPreSize.length - 1] < 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] >= 992)) {
                    // less than 992;
                    this.$refs['mail-navigation'].classList.add('d-none');
                }
                if ((this.WindowPreSize[this.WindowPreSize.length - 1] >= 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] < 992)) {
                    // greater than 992
                    this.$refs['total-mails'].classList.remove('d-none');
                    this.$refs['mail-navigation'].classList.remove('d-none');
                    this.$refs['mails-information'].classList.remove('d-block');
                }
            }
        },
        totalmailscloseFn() {
            this.$refs['total-mails'].classList.add('d-none');
            this.$refs['mail-navigation'].classList.remove('d-none');
        },
        showMessages() {
            if (window.innerWidth <= 992) {
                this.$refs['total-mails'].classList.remove('d-none');
                this.$refs['mail-navigation'].classList.add('d-none');
            }
        },
        showMailDetail() {
            this.$refs['total-mails'].classList.add('d-none');
            this.$refs['mails-information'].classList.add('d-block');
        },
        hideMailDetail() {
            if (window.innerWidth <= 992) {
                this.$refs['total-mails'].classList.remove('d-none');
                this.$refs['mails-information'].classList.remove('d-block');
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.responsiveMaiView);

        if (window.innerWidth >= 992) {
            this.$refs['total-mails'].classList.remove('d-none');
            this.$refs['mail-navigation'].classList.remove('d-none');
        }
        else {
            this.$refs['mail-navigation'].classList.add('d-none');
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.responsiveMaiView);
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="main-mail-container p-2 gap-2 d-flex">
        <div ref="mail-navigation" class="mail-navigation border">
            <div class="d-grid align-items-top p-3 border-bottom">
                <button class="btn btn-success d-flex align-items-center justify-content-center" data-bs-toggle="modal"
                    data-bs-target="#mail-Compose">
                    <i class="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
                </button>
                <div class="modal modal-lg fade" id="mail-Compose" tabindex="-1" aria-labelledby="mail-ComposeLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-4">
                                <div class="row">
                                    <div class="col-xl-6 mb-2">
                                        <label for="fromMail" class="form-label">From<sup><i
                                                    class="ri-star-s-fill text-success fs-8"></i></sup></label>
                                        <input type="email" class="form-control" id="fromMail"
                                            value="jsontaylor2345@gmail.com">
                                    </div>
                                    <div class="col-xl-6 mb-2">
                                        <label for="toMail" class="form-label">To<sup><i
                                                    class="ri-star-s-fill text-success fs-8"></i></sup></label>
                                        <VueMultiselect :show-labels="false" v-model="singleSelecteValue" :multiple="true"
                                            :options="singleSelecteOptions"></VueMultiselect>
                                    </div>
                                    <div class="col-xl-6 mb-2">
                                        <label for="mailCC" class="form-label text-dark fw-semibold">Cc</label>
                                        <input type="email" class="form-control" id="mailCC">
                                    </div>
                                    <div class="col-xl-6 mb-2">
                                        <label for="mailBcc" class="form-label text-dark fw-semibold">Bcc</label>
                                        <input type="email" class="form-control" id="mailBcc">
                                    </div>
                                    <div class="col-xl-12 mb-2">
                                        <label for="Subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="Subject" placeholder="Subject">
                                    </div>
                                    <div class="col-xl-12">
                                        <label class="col-form-label">Content :</label>
                                        <div class="mail-compose">
                                            <vue-editor v-model="content"></vue-editor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-top p-3 bg-primary">
                <div>
                    <span class="avatar avatar-md online avatar-rounded">
                        <img src="/images/faces/9.jpg
                                    " alt="">
                    </span>
                </div>
                <div class="ms-2">
                    <p class="fw-semibold mb-0 text-fixed-white">Json Taylor</p>
                    <p class="text-fixed-white op-7 fs-11 mb-0">jsontaylor1992@gmail.com</p>
                </div>
            </div>
            <div>
                <PerfectScrollbar>
                    <ul class="list-unstyled mail-main-nav" id="mail-main-nav">
                        <li class="px-0 pt-0">
                            <span class="fs-11 text-muted op-7 fw-semibold">MAILS</span>
                        </li>
                        <li class="active mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-inbox-archive-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        All Mails
                                    </span>
                                    <span class="badge bg-success-transparent rounded-pill">12,456</span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-inbox-archive-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Inbox
                                    </span>
                                    <span class="badge bg-primary-transparent rounded-circle">8</span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-send-plane-2-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Sent
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-draft-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Drafts
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-spam-2-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Spam
                                    </span>
                                    <span class="badge bg-danger-transparent rounded-circle">4</span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-bookmark-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Important
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-delete-bin-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Trash
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-archive-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Archive
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mail-type">
                            <a @click="showMessages()" href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-star-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Starred
                                    </span>
                                    <span class="badge bg-warning-transparent rounded-circle">12</span>
                                </div>
                            </a>
                        </li>
                        <li class="px-0">
                            <span class="fs-11 text-muted op-7 fw-semibold">SETTINGS</span>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-settings-3-line align-middle fs-14"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Settings
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="px-0">
                            <span class="fs-11 text-muted op-7 fw-semibold">LABELS</span>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Mail
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Home
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Work
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-dark"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        Friends
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="px-0">
                            <span class="fs-11 text-muted op-7 fw-semibold">ONLINE USERS</span>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-top lh-1">
                                    <div class="me-2">
                                        <span class="avatar avatar-sm online avatar-rounded">
                                            <img src="/images/faces/4.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <p class="text-default fw-semibold mb-1">Angelica</p>
                                        <p class="fs-12 text-muted mb-0">Hello this is angelica.</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-top lh-1">
                                    <div class="me-2">
                                        <span class="avatar avatar-sm online avatar-rounded">
                                            <img src="/images/faces/6.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <p class="text-default fw-semibold mb-1">Rexha</p>
                                        <p class="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </div>
        <div ref="total-mails" class="total-mails border">
            <div class="p-3 d-flex align-items-center border-bottom">
                <div class="me-3">
                    <input class="form-check-input" type="checkbox" id="checkAll" value="" aria-label="...">
                </div>
                <div class="flex-fill">
                    <h6 class="fw-semibold mb-0">All Mails</h6>
                </div>
                <button @click="totalmailscloseFn" class="btn btn-icon btn-light me-1 d-lg-none d-block total-mails-close">
                    <v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">Close</v-tooltip>
                    <i class="ri-close-line"></i>
                </button>
                <div class="dropdown">
                    <button class="btn btn-icon btn-light btn-wave waves-light" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="ti ti-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Recent</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Unread</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Mark All Read</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Spam</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                    </ul>
                </div>
            </div>
            <div class="p-3 border-bottom">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0" placeholder="Search Email"
                        aria-describedby="button-addon2">
                    <button class="btn btn-light" type="button" id="button-addon2"><i
                            class="ri-search-line text-muted"></i></button>
                </div>
            </div>
            <PerfectScrollbar class="mail-messages" id="mail-messages">
                <ul class="list-unstyled mb-0 mail-messages-container">
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/5.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Sujika <span class="float-end text-muted fw-normal fs-11"><span class="me-2"><i
                                                    class="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</span>
                                    </p>
                                </a>
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">New Project details</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred true border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="active">
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel2" value=""
                                    aria-label="..." checked>
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/12.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Michael Jeremy <span class="float-end text-muted fw-normal fs-11">10:27AM</span>
                                    </p>
                                </a>
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">History of planets are
                                        discovered
                                        yesterday.</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel3" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/14.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        King Berunda <span class="badge bg-success">Promotion</span><span
                                            class="float-end text-muted fw-normal fs-11">Yesterday, 10:27AM</span>
                                    </p>
                                </a>
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Request for return of item
                                        ?</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel54" value=""
                                    aria-label="..." checked>
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/7.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Samantha May <span class="badge bg-primary">Social</span><span
                                            class="float-end text-muted fw-normal fs-11">24 Oct, 5:45PM</span>
                                    </p>
                                </a>
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Completion of work is
                                        pending</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel14" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/15.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Alex Carey <span class="float-end text-muted fw-normal fs-11">12 Sep,
                                            11:24AM</span>
                                    </p>
                                </a>
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Most Probable date of project
                                        completion</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred true border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel24" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/16.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Dawn Bradshaw <span class="badge bg-danger">Personal</span><span
                                            class="float-end text-muted fw-normal fs-11">11 Sep, 10:32AM</span>
                                    </p>
                                </a>
                                <!-- <p class="fs-12 mb-0"> -->
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Personal Mail</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred true border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel34" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/3.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        Kiara Jah <span class="float-end text-muted fw-normal fs-11">08 Aug,
                                            08:12AM</span>
                                    </p>
                                </a>
                                <!-- <p class="fs-12 mb-0"> -->
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Applying for bank loan?</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div @click="showMailDetail" class="d-flex align-items-top">
                            <div class="me-3 mt-1">
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel44" value=""
                                    aria-label="...">
                            </div>
                            <div class="me-1 lh-1">
                                <span class="avatar avatar-md offline me-2 avatar-rounded mail-msg-avatar">
                                    <img src="/images/faces/13.jpg" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);">
                                    <p class="mb-1 fs-12">
                                        David Subhman <span class="float-end text-muted fw-normal fs-11">16 July,
                                            05:52PM</span>
                                    </p>
                                </a>
                                <!-- <p class="fs-12 mb-0"> -->
                                <p class="mail-msg mb-0">
                                    <span class="d-block mb-0 fw-semibold text-truncate">Life Insurance
                                        Corparation.</span>
                                    <span class="fs-11 text-muted text-wrap text-truncate">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit
                                        <button class="btn p-0 lh-1 mail-starred border-0 float-end">
                                            <i class="ri-star-fill fs-14"></i>
                                        </button>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
        <div ref="mails-information" class="mails-information border">
            <div class="mail-info-header d-flex flex-wrap gap-2 align-items-center">
                <div class="me-1">
                    <span class="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                        <img src="/images/faces/12.jpg" alt="">
                    </span>
                </div>
                <div class="flex-fill">
                    <h6 class="mb-0 fw-semibold">Michael Jeremy</h6>
                    <span class="text-muted fs-12">michaeljeremy2194@gmail.com</span>
                </div>
                <div class="mail-action-icons">
                    <button class="btn btn-icon btn-light">
                        <v-tooltip activator="parent" location="top">Starred</v-tooltip>
                        <i class="ri-star-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Archive</v-tooltip>
                        <i class="ri-inbox-archive-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Report spam</v-tooltip>
                        <i class="ri-spam-2-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Delete</v-tooltip>
                        <i class="ri-delete-bin-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Reply</v-tooltip>
                        <i class="ri-reply-line"></i>
                    </button>
                </div>
                <div class="responsive-mail-action-icons">
                    <div class="dropdown">
                        <button class="btn btn-icon btn-light btn-wave waves-light waves-effect waves-light" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-star-line me-1 align-middle"></i>Starred</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-inbox-archive-line me-1 align-middle"></i>Archive</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-spam-2-line me-1 align-middle"></i>Report Spam</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-reply-line me-1 align-middle"></i>Reply</a></li>
                        </ul>
                    </div>
                    <button @click="hideMailDetail" class="btn btn-icon btn-light ms-1 close-button">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <PerfectScrollbar>
                <div class="mail-info-body p-4" id="mail-info-body">
                    <div class="d-sm-flex d-block align-items-center justify-content-between mb-4">
                        <div>
                            <p class="fs-20 fw-semibold mb-0">History of planets are discovered yesterday.</p>
                        </div>
                        <div class="float-end">
                            <span class="me-2 fs-12 text-muted">Oct-22-2022,03:05PM</span>
                        </div>
                    </div>
                    <div class="main-mail-content mb-4">
                        <p class="fs-14 fw-semibold mb-4">Hi, Json Taylor Greetings &#128400;</p>
                        <p class="mb-2 fs-12 text-muted">Earth, our home, is the third planet from the sun. While scientists
                            continue to hunt for clues of life beyond Earth, our home planet remains the only place in the
                            universe where we've ever identified living organisms. .</p>
                        <p class="mb-2 fs-12 text-muted">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and
                            is
                            mostly round because gravity generally pulls matter into a ball. But the spin of our home planet
                            causes it to be squashed at its poles and swollen at the equator, making the true shape of the
                            Earth
                            an "oblate spheroid.".</p>
                        <p class="mb-0 mt-4">
                            <span class="d-block">Regards,</span>
                            <span class="d-block">Michael Jeremy</span>
                        </p>
                    </div>
                    <div class="mail-attachments mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mb-0">
                                <span class="fs-14 fw-semibold"><i class="ri-attachment-2 me-1 align-middle"></i>Attachments
                                    (1.8mb):</span>
                            </div>
                            <div>
                                <button class="btn btn-sm btn-success-light">Download All</button>
                            </div>
                        </div>
                        <div class="mt-2 d-flex flex-wrap">
                            <a href="javascript:void(0);" class="mail-attachment border mb-1">
                                <div class="attachment-icon"><svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny"
                                        viewBox="0 0 512 512">
                                        <path fill="#FFF"
                                            d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" />
                                        <path fill="#2B669F"
                                            d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 28.1 28.1h305c15.5 0 28.1-12.6 28.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" />
                                        <path fill="#084272" d="M333.6 6v103.1h103z" />
                                        <g>
                                            <path fill="#084272"
                                                d="M465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" />
                                            <path fill="#1A252D"
                                                d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" />
                                            <path fill="#2B669F" d="M64.1 308.4h383.7v124.5H64.1z" />
                                        </g>
                                        <g fill="#2B669F">
                                            <path
                                                d="M298.3 78.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM298.3 110.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM391.8 142.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 174.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 206.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 238.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 270.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4z" />
                                        </g>
                                        <g fill="#FFF">
                                            <path
                                                d="M229.3 373.3c0 6.9-1.6 12.5-4.7 16.7-3.1 4.2-7.5 6.3-13.2 6.3-2.2 0-4.2-.4-5.9-1.3-1.7-.9-3.2-2.1-4.5-3.7v21.8h-14.4v-63.8h13.6l.4 5c1.3-1.9 2.8-3.3 4.6-4.3 1.8-1 3.8-1.5 6.1-1.5 5.7 0 10.1 2.2 13.3 6.6 3.1 4.4 4.7 10.2 4.7 17.4v.8zm-14.3-.9c0-3.9-.6-7-1.7-9.4-1.1-2.4-3-3.5-5.4-3.5-1.6 0-3 .3-4.1.9-1.1.6-2 1.5-2.7 2.6v19.2c.7 1 1.6 1.7 2.7 2.2 1.1.5 2.5.7 4.1.7 2.5 0 4.3-1 5.4-3.1 1.1-2.1 1.6-5 1.6-8.7v-.9zM239.8 372.4c0-7.2 1.6-13 4.7-17.4 3.1-4.4 7.6-6.6 13.3-6.6 2.1 0 4 .5 5.8 1.5 1.7 1 3.3 2.4 4.6 4.2V329h14.4v66.4H270l-1-5.6c-1.4 2.1-3 3.7-4.9 4.8-1.9 1.1-4 1.7-6.4 1.7-5.7 0-10.1-2.1-13.2-6.3-3.1-4.2-4.7-9.7-4.7-16.6v-1zm14.4.9c0 3.7.5 6.7 1.6 8.7 1.1 2.1 2.9 3.1 5.5 3.1 1.5 0 2.8-.3 4-.8 1.1-.6 2.1-1.4 2.8-2.4v-18.6c-.7-1.2-1.7-2.2-2.8-2.8-1.1-.7-2.4-1-3.9-1-2.6 0-4.4 1.2-5.5 3.5-1.1 2.4-1.7 5.5-1.7 9.4v.9zM300 395.4v-36.1h-6.6v-10h6.6v-4.8c0-5.3 1.6-9.3 4.8-12.2 3.2-2.9 7.7-4.3 13.5-4.3 1.1 0 2.2.1 3.3.2 1.1.2 2.4.4 3.8.7l-1.1 10.6c-.8-.1-1.5-.2-2.1-.3-.6-.1-1.3-.1-2.2-.1-1.8 0-3.2.5-4.2 1.4-1 .9-1.4 2.3-1.4 4v4.8h9.1v10h-9.1v36.1H300z" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="lh-1">
                                    <p class="mb-1 attachment-name text-truncate">
                                        Earth_Archeology_2.21-4.pdf
                                    </p>
                                    <p class="mb-0 fs-11 text-muted">
                                        0.85MB
                                    </p>
                                </div>
                            </a>
                            <a href="javascript:void(0);" class="mail-attachment ms-2 border mb-1">
                                <div class="attachment-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#FFF"
                                            d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" />
                                        <path fill="#24A885"
                                            d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 27.1 28.1h305c16.5 0 29.1-12.6 29.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" />
                                        <path fill="#16876B"
                                            d="M333.6 6v103.1h103zM465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" />
                                        <path fill="#59E0B9" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" />
                                        <path fill="#2EBA98" d="M64.1 308.4h383.7v124.5H64.1z" />
                                        <path fill="#16876B"
                                            d="M298.3 78.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM298.3 110.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM391.8 142.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 174.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 206.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 238.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 270.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4z" />
                                        <path fill="#FFF"
                                            d="M191.3 349.7v43.9c0 5.4-1.4 9.6-4.3 12.5-2.9 2.9-6.9 4.4-12.1 4.4-1.2 0-2.2-.1-3.2-.2s-2-.3-3.1-.5l.6-10.2c.8.2 1.4.3 2 .4s1.2.1 2.1.1c1.5 0 2.6-.5 3.4-1.6.8-1.1 1.2-2.7 1.2-4.8v-43.9h13.4zm-.2-10h-13.6v-9.1h13.6v9.1zM244.8 372.3c0 6.5-1.5 11.7-4.4 15.7-2.9 3.9-7.1 5.9-12.4 5.9-2.1 0-3.9-.4-5.5-1.2-1.6-.8-3-2-4.2-3.5v20.5h-13.5v-60h12.8l.4 4.7c1.2-1.8 2.6-3.1 4.3-4.1 1.7-1 3.6-1.4 5.7-1.4 5.4 0 9.5 2.1 12.5 6.2s4.4 9.6 4.4 16.3v.9zm-13.5-.8c0-3.7-.5-6.6-1.6-8.8-1.1-2.2-2.8-3.3-5.1-3.3-1.5 0-2.8.3-3.9.8-1.1.6-1.9 1.4-2.5 2.4v18.1c.6.9 1.5 1.6 2.5 2.1 1.1.5 2.4.7 3.9.7 2.4 0 4.1-1 5.1-2.9 1-2 1.5-4.7 1.5-8.2v-.9zM275.7 393.9c-6.6 0-11.7-2-15.4-6-3.7-4-5.6-9-5.6-15.1v-1.5c0-6.6 1.8-12 5.3-16.2 3.5-4.2 8.6-6.2 15.2-6.2 5.8 0 10.4 1.7 13.6 5.2 3.2 3.5 4.8 8.3 4.8 14.4v7.1h-24.8l-.1.2c.2 2.3 1.1 4.1 2.5 5.5 1.5 1.4 3.6 2.1 6.3 2.1 2.6 0 4.7-.2 6.5-.6 1.7-.4 3.7-1.1 5.9-2l3.2 8.3c-1.9 1.4-4.4 2.5-7.5 3.4-3.1 1-6.4 1.4-9.9 1.4zm-.5-34.5c-2.2 0-3.8.7-4.8 2.1-1 1.4-1.6 3.2-1.8 5.6l.1.2h11.7v-1c0-2.2-.4-3.9-1.2-5.1-.7-1.3-2.1-1.8-4-1.8zM303.3 371.5c0-6.8 1.5-12.2 4.4-16.3 3-4.1 7.1-6.2 12.5-6.2 2.3 0 4.3.5 6 1.6 1.7 1.1 3.2 2.6 4.5 4.6l.9-5.4h11.9v42.9c0 5.7-2 10.1-5.9 13.3-3.9 3.1-9.3 4.7-16.2 4.7-2.2 0-4.6-.3-7.1-.9-2.5-.6-4.8-1.4-7.1-2.5l2.3-10c1.9.9 3.8 1.5 5.6 1.9 1.8.4 3.8.6 6.1.6 2.9 0 5-.6 6.4-1.7 1.4-1.1 2.1-3 2.1-5.4v-3.4c-1.2 1.6-2.7 2.8-4.3 3.6-1.6.8-3.5 1.2-5.5 1.2-5.3 0-9.5-2-12.4-5.9-2.9-4-4.4-9.2-4.4-15.7v-1zm13.5.8c0 3.5.5 6.3 1.5 8.2 1 2 2.8 2.9 5.2 2.9 1.5 0 2.7-.2 3.8-.7 1.1-.5 1.9-1.1 2.6-2v-18.2c-.7-1-1.5-1.8-2.6-2.4-1-.5-2.3-.8-3.7-.8-2.4 0-4.1 1.1-5.2 3.3-1.1 2.2-1.6 5.2-1.6 8.8v.9z" />
                                    </svg>
                                </div>
                                <div class="lh-1">
                                    <p class="mb-1 attachment-name text-truncate">
                                        Planets_Image.Jpeg
                                    </p>
                                    <p class="mb-0 fs-11 text-muted">
                                        457KB
                                    </p>
                                </div>
                            </a>
                            <a href="javascript:void(0);" class="btn btn-icon btn-outline-light ms-2 btn-lg mb-1">
                                <v-tooltip activator="parent" location="top">Image_012.jpeg</v-tooltip>
                                <i class="ri-attachment-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="fs-14 fw-semibold"><i class="ri-reply-all-line me-1 align-middle"></i>Reply:</span>
                    </div>
                    <div class="mail-reply pb-2">
                        <vue-editor v-model="content"></vue-editor>
                    </div>
                </div>
            </PerfectScrollbar>
            <div class="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div>
                    <button class="btn btn-icon btn-light">
                        <v-tooltip activator="parent" location="top">Print</v-tooltip>
                        <i class="ri-printer-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Mark as read</v-tooltip>
                        <i class="ri-mail-open-line"></i>
                    </button>
                    <button class="btn btn-icon btn-light ms-1">
                        <v-tooltip activator="parent" location="top">Reload</v-tooltip>
                        <i class="ri-refresh-line"></i>
                    </button>
                </div>
                <div>
                    <button class="btn btn-secondary">
                        <i class="ri-share-forward-line me-1 align-middle"></i>Forward
                    </button>
                    <button class="btn btn-danger ms-1">
                        <i class="ri-reply-all-line me-1 align-middle"></i>Reply
                    </button>
                </div>
            </div>
        </div>
        <div class="mail-recepients border">
            <div class="p-3 border-bottom">
                <button class="btn btn-light btn-icon rounded-pill">
                    <v-tooltip activator="parent" location="left">Add Recepient</v-tooltip><i
                        class="ri-add-line"></i></button>
            </div>
            <PerfectScrollbar class="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar online avatar-rounded">
                        <v-tooltip activator="parent" location="left">Sujika</v-tooltip>
                        <img src="/images/faces/5.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar online avatar-rounded">
                        <v-tooltip activator="parent" location="left">Samantha May</v-tooltip>
                        <img src="/images/faces/7.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline avatar-rounded">
                        <v-tooltip activator="parent" location="left">Brenda</v-tooltip>
                        <img src="/images/faces/4.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline online avatar-rounded">
                        <v-tooltip activator="parent" location="left">Monika</v-tooltip>
                        <img src="/images/faces/8.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline avatar-rounded">
                        <v-tooltip activator="parent" location="left">Kiara Jah</v-tooltip>
                        <img src="/images/faces/3.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline avatar-rounded">
                        <v-tooltip activator="parent" location="left">Sujika</v-tooltip>
                        <img src="/images/faces/11.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar online avatar-rounded">
                        <v-tooltip activator="parent" location="left">Kim Noah</v-tooltip>
                        <img src="/images/faces/16.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline avatar-rounded">
                        <v-tooltip activator="parent" location="left">Professor</v-tooltip>
                        <img src="/images/faces/10.jpg" alt="">
                    </span>
                </a>
                <a href="javascript:void(0);" class="mail-recepeint-person">
                    <span class="avatar offline avatar-rounded">
                        <v-tooltip activator="parent" location="left">Alex Carey</v-tooltip>
                        <img src="/images/faces/15.jpg" alt="">
                    </span>
                </a>
            </PerfectScrollbar>
        </div>
    </div>
</template>

<style scoped></style>

