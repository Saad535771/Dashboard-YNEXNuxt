<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { VueDraggableNext } from 'vue-draggable-next';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        });
        const picked = ref(new Date()); return { picked }
    },
    components: {
        PageHeader,
        draggable:VueDraggableNext
    },
    data() {
        return {
            dataToPass: {
                current: "Kanban Board",
                list: [
                    'Task', 'Kanban Board'
                ]
            },
            sortByValue: null,
            sortByOptions: ['Newest', 'Date Added', 'Type', 'A - Z'],

            assignToValue: null,
            assignToOptions: ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim'],

            tagsValue: null,
            tagsOptions: ['Admin', 'Authentication', 'Designing', 'Development', 'Finance', 'Marketing', 'Product', 'UI/UX'],
        };
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="row kanban-board">
                            <div class="col-xl-5">
                                <button class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#add-board"><i
                                        class="ri-add-line me-1 fw-semibold align-middle"></i>New Board</button>
                            </div>
                            <div class="col-xl-7 mt-2 my-xxl-0">
                                <VueMultiselect :show-labels="false" v-model="sortByValue" :options="sortByOptions"
                                    name="choices-single-default" placeholder="Sort By" :multiple="false">
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="avatar-list-stacked">
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/8.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/10.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/4.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/13.jpg" alt="img">
                            </span>
                            <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                                +8
                            </a>
                        </div>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start::row-2 -->
    <div class="ynex-kanban-board">
        <div class="kanban-tasks-type new">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">NEW - 04</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="new-tasks">
                <draggable group="people" itemKey="name" id="new-tasks-draggable" data-view-btn="new-tasks">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 28 May</div>
                                    <div>2 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 11</span><span
                                            class="ms-1 badge bg-primary-transparent">UI/UX</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">New Dashboard design.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit, Nulla soluta consectetur sit amet elit dolor sit amet.</div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">12</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">02</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/11.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/12.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/7.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 30 May</div>
                                    <div>2 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 05</span><span
                                            class="ms-1 badge bg-secondary-transparent">Marketing</span><span
                                            class="ms-1 badge bg-warning-transparent">Finance</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">Marketing next projects.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">40</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">08</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/13.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/6.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 02 Jun</div>
                                    <div>1 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 08</span><span
                                            class="ms-1 badge bg-success-transparent">Designing</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <div class="task-image mt-2">
                                        <img src="/images/media/media-36.jpg" class="img-fluid rounded kanban-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold mb-0 mt-2">Design multi usage landing.</h6>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">16</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">28</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/2.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/10.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type todo">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">TODO - 36</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="todo-tasks">
                <draggable group="people" itemKey="name" id="todo-tasks-draggable" data-view-btn="todo-tasks">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 01 Jun</div>
                                    <div>10 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 07</span><span
                                            class="ms-1 badge bg-pink-transparent">Admin</span><span
                                            class="ms-1 badge bg-light text-default">Authentication</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">Adding Authentication Pages.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">06</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">02</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/9.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/14.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 05 Jun</div>
                                    <div>14 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 15</span><span
                                            class="ms-1 badge bg-success-transparent">Planning</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <div class="task-image mt-2">
                                        <img src="/images/media/media-41.jpg" class="img-fluid rounded kanban-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold mb-0 mt-2">New Project Discussion.</h6>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">17</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">06</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/2.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/10.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type in-progress">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">ON GOING - 25</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="inprogress-tasks">
                <draggable group="people" itemKey="name" id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 02 Jun</div>
                                    <div>5 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 13</span><span
                                            class="ms-1 badge bg-primary-transparent">UI Design</span><span
                                            class="ms-1 badge bg-danger-transparent">Development</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">Create Calendar & Mail pages.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">05</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">13</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/13.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/6.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 03 Jun</div>
                                    <div>12 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default ms-1">#SPK -
                                            09</span><span class="ms-1 badge bg-teal-transparent">Product</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">Project design Figma,Sketch.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">02</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">0</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/12.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type inreview">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">IN REVIEW - 02</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="inreview-tasks">
                <draggable group="people" itemKey="name" id="inreview-tasks-draggable" data-view-btn="inreview-tasks">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 05 Jun</div>
                                    <div>14 days left</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 15</span><span
                                            class="ms-1 badge bg-purple-transparent">Review</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <div class="task-image mt-2">
                                        <img src="/images/media/media-43.jpg" class="img-fluid rounded kanban-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold mb-0 mt-2">Design Architecture strategy.</h6>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">09</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">35</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/3.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/7.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type completed">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">COMPLETED - 36</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar id="completed-tasks">
                <draggable group="people" itemKey="name" class="kanban-tasks" id="completed-tasks-draggable"
                    data-view-btn="completed-tasks">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 12 Jun</div>
                                    <div class="text-success"><i
                                            class="ri-check-fill me-1 align-middle"></i>Done</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 04</span><span
                                            class="ms-1 badge bg-success-transparent">UI/UX</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">Sash project update.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">18</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">03</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/6.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/13.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 10 Jun</div>
                                    <div class="text-success"><i
                                            class="ri-check-fill me-1 align-middle"></i>Done</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 10</span><span
                                            class="ms-1 badge bg-info-transparent">Development</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <h6 class="fw-semibold mb-1 fs-15">React JS new version update.</h6>
                                    <div class="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Nulla soluta </div>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">22</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">12</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/10.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/11.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/1.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="p-3 kanban-board-head">
                                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                    <div><i class="ri-time-line me-1 align-middle"></i>Created - 07 Jun</div>
                                    <div class="text-success"><i
                                            class="ri-check-fill me-1 align-middle"></i>Done</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="task-badges"><span class="badge bg-light text-default">#SPK - 16</span><span
                                            class="ms-1 badge bg-primary-transparent">Discussion</span></div>
                                    <div class="dropdown">
                                        <a aria-label="anchor" href="javascript:void(0);"
                                            class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-eye-line me-1 align-middle"></i>View</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-delete-bin-line me-1 align-middle"></i>Delete</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                        class="ri-edit-line me-1 align-middle"></i>Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="kanban-content mt-2">
                                    <div class="task-image mt-2">
                                        <img src="/images/media/media-86.svg"
                                            class="img-fluid rounded kanban-image bg-light" alt="">
                                    </div>
                                    <h6 class="fw-semibold mb-0 mt-2">Project discussion with client.</h6>
                                </div>
                            </div>
                            <div class="p-3 border-top border-block-start-dashed">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" class="me-2 text-primary">
                                            <span class="me-1"><i
                                                    class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">11</span>
                                        </a>
                                        <a href="javascript:void(0);" class="text-muted">
                                            <span class="me-1"><i
                                                    class="ri-message-2-line align-middle fw-normal"></i></span><span
                                                class="fw-semibold fs-12">05</span>
                                        </a>
                                    </div>
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img src="/images/faces/4.jpg" alt="img">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
    </div>
    <!--End::row-2 -->

    <!-- Start::add board modal -->
    <div class="modal fade" id="add-board" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Add Board</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <label for="board-title" class="form-label">Task Board Title</label>
                            <input type="text" class="form-control" id="board-title" placeholder="Board Title">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Board</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End::add board modal -->

    <!-- Start::add task modal -->
    <div class="modal fade" id="add-task" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Add Task</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-2">
                        <div class="col-xl-6">
                            <label for="task-name" class="form-label">Task Name</label>
                            <input type="text" class="form-control" id="task-name" placeholder="Task Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="task-id" class="form-label">Task ID</label>
                            <input type="text" class="form-control" id="task-id" placeholder="Task ID">
                        </div>
                        <div class="col-xl-12">
                            <label for="text-area" class="form-label">Task Description</label>
                            <textarea class="form-control" id="text-area" rows="2"
                                placeholder="Write Description"></textarea>
                        </div>
                        <div class="col-xl-12">
                            <label for="text-area" class="form-label">Task Images</label>
                            <DropZone :maxFiles="4" class="multiple-filepond" :uploadOnDrop="true" :multipleUpload="true"
                                :parallelUpload="3" />
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Assigned To</label>
                            <VueMultiselect :show-labels="false" v-model="assignToValue" :multiple="true"
                                :options="assignToOptions">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Target Date</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply v-model="picked"
                                        time-picker-inline>
                                        <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Tags</label>
                            <VueMultiselect :show-labels="false" v-model="tagsValue" :multiple="true"
                                :options="tagsOptions">
                            </VueMultiselect>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End::add task modal -->
</template>

<style scoped></style>

