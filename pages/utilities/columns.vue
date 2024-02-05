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
                current: "Columns",
                list: [
                    'Utilities', 'Columns'
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
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Vertical alignment
                            </div>
                        </div>
                        <div class="card-body bd-example-row bd-example-row-flex-cols">
                            <div class="container">
                                <div class="row align-items-start mb-3">
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                </div>
                                <div class="row align-items-end mb-3">
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                    <div class="col">
                                        One of three columns
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col align-self-start">
                                        One of three columns
                                    </div>
                                    <div class="col align-self-center">
                                        One of three columns
                                    </div>
                                    <div class="col align-self-end">
                                        One of three columns
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Column wrapping
                            </div>
                        </div>
                        <div class="card-body bd-example-row">
                            <div class="container">
                                <div class="row">
                                    <div class="col-9">.col-9</div>
                                    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this
                                        4-column-wide
                                        div gets wrapped onto a new line as one contiguous unit.
                                    </div>
                                    <div class="col-6">.col-6<br>Subsequent columns continue
                                        along the new line.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Margin utilities
                            </div>
                        </div>
                        <div class="card-body bd-example-row">
                            <p class="mb-4">With the move to flexbox in v4, you can use margin utilities like
                                <span class="text-danger">.me-auto</span>to force sibling columns
                                away
                                from one
                                another.
                            </p>
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col-md-4">.col-md-4</div>
                                    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                                    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                                </div>
                                <div class="row">
                                    <div class="col-auto me-auto">.col-auto .me-auto</div>
                                    <div class="col-auto">.col-auto</div>
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
                                Horizontal alignment
                            </div>
                        </div>
                        <div class="card-body bd-example-row">
                            <div class="container">
                                <div class="row justify-content-start mb-3">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div class="row justify-content-center mb-3">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div class="row justify-content-end mb-3">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div class="row justify-content-around mb-3">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4 mb-3">
                                        One of two columns
                                    </div>
                                </div>
                                <div class="row justify-content-between mb-3">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div class="row justify-content-evenly">
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                    <div class="col-4">
                                        One of two columns
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Column breaks
                            </div>
                        </div>
                        <div class="card-body bd-example-row">
                            <div class="container mb-3">
                                <div class="row">
                                    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

                                    <!-- Force next columns to break to new line -->
                                    <div class="w-100"></div>

                                    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                </div>
                            </div>
                            <p>You may also apply this break at specific breakpoints with our <span
                                    class="text-danger">responsive display utilities.</span></p>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

                                    <!-- Force next columns to break to new line at md breakpoint and up -->
                                    <div class="w-100 d-none d-md-block"></div>

                                    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Order classes
                            </div>
                        </div>
                        <div class="card-body bd-example-row">
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        First in DOM, no order applied
                                    </div>
                                    <div class="col order-5">
                                        Second in DOM, with a larger order
                                    </div>
                                    <div class="col order-1">
                                        Third in DOM, with an order of 1
                                    </div>
                                </div>
                            </div>
                            <p>There are also responsive <span class="text-danger">.order-first</span> and
                                <span class="text-danger">.order-last</span> classes that change the
                                order of an element by applying <span class="text-danger">order: -1</span>
                                and
                                <span class="text-danger">order: 6</span>, respectively. These
                                classes can also be intermixed with the numbered .order-* classes as needed.
                            </p>
                            <div class="container">
                                <div class="row">
                                    <div class="col order-last">
                                        First in DOM, ordered last
                                    </div>
                                    <div class="col bd-example-grid">
                                        Second in DOM, unordered
                                    </div>
                                    <div class="col order-first">
                                        Third in DOM, ordered first
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Standalone column classes
                            </div>
                        </div>
                        <div class="card-body">
                            <p>The <span class="text-danger">.col-*</span> classes can also be used
                                outside a
                                <span class="text-danger">.row</span> to give an element a specific
                                width. Whenever column classes are used as non direct children of a
                                row,
                                the
                                paddings are omitted.
                            </p>
                            <div class="col-3 bg-light p-3 border">
                                .col-3: width of 25%
                            </div>
                            <div class="col-sm-9 bg-light p-3 border">
                                .col-sm-9: width of 75% above sm breakpoint
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <h6 class="mb-3">Offsetting Columns</h6>
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Offset classes
                    </div>
                </div>
                <div class="card-body bd-example-row">
                    <div class="container mb-3">
                        <div class="row mb-3">
                            <div class="col-md-4">.col-md-4</div>
                            <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3
                            </div>
                            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3
                            </div>
                        </div>
                    </div>
                    <p>In addition to column clearing at responsive breakpoints, you may need to
                        reset
                        offsets.</p>
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
                            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                .col-sm-5
                                .offset-sm-2 .col-md-6 .offset-md-0
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5
                                .col-lg-6</div>
                            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                .col-sm-6
                                .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
                            </div>
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
                <div class="card-body">
                    <P>The classes can be used together with utilities to create responsive floated
                        images.
                        Make sure to wrap the content in a <span class="text-danger">.clearfix</span>
                        wrapper to clear the float if the text
                        is shorter.</P>
                    <div class="clearfix">
                        <img src="/images/media/media-40.jpg"
                            class="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 rounded img-fluid" alt="...">
                        <p>
                            A paragraph of placeholder text. We're using it here to show the use of
                            the
                            clearfix class. We're adding quite a few meaningless phrases here to
                            demonstrate
                            how the columns interact here with the floated image.
                        </p>
                        <p>
                            As you can see the paragraphs gracefully wrap around the floated image.
                            Now
                            imagine how this would look with some actual content in here, rather
                            than
                            just
                            this boring placeholder text that goes on and on, but actually conveys
                            no
                            tangible information at. It simply takes up space and should not really
                            be
                            read.
                        </p>
                        <p>
                            And yet, here you are, still persevering in reading this placeholder
                            text,
                            hoping for some more insights, or some hidden easter egg of content. A
                            joke,
                            perhaps. Unfortunately, there's none of that here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped></style>

