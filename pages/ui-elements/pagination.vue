<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/pagination.js';
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
                current: "Pagination",
                list: [
                    'UI-Elements', 'Pagination'
                ]
            },
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <showcodeCard title="Basic Pagination" :code="prism.BasicPagination">
                <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6">

            <showcodeCard title="Pagination With Icons" :code="prism.PaginationWithIcons">
                <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                                <span aria-hidden="true"><i class="bx bx-chevron-left"></i></span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                <span aria-hidden="true"><i class="bx bx-chevron-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xxl-6 col-xl-12">

            <showcodeCard title="Pagination Sizing" custom-card-body-class="d-flex flex-wrap justify-content-between gap-2"
                :code="prism.PaginationSizing">
                <nav aria-label="...">
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination pagination-lg mb-0">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2  -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title=" Center & Right Aligned Pagination" :code="prism.CenterRightAlignedPagination">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end mb-0">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Active and disabled states" custom-card-body-class="d-flex flex-wrap"
                :code="prism.ActiveAndDisabledStates">
                <nav aria-label="..." class="me-3">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="javascript:void(0);">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">2</span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2  -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Pagination Style-1" :code="prism.PaginationStyle1">
                <nav aria-label="Page navigation" class="pagination-style-1">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="ri-arrow-left-s-line align-middle"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">21</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="ri-arrow-right-s-line align-middle"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Pagination Style-2" :code="prism.PaginationStyle2">
                <nav aria-label="Page navigation" class="pagination-style-2">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Pagination Style-3" :code="prism.PaginationStyle3">
                <nav aria-label="Page navigation" class="pagination-style-3">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Pagination Style-4" :code="prism.PaginationStyle4">
                <nav aria-label="Page navigation" class="pagination-style-4">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </nav>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped></style>

