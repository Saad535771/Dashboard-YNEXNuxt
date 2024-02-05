<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/float-labels.js';
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
                current: "Floating Labels",
                list: [
                    'Forms', 'Floating Labels'
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
        <div class="col-xl-6">
            <showcodeCard :code="prism.basicExamples" title="Basic Examples">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.readonlyplaintext" title="Readonly plain text">
                <div class="form-floating mb-3">
                    <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput"
                        placeholder="name@example.com">
                    <label for="floatingEmptyPlaintextInput">Empty input</label>
                </div>
                <div class="form-floating">
                    <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput"
                        placeholder="name@example.com" value="name@example.com">
                    <label for="floatingPlaintextInput">Input with value</label>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.floatingLabelsWithPreDefinedValues" title="Floating Labels With Pre Defined Values">
                <form class="form-floating my-3">
                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
                        value="test@example.com">
                    <label for="floatingInputValue">Input with value</label>
                </form>
                <form class="form-floatin">
                    <input type="email" class="form-control is-invalid" id="floatingInputInvalid"
                        placeholder="name@example.com" value="test@example.com">
                    <label for="floatingInputInvalid">Invalid input</label>
                </form>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.textareas" title="Textareas">
                <div class="form-floating mb-4">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Description</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="1"
                        disabled></textarea>
                    <label for="floatingTextarea2">Disabled</label>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.floatingLabelsInSelect" title="Floating Labels In Select">
                <div class="form-floating">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.floatingLabelsWithLayouts" title="Floating Labels With Layouts">
                <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com"
                                value="mdo@example.com">
                            <label for="floatingInputGrid">Email address</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelectGrid">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingSelectGrid">Works with selects</label>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.floatingLabelColors" title="Floating Label Colors">
                <div class="row gy-4">
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-primary">
                            <input type="email" class="form-control" id="floatingInputprimary"
                                placeholder="name@example.com">
                            <label for="floatingInputprimary">primary</label>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-secondary">
                            <input type="email" class="form-control" id="floatingInputsecondary"
                                placeholder="name@example.com">
                            <label for="floatingInputsecondary">secondary</label>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-warning">
                            <input type="email" class="form-control" id="floatingInputwarning"
                                placeholder="name@example.com">
                            <label for="floatingInputwarning">warning</label>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-info">
                            <input type="email" class="form-control" id="floatingInputinfo" placeholder="name@example.com">
                            <label for="floatingInputinfo">info</label>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-success">
                            <input type="email" class="form-control" id="floatingInputsuccess"
                                placeholder="name@example.com">
                            <label for="floatingInputsuccess">success</label>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="form-floating mb-4 floating-danger">
                            <input type="email" class="form-control" id="floatingInputdanger"
                                placeholder="name@example.com">
                            <label for="floatingInputdanger">danger</label>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- Start:: row-4 -->
</template>

<style scoped></style>

