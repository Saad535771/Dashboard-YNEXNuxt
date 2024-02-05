<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import searchcandidate from "@/components/UI/searchcandidate.vue";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        searchcandidate,
        VueSlider,
    },
    data() {
        return {
            dataToPass: {
                current: "Search Candidate",
                list: [
                    'Apps', 'Jobs', 'Search Candidate'
                ]
            },
            diffTolltips: [25000, 70000],
            min: 100,
            max: 100000,
            categorySelecteValue: null,
            categorySelecteOptions: ['All Categories', 'Software Dveloper', 'Web Developer', 'Software Architect', 'IT Hardware', 'Network Engineer', 'Angular Developer', 'React Developer'],
            expSelecteValue: 'Fresher',
            expSelecteOptions: ['Fresher', '1 Year Exp', '2 Year Exp', '3 Year Exp', '4 Year Exp', '5 Year Exp'],
            candidatesListData: [
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/1.jpg`, name: 'Brenda Simpson ', role: 'Software Developer', location: 'Kondapur, Hyderabad', rating: '4.5', review: '142', details: [
                        { icon: 'bi-mortarboard', name: 'Graduate' },
                        { icon: 'bi-moon-stars', name: 'flexible-shift' },
                        { icon: 'bi-clock', name: 'Immediate Joinee' },
                        { icon: 'bi-broadcast', name: 'Good at English' },
                    ], packageFrom: '$2,300', packageTo: '$2,300 - $3,678', languages: ['English, Hindi, Telugu'], skills: ['HTML', 'CSS', 'Javascript', 'Angular'],
                    bondAccept: '1', experience: '2 Years'
                },
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/3.jpg`, name: 'Dwayne Stort ', role: 'Web Developer', location: 'Gachibowli, Hyderabad', rating: '3', review: '35', details: [
                        { icon: 'bi-mortarboard', name: 'Post Graduate' },
                        { icon: 'bi-moon-stars', name: 'flexible-shift' },
                        { icon: 'bi-clock', name: 'Within 10 Days' },
                        { icon: 'bi-broadcast', name: 'Good at English' },
                    ], packageFrom: '$3,600 - $4,700', packageTo: '$3,600 - $4,700', languages: ['English, Telugu'], skills: ['Javascript', 'React', 'React Native', 'HTML'],
                    bondAccept: '2', experience: '4 Years'
                },
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/21.jpg`, name: 'Jasmine Kova ', role: 'Python Developer', location: 'Gachibowli, Chennai', rating: '3', review: '56', details: [
                        { icon: 'bi-mortarboard', name: 'MBA' },
                        { icon: 'bi-moon-stars', name: 'Day-shift' },
                        { icon: 'bi-clock', name: 'Within 30 Days' },
                        { icon: 'bi-broadcast', name: 'Avg at English' },
                    ], packageFrom: '$4,300 - $5,000', packageTo: '$4,300 - $5,000', languages: ['English, Telugu'], skills: ['Python', 'Java', 'React', 'Angular'],
                    bondAccept: '0', experience: '5 Years'
                },
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/5.jpg`, name: 'Kiara Advain ', role: 'Java Developer', location: 'Gachibowli, Banglore', rating: '3', review: '13', details: [
                        { icon: 'bi-mortarboard', name: 'MBA' },
                        { icon: 'bi-moon-stars', name: 'Day-shift' },
                        { icon: 'bi-clock', name: 'Within 30 Days' },
                        { icon: 'bi-broadcast', name: 'Good at English' },
                    ], packageFrom: '$3,678', packageTo: '$3,678', languages: ['English, Hindi, Telugu'], skills: ['Java', 'Core Java'],
                    bondAccept: '2', experience: 'Fresher'
                },
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/13.jpg`, name: 'Json Taylor ', role: 'Angular Developer', location: 'Gachibowli, Nellore', rating: '4', review: '18', details: [
                        { icon: 'bi-mortarboard', name: 'MBA' },
                        { icon: 'bi-moon-stars', name: 'flexible-shift' },
                        { icon: 'bi-clock', name: 'Within 15 Days' },
                        { icon: 'bi-broadcast', name: 'Fluent at English' },
                    ], packageFrom: '$3,600 - $4,700', packageTo: '$3,600 - $4,700', languages: ['English, Hindi, Telugu'], skills: ['Java', 'Advanced Java', 'Angular', 'HTML'],
                    bondAccept: '2', experience: '5 Years'
                },
                {
                    image: `${import.meta.env.BASE_URL}/images/faces/21.jpg`, name: 'Diego Sanch ', role: 'AWS Developer', location: 'Kukatpally, Hyderabad', rating: '3', review: '13', details: [
                        { icon: 'bi-mortarboard', name: 'MBA' },
                        { icon: 'bi-moon-stars', name: 'Day-shift' },
                        { icon: 'bi-clock', name: 'Within 30 Days' },
                        { icon: 'bi-broadcast', name: 'Good at English' },
                    ], packageFrom: '$8,900', packageTo: '$8,900', languages: ['English, Hindi, Telugu'], skills: ['AWS Lambda', 'Athena', 'Linux', 'Angular'],
                    bondAccept: '0', experience: 'Fresher'
                }
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container-lg">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xxl-3 col-xl-4">
                <div class="card custom-card products-navigation-card">
                    <div class="card-body p-0">
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Categories</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-1" checked>
                                    <label class="form-check-label" for="c-1">
                                        R &amp; D
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">2,712</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-2">
                                    <label class="form-check-label" for="c-2">
                                        Accounting
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">536</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-3" checked>
                                    <label class="form-check-label" for="c-3">
                                        Business Process
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">18,289</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-4" checked>
                                    <label class="form-check-label" for="c-4">
                                        Consulting
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">3,453</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-5">
                                    <label class="form-check-label" for="c-5">
                                        Administrative Support
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">7,165</span>
                                </div>
                                <div class="collapse" id="category-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="c-6">
                                        <label class="form-check-label" for="c-6">
                                            Human Resources
                                        </label>
                                        <span class="badge bg-light text-default fw-500 float-end">5,964</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="c-7">
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
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Availability</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-1" checked>
                                    <label class="form-check-label" for="available-1">
                                        Immediate
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-2">
                                    <label class="form-check-label" for="available-2">
                                        30 Days
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">2,186</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-3">
                                    <label class="form-check-label" for="available-3">
                                        3 Months
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">734</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Bond Agreement</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-1" checked>
                                    <label class="form-check-label" for="bond-1">
                                        1 Year
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-2">
                                    <label class="form-check-label" for="bond-2">
                                        2 Years
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">512</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-3">
                                    <label class="form-check-label" for="bond-3">
                                        3 Years
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">512</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Languages</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="languages-1" checked>
                                    <label class="form-check-label" for="languages-1">
                                        English
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">13</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="languages-2">
                                    <label class="form-check-label" for="languages-2">
                                        Hindi
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">67</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="languages-3">
                                    <label class="form-check-label" for="languages-3">
                                        Telugu
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">58</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Job Type</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-1" checked>
                                    <label class="form-check-label" for="j-1">
                                        Full Time
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-2" checked>
                                    <label class="form-check-label" for="j-2">
                                        Part Time
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">2,186</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-3" checked>
                                    <label class="form-check-label" for="j-3">
                                        Internship
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">734</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-4">
                                    <label class="form-check-label" for="j-4">
                                        Freelancer
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">16</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-5">
                                    <label class="form-check-label" for="j-5">
                                        Remote Job
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">1,432</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Salary Range</h6>
                            <div class="px-2 py-3 pb-0">
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
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Qualification</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="q-1">
                                    <label class="form-check-label" for="q-1">
                                        All Education Levels
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">16,563</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="q-2" checked>
                                    <label class="form-check-label" for="q-2">
                                        10th Pass and Above
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">15,234</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="q-3">
                                    <label class="form-check-label" for="q-3">
                                        12th Pass and Above
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">6,278</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="q-4" checked>
                                    <label class="form-check-label" for="q-4">
                                        Diploma and Graduate
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">4,531</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="q-5">
                                    <label class="form-check-label" for="q-5">
                                        Post Graduate
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">2,405</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Experience</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="e-1" checked>
                                    <label class="form-check-label" for="e-1">
                                        Fresher
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">23,156</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="e-2">
                                    <label class="form-check-label" for="e-2">
                                        Less than 1 year
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">15,632</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="e-3" checked>
                                    <label class="form-check-label" for="e-3">
                                        Less than 2 year
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">15,032</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="e-4" checked>
                                    <label class="form-check-label" for="e-4">
                                        More than 3 years
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">7,154</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 py-4 px-sm-4">
                            <h6 class="fw-semibold mb-0">Skills</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-1" checked>
                                    <label class="form-check-label" for="s-1">
                                        HTML5
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">23,156</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-2" checked>
                                    <label class="form-check-label" for="s-2">
                                        Javascript
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">15,632</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-3">
                                    <label class="form-check-label" for="s-3">
                                        PHP
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">15,032</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-4" checked>
                                    <label class="form-check-label" for="s-4">
                                        CSS3
                                    </label>
                                    <span class="badge bg-light text-default fw-500 float-end">7,154</span>
                                </div>
                                <div class="collapse" id="sizes-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="s-5">
                                        <label class="form-check-label" for="s-5">
                                            Bootstrap
                                        </label>
                                        <span class="badge bg-light text-default fw-500 float-end">5,946</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="s-6">
                                        <label class="form-check-label" for="s-6">
                                            Angular
                                        </label>
                                        <span class="badge bg-light text-default fw-500 float-end">3,267</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="s-7">
                                        <label class="form-check-label" for="s-7">
                                            React
                                        </label>
                                        <span class="badge bg-light text-default fw-500 float-end">578</span>
                                    </div>
                                </div>
                                <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button"
                                    aria-expanded="false" aria-controls="sizes-more">MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-9 col-xl-8">
                <div class="row align-items-center mb-4">
                    <div class="col-lg-12">
                        <div class="input-group companies-search-input">
                            <input type="text" class="form-control w-25"
                                aria-label="Text input with segmented dropdown button"
                                placeholder="Enter your keyword here">

                            <VueMultiselect :show-labels="false" class="w-sm-20 rounded-0" name="category" id="category"
                                v-model="categorySelecteValue" :multiple="false" :options="categorySelecteOptions">
                            </VueMultiselect>
                            <input type="text" class="form-control w-25"
                                aria-label="Text input with segmented dropdown button" placeholder="Search by location">
                            <VueMultiselect :show-labels="false" class="w-sm-20 rounded-0" name="exp" id="exp"
                                v-model="expSelecteValue" :multiple="false" :options="expSelecteOptions">
                            </VueMultiselect>
                            <button type="button" class="btn btn-primary"><i class="ri-search-line"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="d-flex flex-wrap gap-2 align-items-center">
                            <h5 class="fw-semibold mb-0 flex-grow-1">1287 <span class="fw-normal fs-18">Candidates match
                                    your job search</span> </h5>
                            <div class="btn-group">
                                <button class="btn btn-outline-light border dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </button>
                                <ul class="dropdown-menu" style="">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Premium</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Most Relevant</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Fresher</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Experienced</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Bond Agreement</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Flexible Shift</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Day Shift</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <searchcandidate :candidatesListData="candidatesListData"></searchcandidate>
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
        <!--End::row-1 -->
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

