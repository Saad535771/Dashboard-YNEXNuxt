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
                current: "Icons",
                list: [
                    'Icons', 'Icons'
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
                <div class="card-header">
                    <div class="card-title">Bootstrap Icons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a
                            href="https://icons.getbootstrap.com/" target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-arrow-left-circle
                            </v-tooltip><i class="bi bi-arrow-left-circle"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-arrows-move
                            </v-tooltip><i class="bi bi-arrows-move"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-bag </v-tooltip><i
                                class="bi bi-bag"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-bar-chart-line
                            </v-tooltip><i class="bi bi-bar-chart-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-basket
                            </v-tooltip><i class="bi bi-basket"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-bell
                            </v-tooltip><i class="bi bi-bell"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-book
                            </v-tooltip><i class="bi bi-book"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-box </v-tooltip><i
                                class="bi bi-box"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-briefcase
                            </v-tooltip><i class="bi bi-briefcase"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-brightness-high
                            </v-tooltip><i class="bi bi-brightness-high"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-calendar
                            </v-tooltip><i class="bi bi-calendar"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bi bi-paint-bucket
                            </v-tooltip><i class="bi bi-paint-bucket"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Remix Icons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a href="https://remixicon.com/"
                            target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-home-line
                            </v-tooltip><i class="ri-home-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-mail-line
                            </v-tooltip><i class="ri-mail-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-briefcase-line
                            </v-tooltip><i class="ri-briefcase-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-window-line
                            </v-tooltip><i class="ri-window-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-chat-2-line
                            </v-tooltip><i class="ri-chat-2-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-chat-settings-line
                            </v-tooltip><i class="ri-chat-settings-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-edit-line
                            </v-tooltip><i class="ri-edit-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-layout-line
                            </v-tooltip><i class="ri-layout-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-code-s-slash-line
                            </v-tooltip><i class="ri-code-s-slash-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-airplay-line
                            </v-tooltip><i class="ri-airplay-line"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ri-file-line
                            </v-tooltip><i class="ri-file-line"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Feather Icons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a href="https://feathericons.com/"
                            target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-activity
                            </v-tooltip><i class="fe fe-activity"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-airplay
                            </v-tooltip><i class="fe fe-airplay"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-alert-circle
                            </v-tooltip><i class="fe fe-alert-circle"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-alert-triangle
                            </v-tooltip><i class="fe fe-alert-triangle"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-bar-chart-2
                            </v-tooltip><i class="fe fe-bar-chart-2"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-bell
                            </v-tooltip><i class="fe fe-bell"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-camera
                            </v-tooltip><i class="fe fe-camera"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-copy
                            </v-tooltip><i class="fe fe-copy"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-eye </v-tooltip><i
                                class="fe fe-eye"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-file
                            </v-tooltip><i class="fe fe-file"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">fe fe-layout
                            </v-tooltip><i class="fe fe-layout"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Tabler Icons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a href="https://tabler-icons.io/"
                            target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-brand-tabler
                            </v-tooltip><i class="ti ti-brand-tabler"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-activity-heartbeat
                            </v-tooltip><i class="ti ti-activity-heartbeat"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-alert-octagon
                            </v-tooltip><i class="ti ti-alert-octagon"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-album
                            </v-tooltip><i class="ti ti-album"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-align-right
                            </v-tooltip><i class="ti ti-align-right"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-antenna-bars-5
                            </v-tooltip><i class="ti ti-antenna-bars-5"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-armchair
                            </v-tooltip><i class="ti ti-armchair"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-arrow-big-right
                            </v-tooltip><i class="ti ti-arrow-big-right"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-arrows-shuffle-2
                            </v-tooltip><i class="ti ti-arrows-shuffle-2"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-backspace
                            </v-tooltip><i class="ti ti-backspace"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-bell
                            </v-tooltip><i class="ti ti-bell"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">ti ti-color-picker
                            </v-tooltip><i class="ti ti-color-picker"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Line Awesome Icons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a
                            href="https://icons8.com/line-awesome" target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-bell
                            </v-tooltip><i class="las la-bell"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-exclamation-circle </v-tooltip><i class="las la-exclamation-circle"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-exclamation-triangle </v-tooltip><i class="las la-exclamation-triangle"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-arrow-alt-circle-down </v-tooltip><i class="las la-arrow-alt-circle-down"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-arrow-alt-circle-up </v-tooltip><i class="las la-arrow-alt-circle-up"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-arrow-alt-circle-left </v-tooltip><i class="las la-arrow-alt-circle-left"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las
                                la-arrow-alt-circle-right </v-tooltip><i class="las la-arrow-alt-circle-right"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-history
                            </v-tooltip><i class="las la-history"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-headphones
                            </v-tooltip><i class="las la-headphones"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-tv </v-tooltip><i
                                class="las la-tv"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-car-side
                            </v-tooltip><i class="las la-car-side"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-envelope
                            </v-tooltip><i class="las la-envelope"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-edit
                            </v-tooltip><i class="las la-edit"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">las la-map
                            </v-tooltip><i class="las la-map"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Boxicons</div>
                </div>
                <div class="card-body">
                    <p class="mb-1">Simply beautiful open source icons. For more info <a href="https://boxicons.com/"
                            target="_blank" class="text-primary">click here</a>.</p>
                    <p class="mb-4"><code>&lt;i class="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                    <ul class="icons-list list-unstyled">
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-home
                            </v-tooltip><i class="bx bx-home"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-home-alt
                            </v-tooltip><i class="bx bx-home-alt"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-box </v-tooltip><i
                                class="bx bx-box"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-medal
                            </v-tooltip><i class="bx bx-medal"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-file
                            </v-tooltip><i class="bx bx-file"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-palette
                            </v-tooltip><i class="bx bx-palette"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-receipt
                            </v-tooltip><i class="bx bx-receipt"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-table
                            </v-tooltip><i class="bx bx-table"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-bar-chart-alt
                            </v-tooltip><i class="bx bx-bar-chart-alt"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-layer
                            </v-tooltip><i class="bx bx-layer"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-map-alt
                            </v-tooltip><i class="bx bx-map-alt"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-gift
                            </v-tooltip><i class="bx bx-gift"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-file-blank
                            </v-tooltip><i class="bx bx-file-blank"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-lock-alt
                            </v-tooltip><i class="bx bx-lock-alt"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-error
                            </v-tooltip><i class="bx bx-error"></i></li>
                        <li class="icons-list-item"> <v-tooltip activator="parent" location="top">bx bx-error-circle
                            </v-tooltip><i class="bx bx-error-circle"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

