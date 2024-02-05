<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from "@/data/prismCode/utilities/avatar.js";
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
                current: "Avatars",
                list: [
                    'Utilities', 'Avatars'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatars" title="Avatars" custom-card-body-class="py-4">
                <span class="avatar me-2 avatar-radius-0">
                    <img src="/images/faces/1.jpg" alt="img">
                </span>
                <span class="avatar me-2">
                    <img src="/images/faces/2.jpg" alt="img">
                </span>
                <span class="avatar me-2 avatar-rounded">
                    <img src="/images/faces/3.jpg" alt="img">
                </span>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarSizes"
                title="Avatar Sizes<p class='subtitle text-muted fs-12 fw-normal'>Avatars of different sizes</p>">
                <span class="avatar avatar-xs me-2">
                    <img src="/images/faces/4.jpg" alt="img">
                </span>
                <span class="avatar avatar-sm me-2">
                    <img src="/images/faces/5.jpg" alt="img">
                </span>
                <span class="avatar avatar-md me-2">
                    <img src="/images/faces/6.jpg" alt="img">
                </span>
                <span class="avatar avatar-lg me-2">
                    <img src="/images/faces/7.jpg" alt="img">
                </span>
                <span class="avatar avatar-xl me-2">
                    <img src="/images/faces/8.jpg" alt="img">
                </span>
                <span class="avatar avatar-xxl me-2">
                    <img src="/images/faces/9.jpg" alt="img">
                </span>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarWithIcons"
                title="Avatar With Icons<p class='subtitle text-muted fs-12 fw-normal'>Avatar contains icons to perform respective action.</p>">
                <span class="avatar avatar-xs me-2 avatar-rounded">
                    <img src="/images/faces/2.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge bg-success rounded-pill avatar-badge"><i
                            class="fe fe-camera"></i></a>
                </span>
                <span class="avatar avatar-sm me-2 avatar-rounded">
                    <img src="/images/faces/3.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge rounded-pill bg-secondary avatar-badge"><i
                            class="fe fe-edit"></i></a>
                </span>
                <span class="avatar avatar-md me-2 avatar-rounded">
                    <img src="/images/faces/14.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge rounded-pill bg-warning avatar-badge"><i
                            class="fe fe-plus"></i></a>
                </span>
                <span class="avatar avatar-lg me-2 avatar-rounded">
                    <img src="/images/faces/13.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge rounded-pill bg-info avatar-badge"><i
                            class="fe fe-edit"></i></a>
                </span>
                <span class="avatar avatar-xl me-2 avatar-rounded">
                    <img src="/images/faces/15.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge rounded-pill bg-success avatar-badge"><i
                            class="fe fe-camera"></i></a>
                </span>
                <span class="avatar avatar-xxl me-2 avatar-rounded">
                    <img src="/images/faces/9.jpg" alt="img">
                    <a href="javascript:void(0);" class="badge rounded-pill bg-danger avatar-badge"><i
                            class="fe fe-plus"></i></a>
                </span>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarWithOnlineStatusIndicators"
                title="Avatar With Online Status Indicators<p class='subtitle text-muted fs-12 fw-normal'>avatars having online status indicator.</p>">
                <span class="avatar avatar-xs me-2 online avatar-rounded">
                    <img src="/images/faces/8.jpg" alt="img">
                </span>
                <span class="avatar avatar-sm online me-2 avatar-rounded">
                    <img src="/images/faces/10.jpg" alt="img">
                </span>
                <span class="avatar avatar-md me-2 online avatar-rounded">
                    <img src="/images/faces/12.jpg" alt="img">
                </span>
                <span class="avatar avatar-lg me-2 online avatar-rounded">
                    <img src="/images/faces/13.jpg" alt="img">
                </span>
                <span class="avatar avatar-xl me-2 online avatar-rounded">
                    <img src="/images/faces/14.jpg" alt="img">
                </span>
                <span class="avatar avatar-xxl me-2 online avatar-rounded">
                    <img src="/images/faces/15.jpg" alt="img">
                </span>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarWithOfflineStatusIndicators"
                title="Avatar With Offline Status Indicators<p class='subtitle text-muted fs-12 fw-normal'>avatars having a offline status indicator.</p>">
                <span class="avatar avatar-xs me-2 offline avatar-rounded">
                    <img src="/images/faces/2.jpg" alt="img">
                </span>
                <span class="avatar avatar-sm offline me-2 avatar-rounded">
                    <img src="/images/faces/3.jpg" alt="img">
                </span>
                <span class="avatar avatar-md me-2 offline avatar-rounded">
                    <img src="/images/faces/4.jpg" alt="img">
                </span>
                <span class="avatar avatar-lg me-2 offline avatar-rounded">
                    <img src="/images/faces/5.jpg" alt="img">
                </span>
                <span class="avatar avatar-xl me-2 offline avatar-rounded">
                    <img src="/images/faces/6.jpg" alt="img">
                </span>
                <span class="avatar avatar-xxl me-2 offline avatar-rounded">
                    <img src="/images/faces/7.jpg" alt="img">
                </span>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarsWithNumberBadges"
                title="Avatars With Number Badges<p class='subtitle text-muted fs-12 fw-normal'>Avatar numbers indicates the no. of unread notififactions/messages.</p>">
                <span class="avatar avatar-xs me-2 avatar-rounded">
                    <img src="/images/faces/2.jpg" alt="img">
                    <span class="badge rounded-pill bg-primary avatar-badge">2</span>
                </span>
                <span class="avatar avatar-sm me-2 avatar-rounded">
                    <img src="/images/faces/3.jpg" alt="img">
                    <span class="badge rounded-pill bg-secondary avatar-badge">5</span>
                </span>
                <span class="avatar avatar-md me-2 avatar-rounded">
                    <img src="/images/faces/14.jpg" alt="img">
                    <span class="badge rounded-pill bg-warning avatar-badge">1</span>
                </span>
                <span class="avatar avatar-lg me-2 avatar-rounded">
                    <img src="/images/faces/13.jpg" alt="img">
                    <span class="badge rounded-pill bg-info avatar-badge">7</span>
                </span>
                <span class="avatar avatar-xl me-2 avatar-rounded">
                    <img src="/images/faces/15.jpg" alt="img">
                    <span class="badge rounded-pill bg-success avatar-badge">3</span>
                </span>
                <span class="avatar avatar-xxl me-2 avatar-rounded">
                    <img src="/images/faces/9.jpg" alt="img">
                    <span class="badge rounded-pill bg-danger avatar-badge">9</span>
                </span>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.avatarWithInitials"
                title="Avatar With Initials<p class='subtitle text-muted fs-12 fw-normal'>Avatar contains intials when user profile doesn't exist.</p>">
                <span class="avatar avatar-xs m-2 bg-primary">
                    xs
                </span>
                <span class="avatar avatar-sm m-2 bg-secondary">
                    SM
                </span>
                <span class="avatar avatar-md m-2 bg-warning">
                    MD
                </span>
                <span class="avatar avatar-lg m-2 bg-danger">
                    LG
                </span>
                <span class="avatar avatar-xl m-2 bg-success">
                    XL
                </span>
                <span class="avatar avatar-xxl m-2 bg-info">
                    XXL
                </span>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.stackedAvatars"
                title="Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>">
                <div class="avatar-list-stacked">
                    <span class="avatar">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar">
                        <img src="/images/faces/8.jpg" alt="img">
                    </span>
                    <span class="avatar">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar">
                        <img src="/images/faces/10.jpg" alt="img">
                    </span>
                    <span class="avatar">
                        <img src="/images/faces/4.jpg" alt="img">
                    </span>
                    <span class="avatar">
                        <img src="/images/faces/13.jpg" alt="img">
                    </span>
                    <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);">
                        +8
                    </a>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <showcodeCard :code="prism.roundedStackedAvatars"
                title=" Rounded Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>">
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
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/4.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-rounded">
                        <img src="/images/faces/13.jpg" alt="img">
                    </span>
                    <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                        +8
                    </a>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-3 -->
</template>

<style scoped></style>

