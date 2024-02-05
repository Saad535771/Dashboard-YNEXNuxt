<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from "@/data/prismCode/ui-elements/alerts.js";
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        showcodeCard
    },
    data() {
        return {
            liveactionalert: false,
            dataToPass: {
                current: "Alerts",
                list: [
                    'UI-Elements', 'Alerts'
                ]
            },
            showLive: false,
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!--ROW-START-->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Baisc Alerts" :code="prism.basic">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields
                    below.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Live example" :code="prism.live">
                <div v-if="showLive" class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields
                    below.
                </div>
                <button type="button" class="btn btn-primary" id="liveAlertBtn" @click="showLive = !showLive;">Show live
                    alert
                </button>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Default alerts" :code="prism.defaultAlerts">
                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div class="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                </div>
                <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
                <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>
                <div class="alert alert-info" role="alert">
                    A simple info alert—check it out!
                </div>
                <div class="alert alert-light" role="alert">
                    A simple light alert—check it out!
                </div>
                <div class="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Links in alerts" :code="prism.linksInAlerts">
                <div class="alert alert-primary" role="alert">
                    A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-secondary" role="alert">
                    A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>. Give it a click if you like.
                </div>
                <div class="alert alert-success" role="alert">
                    A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-warning" role="alert">
                    A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-info" role="alert">
                    A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-light" role="alert">
                    A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
                        link</a>.
                    Give it a click if you like.
                </div>
                <div class="alert alert-dark" role="alert">
                    A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
                    Give it a click if you like.
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Solid Colored Alerts" :code="prism.solidColoredAlerts">
                <div class="alert alert-solid-primary alert-dismissible fade show">
                    A simple solid primary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-secondary alert-dismissible fade show">
                    A simple solid secondary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-info alert-dismissible fade show">
                    A simple solid info alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-warning alert-dismissible fade show">
                    A simple solid warning alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-success alert-dismissible fade show">
                    A simple solid success alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-danger alert-dismissible fade show">
                    A simple solid danger alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-light alert-dismissible fade show">
                    A simple solid light alert—check it out!
                    <button type="button" class="btn-close text-default" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-dark alert-dismissible fade show text-white">
                    A simple solid dark alert—check it out!
                    <button type="button" class="btn-close text-white" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Outline Alerts" :code="prism.outlineAlerts">
                <div class="alert alert-outline-primary alert-dismissible fade show">
                    A simple outline primary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-secondary alert-dismissible fade show">
                    A simple outline secondary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-info alert-dismissible fade show">
                    A simple outline info alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-warning alert-dismissible fade show">
                    A simple outline warning alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-success alert-dismissible fade show">
                    A simple outline success alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-danger alert-dismissible fade show">
                    A simple outline danger alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-light alert-dismissible fade show">
                    A simple outline light alert—check it out!
                    <button type="button" class="btn-close text-default" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-dark alert-dismissible fade show">
                    A simple outline dark alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Solid Alerts With Different Shadows" :code="prism.solidAlertsWithDifferentShadows">
                <div class="alert alert-solid-primary shadow-sm alert-dismissible fade show">
                    A simple solid primary alert with small shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-primary shadow alert-dismissible fade show">
                    A simple solid primary alert with normal shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-primary shadow-lg alert-dismissible fade show">
                    A simple solid primary alert with large shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-secondary shadow-sm alert-dismissible fade show">
                    A simple solid secondary alert with small shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-secondary shadow alert-dismissible fade show">
                    A simple solid secondary alert with normal shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-secondary shadow-lg alert-dismissible fade show">
                    A simple solid secondary alert with large shadow—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Default Alerts With Different Shadows" :code="prism.defaultAlertsWithDifferentShadows">
                <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow—check it out!
                </div>
                <div class="alert alert-primary shadow">A simple primary alert with normal shadow—check it out!
                </div>
                <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow—check it out!
                </div>
                <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow—check it
                    out!
                </div>
                <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow—check it out!
                </div>
                <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow—check it
                    out!
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Rounded Solid Alerts" :code="prism.roundedSolidAlerts">
                <div class="alert alert-solid-primary rounded-pill alert-dismissible fade show">
                    A simple solid rounded primary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-secondary rounded-pill alert-dismissible fade show">
                    A simple solid rounded secondary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-warning rounded-pill alert-dismissible fade show">
                    A simple solid rounded warning alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-solid-danger rounded-pill alert-dismissible fade show">
                    A simple solid rounded danger alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Rounded Outline Alerts" :code="prism.roundedOutlineAlerts">
                <div class="alert alert-outline-primary rounded-pill alert-dismissible fade show">
                    A simple outline rounded primary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-secondary rounded-pill alert-dismissible fade show">
                    A simple outline rounded secondary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-warning rounded-pill alert-dismissible fade show">
                    A simple outline rounded warning alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-outline-danger rounded-pill alert-dismissible fade show">
                    A simple outline rounded danger alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Rounded Default Alerts" :code="prism.roundedDefaultAlerts">
                <div class="alert alert-primary rounded-pill alert-dismissible fade show">
                    A simple rounded primary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-secondary rounded-pill alert-dismissible fade show">
                    A simple rounded secondary alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-warning rounded-pill alert-dismissible fade show">
                    A simple rounded warning alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-danger rounded-pill alert-dismissible fade show">
                    A simple rounded danger alert—check it out!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Rounded Alerts With Custom Close Button" :code="prism.roundedAlertsWithCustomCloseButton">
                <div class="alert alert-primary rounded-pill alert-dismissible fade show">
                    A simple rounded primary alert—check it out!
                    <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-secondary rounded-pill alert-dismissible fade show">
                    A simple rounded secondary alert—check it out!
                    <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-warning rounded-pill alert-dismissible fade show">
                    A simple rounded warning alert—check it out!
                    <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-danger rounded-pill alert-dismissible fade show">
                    A simple rounded danger &nbsp; alert—check it out!
                    <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Alerts with icons" :code="prism.alertsWithIcons">
                <div class="alert alert-primary d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    <div>
                        An example alert with an icon
                    </div>
                </div>
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                    <div>
                        An example success alert with an icon
                    </div>
                </div>
                <div class="alert alert-warning d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                    <polygon points="13,16 11,16 11,18 13,18" />
                                    <polygon points="13,10 11,10 11,15 13,15" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div>
                        An example warning alert with an icon
                    </div>
                </div>
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path
                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                    <rect height="6" width="2" x="11" y="7" />
                                    <rect height="2" width="2" x="11" y="15" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div>
                        An example danger alert with an icon
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Customized Alerts With SVG's" :code="prism.customizedAlertsWithSVGs">
                <div class="alert alert-primary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
                    <svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                        width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    A customized primary alert with an icon
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
                    <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                        width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    A customized secondary alert with an icon
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
                    <svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                        width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                    </svg>
                    A customized warning alert with an icon
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-danger alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
                    <svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                        width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                    </svg>
                    A customized danger alert with an icon
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Alerts With Images" :code="prism.alertsWithImages">
                <div class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/3.jpg" alt="img">
                    </div>
                    <div>A simple primary alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap"
                    role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/5.jpg" alt="img">
                    </div>
                    <div>A simple secondary alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                    </div>
                    <div>A simple warning alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/11.jpg" alt="img">
                    </div>
                    <div>A simple danger alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/13.jpg" alt="img">
                    </div>
                    <div>A simple info alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/10.jpg" alt="img">
                    </div>
                    <div>A simple light alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <img src="/images/faces/15.jpg" alt="img">
                    </div>
                    <div>A simple dark alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x text-muted"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Alerts With Different size Images" :code="prism.alertsWithDifferentSizeImages">
                <div class="alert alert-img alert-primary alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar avatar-xs me-3">
                        <img src="/images/faces/3.jpg" alt="img">
                    </div>
                    <div>A simple primary alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar avatar-sm me-3">
                        <img src="/images/faces/5.jpg" alt="img">
                    </div>
                    <div>A simple secondary alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-warning alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar me-3">
                        <img src="/images/faces/8.jpg" alt="img">
                    </div>
                    <div>A simple warning alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-danger alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar avatar-md me-3">
                        <img src="/images/faces/11.jpg" alt="img">
                    </div>
                    <div>A simple danger alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-info alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar avatar-lg me-3">
                        <img src="/images/faces/13.jpg" alt="img">
                    </div>
                    <div>A simple info alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <div class="alert alert-img alert-dark alert-dismissible fase show flex-wrap" role="alert">
                    <div class="avatar avatar-xl me-3">
                        <img src="/images/faces/14.jpg" alt="img">
                    </div>
                    <div>A simple info alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x text-muted"></i></button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white border-0">
                        <div class="alert custom-alert1 alert-primary">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"><i
                                    class="bi bi-x"></i></button>
                            <div class="text-center px-5 pb-0">
                                <svg class="custom-alert-icon svg-primary" xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                                <h5>Information?</h5>
                                <p class="">This alert is created to just show the related information.</p>
                                <div class="">
                                    <button class="btn btn-sm btn-outline-danger m-1">Decline</button>
                                    <button class="btn btn-sm btn-primary m-1">Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white border-0">
                        <div class="alert custom-alert1 alert-secondary">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"><i
                                    class="bi bi-x"></i></button>
                            <div class="text-center px-5 pb-0">
                                <svg class="custom-alert-icon svg-secondary" xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <h5>Confirmed</h5>
                                <p class="">This alert is created to just show the confirmation message.</p>
                                <div class="">
                                    <button class="btn btn-sm btn-secondary m-1">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white border-0">
                        <div class="alert custom-alert1 alert-warning">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"><i
                                    class="bi bi-x"></i></button>
                            <div class="text-center px-5 pb-0">
                                <svg class="custom-alert-icon svg-warning" xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                </svg>
                                <h5>Warning</h5>
                                <p class="">This alert is created to just show the warning message.</p>
                                <div class="">
                                    <button class="btn btn-sm btn-outline-secondary m-1">Back</button>
                                    <button class="btn btn-sm btn-warning m-1">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white border-0">
                        <div class="alert custom-alert1 alert-danger">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"><i
                                    class="bi bi-x"></i></button>
                            <div class="text-center px-5 pb-0">
                                <svg class="custom-alert-icon svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                    viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                                </svg>
                                <h5>danger</h5>
                                <p class="">This alert is created to just show the danger message.</p>
                                <div class="">
                                    <button class="btn btn-sm btn-danger m-1">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-primary border border-primary mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-primary" xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <div class="text-primary w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Information Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Information alert to show to information</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-secondary fw-semibold me-2 d-inline-block">cancel</a>
                                        <a href="javascript:void(0);" class="text-primary fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-secondary border border-secondary mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-secondary" xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div class="text-secondary w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Success Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Success alert to show to success message</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-danger fw-semibold me-2 d-inline-block">cancel</a>
                                        <a href="javascript:void(0);" class="text-secondary fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-warning border border-warning mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-warning" xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                                        fill="#000000">
                                        <g>
                                            <rect fill="none" height="24" width="24" />
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                    <polygon points="13,16 11,16 11,18 13,18" />
                                                    <polygon points="13,10 11,10 11,15 13,15" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-warning w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Warning Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Warning alert to show warning message</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-dark fw-semibold me-2 d-inline-block">cancel</a>
                                        <a href="javascript:void(0);" class="text-warning fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-danger border border-danger mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-danger" xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                                        fill="#000000">
                                        <g>
                                            <rect fill="none" height="24" width="24" />
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                    <rect height="6" width="2" x="11" y="7" />
                                                    <rect height="2" width="2" x="11" y="15" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-danger w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Danger Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Danger alert to show the danger message</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-info fw-semibold me-2 d-inline-block">cancel</a>
                                        <a href="javascript:void(0);" class="text-danger fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-solid-primary border border-primary mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Information Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Information alert to show to information</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-fixed-white fw-semibold me-2 op-7">cancel</a>
                                        <a href="javascript:void(0);" class="text-fixed-white fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-solid-secondary border border-secondary mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Success Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Success alert to show to success message</div>
                                    <div class="fs-12">
                                        <a href="javascript:void(0);" class="text-fixed-white fw-semibold me-2">close</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-solid-warning border border-warning mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                                        fill="#000000">
                                        <g>
                                            <rect fill="none" height="24" width="24" />
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                    <polygon points="13,16 11,16 11,18 13,18" />
                                                    <polygon points="13,10 11,10 11,15 13,15" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Warning Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Warning alert to show to warning message</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-fixed-white fw-semibold me-2 op-7">skip</a>
                                        <a href="javascript:void(0);" class="text-fixed-white fw-semibold">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card border-0">
                        <div class="alert alert-solid-danger border border-danger mb-0 p-2">
                            <div class="d-flex align-items-start">
                                <div class="me-2">
                                    <svg class="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                                        fill="#000000">
                                        <g>
                                            <rect fill="none" height="24" width="24" />
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                    <rect height="6" width="2" x="11" y="7" />
                                                    <rect height="2" width="2" x="11" y="15" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div class="fw-semibold d-flex justify-content-between">Danger Alert<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">Danger alert to show to danger message</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            class="text-fixed-white fw-semibold me-2 op-7">close</a>
                                        <a href="javascript:void(0);" class="text-fixed-white fw-semibold">continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <showcodeCard title="Additional content" :code="prism.additionalContent">
                <div class="row gy-3">
                    <div class="col-xl-6">
                        <div class="alert alert-primary overflow-hidden p-0" role="alert">
                            <div class="p-3 bg-primary text-fixed-white d-flex justify-content-between">
                                <h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                <button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                                    aria-label="Close"><i class="bi bi-x"></i></button>
                            </div>
                            <hr class="my-0">
                            <div class="p-3">
                                <p class="mb-0">We appreciate you to let us know the bug in the template and for
                                    warning
                                    us about future consequences <a href="javascript:void(0);"
                                        class="fw-semibold text-decoration-underline">Visit for support for queries
                                        ?</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="alert alert-secondary overflow-hidden p-0" role="alert">
                            <div class="p-3 bg-secondary text-fixed-white d-flex justify-content-between">
                                <h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                <button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                                    aria-label="Close"><i class="bi bi-x"></i></button>
                            </div>
                            <hr class="my-0">
                            <div class="p-3">
                                <p class="mb-0">We appreciate you to let us know the bug in the template and for
                                    warning
                                    us about future consequences <a href="javascript:void(0);"
                                        class="fw-semibold text-decoration-underline">Visit for support for queries
                                        ?</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="alert alert-success overflow-hidden p-0" role="alert">
                            <div class="p-3 bg-success text-fixed-white d-flex justify-content-between">
                                <h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                <button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                                    aria-label="Close"><i class="bi bi-x"></i></button>
                            </div>
                            <hr class="my-0">
                            <div class="p-3">
                                <p class="mb-0">We appreciate you to let us know the bug in the template and for
                                    warning
                                    us about future consequences <a href="javascript:void(0);"
                                        class="fw-semibold text-decoration-underline">Visit for support for queries
                                        ?</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="alert alert-warning overflow-hidden p-0" role="alert">
                            <div class="p-3 bg-warning text-fixed-white d-flex justify-content-between">
                                <h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                <button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                                    aria-label="Close"><i class="bi bi-x"></i></button>
                            </div>
                            <hr class="my-0">
                            <div class="p-3">
                                <p class="mb-0">We appreciate you to let us know the bug in the template and for
                                    warning
                                    us about future consequences <a href="javascript:void(0);"
                                        class="fw-semibold text-decoration-underline">Visit for support for queries
                                        ?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!--ROW-END-->
</template>

<style scoped></style>

