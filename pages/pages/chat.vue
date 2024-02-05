<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';
import { chatList } from '@/data/chat.js';

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
                current: "Chat",
                list: [
                    'Pages', 'Chat'
                ]
            },
            chatList,
            activeChat: [],
            inActiveChat: [],
            activeUser: [],
        };
    },
    methods: {
        showchartUser() {
            let elemRef: HTMLElement = this.$refs['chat-user-details'];
            elemRef.$el?.classList.add('open');
        },
        showchart(item) {
            this.activeUser = item;
            let elemRef: HTMLElement = this.$refs['main-chart-wrapper'];
            elemRef?.classList.add('responsive-chat-open');
        },
        removechart() {
            let elemRef: HTMLElement = this.$refs['main-chart-wrapper'];
            elemRef?.classList.remove('responsive-chat-open');
        },
        closechartUser() {
            let elemRef: HTMLElement = this.$refs['chat-user-details'];
            elemRef.$el?.classList.remove('open');
        }
    },
    mounted() {
        this.activeChat = this.chatList.Charts.filter(e => e.isOnline);
        this.inActiveChat = this.chatList.Charts.filter(e => !e.isOnline);
        this.activeUser = this.chatList.Charts[1];
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div ref="main-chart-wrapper" class="main-chart-wrapper p-2 gap-2 d-lg-flex">
        <div class="chat-info border overflow-hidden">
            <a aria-label="anchor" href="javascript:void(0)"
                class="btn btn-secondary btn-icon rounded-circle chat-add-icon">
                <i class="ri-add-line"></i>
            </a>
            <div class="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                <div>
                    <h5 class="fw-semibold mb-0">Messages</h5>
                </div>
                <div class="dropdown">
                    <button aria-label="button" class="btn btn-icon btn-secondary-light btn-wave waves-light" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-settings-3-line"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="chat-search p-3 border-bottom">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0" placeholder="Search Chat"
                        aria-describedby="button-addon2">
                    <button aria-label="button" class="btn btn-light" type="button" id="button-addon2"><i
                            class="ri-search-line text-muted"></i></button>
                </div>
            </div>
            <ul class="nav nav-tabs tab-style-2 nav-justified mb-0 border-bottom d-flex" id="myTab1" role="tablist">
                <li class="nav-item border-end me-0" role="presentation">
                    <button class="nav-link active h-100" id="users-tab" data-bs-toggle="tab"
                        data-bs-target="#users-tab-pane" type="button" role="tab" aria-controls="users-tab-pane"
                        aria-selected="true"><i class="ri-history-line me-1"></i>Recent</button>
                </li>
                <li class="nav-item border-end me-0" role="presentation">
                    <button class="nav-link h-100" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane"
                        type="button" role="tab" aria-controls="groups-tab-pane" aria-selected="false"><i
                            class="ri-group-2-line me-1"></i>Groups</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link h-100" id="calls-tab" data-bs-toggle="tab" data-bs-target="#calls-tab-pane"
                        type="button" role="tab" aria-controls="calls-tab-pane" aria-selected="false"><i
                            class="ri-phone-line me-1"></i>Calls</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active border-0 chat-users-tab" id="users-tab-pane" role="tabpanel"
                    aria-labelledby="users-tab" tabindex="0">
                    <PerfectScrollbar>
                        <ul class="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-semibold mb-2 op-7">ACTIVE CHATS</p>
                            </li>
                            <li v-for="(active, key) in activeChat" :key="key" :class="active.seen ? '' : 'chat-msg-unread'"
                                class="checkforactive">
                                <a @click="showchart(active)" href="javascript:void(0);">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span class="avatar avatar-md online me-2 avatar-rounded">
                                                <img :src="active.img" alt="img">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="mb-0 fw-semibold">
                                                {{ active.name }}
                                                <span class="float-end text-muted fw-normal fs-11">{{
                                                    active.lastMessageTime }}
                                                </span>
                                            </p>
                                            <p class="fs-12 mb-0" :class="active.isTyping ? 'chat-msg-typing' : ''">
                                                <span v-if="!active.isTyping" class="chat-msg text-truncate">{{
                                                    active.lastMsg }}</span>
                                                <span v-else class="chat-msg text-truncate">Typing...</span>
                                                <span v-if="!active.unReadMessages"
                                                    class="chat-read-icon float-end align-middle"><i
                                                        class="ri-check-double-fill"></i></span>
                                                <span v-if="active.unReadMessages"
                                                    class="badge bg-success-transparent rounded-circle float-end">{{ active.unReadMessages }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-semibold mb-2 op-7">ALL CHATS</p>
                            </li>
                            <li class="chat-inactive checkforactive" v-for="(inactive, key) in inActiveChat" :key="key"
                                :class="inactive.seen ? '' : 'chat-msg-unread'">
                                <a @click="showchart(inactive)" href="javascript:void(0);">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span class="avatar avatar-md offline me-2 avatar-rounded">
                                                <img :src="inactive.img" alt="img">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="mb-0 fw-semibold">
                                                {{ inactive.name }}
                                                <span v-if="!inactive.isTyping"
                                                    class="float-end text-muted fw-normal fs-11">{{
                                                        inactive.lastMessageTime }}
                                                </span>
                                            </p>
                                            <p class="fs-12 mb-0">
                                                <span class="chat-msg text-truncate">{{ inactive.lastMsg }}</span>
                                                <span v-if="!inactive.unReadMessages"
                                                    class="chat-read-icon float-end align-middle"><i
                                                        class="ri-check-double-fill"></i></span>
                                                <span v-if="inactive.unReadMessages"
                                                    class="badge bg-success-transparent rounded-circle float-end">2</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
                <div class="tab-pane fade border-0 chat-groups-tab" id="groups-tab-pane" role="tabpanel"
                    aria-labelledby="groups-tab" tabindex="0">
                    <PerfectScrollbar>
                        <div class="chat-users-tab">
                            <ul class="list-unstyled mb-0 mt-2 ">
                                <li class="pb-0">
                                    <p class="text-muted fs-11 fw-semibold mb-1 op-7">MY CHAT GROUPS</p>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0">1) Family Together</p>
                                            <p class="mb-0"><span class="badge bg-success-transparent">4
                                                    Online</span></p>
                                        </div>
                                        <div class="avatar-list-stacked my-auto">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img :src="activeUser.img" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img :src="activeUser.img" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +19
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0">2) Work Buddies </p>
                                            <p class="mb-0"><span class="badge bg-secondary-transparent">32
                                                    Online</span></p>
                                        </div>
                                        <div class="avatar-list-stacked my-auto">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/7.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/9.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +123
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0">3) Friends Forever</p>
                                            <p class="mb-0"><span class="badge bg-warning-transparent">3
                                                    Online</span></p>
                                        </div>
                                        <div class="avatar-list-stacked my-auto">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +15
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0">4) Social Media Deals</p>
                                            <p class="mb-0"><span class="badge bg-danger-transparent">5
                                                    Online</span></p>
                                        </div>
                                        <div class="avatar-list-stacked my-auto">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/7.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +28
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0">4) Apartment Group</p>
                                            <p class="mb-0"><span class="badge bg-light text-dark">0 Online</span>
                                            </p>
                                        </div>
                                        <div class="avatar-list-stacked my-auto">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +53
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="list-unstyled mb-0 mt-2 ">
                                <li class="pb-0">
                                    <p class="text-muted fs-11 fw-semibold mb-1 op-7">GROUP CHATS</p>
                                </li>
                                <li v-for="(group, key) in chatList?.groupChat" :key="key" class="checkforactive">
                                    <a @click="showchart(group)" href="javascript:void(0);">
                                        <div class="d-flex align-items-top">
                                            <div class="me-1 lh-1">
                                                <span class="avatar avatar-md  me-2 avatar-rounded"
                                                    :class="group.isOnline ? 'online' : 'offline'">
                                                    <img :src="group.img" alt="img">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <p class="mb-0 fw-semibold">
                                                    {{ group.name }} <span class="float-end text-muted fw-normal fs-11">{{
                                                        group.lastMessageTime }}</span>
                                                </p>
                                                <p class="fs-12 mb-0  " :class="group.howisTyping ? 'chat-msg-typing' : ''">
                                                    <span class="chat-msg text-truncate">
                                                        <template v-if="group.howisTyping">
                                                            {{ group.howisTyping }} Typing...
                                                        </template>
                                                        <template v-if="group.lastMsg">
                                                            {{ group.whoslastMsg }} : {{ group.lastMsg }}
                                                        </template>
                                                    </span>
                                                    <span v-if="group.allSeen"
                                                        class="chat-read-icon float-end align-middle"><i
                                                            class="ri-check-double-fill"></i></span>
                                                    <span v-if="group.unReadMessages"
                                                        class="badge bg-success-transparent rounded-circle float-end">{{
                                                            group.unReadMessages }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </PerfectScrollbar>
                </div>
                <div class="tab-pane fade border-0 chat-calls-tab" id="calls-tab-pane" role="tabpanel"
                    aria-labelledby="calls-tab" tabindex="0">
                    <PerfectScrollbar>
                        <ul class="list-unstyled mb-0 mt-2 chat-calls-tab">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md online me-2 avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Sujika
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">Today,12:47PM</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md online me-2 avatar-rounded">
                                            <img src="/images/faces/7.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Melissa
                                            <span class="ms-1 outgoing-call-failed"><i
                                                    class="ti ti-arrow-up-right"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">Today,10:27AM</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/21.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Sharukh Sam
                                            <span class="ms-1 outgoing-call-success"><i
                                                    class="ti ti-arrow-up-right"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">Yesterday,12:45PM</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-video"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/15.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Kiram Kumal
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">3 Days ago</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/4.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Amanda Sams
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">22, Oct 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-video"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/16.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Azimo Peter
                                            <span class="ms-1 incoming-call-failed"><i
                                                    class="ti ti-arrow-up-right"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">24, Oct 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Sierra Adams
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">22, Oct 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md online me-2 avatar-rounded">
                                            <img src="/images/faces/3.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Dimple Kanns
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">13, Oct 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-video"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md online me-2 avatar-rounded">
                                            <img src="/images/faces/9.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Adrea Jaremiah
                                            <span class="ms-1 outgoing-call-failed"><i
                                                    class="ti ti-arrow-up-right"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">13, Sep 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/21.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Anjaneliyu
                                            <span class="ms-1 outgoing-call-success"><i
                                                    class="ti ti-arrow-up-right"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">10, July 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="me-1 lh-1">
                                        <span class="avatar avatar-md offline me-2 avatar-rounded">
                                            <img src="/images/faces/14.jpg" alt="img">
                                        </span>
                                    </div>
                                    <div class="flex-fill my-auto">
                                        <p class="mb-0 fw-semibold">
                                            Jason Steph
                                            <span class="ms-1 incoming-call-success"><i
                                                    class="ti ti-arrow-down-left"></i></span>
                                        </p>
                                        <p class="fs-12 mb-0">
                                            <span class="text-muted text-truncate">1, Apr 2022</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <button aria-label="button" type="button"
                                            class="btn btn-sm btn-icon btn-primary-light">
                                            <i class="ti ti-phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
        <div class="main-chat-area border">
            <div class="d-flex align-items-center p-2 border-bottom">
                <div class="me-2 lh-1">
                    <span class="avatar avatar-lg me-2 avatar-rounded chatstatusperson"
                        :class="activeUser.isOnline ? 'online' : 'offline'">
                        <img class="chatimageperson" :src="activeUser.img" alt="img">
                    </span>
                </div>
                <div class="flex-fill">
                    <p class="mb-0 fw-semibold fs-14">
                        <a @click="showchartUser()" href="javascript:void(0);"
                            class="chatnameperson responsive-userinfo-open">{{ activeUser.name }}</a>
                    </p>
                    <p class="text-muted mb-0 chatpersonstatus">{{ activeUser.isOnline ? 'online' : 'offline' }}</p>
                </div>
                <div class="d-flex flex-wrap rightIcons">
                    <button aria-label="button" type="button" class="btn btn-icon btn-outline-light my-1 ms-2">
                        <i class="ti ti-phone"></i>
                    </button>
                    <button aria-label="button" type="button" class="btn btn-icon btn-outline-light my-1 ms-2">
                        <i class="ti ti-video"></i>
                    </button>
                    <button @click="showchartUser()" aria-label="button" type="button"
                        class="btn btn-icon btn-outline-light my-1 ms-2 responsive-userinfo-open">
                        <i class="ti ti-user-circle" id="responsive-chat-close"></i>
                    </button>
                    <div class="dropdown ms-2">
                        <button aria-label="button" class="btn btn-icon btn-outline-light my-1 btn-wave waves-light"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Profile</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Clear Chat</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Delete User</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Block User</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Report</a></li>
                        </ul>
                    </div>
                    <button aria-label="button" type="button" @click="removechart"
                        class="btn btn-icon btn-outline-light my-1 ms-2 responsive-chat-close">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <PerfectScrollbar>
                <div class="chat-content" id="main-chat-content">
                    <ul class="list-unstyled">
                        <li class="chat-day-label">
                            <span>Today</span>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md avatar-rounded chatstatusperson"
                                        :class="activeUser.isOnline ? 'online' : 'offline'">
                                        <img class="chatimageperson" :src="activeUser.img" alt="img">
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">11:48PM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Nice to meet you &#128512;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>11:50PM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">It is a long established fact that a reader will be
                                                distracted by the readable content of a page when looking at its
                                                layout</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar online avatar-md avatar-rounded">
                                        <img src="/images/faces/15.jpg" alt="img">
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md avatar-rounded chatstatusperson"
                                        :class="activeUser.isOnline ? 'online' : 'offline'">
                                        <img class="chatimageperson" :src="activeUser.img" alt="img">
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">11:51PM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Who are you ?</p>
                                        </div>
                                        <div>
                                            <p class="mb-0">I don't know anyone named jeremiah.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>11:52PM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Some of the recent images taken are nice &#128076;</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <img src="/images/faces/15.jpg" alt="img">
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md avatar-rounded chatstatusperson"
                                        :class="activeUser.isOnline ? 'online' : 'offline'">
                                        <img class="chatimageperson" :src="activeUser.img" alt="img">
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">11:55PM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Here are some of them have a look</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 d-sm-flex d-block">
                                                <NuxtLink to="/apps/gallery" class="avatar avatar-xl m-1"><img
                                                        src="/images/media/media-64.jpg" alt=""></NuxtLink>
                                                <NuxtLink to="/apps/gallery" class="avatar avatar-xl m-1"><img
                                                        src="/images/media/media-63.jpg" alt=""></NuxtLink>
                                                <NuxtLink to="/apps/gallery" class="avatar avatar-xl m-1"><img
                                                        src="/images/media/media-62.jpg" alt=""></NuxtLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>11:52PM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div class="">
                                            <a aria-label="anchor" href="javascript:void(0)" class="text-fixed-white"><i
                                                    class="ri-play-circle-line align-middle"></i></a>
                                            <span class="mx-1">
                                                <svg width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                                <svg class="chat_audio" width="20" height="20">
                                                    <defs></defs>
                                                    <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"
                                                            viewBox="0 0 24 24" width="20" height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)" class="fill-primary"></path>
                                                        </svg></g>
                                                </svg>
                                            </span>
                                            <a aria-label="anchor" href="javascript:void(0)" class="text-fixed-white"><i
                                                    class="ri-download-2-line align-middle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <img src="/images/faces/15.jpg" alt="img">
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md avatar-rounded"
                                        :class="activeUser.isOnline ? 'online' : 'offline'">
                                        <img class="chatimageperson" :src="activeUser.img" alt="img">
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info chatnameperson">
                                        {{ activeUser.name }} <span class="msg-sent-time">11:45PM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Happy to talk with you,chat you later &#128075;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </PerfectScrollbar>
            <div class="chat-footer">
                <input class="form-control" placeholder="Type your message here..." type="text">
                <a aria-label="anchor" class="btn btn-icon mx-2 btn-success-light" href="javascript:void(0)">
                    <i class="ri-emotion-line"></i>
                </a>
                <a aria-label="anchor" class="btn btn-primary btn-icon btn-send" href="javascript:void(0)">
                    <i class="ri-send-plane-2-line"></i>
                </a>
            </div>
        </div>
        <PerfectScrollbar ref="chat-user-details" class="chat-user-details border p-4 overflow-hidden"
            id="chat-user-details">
            <button aria-label="button" type="button" @click="closechartUser"
                class="btn btn-icon btn-outline-light my-1 ms-2 responsive-chat-close2">
                <i class="ri-close-line"></i>
            </button>
            <div class="text-center mb-5">
                <span class="avatar avatar-rounded avatar-xxl me-2 mb-3 chatstatusperson"
                    :class="activeUser.isOnline ? 'online' : 'offline'">
                    <img class="chatimageperson" :src="activeUser.img" alt="img">
                </span>
                <p class="mb-1 fs-15 fw-semibold text-dark lh-1 chatnameperson">{{ activeUser.name }}</p>
                <p class="fs-12 text-muted">{{ activeUser.email }}</p>
                <p class="text-center mb-0">
                    <button type="button" aria-label="button" class="btn btn-icon rounded-pill btn-primary-light"><i
                            class="ri-phone-line"></i></button>
                    <button type="button" aria-label="button" class="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                            class="ri-video-add-line"></i></button>
                    <button type="button" aria-label="button" class="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                            class="ri-chat-1-line"></i></button>
                </p>
            </div>
            <div class="mb-5">
                <div class="fw-semibold mb-4">Shared Files
                    <span class="badge bg-primary-transparent rounded-circle ms-1">4</span>
                    <span class="float-end fs-11"><a href="javascript:void(0);" class="link-primary text-underline"><u>View
                                All</u></a></span>
                </div>
                <ul class="shared-files list-unstyled">
                    <li>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="shared-file-icon">
                                    <i class="ti ti-file-text"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <p class="fs-12 fw-semibold mb-0">Project Details.pdf</p>
                                <p class="mb-0 text-muted fs-11">24,Oct 2022 - 14:24PM</p>
                            </div>
                            <div class="fs-18">
                                <a aria-label="anchor" href="javascript:void(0)"><i
                                        class="ri-download-2-line text-muted"></i></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="shared-file-icon">
                                    <i class="ri-image-line"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <p class="fs-12 fw-semibold mb-0">Img_02.Jpg</p>
                                <p class="mb-0 text-muted fs-11">22,Oct 2022 - 10:19AM</p>
                            </div>
                            <div class="fs-18">
                                <a aria-label="anchor" href="javascript:void(0)"><i
                                        class="ri-download-2-line text-muted"></i></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="shared-file-icon">
                                    <i class="ri-image-line"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <p class="fs-12 fw-semibold mb-0">Img_15.Jpg</p>
                                <p class="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                            </div>
                            <div class="fs-18">
                                <a aria-label="anchor" href="javascript:void(0)"><i
                                        class="ri-download-2-line text-muted"></i></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="shared-file-icon">
                                    <i class="ri-video-line"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <p class="fs-12 fw-semibold mb-0">Video_15_02_2022.MP4</p>
                                <p class="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                            </div>
                            <div class="fs-18">
                                <a href="javascript:void(0)"><i class="ri-download-2-line text-muted"></i></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mb-0">
                <div class="fw-semibold mb-4">Photos & Media
                    <span class="badge bg-primary-transparent rounded-circle ms-1">22</span>
                    <span class="float-end fs-11"><a href="javascript:void(0);" class="link-primary text-underline"><u>View
                                All</u></a></span>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-56.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-52.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-53.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-62.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-63.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-64.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-13.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-19.jpg" alt="">
                        </NuxtLink>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <NuxtLink to="/apps/gallery" class="chat-media">
                            <img src="/images/media/media-20.jpg" alt="">
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- </div> -->
            <!-- </div> -->
        </PerfectScrollbar>
    </div>
</template>

<style scoped></style>

