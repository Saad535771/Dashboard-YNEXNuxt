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
                current: "Faqs",
                list: [
                    'Pages', 'Faqs'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row justify-content-center mb-5">
        <div class="col-xl-12">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="text-center p-3 faq-header mb-4">
                        <h5 class="mb-1 text-primary op-5 fw-semibold">F.A.Q's</h5>
                        <h4 class="mb-1 fw-semibold">Frequently Asked Questions</h4>
                        <p class="fs-15 text-muted op-7">We have shared some of the most frequently asked questions to help
                            you out! </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-10">
            <div class="row">
                <div class="col-xl-6">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                General Topics ?
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="accordion accordion-customicon1 accordion-primary" id="accordionFAQ1">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon2One">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon2One" aria-expanded="true"
                                            aria-controls="collapsecustomicon2One">
                                            Where can I subscribe to your newsletter?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon2One" class="accordion-collapse collapse show"
                                        aria-labelledby="headingcustomicon2One" data-bs-parent="#accordionFAQ1">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon2Two">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon2Two" aria-expanded="false"
                                            aria-controls="collapsecustomicon2Two">
                                            Where can in edit my address?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon2Two" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon2Two" data-bs-parent="#accordionFAQ1">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon2Three">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon2Three" aria-expanded="false"
                                            aria-controls="collapsecustomicon2Three">
                                            What are your opening hours?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon2Three" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon2Three" data-bs-parent="#accordionFAQ1">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon2Four">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon2Four" aria-expanded="false"
                                            aria-controls="collapsecustomicon2Four">
                                            Do I have the right to return an item?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon2Four" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon2Four" data-bs-parent="#accordionFAQ1">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Customer Support ?
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="accordion accordion-customicon1 accordion-primary" id="accordionFAQ3">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon3One">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon3One" aria-expanded="false"
                                            aria-controls="collapsecustomicon3One">
                                            What is the order procedure?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon3One" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon3One" data-bs-parent="#accordionFAQ3">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon3Two">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon3Two" aria-expanded="true"
                                            aria-controls="collapsecustomicon3Two">
                                            How and when do I receive the invoices?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon3Two" class="accordion-collapse collapse show"
                                        aria-labelledby="headingcustomicon3Two" data-bs-parent="#accordionFAQ3">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon3Three">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon3Three" aria-expanded="false"
                                            aria-controls="collapsecustomicon3Three">
                                            Which method of ordering is best for me?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon3Three" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon3Three" data-bs-parent="#accordionFAQ3">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingcustomicon3Four">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon3Four" aria-expanded="false"
                                            aria-controls="collapsecustomicon3Four">
                                            What does an order cost?
                                        </button>
                                    </h2>
                                    <div id="collapsecustomicon3Four" class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon3Four" data-bs-parent="#accordionFAQ3">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
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
                                Still Have Questions ?
                                <span class="subtitle fw-normal text-muted d-block fs-12">
                                    You can post your questions here,our support team is always active.
                                </span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row gy-3">
                                <div class="col-xl-6">
                                    <label for="user-name" class="form-label">Your Name</label>
                                    <input type="text" class="form-control form-control-light" id="user-name"
                                        placeholder="Enter Your Name">
                                </div>
                                <div class="col-xl-6">
                                    <label for="user-email" class="form-label">Email Id</label>
                                    <input type="text" class="form-control form-control-light" id="user-email"
                                        placeholder="Enter Email">
                                </div>
                                <div class="col-xl-12">
                                    <label for="text-area" class="form-label">Textarea</label>
                                    <textarea class="form-control form-control-light" placeholder="Enter your question here"
                                        id="text-area" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary btn-wave float-end">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>

