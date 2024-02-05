<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/dropdown.js';
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
                current: "Dropdowns",
                list: [
                    'UI-Elements', 'Dropdowns'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!--Start:: row-1-->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard title="Dropdowns" :code="prism.dropdowns">
                <div class="btn-list d-flex align-items-center flex-wrap">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="javascript:void(0);" role="button"
                            id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!--End:: row-1-->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Single dropdown buttons" :code="prism.singleDropdownButtons">
                <div class="btn-list">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Rounded Button Dropdowns" :code="prism.roundedButtonDropdowns">
                <div class="btn-list">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle rounded-pill" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Outline Button Dropdowns" :code="prism.outlineButtonDropdowns">
                <div class="btn-list">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Rounded Outline Dropdowns" :code="prism.roundedOutlineDropdowns">
                <div class="btn-list">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Split buttons" :code="prism.splitButtons">
                <!-- Example split danger button -->
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-primary">Action</button>
                    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-secondary">Action</button>
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-info">Action</button>
                    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-success">Action</button>
                    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-warning">Action</button>
                    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button type="button" class="btn btn-danger">Action</button>
                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Dropdown Sizing" :code="prism.dropdownSizing">
                <div class="btn-group my-1 me-2">
                    <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Large button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1 me-2">
                    <button class="btn btn-light btn-lg" type="button">
                        Large split button
                    </button>
                    <button type="button" class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <!-- samll button groups (default and split) -->
                <div class="btn-group my-1 me-2">
                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Small button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group my-1">
                    <button class="btn btn-light btn-sm" type="button">
                        Small split button
                    </button>
                    <button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-3">

            <showcodeCard title="Dropup" :code="prism.dropup">
                <div class="btn-group dropup m-1">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropup
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group dropup m-1">
                    <button type="button" class="btn btn-info">
                        Split dropup
                    </button>
                    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropup right" :code="prism.dropupRight">
                <div class="btn-group dropend m-1">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropright
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group dropend m-1">
                    <button type="button" class="btn btn-info">
                        Split dropend
                    </button>
                    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropright</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropup left" :code="prism.dropupLeft">
                <div class="btn-group dropstart mx-1">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropleft
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
                <div class="btn-group">
                    <div class="btn-group dropstart my-1" role="group">
                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropstart</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-info my-1">
                        Split dropleft
                    </button>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Active" :code="prism.active">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropstart
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                    <li><a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
                            link</a>
                    </li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                </ul>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->
    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-3">
            <showcodeCard title="Disabled" :code="prism.disabled">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropstart
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                    <li><a class="dropdown-item disabled" href="javascript:void(0);" aria-current="true">Active
                            link</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Auto close behavior" :code="prism.autoCloseBehavior">
                <div class="btn-list">
                    <div class="btn-group">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown"
                            data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            Default dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
                            data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
                            Clickable outside
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            Clickable inside
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuClickable"
                            data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                            Manual close
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="dropdowns with Forms" :code="prism.dropdownsWithForms">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu">
                    <form class="px-4 py-3">
                        <div class="mb-3">
                            <label for="exampleDropdownFormEmail1" class="form-label">Email
                                address</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                placeholder="email@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                placeholder="Password">
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                <label class="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button class="btn btn-primary">Sign in</button>
                    </form>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0);">New around here? Sign up</a>
                    <a class="dropdown-item" href="javascript:void(0);">Forgot password?</a>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-6 -->

    <!-- Start:: row-7 -->
    <div class="row">
        <div class="col-xl-3">

            <showcodeCard title="Dropdown menu centered" :code="prism.dropdownMenuCentered">
                <p class="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
                </p>
                <div class="dropdown-center">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Centered dropdown
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropup centered" :code="prism.dropupCentered">
                <p class="card-title mb-3">Use <code>.dropup-center</code>
                    on the parent element.
                </p>
                <div class="dropup-center dropup">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Centered dropup
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropupCenterBtn">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Menu items" :code="prism.menuItems">
                <p class="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code>
                    as
                    dropdown items.</p>
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button>
                        </li>
                        <li><button class="dropdown-item" type="button">Something else
                                here</button>
                        </li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropdowns options" :code="prism.dropdownsOptions">
                <p class="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code>
                    to
                    change
                    the location of the dropdown.</p>
                <div class="d-flex align-items-center">
                    <div class="dropdown me-1">
                        <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset"
                            data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                            Offset
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info">Reference</button>
                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                            id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                            data-bs-reference="parent">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-7 -->

    <!-- Start:: row-8 -->
    <div class="row">
        <div class="col-xl-9">

            <showcodeCard title="Alignment options" :code="prism.alignmentOptions">
                <div class="btn-list">
                    <div class="btn-group">
                        <button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Right-aligned menu
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            data-bs-display="static" aria-expanded="false">
                            Left-aligned, right-aligned lg
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            data-bs-display="static" aria-expanded="false">
                            Right-aligned, left-aligned lg
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropstart">
                        <button type="button" class="btn btn-success dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropstart
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropend">
                        <button type="button" class="btn btn-danger dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropend
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-teal dropdown-toggle mb-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropup
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dark Dropdowns" :code="prism.darkDropdowns">
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-8 -->

    <!-- Start:: row-9 -->
    <div class="row">
        <div class="col-xl-4">

            <showcodeCard title="Menu alignment" :code="prism.menuAlignment">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Right-aligned menu example
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Action</button>
                        </li>
                        <li><button class="dropdown-item" type="button">Another
                                action</button></li>
                        <li><button class="dropdown-item" type="button">Something else
                                here</button>
                        </li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard title="Responsive alignment end" :code="prism.responsiveAlignmentEnd">
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle text-wrap" data-bs-toggle="dropdown"
                        data-bs-display="static" aria-expanded="false">
                        Left-aligned but right aligned when large screen
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><button class="dropdown-item" type="button">Action</button>
                        </li>
                        <li><button class="dropdown-item" type="button">Another
                                action</button></li>
                        <li><button class="dropdown-item" type="button">Something else
                                here</button>
                        </li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard title="Responsive alignment left" :code="prism.responsiveAlignmentLeft">
                <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle text-wrap" data-bs-toggle="dropdown"
                        data-bs-display="static" aria-expanded="false">
                        Left-aligned but right aligned when large screen
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-start">
                        <li><button class="dropdown-item" type="button">Action</button>
                        </li>
                        <li><button class="dropdown-item" type="button">Another
                                action</button></li>
                        <li><button class="dropdown-item" type="button">Something else
                                here</button></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-9 -->

    <!-- Start:: row-10 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Custom Dropdown Menu's" :code="prism.customDropdownMenus">
                <div class="btn-list">
                    <div class="btn-group">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Primary
                        </button>
                        <ul class="dropdown-menu dropdown-menu-primary">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            secondary
                        </button>
                        <ul class="dropdown-menu dropdown-menu-secondary">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            warning
                        </button>
                        <ul class="dropdown-menu dropmenu-item-warning">
                            <li><a class="dropdown-item active" href="javascript:void(0);">Active</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            info
                        </button>
                        <ul class="dropdown-menu dropmenu-item-info">
                            <li><a class="dropdown-item active" href="javascript:void(0);">Active</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-success-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            success
                        </button>
                        <ul class="dropdown-menu dropmenu-light-success">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item active" href="javascript:void(0);">Active</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-danger-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            danger
                        </button>
                        <ul class="dropdown-menu dropmenu-light-danger">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item active" href="javascript:void(0);">Active</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Ghost Button Dropdowns" :code="prism.ghostButtonDropdowns">
                <div class="btn-list">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Primary
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Secondary
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Success
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Info
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Warning
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger-ghost dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Danger
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                    here</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-10 -->

    <!-- Start:: row-11 -->
    <div class="row">
        <div class="col-xl-3">

            <showcodeCard title="non-interactive dropdown items" :code="prism.nonInteractiveDropdownItems">
                <p class="card-title mb-3">Use <code>.dropdown-item-text.</code> to create
                    non-interactive
                    dropdown
                    items.</p>
                <div class="bd-example">
                    <ul class="dropdown-menu">
                        <li><span class="dropdown-item-text">Dropdown item text</span>
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        </li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropdown Headers" :code="prism.dropdownHeaders">
                <p class="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of
                    actions
                    in
                    any
                    dropdown menu.</p>
                <div class="bd-example">
                    <ul class="dropdown-menu">
                        <li>
                            <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        </li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropdown Dividers" :code="prism.dropdownDividers">
                <div class="bd-example">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-header" href="javascript:void(0);">Heading</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Dropdown Menu Text" :code="prism.dropdownMenuText">
                <div class="bd-example">
                    <div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
                        <p>
                            Some example text that's free-flowing within the dropdown menu.
                        </p>
                        <p class="mb-0">
                            And this is more example text.
                        </p>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-11 -->
</template>

<style scoped></style>

