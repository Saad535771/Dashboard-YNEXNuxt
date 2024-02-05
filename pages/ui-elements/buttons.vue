<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/button.js';
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
                current: "Buttons",
                list: [
                    'UI-Elements', 'Buttons'
                ]
            },
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
            <showcodeCard title="Default Buttons" :code="prism.defaultButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success btn-wave">Success</button>
                    <button type="button" class="btn btn-danger btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning btn-wave">Warning</button>
                    <button type="button" class="btn btn-info btn-wave">Info</button>
                    <button type="button" class="btn btn-light btn-wave">Light</button>
                    <button type="button" class="btn btn-dark btn-wave text-white">Dark</button>
                    <button type="button" class="btn btn-link btn-wave">Link</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Rounded Buttons" :code="prism.roundedButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary rounded-pill btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary rounded-pill btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success rounded-pill btn-wave">Success</button>
                    <button type="button" class="btn btn-danger rounded-pill btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning rounded-pill btn-wave">Warning</button>
                    <button type="button" class="btn btn-info rounded-pill btn-wave">Info</button>
                    <button type="button" class="btn btn-light rounded-pill btn-wave">Light</button>
                    <button type="button" class="btn btn-dark rounded-pill btn-wave text-white">Dark</button>
                    <button type="button" class="btn btn-link rounded-pill btn-wave">Link</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Light Buttons" :code="prism.lightButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary-light btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-light btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-light btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-light btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-light btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-light btn-wave">Info</button>
                    <button type="button" class="btn btn-purple-light btn-wave">purple</button>
                    <button type="button" class="btn btn-teal-light btn-wave">teal</button>
                    <button type="button" class="btn btn-orange-light btn-wave">orange</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Light Rounded Buttons" :code="prism.lightRoundedButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary-light rounded-pill btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-light rounded-pill btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-light rounded-pill btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-light rounded-pill btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-light rounded-pill btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-light rounded-pill btn-wave">Info</button>
                    <button type="button" class="btn btn-purple-light rounded-pill btn-wave">purple</button>
                    <button type="button" class="btn btn-teal-light rounded-pill btn-wave">teal</button>
                    <button type="button" class="btn btn-orange-light rounded-pill btn-wave">orange</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Outline Buttons" :code="prism.outlineButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-outline-primary btn-wave">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-wave">Secondary</button>
                    <button type="button" class="btn btn-outline-success btn-wave">Success</button>
                    <button type="button" class="btn btn-outline-danger btn-wave">Danger</button>
                    <button type="button" class="btn btn-outline-warning btn-wave">Warning</button>
                    <button type="button" class="btn btn-outline-info btn-wave">Info</button>
                    <button type="button" class="btn btn-outline-light btn-wave">Light</button>
                    <button type="button" class="btn btn-outline-dark btn-wave">Dark</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Rounded Outline Buttons" :code="prism.roundedOutlineButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-outline-primary rounded-pill btn-wave">Primary</button>
                    <button type="button" class="btn btn-outline-secondary rounded-pill btn-wave">Secondary</button>
                    <button type="button" class="btn btn-outline-success rounded-pill btn-wave">Success</button>
                    <button type="button" class="btn btn-outline-danger rounded-pill btn-wave">Danger</button>
                    <button type="button" class="btn btn-outline-warning rounded-pill btn-wave">Warning</button>
                    <button type="button" class="btn btn-outline-info rounded-pill btn-wave">Info</button>
                    <button type="button" class="btn btn-outline-light rounded-pill btn-wave">Light</button>
                    <button type="button" class="btn btn-outline-dark rounded-pill btn-wave">Dark</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Gradient Buttons" :code="prism.gradientButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary-gradient btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-gradient btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-gradient btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-gradient btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-gradient btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-gradient btn-wave">Info</button>
                    <button type="button" class="btn btn-orange-gradient btn-wave">Orange</button>
                    <button type="button" class="btn btn-purple-gradient btn-wave">Purple</button>
                    <button type="button" class="btn btn-teal-gradient btn-wave">Teal</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Rounded Gradient Buttons" :code="prism.roundedGradientButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary-gradient rounded-pill btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-gradient rounded-pill btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-gradient rounded-pill btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-gradient rounded-pill btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-gradient rounded-pill btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-gradient rounded-pill btn-wave">Info</button>
                    <button type="button" class="btn btn-orange-gradient rounded-pill btn-wave">Orange</button>
                    <button type="button" class="btn btn-purple-gradient rounded-pill btn-wave">Purple</button>
                    <button type="button" class="btn btn-teal-gradient rounded-pill btn-wave">Teal</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Ghost Buttons" :code="prism.ghostButtons">
                <div class="btn-list">
                    <button type="button" class="btn btn-primary-ghost btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-ghost btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-ghost btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-ghost btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-ghost btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-ghost btn-wave">Info</button>
                    <button type="button" class="btn btn-orange-ghost btn-wave">Orange</button>
                    <button type="button" class="btn btn-purple-ghost btn-wave">Purple</button>
                    <button type="button" class="btn btn-teal-ghost btn-wave">Teal</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Button tags" :code="prism.buttonTags">
                <div class="btn-list">
                    <a class="btn btn-primary btn-wave" href="javascript:void(0);" role="button">Link</a>
                    <button class="btn btn-secondary btn-wave" type="submit">Button</button>
                    <input class="btn btn-info" type="button" value="Input">
                    <input class="btn btn-warning" type="submit" value="Submit">
                    <input class="btn btn-success" type="reset" value="Reset">
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Disabled state with anchor tags" :code="prism.disabledStateWithAnchorTags">
                <div class="btn-list">
                    <div class="mb-4">
                        <button type="button" class="btn btn-primary" disabled>Primary
                            button</button>
                        <button type="button" class="btn btn-secondary" disabled>Button</button>
                        <button type="button" class="btn btn-outline-primary" disabled>Primary
                            button</button>
                        <button type="button" class="btn btn-outline-secondary" disabled>Button</button>
                    </div>

                    <div>
                        <a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary
                            link</a>
                        <a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Button plugin toggle states" :code="prism.buttonPluginToggleStates">
                <div class="btn-list">
                <div class="mb-4">
                <button type="button" class="btn btn-primary btn-wave" data-bs-toggle="button">Toggle
                button</button>
                <button type="button" class="btn btn-secondary active btn-wave" data-bs-toggle="button"
                aria-pressed="true">Active toggle button</button>
                <button type="button" class="btn btn-teal btn-wave" disabled data-bs-toggle="button">Disabled toggle
                button</button>
                </div>
                <div>
                <a href="javascript:void(0);" class="btn btn-primary btn-wave" role="button"
                data-bs-toggle="button">Toggle
                link</a>
                <a href="javascript:void(0);" class="btn btn-secondary active btn-wave" role="button"
                data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
                <a class="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
                data-bs-toggle="button">Disabled toggle link</a>
                </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Link functionally caveat" :code="prism.linkFunctionallyCaveat">
                <div class="btn-list">
                    <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary
                        link</a>
                    <a class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Loading Buttons" :code="prism.loadingButtons">
                <div class="btn-list d-md-flex flex-wrap">
                <button class="btn btn-primary btn-loader">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-2-fill fs-16"></i></span>
                </button>
                <button class="btn btn-outline-secondary btn-loader">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-2-fill fs-16"></i></span>
                </button>
                <button class="btn btn-info-transparent btn-loader">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
                </button>
                <button class="btn btn-warning-transparent btn-loader">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-5-line fs-16"></i></span>
                </button>
                <button class="btn btn-success btn-loader disabled">
                <span class="me-2">Disabled</span>
                <span class="loading"><i class="ri-refresh-line fs-16"></i></span>
                </button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Icon Buttons" :code="prism.iconButtons">
                <div class="btn-list d-md-flex d-block">
                    <div class="mb-md-0 mb-2">
                        <button class="btn btn-icon btn-primary btn-wave">
                            <i class="ri-bank-fill"></i>
                        </button>
                        <button class="btn btn-icon btn-info btn-wave">
                            <i class="ri-medal-line"></i>
                        </button>
                        <button class="btn btn-icon btn-danger btn-wave">
                            <i class="ri-archive-line"></i>
                        </button>
                        <button class="btn btn-icon btn-warning btn-wave me-5">
                            <i class="ri-calendar-2-line"></i>
                        </button>
                    </div>
                    <div class="mb-md-0 mb-2">
                        <button class="btn btn-icon btn-primary-transparent rounded-pill btn-wave">
                            <i class="ri-home-smile-line"></i>
                        </button>
                        <button class="btn btn-icon btn-secondary-transparent rounded-pill btn-wave">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                        <button class="btn btn-icon btn-success-transparent rounded-pill btn-wave">
                            <i class="ri-notification-3-line"></i>
                        </button>
                        <button class="btn btn-icon btn-danger-transparent rounded-pill btn-wave me-5">
                            <i class="ri-chat-settings-line"></i>
                        </button>
                    </div>
                    <div class="">
                        <button class="btn btn-icon btn-outline-primary rounded-pill btn-wave">
                            <i class="ri-phone-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-teal rounded-pill btn-wave">
                            <i class="ri-customer-service-2-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-success rounded-pill btn-wave">
                            <i class="ri-live-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-secondary rounded-pill btn-wave">
                            <i class="ri-save-line"></i>
                        </button>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Social Buttons" :code="prism.socialButtons">
                <div class="btn-list">
                    <button class="btn btn-icon btn-facebook btn-wave">
                        <i class="ri-facebook-line"></i>
                    </button>
                    <button class="btn btn-icon btn-twitter btn-wave">
                        <i class="ri-twitter-line"></i>
                    </button>
                    <button class="btn btn-icon btn-instagram btn-wave">
                        <i class="ri-instagram-line"></i>
                    </button>
                    <button class="btn btn-icon btn-github btn-wave">
                        <i class="ri-github-line"></i>
                    </button>
                    <button class="btn btn-icon btn-youtube btn-wave">
                        <i class="ri-youtube-line"></i>
                    </button>
                    <button class="btn btn-icon btn-google btn-wave">
                        <i class="ri-google-line"></i>
                    </button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <showcodeCard title="Sizes" :code="prism.sizes">
                        <div class="btn-list">
                            <button type="button" class="btn btn-primary btn-sm btn-wave">Small
                                button</button>
                            <button type="button" class="btn btn-secondary btn-wave">Default
                                button</button>
                            <button type="button" class="btn btn-success btn-lg btn-wave">Large
                                button</button>
                        </div>
                    </showcodeCard>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <showcodeCard title="Button Widths" :code="prism.buttonWidths">
                        <div class="btn-list">
                            <button type="button" class="btn btn-primary btn-w-xs btn-wave">XS</button>
                            <button type="button" class="btn btn-secondary btn-w-sm btn-wave">SM</button>
                            <button type="button" class="btn btn-warning btn-w-md btn-wave">MD</button>
                            <button type="button" class="btn btn-info btn-w-lg btn-wave">LG</button>
                        </div>
                    </showcodeCard>
                </div>
            </div>
            <!--ROW-END-->
        </div>

        <div class="col-xl-6">
            <showcodeCard title="Buttons With Different Shadows" :code="prism.buttonsWithDifferentShadows">
                <div class="btn-list d-flex">
                    <div class="me-5">
                        <button class="btn btn-primary shadow-sm btn-wave">Button</button>
                        <button class="btn btn-primary shadow btn-wave">Button</button>
                        <button class="btn btn-primary shadow-lg btn-wave">Button</button>
                    </div>
                    <div>
                        <button class="btn btn-secondary btn-sm shadow-sm btn-wave">Button</button>
                        <button class="btn btn-info shadow btn-wave">Button</button>
                        <button class="btn btn-lg btn-success shadow-lg btn-wave">Button</button>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Different Colored Buttons With Shadows" :code="prism.differentColoredButtonsWithShadows">
                <div class="btn-list">
                    <button class="btn btn-primary shadow-primary btn-wave">Button</button>
                    <button class="btn btn-secondary shadow-secondary btn-wave">Button</button>
                    <button class="btn btn-success shadow-success btn-wave">Button</button>
                    <button class="btn btn-info shadow-info btn-wave">Button</button>
                    <button class="btn btn-warning shadow-warning btn-wave">Button</button>
                    <button class="btn btn-danger shadow-danger btn-wave">Button</button>
                    <button class="btn btn-purple shadow-purple btn-wave">Button</button>
                    <button class="btn btn-orange shadow-orange btn-wave">Button</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Raised Buttons" :code="prism.raisedButtons">
                <div class="btn-list">
                    <button class="btn btn-primary btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-secondary btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-success btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-info btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-warning btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-danger btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-purple btn-raised-shadow btn-wave">Button</button>
                    <button class="btn btn-orange btn-raised-shadow btn-wave">Button</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Label Buttons" :code="prism.labelButtons">
                <div class="btn-list">
                    <button class="btn btn-primary label-btn">
                        <i class="ri-chat-smile-line label-btn-icon me-2"></i>
                        Primary
                    </button>
                    <button class="btn btn-secondary label-btn">
                        <i class="ri-settings-4-line label-btn-icon me-2"></i>
                        Secondary
                    </button>
                    <button class="btn btn-warning label-btn rounded-pill">
                        <i class="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
                        Warning
                    </button>
                    <button class="btn btn-info label-btn rounded-pill">
                        <i class="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
                        Info
                    </button>
                    <button class="btn btn-success label-btn label-end">
                        Success
                        <i class="ri-thumb-up-line label-btn-icon ms-2"></i>
                    </button>
                    <button class="btn btn-danger label-btn label-end rounded-pill">
                        Cancel
                        <i class="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
                    </button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-12">

            <showcodeCard title="Custom Buttons" :code="prism.customButtons">
                <div class="btn-list">
                    <button class="btn btn-info custom-button rounded-pill">
                        <span class="custom-btn-icons"><i class="ri-twitter-line text-info"></i></span>
                        Twitter
                    </button>
                    <button class="btn btn-teal-light btn-border-down">Border</button>
                    <button class="btn btn-secondary-light btn-border-start">Border</button>
                    <button class="btn btn-purple-light btn-border-end">Border</button>
                    <button class="btn btn-warning-light btn-border-top">Border</button>
                    <button class="btn btn-secondary btn-glare"><span>Glare Button</span></button>
                    <button class="btn btn-danger btn-hover btn-hover-animate">Like</button>
                    <button class="btn btn-success btn-darken-hover">Hover</button>
                    <button class="btn btn-orange btn-custom-border">Hover</button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-12">

            <showcodeCard title="Block buttons" :code="prism.blockButtons">
                <div class="btn-list">
                    <div class="d-grid gap-2 mb-4">
                        <button class="btn btn-primary btn-wave" type="button">Button</button>
                        <button class="btn btn-secondary btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-info btn-wave" type="button">Button</button>
                        <button class="btn btn-success btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-danger btn-wave" type="button">Button</button>
                        <button class="btn btn-warning btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-teal me-md-2 btn-wave" type="button">Button</button>
                        <button class="btn btn-purple btn-wave" type="button">Button</button>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
</template>

<style scoped></style>

