<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { VueDraggableNext } from 'vue-draggable-next'
import auth from '@/middleware/auth';

import fullscreen_closableCard from '@/components/UI/fullscreen_closableCard.vue'
export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        draggable: VueDraggableNext,
        fullscreen_closableCard
    },
    data() {
        return {
            dataToPass: {
                current: "Draggablecards",
                list: [
                    'AdvancedUI', 'Draggablecards'
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
        <draggable group="people" itemKey="name" class="col-xl-6" id="draggable-left">
            <div class="card custom-card card-bg-primary">
                <a href="javascript:void(0);" class="card-anchor"></a>
                <div class="card-body">
                    <blockquote class="blockquote mb-0 text-center">
                        <h6 class="text-fixed-white">The best and most beautiful things in the world cannot be seen or even
                            touched — they must be felt with the heart..</h6>
                        <footer class="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite
                                title="Source Title">-Helen Keller</cite></footer>
                    </blockquote>
                </div>
            </div>
            <fullscreen_closableCard :showCardVal="true" title="Card With Fullscreen Button" :hasFullScreen=true>
                <h6 class="card-text fw-semibold">FullScreen Card</h6>
                <p class="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or randomised words</p>
                <template #footer>
                    <button class="btn btn-primary">Read More</button>
                </template>
            </fullscreen_closableCard>
            <div class="card custom-card overlay-card text-fixed-white">
                <img src="/images/media/media-35.jpg" class="card-img" alt="...">
                <div class="card-img-overlay d-flex flex-column p-0">
                    <div class="card-header text-fixed-white">
                        <div class="card-title">
                            Image Overlays Are Awesome!
                        </div>
                    </div>
                    <div class="card-body overflow-auto text-fixed-white">
                        <div class="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or randomised words which
                            don't look even.</div>
                        <div class="card-text">Last updated 3 mins ago</div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <a href="javascript:void(0);" class="card-anchor"></a>
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <span class="avatar avatar-md">
                                <img src="/images/faces/15.jpg" alt="img">
                            </span>
                        </div>
                        <div>
                            <p class="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
                            <div class="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card custom-card border border-info">
                <a href="javascript:void(0);" class="card-anchor"></a>
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="me-3">
                            <span class="avatar avatar-xl">
                                <img src="/images/faces/8.jpg" alt="img">
                            </span>
                        </div>
                        <div>
                            <p class="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
                            <div class="card-title fs-12 mb-1">Department Of Commerce</div>
                            <div class="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                        </div>
                    </div>
                </div>
            </div>
        </draggable>
        <draggable group="people" itemKey="name" class="col-xl-6" id="draggable-right">
            <div class="card custom-card overlay-card">
                <img src="/images/media/media-36.jpg" class="card-img" alt="...">
                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom top-0">
                    <div class="card-body overflow-auto text-fixed-white">
                        <div class="card-text">
                            Image Overlays Are Awesome!
                        </div>
                        <div class="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or randomised words which
                            don't look even.</div>
                    </div>
                    <div class="card-footer text-fixed-white">Last updated 3 mins ago</div>
                </div>
            </div>
            <div class="card custom-card card-bg-success">
                <div class="card-body">
                    <div class="d-flex align-items-center w-100">
                        <div class="me-2">
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/5.jpg" alt="img">
                            </span>
                        </div>
                        <div class="">
                            <div class="fs-15 fw-semibold">Samantha sid</div>
                            <p class="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header border-bottom-0 justify-content-between">
                    <div class="card-title">
                        Card With Collapse Button
                    </div>
                    <a href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                        <i class="ri-arrow-down-s-line fs-18 collapse-open"></i>
                        <i class="ri-arrow-up-s-line collapse-close fs-18"></i>
                    </a>
                </div>
                <div class="collapse show border-top" id="collapseExample">
                    <div class="card-body">
                        <h6 class="card-text fw-semibold">Collapsible Card</h6>
                        <p class="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or randomised words</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            <fullscreen_closableCard :showCardVal="true" title="Card With Close Button" :hasClose=true>
                <h6 class="card-text fw-semibold">Closed Card</h6>
                <p class="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the
                    majority
                    have suffered alteration in some form, by injected humour, or randomised words</p>
                <template #footer>
                    <button class="btn btn-primary">Read More</button>
                </template>
            </fullscreen_closableCard>
        </draggable>
    </div>

    <!--End::row-1 -->
</template>

<style scoped></style>

