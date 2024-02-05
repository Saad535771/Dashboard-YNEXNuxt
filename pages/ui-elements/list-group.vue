<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/listgroup.js';
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
                current: "List Group",
                list: [
                    'UI-Elements', 'List Group'
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
        <div class="col-xl-4">
            <showcodeCard title="Basic List" :code="prism.BasicList">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <img src="/images/faces/1.jpg" alt="img">
                            </span>
                            <div class="ms-2 fw-semibold">
                                Alicia Sierra
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <img src="/images/faces/3.jpg" alt="img">
                            </span>
                            <div class="ms-2 fw-semibold">
                                Samantha Mery
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <img src="/images/faces/6.jpg" alt="img">
                            </span>
                            <div class="ms-2 fw-semibold">
                                Juliana Pena
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <img src="/images/faces/15.jpg" alt="img">
                            </span>
                            <div class="ms-2 fw-semibold">
                                Adam Smith
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm">
                                <img src="/images/faces/13.jpg" alt="img">
                            </span>
                            <div class="ms-2 fw-semibold">
                                Farhaan Amhed
                            </div>
                        </div>
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="Active items" :code="prism.ActiveItems">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class="bi bi-house-door"></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                Home
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class="bi bi-bell"></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                Notifications
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class="bi bi-gift"></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                Sent Messages
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class="bi bi-person"></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                New Requests
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="fs-15">
                                    <i class="bi bi-trash3"></i>
                                </span>
                            </div>
                            <div class="ms-2">
                                Deleted Messages
                            </div>
                        </div>
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="Disabled items" :code="prism.DisabledItems">
                <ul class="list-group">
                    <li class="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
                    </li>
                    <li class="list-group-item">Simply dummy text of the printing</li>
                    <li class="list-group-item">There are many variations of passages</li>
                    <li class="list-group-item">All the Lorem Ipsum generators</li>
                    <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory</li>
                </ul>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <showcodeCard title="Flush" :code="prism.flush">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item fw-semibold"><i class="bi bi-envelope align-middle me-2 text-muted"></i>Asish
                        Trivedhi<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></li>
                    <li class="list-group-item fw-semibold"><i
                            class="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span
                            class="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></li>
                    <li class="list-group-item fw-semibold"><i class="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem
                        Smith<span class="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></li>
                    <li class="list-group-item fw-semibold"><i
                            class="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span
                            class="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></li>
                    <li class="list-group-item fw-semibold"><i
                            class="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span
                            class="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="Links" :code="prism.links">
                <div class="list-group">
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="avatar avatar-xs bg-white text-default avatar-rounded">
                                    C
                                </span>
                            </div>
                            <div class="ms-2">California</div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="avatar avatar-xs bg-secondary avatar-rounded">
                                    N
                                </span>
                            </div>
                            <div class="ms-2">New Jersey</div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="avatar avatar-xs bg-info avatar-rounded">
                                    L
                                </span>
                            </div>
                            <div class="ms-2">Los Angeles</div>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="avatar avatar-xs bg-warning avatar-rounded">
                                    M
                                </span>
                            </div>
                            <div class="ms-2">Miami Florida</div>
                        </div>
                    </a>
                    <a class="list-group-item list-group-item-action disabled">
                        <div class="d-flex align-items-center">
                            <div>
                                <span class="avatar avatar-xs bg-success avatar-rounded">
                                    W
                                </span>
                            </div>
                            <div class="ms-2">Washington D.C</div>
                        </div>
                    </a>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">


            <showcodeCard title="buttons" :code="prism.buttons">
                <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">Simply
                        dummy text of the printing<span class="badge float-end bg-primary">243</span></button>
                    <button type="button" class="list-group-item list-group-item-action">There are many variations
                        of
                        passages<span class="badge float-end bg-secondary-transparent">35</span></button>
                    <button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum
                        generators<span class="badge float-end bg-info-transparent">132</span></button>
                    <button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum
                        generators<span class="badge float-end bg-success-transparent">2525</span></button>
                    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled item
                        meant
                        to be disabled<span class="badge float-end bg-danger-transparent">21</span></button>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Contextual classes" :code="prism.ContextualClasses">
                <ul class="list-group">
                    <li class="list-group-item">A simple default list group item</li>

                    <li class="list-group-item list-group-item-primary">A simple primary list
                        group
                        item</li>
                    <li class="list-group-item list-group-item-secondary">A simple secondary
                        list
                        group item</li>
                    <li class="list-group-item list-group-item-success">A simple success list
                        group
                        item</li>
                    <li class="list-group-item list-group-item-danger">A simple danger list
                        group
                        item</li>
                    <li class="list-group-item list-group-item-warning">A simple warning list
                        group
                        item</li>
                    <li class="list-group-item list-group-item-info">A simple info list group
                        item
                    </li>
                    <li class="list-group-item list-group-item-light">A simple light list group
                        item
                    </li>
                    <li class="list-group-item list-group-item-dark">A simple dark list group
                        item
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-6">


            <showcodeCard title="Contextual classes with hover styles" :code="prism.ContextualClassesWithHoverStyles">
                <div class="list-group">
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">A simple default
                        list
                        group item</a>

                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-primary">A
                        simple primary list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-secondary">A
                        simple secondary list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-success">A
                        simple success list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-danger">A
                        simple danger list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-warning">A
                        simple warning list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-info">A
                        simple
                        info list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-light">A
                        simple light list group item</a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-dark">A
                        simple
                        dark list group item</a>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Solid Colored Lists" :code="prism.SolidColoredLists">
                <ul class="list-group">
                    <li class="list-group-item">A simple default list group item</li>

                    <li class="list-group-item list-item-solid-primary">A simple primary list
                        group
                        item</li>
                    <li class="list-group-item list-item-solid-secondary">A simple secondary
                        list
                        group item</li>
                    <li class="list-group-item list-item-solid-success">A simple success list
                        group
                        item</li>
                    <li class="list-group-item list-item-solid-danger">A simple danger list
                        group
                        item</li>
                    <li class="list-group-item list-item-solid-warning">A simple warning list
                        group
                        item</li>
                    <li class="list-group-item list-item-solid-info">A simple info list group
                        item
                    </li>
                    <li class="list-group-item list-item-solid-light">A simple light list group
                        item
                    </li>
                    <li class="list-group-item list-item-solid-dark text-white">A simple dark list group
                        item
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Custom content" :code="prism.CustomContent">
                <div class="list-group">
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1 fw-semibold text-fixed-white">Web page editors now use Lorem Ipsum?</h6>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">There are many variations of passages of Lorem Ipsum available, but the
                            majority
                            have suffered alteration in some form, by injected humour.</p>
                        <small>24,Nov 2022.</small>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1 fw-semibold">Richard McClintock, a Latin professor?</h6>
                            <small class="text-muted">4 hrs ago</small>
                        </div>
                        <p class="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                            roots
                            in a piece of classical Latin literature.</p>
                        <small class="text-muted">30,Nov 2022.</small>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1 fw-semibold">It uses a dictionary of over 200 Latin words?</h6>
                            <small class="text-muted">15 hrs ago</small>
                        </div>
                        <p class="mb-1">Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s.
                        </p>
                        <small class="text-muted">4,Nov 2022.</small>
                    </a>
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1 fw-semibold">The standard Lorem Ipsum used since the 1500s?</h6>
                            <small class="text-muted">45 mins ago</small>
                        </div>
                        <p class="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks
                            as necessary, making this the first true generator on the Internet.</p>
                        <small class="text-muted">28,Oct 2022.</small>
                    </a>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-4">
            <showcodeCard title="Sub headings" :code="prism.SubHeadings">
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto text-muted">
                            <div class="fw-semibold fs-14 text-default">What Happened?</div>
                            Many experts have recently suggested may exist.
                        </div>
                        <span class="badge bg-primary-transparent">32 Views</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto text-muted">
                            <div class="fw-semibold fs-14 text-default">It Was Amazing!</div>
                            His idea involved taking red.
                        </div>
                        <span class="badge bg-secondary-transparent">52 Views</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto text-muted">
                            <div class="fw-semibold fs-14 text-default">News Is A Great Weapon.</div>
                            News can influence in many ways.
                        </div>
                        <span class="badge bg-success-transparent">1,204 Views</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto text-muted">
                            <div class="fw-semibold fs-14 text-default">majority have suffered.</div>
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                            anything.
                        </div>
                        <span class="badge bg-danger-transparent">14 Views</span>
                    </li>
                </ol>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="Numbered Lists" :code="prism.NumberedLists">
                <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Simply dummy text of the printing.</li>
                    <li class="list-group-item">There are many variations of passages.</li>
                    <li class="list-group-item">All the Lorem Ipsum generators.</li>
                    <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
                    <li class="list-group-item">Randomised words which don't look.</li>
                    <li class="list-group-item">Always free from repetition, injected humour.</li>
                </ol>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="List With Checkboxes" :code="prism.ListWithCheckboxes">
                <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
                        Accurate information at any given point.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
                        Hearing the information and responding.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
                        Setting up and customizing your own sales.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
                        New Admin Launched.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
                        To maximize profits and improve productivity.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
                        To have a complete 360° overview of sales information, having.
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-4">


            <showcodeCard title="List With Radios" :code="prism.ListWithRadios">
                <div class="list-group">
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Accurate information at any given point.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Hearing the information and responding.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Setting up and customizing your own sales.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        New Admin Launched.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        To maximize profits and improve productivity.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        To have a complete 360° overview of sales information, having.
                    </label>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">


            <showcodeCard title="List With badges" :code="prism.ListWithBadges">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Groceries
                        <span class="badge bg-primary">Available</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Furniture
                        <span class="badge bg-secondary">Buy</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Beauty
                        <span class="badge bg-danger rounded-pill">32</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Books
                        <span class="badge bg-light text-default">New</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Toys
                        <span class="badge bg-info-gradient">Hot</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                        Mobiles
                        <span class="badge bg-warning">Sold Out</span>
                    </li>
                </ul>
            </showcodeCard>
        </div>
        <div class="col-xl-4">


            <showcodeCard title="Horizontal" :code="prism.Horizontal">
                <ul class="mb-3 list-group list-group-horizontal">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <ul class="mb-3 list-group list-group-horizontal-sm">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <ul class="mb-3 list-group list-group-horizontal-md">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <ul class="mb-3 list-group list-group-horizontal-lg">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <ul class="mb-3 list-group list-group-horizontal-xl">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <ul class="mb-3 list-group list-group-horizontal-xxl">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->
</template>

<style scoped></style>

