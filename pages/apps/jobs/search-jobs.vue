<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import searchjobs from "@/components/UI/searchjobs.vue";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'
import auth from '@/middleware/auth';
import { jobsListData } from '@/data/search-jobs.js';

export default {
    setup() {

        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        searchjobs,
        VueSlider
    },
    data() {
        return {
            dataToPass: {
                current: "Search Jobs",
                list: [
                    'Apps', 'Jobs', 'Search Jobs'
                ]
            },
            diffTolltips: [25000, 70000],
            min: 100,
            max: 100000,
            jobsListData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xl-12">
                <div class="card custom-card">
                    <div class="card-body p-3">
                        <div class="row align-items-center">
                            <div class="col-sm-8">
                                <div class="d-flex">
                                    <h5 class="fw-semibold mb-0"><span class="fw-normal">Showing</span> 3456 Jobs</h5>
                                </div>
                            </div>
                            <div class="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                <div class="btn-group">
                                    <button class="btn btn-outline-light border dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Featured</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Most Relevant</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Best Rated</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->

        <!-- Start::row-2 -->
        <div class="row">
            <div class="col-xxl-3 col-xl-4">
                <div class="card custom-card products-navigation-card">
                    <div class="card-body p-0">
                        <div class="py-4 px-sm-4 p-3 border-bottom">
                            <h6 class="fw-semibold mb-0">Categories</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="c-1" checked>
                                    <label class="form-check-label" for="c-1">
                                        R & D
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">2,712</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="c-2">
                                    <label class="form-check-label" for="c-2">
                                        Accounting
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">536</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="c-3" checked>
                                    <label class="form-check-label" for="c-3">
                                        Business Process
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">18,289</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="c-4" checked>
                                    <label class="form-check-label" for="c-4">
                                        Consulting
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">3,453</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="c-5">
                                    <label class="form-check-label" for="c-5">
                                        Administrative Support
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">7,165</span>
                                </div>
                                <div class="collapse" id="category-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="c-6">
                                        <label class="form-check-label" for="c-6">
                                            Human Resources
                                        </label>
                                        <span class="badge bg-light me-2 text-default fw-500 float-end">5,964</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="c-7">
                                        <label class="form-check-label" for="c-7">
                                            Marketing
                                        </label>
                                        <span class="badge bg-light text-default fw-500 float-end">2,123</span>
                                    </div>
                                </div>
                                <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button"
                                    aria-expanded="false" aria-controls="category-more">MORE</a>
                            </div>
                        </div>
                        <div class="py-4 px-sm-4 p-3 border-bottom">
                            <h6 class="fw-semibold mb-0">Job Type</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="j-1" checked>
                                    <label class="form-check-label" for="j-1">
                                        Full Time
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="j-2" checked>
                                    <label class="form-check-label" for="j-2">
                                        Part Time
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">2,186</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="j-3" checked>
                                    <label class="form-check-label" for="j-3">
                                        Internship
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">734</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="j-4">
                                    <label class="form-check-label" for="j-4">
                                        Freelancer
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">16</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="j-5">
                                    <label class="form-check-label" for="j-5">
                                        Remote Job
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">1,432</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-sm-4 p-3 border-bottom">
                            <h6 class="fw-semibold mb-0">Salary Range</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <vue-slider class="mb-5" v-model="diffTolltips" :tooltip="'always'" :marks="[100, 100000]"
                                    :min="min" :max="max" :tooltip-placement="['top', 'bottom']"></vue-slider>
                                <div class="d-flex mt-5">
                                    <div class="fw-semibold h6 mb-0">$<span id="lower-value">{{ diffTolltips[0] }}</span>
                                    </div>
                                    &nbsp; -- &nbsp;
                                    <div class="fw-semibold h6 mb-0">$<span id="upper-value">{{ diffTolltips[1] }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-sm-4 p-3 border-bottom">
                            <h6 class="fw-semibold mb-0">Qualification</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="q-1">
                                    <label class="form-check-label" for="q-1">
                                        All Education Levels
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">16,563</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="q-2" checked>
                                    <label class="form-check-label" for="q-2">
                                        10th Pass and Above
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">15,234</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="q-3">
                                    <label class="form-check-label" for="q-3">
                                        12th Pass and Above
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">6,278</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="q-4" checked>
                                    <label class="form-check-label" for="q-4">
                                        Diploma and Graduate
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">4,531</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="q-5">
                                    <label class="form-check-label" for="q-5">
                                        Post Graduate
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">2,405</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-sm-4 p-3 border-bottom">
                            <h6 class="fw-semibold mb-0">Experience</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="e-1" checked>
                                    <label class="form-check-label" for="e-1">
                                        Fresher
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">23,156</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="e-2">
                                    <label class="form-check-label" for="e-2">
                                        Less than 1 year
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">15,632</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="e-3" checked>
                                    <label class="form-check-label" for="e-3">
                                        Less than 2 year
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">15,032</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="e-4" checked>
                                    <label class="form-check-label" for="e-4">
                                        More than 3 years
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">7,154</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-sm-4 p-3">
                            <h6 class="fw-semibold mb-0">Skills</h6>
                            <div class="px-sm-2 px-0 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="s-1" checked>
                                    <label class="form-check-label" for="s-1">
                                        HTML5
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">23,156</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="s-2" checked>
                                    <label class="form-check-label" for="s-2">
                                        Javascript
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">15,632</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="s-3">
                                    <label class="form-check-label" for="s-3">
                                        PHP
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">15,032</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="s-4" checked>
                                    <label class="form-check-label" for="s-4">
                                        CSS3
                                    </label>
                                    <span class="badge bg-light me-2 text-default fw-500 float-end">7,154</span>
                                </div>
                                <div class="collapse" id="sizes-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="s-5">
                                        <label class="form-check-label" for="s-5">
                                            Bootstrap
                                        </label>
                                        <span class="badge bg-light me-2 text-default fw-500 float-end">5,946</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="s-6">
                                        <label class="form-check-label" for="s-6">
                                            Angular
                                        </label>
                                        <span class="badge bg-light me-2 text-default fw-500 float-end">3,267</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="s-7">
                                        <label class="form-check-label" for="s-7">
                                            React
                                        </label>
                                        <span class="badge bg-light me-2 text-default fw-500 float-end">578</span>
                                    </div>
                                </div>
                                <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button"
                                    aria-expanded="false" aria-controls="sizes-more">MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="">
                            <h5 class="fw-semibold mb-3">Get Latest Job Alerts</h5>
                            <p>Latest jobs updates on the go to recieved direct to your email. Stay updated with your latest
                                new jobs.</p>
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
            <div class="col-xxl-9 col-xl-8">
                <template  v-for="(value, key) in jobsListData" :key="key">
                    <searchjobs :jobsListData=value></searchjobs>
                </template>
                <ul class="pagination mb-4 justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                            Prev
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item">
                        <a class="page-link text-primary" href="javascript:void(0);">
                            next
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End::row-2 -->
    </div>
</template>


<style >
.custom-step.active {
    box-shadow: 0 0 0 3px var(--primary-color);
    background-color: var(--primary-color);
}

.custom-label.active {
    color: var(--primary-color);
}

.vue-slider-process {
    background-color: var(--primary-color);
}

.vue-slider-dot-tooltip-inner {
    background-color: var(--primary08);
    border-color: var(--primary08);
}
</style>


 