<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import searchcompany from "@/components/UI/searchcompany.vue";
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        searchcompany
    },
    data() {
        return {
            dataToPass: {
                current: "Search Company",
                list: [
                    'Apps', 'Jobs', 'Search Company'
                ]
            },
            categorySelecteValue: null,
            categorySelecteOptions: ['All Categories', 'Software Dveloper', 'Web Developer', 'Software Architect', 'IT Hardware', 'Network Engineer', 'Angular Developer', 'React Developer'],
            companyListData: [
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/1.png`, name: "Spotech Technical Solutions", location: "Kondapur, Hyderabad", establishment: "Establishment year - 2019", reviews: "142", share : false, rating: "4", employees: "345", vacancies: "50" },
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/2.png`, name: "G Technical Solutions", location: "Gachibowli, Hyderabad,", establishment: "Establishment year - 2015", reviews: "134", share : false, rating: "4", employees: "146", vacancies: "40" },
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/3.png`, name: "Diego Technical Solutions", location: "", establishment: "", reviews: "", share : false, rating: "", employees: "56", vacancies: "36" },
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/7.png`, name: "Spoteck Solutions Pvt Ltd ", location: "Gachibowli, Banglore,", establishment: "Establishment year - 2002", reviews: "239", share : false, rating: "4", employees: "100", vacancies: "36" },
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/5.png`, name: "Vehement Capital Partners", location: "Gachibowli, Banglore,", establishment: "Establishment year - 2017", reviews: "239", share : true, rating: "4.5", employees: "120", vacancies: "10" },
                { logo: `${import.meta.env.BASE_URL}/images/company-logos/6.png`, name: "Wonka Industries ", location: "Kukatpally, Hyderabad,", establishment: "Establishment year - 2000", reviews: "764", share : true, rating: "4", employees: "120", vacancies: "10" },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start:: row-1 -->
        <div class="row">
            <div class="col-xxl-3 col-lg-5">
                <div class="card custom-card products-navigation-card">
                    <div class="card-body p-0">
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Industry Type</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-1" checked>
                                    <label class="form-check-label" for="c-1">
                                        R & D
                                    </label>
                                    <span class="badge bg-light text-default  float-end">2,712</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-2">
                                    <label class="form-check-label" for="c-2">
                                        Accounting
                                    </label>
                                    <span class="badge bg-light text-default  float-end">536</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-3" checked>
                                    <label class="form-check-label" for="c-3">
                                        Business Process
                                    </label>
                                    <span class="badge bg-light text-default  float-end">18,289</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-4" checked>
                                    <label class="form-check-label" for="c-4">
                                        Consulting
                                    </label>
                                    <span class="badge bg-light text-default  float-end">3,453</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-5">
                                    <label class="form-check-label" for="c-5">
                                        Administrative
                                    </label>
                                    <span class="badge bg-light text-default  float-end">7,165</span>
                                </div>
                                <div class="collapse" id="category-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="cc-6">
                                        <label class="form-check-label" for="cc-6">
                                            Human Resources
                                        </label>
                                        <span class="badge bg-light text-default  float-end">5,964</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="cc-7">
                                        <label class="form-check-label" for="cc-7">
                                            Marketing
                                        </label>
                                        <span class="badge bg-light text-default  float-end">2,123</span>
                                    </div>
                                </div>
                                <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button"
                                    aria-expanded="false" aria-controls="category-more">MORE</a>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Location</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-1" checked>
                                    <label class="form-check-label" for="available-1">
                                        Hyderabad
                                    </label>
                                    <span class="badge bg-light text-default  float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-2">
                                    <label class="form-check-label" for="available-2">
                                        Banglore
                                    </label>
                                    <span class="badge bg-light text-default  float-end">2,186</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="available-3">
                                    <label class="form-check-label" for="available-3">
                                        Chennai
                                    </label>
                                    <span class="badge bg-light text-default  float-end">734</span>
                                </div>
                                <div class="collapse" id="location-more">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="c-6">
                                        <label class="form-check-label" for="c-6">
                                            Pune
                                        </label>
                                        <span class="badge bg-light text-default  float-end">5,964</span>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="c-7">
                                        <label class="form-check-label" for="c-7">
                                            USA
                                        </label>
                                        <span class="badge bg-light text-default  float-end">2,123</span>
                                    </div>
                                </div>
                                <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#location-more" role="button"
                                    aria-expanded="false" aria-controls="location-more">MORE</a>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Company Size</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-1" checked>
                                    <label class="form-check-label" for="bond-1">
                                        0-50
                                    </label>
                                    <span class="badge bg-light text-default  float-end">145</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-2">
                                    <label class="form-check-label" for="bond-2">
                                        50 - 100
                                    </label>
                                    <span class="badge bg-light text-default  float-end">432</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="bond-3">
                                    <label class="form-check-label" for="bond-3">
                                        100 - 150
                                    </label>
                                    <span class="badge bg-light text-default  float-end">123</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Recruiter Type</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="Recruiter-1" checked>
                                    <label class="form-check-label" for="Recruiter-1">
                                        Direct Company
                                    </label>
                                    <span class="badge bg-light text-default  float-end">13</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="Recruiter-2">
                                    <label class="form-check-label" for="Recruiter-2">
                                        Agency
                                    </label>
                                    <span class="badge bg-light text-default  float-end">67</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Job Vacancies</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="vacancies-1" checked>
                                    <label class="form-check-label" for="vacancies-1">
                                        0 -10
                                    </label>
                                    <span class="badge bg-light text-default  float-end">13</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="vacancies-2">
                                    <label class="form-check-label" for="vacancies-2">
                                        10 - 20
                                    </label>
                                    <span class="badge bg-light text-default  float-end">67</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="vacancies-3">
                                    <label class="form-check-label" for="vacancies-3">
                                        20 +above
                                    </label>
                                    <span class="badge bg-light text-default  float-end">67</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 border-bottom">
                            <h6 class="fw-semibold mb-0">Type of Employement</h6>
                            <div class="px-2 py-3 pb-0">
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-1" checked>
                                    <label class="form-check-label" for="j-1">
                                        Full Time
                                    </label>
                                    <span class="badge bg-light text-default  float-end">512</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-2" checked>
                                    <label class="form-check-label" for="j-2">
                                        Part Time
                                    </label>
                                    <span class="badge bg-light text-default  float-end">2,186</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-3" checked>
                                    <label class="form-check-label" for="j-3">
                                        Internship
                                    </label>
                                    <span class="badge bg-light text-default  float-end">734</span>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-4">
                                    <label class="form-check-label" for="j-4">
                                        Freelancer
                                    </label>
                                    <span class="badge bg-light text-default  float-end">16</span>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="j-5">
                                    <label class="form-check-label" for="j-5">
                                        Remote Job
                                    </label>
                                    <span class="badge bg-light text-default  float-end">1,432</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-9 col-lg-7">
                <div class="row align-items-center mb-4">
                    <div class="col-lg-12">
                        <div class="input-group companies-search-input">
                            <input type="text" class="form-control w-25"
                                aria-label="Text input with segmented dropdown button"
                                placeholder="Enter your keyword here">

                            <VueMultiselect :show-labels="false" class="rounded-0 w-sm-25" name="category" id="category"
                                v-model="categorySelecteValue" :multiple="false" :options="categorySelecteOptions">
                            </VueMultiselect>
                            <input type="text" class="form-control w-25"
                                aria-label="Text input with segmented dropdown button" placeholder="Search by location">
                            <button type="button" class="btn btn-primary"><i class="ri-search-line"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card custom-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <h5 class="fw-semibold mb-0 flex-grow-1">1287 <span class="fw-normal fs-18">Companies match for
                                    your search</span> </h5>
                            <div class="btn-group">
                                <button class="btn btn-outline-light border dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </button>
                                <ul class="dropdown-menu">
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

                <searchcompany :companyListData=companyListData></searchcompany>

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
        <!-- End:: row-1 -->
    </div>
</template>

<style scoped></style>

