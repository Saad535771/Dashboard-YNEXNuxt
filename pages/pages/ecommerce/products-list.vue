<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { productsList } from '@/data/ecommerce/products.js';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Products List",
                list: [
                    'Pages', 'Ecommerce', 'Products List'
                ]
            },
            productsList
        };
    },
    methods: {
        RemoveEle(item: any) {
            this.productsList = this.productsList.filter(e => e.id != item.id);
        },
        selectAllProducts(event: Event) {
            if (event.currentTarget) {
                let element = event.currentTarget as HTMLInputElement;
                const elements = this.$refs['checkOption'];
                if (elements) {
                    const elementsArray = Array.isArray(elements) ? elements : [elements];
                    if (element.checked) {
                        elementsArray?.forEach((e) => {
                            e.checked = true;
                        });
                    } else {
                        elementsArray?.forEach((e) => {
                            e.checked = false;
                        });
                    }
                }
            }
        },
        checkFn(event: Event) {
            let element = event.currentTarget as HTMLInputElement;
            let allChecked = true;
            const elements = this.$refs['checkOption'];
            if (elements) {
                const elementsArray = Array.isArray(elements) ? elements : [elements];
                if (element.checked) {
                    elementsArray?.forEach((e) => {
                        if (!e.checked) {
                            allChecked = false;
                        }
                    });
                } else {
                    elementsArray?.forEach((e) => {
                        if (!e.checked) {
                            allChecked = false;
                        }
                    });
                }
                let checkAll = this.$refs['checkall'] as HTMLInputElement;
                if (allChecked) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }
            }
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Products List
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive mb-4">
                        <table class="table text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <input ref="checkall" @click="selectAllProducts" class="form-check-input check-all"
                                            type="checkbox" id="all-products" value="" aria-label="...">
                                    </th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Seller</th>
                                    <th scope="col">Published</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in productsList" class="product-list">
                                    <td class="product-checkbox"><input @click="checkFn" ref="checkOption"
                                            class="form-check-input" type="checkbox" id="product1" value=""
                                            aria-label="..."></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img :src="item.image" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">
                                                {{ item.title }}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span v-for="category in item.category" class="badge bg-light text-default">{{
                                            category }}</span>
                                    </td>
                                    <td>${{ item.price }}</td>
                                    <td>{{ item.stock }}</td>
                                    <td>{{ item.gender }}</td>
                                    <td>{{ item.seller }}</td>
                                    <td>{{ item.published }}M</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <NuxtLink to="/pages/ecommerce/edit-products"
                                                class="btn btn-icon btn-sm btn-info-light"><i class="ri-edit-line"></i>
                                            </NuxtLink>
                                            <a href="javascript:void(0);" @click="RemoveEle(item)"
                                                class="btn btn-icon btn-sm btn-danger-light product-btn"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <nav aria-label="...">
                            <ul class="pagination mb-0">
                                <li class="page-item disabled">
                                    <span class="page-link">Previous</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">2</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);">Next</a>
                                </li>
                            </ul>
                        </nav>
                        <button class="btn btn-danger btn-wave m-1">Delete All</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

