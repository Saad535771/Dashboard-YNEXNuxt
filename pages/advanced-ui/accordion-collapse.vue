<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/advancedUi/accordion.js';
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
                current: "Accordion",
                list: [
                    'AdvancedUI', 'Accordion'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.basicAccordion" title="Basic Accordion">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to
                                style each element. These classes control the overall appearance, as
                                well as
                                the
                                showing and hiding via CSS transitions. You can modify any of this with
                                custom
                                CSS or overriding our default variables. It's also worth noting that
                                just
                                about
                                any HTML can go within the <code>.accordion-body</code>, though the
                                transition
                                does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden
                                by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to
                                style each element. These classes control the overall appearance, as
                                well as
                                the
                                showing and hiding via CSS transitions. You can modify any of this with
                                custom
                                CSS or overriding our default variables. It's also worth noting that
                                just
                                about
                                any HTML can go within the <code>.accordion-body</code>, though the
                                transition
                                does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to
                                style each element. These classes control the overall appearance, as
                                well as
                                the
                                showing and hiding via CSS transitions. You can modify any of this with
                                custom
                                CSS or overriding our default variables. It's also worth noting that
                                just
                                about
                                any HTML can go within the <code>.accordion-body</code>, though the
                                transition
                                does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.alwaysOpenAccordion"
                title="Always Open Accordion<p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code>attribute on each<code>.accordion-collapse</code>to make accordion items stay open when another item is opened.</p>">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to style each element. These classes control the overall appearance, as
                                well
                                as the showing and hiding via CSS transitions. It's also worth
                                noting
                                that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden
                                by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to style each element. These classes control the overall appearance, as
                                well
                                as the showing and hiding via CSS transitions. You can modify any of
                                this
                                with custom CSS or overriding our default variables. It's also worth
                                noting
                                that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the collapse plugin adds the appropriate classes that we
                                use
                                to style each element. These classes control the overall appearance, as
                                well
                                as the showing and hiding via CSS transitions. You can modify any of
                                this
                                with custom CSS or overriding our default variables. It's also worth
                                noting
                                that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.flushAccordion" title="Flush Accordion
                            <p class='subtitle text-muted fs-12 fw-normal'>
                                Add <code>.accordion-flush</code> to remove the default
                                <code>background-color</code>,
                                some borders, and some rounded corners to render accordions edge-to-edge with
                                their
                                parent container.
                            </p>">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion,
                                which is
                                intended to demonstrate the <code>.accordion-flush</code> class.
                                This is
                                the
                                first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion,
                                which is
                                intended to demonstrate the <code>.accordion-flush</code> class.
                                This is
                                the
                                second item's accordion body. Let's imagine this being filled
                                with
                                some
                                actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion,
                                which is
                                intended to demonstrate the <code>.accordion-flush</code> class.
                                This is
                                the
                                third item's accordion body. Nothing more exciting happening
                                here in
                                terms
                                of content, but just filling up the space to make it look, at
                                least
                                at
                                first
                                glance, a bit more representative of how this would look in a
                                real-world
                                application.</div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->


    <!-- Start:: row-3 -->
    <h6 class="mb-3">Light Colors:</h6>
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.lightPrimary" title="Primary">
                <div class="accordion accordion-primary" id="accordionPrimaryExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimaryOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimaryOne" aria-expanded="true"
                                aria-controls="collapsePrimaryOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapsePrimaryOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingPrimaryOne" data-bs-parent="#accordionPrimaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimaryTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimaryTwo" aria-expanded="false"
                                aria-controls="collapsePrimaryTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapsePrimaryTwo" class="accordion-collapse collapse" aria-labelledby="headingPrimaryTwo"
                            data-bs-parent="#accordionPrimaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimaryThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimaryThree" aria-expanded="false"
                                aria-controls="collapsePrimaryThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapsePrimaryThree" class="accordion-collapse collapse"
                            aria-labelledby="headingPrimaryThree" data-bs-parent="#accordionPrimaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.lightSecondary" title="Secondary">
                <div class="accordion accordion-secondary" id="accordionSecondaryExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondaryOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondaryOne" aria-expanded="true"
                                aria-controls="collapseSecondaryOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseSecondaryOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingSecondaryOne" data-bs-parent="#accordionSecondaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondaryTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondaryTwo" aria-expanded="false"
                                aria-controls="collapseSecondaryTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseSecondaryTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingSecondaryTwo" data-bs-parent="#accordionSecondaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondaryThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondaryThree" aria-expanded="false"
                                aria-controls="collapseSecondaryThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseSecondaryThree" class="accordion-collapse collapse"
                            aria-labelledby="headingSecondaryThree" data-bs-parent="#accordionSecondaryExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <h6 class="mb-3">Solid Colors:</h6>
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.solidPrimary" title="Primary">
                <div class="accordion accordion-solid-primary" id="accordionPrimarySolidExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimarySolidOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimarySolidOne" aria-expanded="true"
                                aria-controls="collapsePrimarySolidOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapsePrimarySolidOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingPrimarySolidOne" data-bs-parent="#accordionPrimarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimarySolidTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false"
                                aria-controls="collapsePrimarySolidTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapsePrimarySolidTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingPrimarySolidTwo" data-bs-parent="#accordionPrimarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingPrimarySolidThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePrimarySolidThree" aria-expanded="false"
                                aria-controls="collapsePrimarySolidThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapsePrimarySolidThree" class="accordion-collapse collapse"
                            aria-labelledby="headingPrimarySolidThree" data-bs-parent="#accordionPrimarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.solidSecondary" title="Secondary">
                <div class="accordion accordion-solid-secondary" id="accordionSecondarySolidExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondarySolidOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondarySolidOne" aria-expanded="true"
                                aria-controls="collapseSecondarySolidOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseSecondarySolidOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingSecondarySolidOne" data-bs-parent="#accordionSecondarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondarySolidTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false"
                                aria-controls="collapseSecondarySolidTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseSecondarySolidTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingSecondarySolidTwo" data-bs-parent="#accordionSecondarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSecondarySolidThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSecondarySolidThree" aria-expanded="false"
                                aria-controls="collapseSecondarySolidThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseSecondarySolidThree" class="accordion-collapse collapse"
                            aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <h6 class="mb-3">Colored Borders:</h6>
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.coloredPrimary" title="Primary">
                <div class="accordion accordion-border-primary accordions-items-seperate"
                    id="accordionprimaryborderExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingborderprimaryOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="primaryBorderOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingborderprimaryOne" data-bs-parent="#accordionprimaryborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingborderprimaryTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="primaryBorderTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingborderprimaryTwo" data-bs-parent="#accordionprimaryborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingborderprimaryThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#primaryBorderThree" aria-expanded="false"
                                aria-controls="primaryBorderThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="primaryBorderThree" class="accordion-collapse collapse"
                            aria-labelledby="headingborderprimaryThree" data-bs-parent="#accordionprimaryborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.coloredSecondary" title="Success">
                <div class="accordion accordion-border-success accordions-items-seperate"
                    id="accordionsuccessborderExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingbordersuccessOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="successBorderOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingbordersuccessOne" data-bs-parent="#accordionsuccessborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingbordersuccessTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="successBorderTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingbordersuccessTwo" data-bs-parent="#accordionsuccessborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingbordersuccessThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#successBorderThree" aria-expanded="false"
                                aria-controls="successBorderThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="successBorderThree" class="accordion-collapse collapse"
                            aria-labelledby="headingbordersuccessThree" data-bs-parent="#accordionsuccessborderExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.leftAlignedIcons" title="Left Aligned Icons">
                <div class="accordion accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingleftOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseleftOne" aria-expanded="true" aria-controls="collapseleftOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseleftOne" class="accordion-collapse collapse show" aria-labelledby="headingleftOne"
                            data-bs-parent="#accordioniconLeftExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingleftTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseLeftTwo" aria-expanded="false" aria-controls="collapseLeftTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseLeftTwo" class="accordion-collapse collapse" aria-labelledby="headingleftTwo"
                            data-bs-parent="#accordioniconLeftExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden
                                by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You
                                can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingleftThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseLeftThree" aria-expanded="false" aria-controls="collapseLeftThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseLeftThree" class="accordion-collapse collapse" aria-labelledby="headingleftThree"
                            data-bs-parent="#accordioniconLeftExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You
                                can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.withoutIcon" title="Without Icon">
                <div class="accordion accordionicon-none accordions-items-seperate" id="accordioniconnoIconExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingnoIconOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsenoIconOne" aria-expanded="true" aria-controls="collapsenoIconOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapsenoIconOne" class="accordion-collapse collapse show"
                            aria-labelledby="headingnoIconOne" data-bs-parent="#accordioniconnoIconExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingnoIconTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsenoIconTwo" aria-expanded="false" aria-controls="collapsenoIconTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapsenoIconTwo" class="accordion-collapse collapse" aria-labelledby="headingnoIconTwo"
                            data-bs-parent="#accordioniconnoIconExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden
                                by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You
                                can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingnoIconThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsenoIconThree" aria-expanded="false"
                                aria-controls="collapsenoIconThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapsenoIconThree" class="accordion-collapse collapse"
                            aria-labelledby="headingnoIconThree" data-bs-parent="#accordioniconnoIconExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You
                                can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit
                                overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-6 -->

    <!-- Start:: row-7 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.customIconAccordion" title="Custom Icon Accordion">
                <div class="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1One">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1One" aria-expanded="true"
                                aria-controls="collapsecustomicon1One">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapsecustomicon1One" class="accordion-collapse collapse show"
                            aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Two">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
                                aria-controls="collapsecustomicon1Two">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapsecustomicon1Two" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Three">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
                                aria-controls="collapsecustomicon1Three">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapsecustomicon1Three" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.customAccordion" title="Custom Accordion">
                <div class="accordion customized-accordion accordions-items-seperate" id="customizedAccordion">
                    <div class="accordion-item custom-accordion-primary">
                        <h2 class="accordion-header" id="customizedAccordionOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#customized-AccordionOne" aria-expanded="true"
                                aria-controls="customized-AccordionOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="customized-AccordionOne" class="accordion-collapse collapse show"
                            aria-labelledby="customizedAccordionOne" data-bs-parent="#customizedAccordion">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item custom-accordion-secondary">
                        <h2 class="accordion-header" id="customizedAccordionTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#customized-AccordionTwo" aria-expanded="false"
                                aria-controls="customized-AccordionTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="customized-AccordionTwo" class="accordion-collapse collapse"
                            aria-labelledby="customizedAccordionTwo" data-bs-parent="#customizedAccordion">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item custom-accordion-danger">
                        <h2 class="accordion-header" id="customizedAccordionThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#customized-AccordionThree" aria-expanded="false"
                                aria-controls="customized-AccordionThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="customized-AccordionThree" class="accordion-collapse collapse"
                            aria-labelledby="customizedAccordionThree" data-bs-parent="#customizedAccordion">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by
                                default, until the collapse plugin adds the appropriate classes that we
                                use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify
                                any of this with custom CSS or overriding our default variables. It's
                                also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-7 -->

    <!-- Start:: row-9 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.example" title="Example">
                <p class="mb-0">
                    <a class="btn btn-primary collapsed mb-2 me-2" data-bs-toggle="collapse" href="#collapseExample"
                        role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a>
                    <button class="btn btn-secondary collapsed mb-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body mb-0">
                        Some placeholder content for the collapse component. This panel
                        is
                        hidden by default but revealed when the user activates the
                        relevant
                        trigger.
                    </div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.targetsCollapse" title="Targets Collapse">
                <p class="mb-0">
                    <a class="btn btn-primary mb-2  me-2" data-bs-toggle="collapse" href="#multiCollapseExample1"
                        role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first
                        element</a>
                    <button class="btn btn-success mb-2 me-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#multiCollapseExample2" aria-expanded="false"
                        aria-controls="multiCollapseExample2">Toggle second
                        element</button>
                    <button class="btn btn-danger mb-2" type="button" data-bs-toggle="collapse"
                        data-bs-target=".multi-collapse" aria-expanded="false"
                        aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle
                        both elements</button>
                </p>
                <div class="row">
                    <div class="col m-1 collapse multi-collapse" id="multiCollapseExample1">

                        <div class="card card-body mb-0">
                            Some placeholder content for the first collapse
                            component of
                            this multi-collapse example. This panel is hidden by
                            default
                            but revealed when the user activates the relevant
                            trigger.
                        </div>
                    </div>
                    <div class="col m-1 collapse multi-collapse" id="multiCollapseExample2">

                        <div class="card card-body mb-0">
                            Some placeholder content for the second collapse
                            component
                            of this multi-collapse example. This panel is hidden by
                            default but revealed when the user activates the
                            relevant
                            trigger.
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-9 -->

    <!--ROW-START-->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.horizontalCollapse" title="Horizontal Collapse">
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Toggle width collapse
                    </button>
                </p>
                <div style="min-height: 120px;">
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                        <div class="card card-body" style="width: 230px;">
                            This is some placeholder content for a horizontal collapse. It's
                            hidden
                            by default and shown when triggered.
                        </div>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!--ROW-END-->
</template>

<style scoped></style>

