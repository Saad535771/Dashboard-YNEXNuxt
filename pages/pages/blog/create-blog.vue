<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import Datepicker from 'vue3-datepicker'
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

        const picked = ref(new Date());
        const time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        })
        return { picked, time, }
    },
    components: {
        PageHeader,
        Datepicker,
    },
    data() {
        return {
            dataToPass: {
                current: "Create Blog",
                list: [
                    'Pages', 'Blog ', 'Create Blog'
                ]
            },
            categorySelect: null,
            categoryOptions: ['Beauty', 'Fashion', 'Travel', 'Food', 'Sports', 'Nature'],
            publishSelect: null,
            publishOptions: ['Published', 'Hold'],
            blogSelect: null,
            blogOptions: ['Top Blog', 'Blogger', 'Adventure', 'Landscape'],
            content: '',
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">New Blog</div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <label for="blog-title" class="form-label">Blog Title</label>
                            <input type="text" class="form-control" id="blog-title" placeholder="Blog Title">
                        </div>
                        <div class="col-xl-12">
                            <label for="blog-category" class="form-label">Blog Category</label>
                            <VueMultiselect  :searchable="false" :show-labels="false" :options="categoryOptions" :multiple="false"
                                v-model="categorySelect">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="blog-author" class="form-label">Blog Author</label>
                            <input type="text" class="form-control" id="blog-author" placeholder="Enter Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="blog-author-email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="blog-author-email" placeholder="Enter Email">
                        </div>
                        <div class="col-xl-6">
                            <label for="publish-date" class="form-label">Publish Date</label>
                            <!-- <input type="text" class="form-control" id="publish-date" placeholder="Choose date"> -->
                            <Datepicker class="form-control" placeholder="Choose date" v-model="picked" />
                        </div>
                        <div class="col-xl-6">
                            <label for="publish-time" class="form-label">Publish Time</label>
                            <!-- <input type="text" class="form-control" id="publish-time" placeholder="Choose time"> -->
                            <Datepicker1 placeholder="Date Time" class="datepicker-here" time-picker v-model="time">
                            </Datepicker1>
                        </div>
                        <div class="col-xl-6">
                            <label for="product-status-add" class="form-label">Published Status</label>
                            <VueMultiselect :searchable="false" :show-labels="false" :options="publishOptions" :multiple="false"
                                v-model="publishSelect">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label for="blog-tags" class="form-label">Blog Tags</label>
                            <VueMultiselect :searchable="false" :show-labels="false" :options="blogOptions" :multiple="false"
                                v-model="blogSelect">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Blog Content</label>
                            <vue-editor v-model="content"></vue-editor>
                        </div>
                        <div class="col-xl-12 blog-images-container">
                            <label for="blog-author-email" class="form-label">Blog Images</label>
                            <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Blog Type</label>
                            <div class="d-flex align-items-center">
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="blog-type" id="blog-free1" checked>
                                    <label class="form-check-label" for="blog-free1">
                                        Free
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="blog-type" id="blog-paid1">
                                    <label class="form-check-label" for="blog-paid1">
                                        Paid
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="btn-list text-end">
                        <button type="button" class="btn btn-sm btn-light">Save As Draft</button>
                        <button type="button" class="btn btn-sm btn-primary">Post Blog</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Recent Blogs
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-39.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Animals</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        There are many variations of passages of Lorem Ipsum available
                                    </p>
                                    <span class="text-muted fs-11">24,Nov 2022 - 18:27</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-56.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Travel</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        Latin words, combined with a handful of model sentence
                                    </p>
                                    <span class="text-muted fs-11">28,Nov 2022 - 10:45</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-54.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Interior</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                    </p>
                                    <span class="text-muted fs-11">30,Nov 2022 - 08:32</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-52.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Nature</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                    </p>
                                    <span class="text-muted fs-11">3,Dec 2022 - 12:56</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-74.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Health</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                    </p>
                                    <span class="text-muted fs-11">16,Dec 2022 - 04:56</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-49.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Food</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                    </p>
                                    <span class="text-muted fs-11">31,Dec 2022 - 18:06</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex gap-2 flex-wrap align-items-center">
                                <span class="avatar avatar-xl me-1">
                                    <img src="/images/media/media-76.jpg" class="img-fluid" alt="...">
                                </span>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Travel</a>
                                    <p class="mb-1 popular-blog-content text-truncate">
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                    </p>
                                    <span class="text-muted fs-11">15,Dec 2022 - 14:31</span>
                                </div>
                                <div>
                                    <button aria-label="button" type="button"
                                        class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                            class="ri-arrow-right-s-line"></i></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item text-center">
                            <button type="button" class="btn btn-primary-light">Load more</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

