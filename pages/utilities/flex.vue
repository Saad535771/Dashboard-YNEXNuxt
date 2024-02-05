<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
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
                current: "Flex",
                list: [
                    'Utilities', 'Flex'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Enable flex behaviors
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container mb-3">
                        <div class="d-flex p-2">I'm a flexbox container!</div>
                    </div>
                    <div class="bd-example flex-container">
                        <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Direction
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container">
                        <div class="d-flex flex-row mb-3">
                            <div class="p-2">Flex item 1</div>
                            <div class="p-2">Flex item 2</div>
                            <div class="p-2">Flex item 3</div>
                        </div>
                        <div class="d-flex flex-row-reverse">
                            <div class="p-2">Flex item 1</div>
                            <div class="p-2">Flex item 2</div>
                            <div class="p-2">Flex item 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Direction flex-column and flex-column-reverse
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container mb-3">
                        <p>Direction Column</p>
                        <div class="d-flex flex-column mb-3">
                            <div class="p-2">Flex item 1</div>
                            <div class="p-2">Flex item 2</div>
                            <div class="p-2">Flex item 3</div>
                        </div>
                        <p>Column Reverse</p>
                        <div class="d-flex flex-column-reverse">
                            <div class="p-2">Flex item 1</div>
                            <div class="p-2">Flex item 2</div>
                            <div class="p-2">Flex item 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Justify content
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container mb-3">
                        <div class="d-flex justify-content-start mb-3">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex justify-content-end mb-3">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex justify-content-around mb-3">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex justify-content-evenly">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Align items
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container mb-3">
                        <div class="d-flex align-items-start mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex align-items-end mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex align-items-center mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex align-items-baseline mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex align-items-stretch" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Align self
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example flex-container mb-3">
                        <div class="d-flex mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="align-self-start p-2">Aligned flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="align-self-end p-2">Aligned flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="align-self-center p-2">Aligned flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex mb-3" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="align-self-baseline p-2">Aligned flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                        <div class="d-flex" style="height: 100px">
                            <div class="p-2">Flex item</div>
                            <div class="align-self-stretch p-2">Aligned flex item</div>
                            <div class="p-2">Flex item</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Align content ( Heads up! This property has no effect on single rows of flex
                                items.)
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex align-content-start flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex align-content-end flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex align-content-center flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex align-content-between flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex align-content-around flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex align-content-stretch flex-wrap mb-3" style="height: 200px">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Order
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex flex-nowrap">
                                    <div class="order-3 p-2">First flex item</div>
                                    <div class="order-2 p-2">Second flex item</div>
                                    <div class="order-1 p-2">Third flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Fill
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex">
                                    <div class="p-2 flex-fill">Flex item with a lot of content</div>
                                    <div class="p-2 flex-fill">Flex item</div>
                                    <div class="p-2 flex-fill">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Grow and shrink
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex mb-3">
                                    <div class="p-2 flex-grow-1">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Third flex item</div>
                                </div>
                                <div class="d-flex">
                                    <div class="p-2 w-100">Flex item</div>
                                    <div class="p-2 flex-shrink-1">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Auto margins
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex mb-3">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>

                                <div class="d-flex mb-3">
                                    <div class="me-auto p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>

                                <div class="d-flex mb-3">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="ms-auto p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Wrap
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex flex-nowrap" style="width: 8rem;">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>

                                <div class="d-flex flex-wrap">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                                <div class="d-flex flex-wrap-reverse">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                With align-items
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="bd-example flex-container mb-3">
                                <div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
                                    <div class="mb-auto p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                </div>

                                <div class="d-flex align-items-end flex-column mb-3" style="height: 200px;">
                                    <div class="p-2">Flex item</div>
                                    <div class="p-2">Flex item</div>
                                    <div class="mt-auto p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Media object
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-sm-flex mb-3">
                        <div class="flex-shrink-0 mb-3 mb-sm-0">
                            <img class="bd-placeholder-img card-img w-10 h-10" src="/images/faces/6.jpg" alt="img">
                        </div>
                        <div class="flex-grow-1 ms-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae blanditiis
                            voluptas nobis consectetur. Voluptate pariatur, odit repudiandae sint, libero laborum aut vel,
                            ut enim laboriosam explicabo dolor corporis hic.
                        </div>
                    </div>
                    <p>And say you want to vertically center the content next to the image:</p>
                    <div class="d-sm-flex align-items-center">
                        <div class="flex-shrink-0 mb-3 mb-sm-0">
                            <img class="bd-placeholder-img card-img avatar-xl" src="/images/faces/15.jpg" alt="img">
                        </div>
                        <div class="flex-grow-1 ms-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, accusamus fuga quis
                            deserunt provident rem illum exercitationem laborum pariatur modi blanditiis a dolor excepturi
                            qui, aut laudantium harum in id..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-5 -->
</template>

<style scoped></style>

